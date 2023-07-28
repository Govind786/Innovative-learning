
# Create your views here.
from django.shortcuts import render
from .models import Music, Suggest
from datetime import datetime
from django.contrib import messages

music_control = {}
music_control["music_url"] = ""
music_control["music_no"] = 1


def index(request):
    return render(request, 'blogs/index.html')


def tech_blog(request):
    return render(request, "blogs/tech-blog.html")


def gen_blog(request):
    return render(request, "blogs/gen-blog.html")


def music(request):
    music_control["music_no"] = 1

    music = Music.objects.all()
    for song in music:
        if song.s_no == music_control["music_no"]:
            music_control["music_url"] = song.music.url
            break
    return render(request, "blogs/music.html", music_control)


def next(request):
    if music_control["music_no"] == 11:
        music_control["music_no"] = 1
    
    else:
        music_control["music_no"] += 1

    music = Music.objects.all()
    for song in music:
        if song.s_no == music_control["music_no"]:
            music_control["music_url"] = song.music.url
            break
    return render(request, "blogs/next.html", music_control)


def back(request):
    if music_control["music_no"] == 1:
        music_control["music_no"] = 11
    
    else:
        music_control["music_no"] -= 1
      
    music = Music.objects.all()
    for song in music:
        if song.s_no == music_control["music_no"]:
            music_control["music_url"] = song.music.url
            break
    return render(request, "blogs/back.html", music_control)


def suggest_blog(request):
    if request.method == "POST":
        name = request.POST.get("name", "")
        if len(name) < 2:
            messages.warning(request, "Warning : Arguments are too short in Name")
            return render(request, "blogs/suggestions.html")

        email = request.POST.get("email", "")
        if len(email) < 12 or not ("@gmail.com" in email):
            messages.warning(request, "Warning : Please enter valid email")
            return render(request, "blogs/suggestions.html")

        msg = request.POST.get("mess", "")
        if len(msg) < 7:
            messages.warning(request, "Warning : Message should be at-least of 10 words")
            return render(request, "blogs/suggestions.html")

        date = datetime.now()
        suggestion = Suggest(name=name, email=email, mass=msg, date=date)
        suggestion.save()
        messages.success(request, "Success : Thank you for contacting us")
    return render(request, "blogs/suggestions.html")



