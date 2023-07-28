# Create your views here.
from django.shortcuts import render, redirect
from .models import Register, Contact, Home
from datetime import datetime
from django.contrib import messages

SpecialSym = ["@", "#", "$", "%", "&"]
my_check = {}
my_check["is_true"] = 1
my_check["is_register"] = 1
my_check["user"] = ""
my_check["dp"] = 1
my_check["dp_url"] = ""
my_check["email"] = ""


def dummy(request):
    return render(request, "mainpage/dummy.html", my_check)


def index(request):
    if request.method == 'POST':
        if my_check["is_true"]:
            messages.error(request, "Error : Please Log In first")

        elif (not my_check["dp"]) and (not my_check["is_true"]):
            if len(request.FILES) != 0:
                ind = Home.objects.get(user_name=my_check["email"])
                ind.user_img = request.FILES['DP']
                ind.save()
                messages.success(request, "Success : Your New Profile Picture uploaded successfully")

        elif my_check["dp"]:
            img_dp = Home()
            img_dp.user_name = my_check["email"]
            
            if len(request.FILES) != 0:
                img_dp.user_img = request.FILES['DP']

            img_dp.save()
            my_check["dp"] = 0
            messages.success(request, "Success : Your Profile Picture uploaded successfully")

        else:
            messages.error(request, "Error : You have already upload Picture")

    ind = Home.objects.all()
    for user in ind:
        if user.user_name == my_check["email"]:
            my_check["dp_url"] = user.user_img.url
    return render(request, "mainpage/index.html", my_check)


def courses(request):
    return render(request, "mainpage/courses.html", my_check)


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name", "")
        if len(name) < 2:
            messages.warning(request, "Warning : Arguments are too short in Name")
            return render(request, "mainpage/contact.html", my_check)

        email = request.POST.get("email", "")
        if len(email) < 12 or not ("@gmail.com" in email):
            messages.warning(request, "Warning : Please enter valid email")
            return render(request, "mainpage/contact.html", my_check)

        phone = request.POST.get("contact", "")
        if not ("6000000000" <= phone <= "9999999999"):
            messages.warning(request, "Warning : Please enter valid phone number")
            return render(request, "mainpage/contact.html", my_check)

        msg = request.POST.get("message", "")
        if len(msg) < 10:
            messages.warning(
                request, "Warning : Message should be at-least of 10 words"
            )
            return render(request, "mainpage/contact.html", my_check)

        date = datetime.now()
        contact_db = Contact(user_name=name, email=email, mob=phone, msg=msg, date=date)
        contact_db.save()
        messages.success(request, "Success : Thank you for contacting us")
    return render(request, "mainpage/contact.html", my_check)


def register(request):
    if not my_check["is_true"]:
        messages.error(request, "Error : You are already logged In")
        return redirect("/")
    if request.method == "POST":
        name = request.POST.get("Name", "")
        if len(name) < 2:
            messages.warning(request, "Warning : Arguments are too short in Name")
            return render(request, "mainpage/register.html", my_check)

        email = request.POST.get("email", "")
        if len(email) < 12 or not ("@gmail.com" in email):
            messages.warning(request, "Warning : Please enter valid email")
            return render(request, "mainpage/register.html", my_check)

        # This is check for Duplicate Email
        tab = Register.objects.all()
        for user in tab:
            if user.email == email:
                messages.error(request, "Error : Email has been taken, Try another")
                return render(request, "mainpage/index.html", my_check)

        pass_word1 = request.POST.get("pass1", "")
        pass_word = request.POST.get("pass", "")
        if pass_word1 == pass_word:
            if 16 < len(pass_word) < 6:
                messages.warning(
                    request, "Warning : Arguments are too short in Password"
                )
                return render(request, "mainpage/register.html")
            if not any(char.isdigit() for char in pass_word):
                messages.warning(
                    request,
                    "Warning : Password Must Contains A-Z,a-z,Special Character, i.e.(@#$%), "
                    "digits",
                )
                return render(request, "mainpage/register.html")
            if not any(char.isupper() for char in pass_word):
                messages.warning(
                    request,
                    "Warning : Password Must Contains A-Z,a-z,Special Character, i.e.(@#$%), "
                    "digits",
                )
                return render(request, "mainpage/register.html")
            if not any(char.islower() for char in pass_word):
                messages.warning(
                    request,
                    "Warning : Password Must Contains A-Z,a-z,Special Character, i.e.(@#$%), "
                    "digits",
                )
                return render(request, "mainpage/register.html")
            if not (char in SpecialSym for char in pass_word):
                messages.warning(
                    request,
                    "Warning : Password Must Contains A-Z,a-z,Special Character, i.e.(@#$%), "
                    "digits",
                )
                return render(request, "mainpage/register.html")

        else:
            messages.warning(request, "Warning : Password should be same")
            return render(request, "mainpage/register.html")

        date = datetime.now()
        register_db = Register(
            user_name=name, email=email, password=pass_word, date=date
        )
        messages.success(request, "Success : You are registered successfully")
        register_db.save()
        my_check["is_register"] = 0
        return render(request, "mainpage/user_login.html", my_check)
    return render(request, "mainpage/register.html", my_check)


def user_login(request):
    if not my_check["is_true"]:
        messages.error(request, "Error : You are already logged In")
        return redirect("/")

    if request.method == "POST":
        log_email = request.POST["login_email"]
        if len(log_email) < 12 or not ("@gmail.com" in log_email):
            messages.warning(request, "Warning : Please enter valid email")
            return render(request, "mainpage/user_login.html", my_check)

        log_pass = request.POST["login_pass"]
        tab = Register.objects.all()
        for user in tab:
            if user.email == log_email and user.password == log_pass:
                my_check["is_true"] = 0
                my_check["is_register"] = 0
                my_check["email"] = user.email
                temp = user.user_name
                for i in range(0, len(temp)):
                    ele = temp[i]
                    if i == 0:
                        ele = ele.upper()
                    if ele == " ":
                        break
                    my_check["user"] = my_check["user"] + ele
                messages.success(request, "Logged In Successfully")
                ind = Home.objects.all()
                for user in ind:
                    if user.user_name == my_check["email"]:
                        my_check["dp_url"] = user.user_img.url
                        my_check["dp"] = 0
                return render(request, "mainpage/index.html", my_check)
        messages.error(request, "Invalid Credentials, Please try again !")
        return redirect("/")
    return render(request, "mainpage/user_login.html", my_check)


def logout(request):
    if my_check["is_true"]:
        messages.error(request, "Error : Please Log In first")
        return redirect("/")
    my_check["is_true"] = 1
    my_check["is_register"] = 1
    my_check["user"] = ""
    my_check["dp"] = 1
    my_check["email"] = ""
    messages.success(request, "Logged Out Successfully")
    return redirect("/")


def c_Tut(request):
    return render(request, "mainpage/Innov/c_tut.html", my_check)


def java_Tut(request):
    return render(request, "mainpage/Innov/java_tut.html", my_check)


def python_Tut(request):
    return render(request, "mainpage/Innov/python_tut.html", my_check)


def DS_Tut(request):
    return render(request, "mainpage/Innov/DS_tut.html", my_check)


def Practice_Conditional(request):
    return render(request, "mainpage/Practice/Conditional.html", my_check)


def Practice_Loops(request):
    return render(request, "mainpage/Practice/Loops.html", my_check)


def Practice_Pointers(request):
    return render(request, "mainpage/Practice/Pointers.html", my_check)


def Practice_Array(request):
    return render(request, "mainpage/Practice/Array.html", my_check)


def Practice_DS(request):
    return render(request, "mainpage/Practice/DS.html", my_check)


def Payments(request):
    if my_check["is_true"]:
        messages.error(request, "Please Login First !")
        return redirect("/courses")

    messages.success(
        request, "Successfully Registered for Free Demo. We will Contact You Soon :)"
    )
    return redirect("/courses")
