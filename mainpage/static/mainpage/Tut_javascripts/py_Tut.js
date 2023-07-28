var change_page = document.getElementsByClassName("C-Tut-Details");
var Tut_C_1 = document.getElementById("Tut-C-1");
var Tut_C_2 = document.getElementById("Tut-C-2");
var Tut_C_3 = document.getElementById("Tut-C-3");
var Tut_C_4 = document.getElementById("Tut-C-4");
var Tut_C_5 = document.getElementById("Tut-C-5");
var Tut_C_6 = document.getElementById("Tut-C-6");
var Tut_C_7 = document.getElementById("Tut-C-7");
var Tut_C_8 = document.getElementById("Tut-C-8");
var Tut_C_9 = document.getElementById("Tut-C-9");
var Tut_C_10 = document.getElementById("Tut-C-10");
var Tut_C_11 = document.getElementById("Tut-C-11");
var Tut_C_12 = document.getElementById("Tut-C-12");
var Tut_C_13 = document.getElementById("Tut-C-13");
var Tut_C_14 = document.getElementById("Tut-C-14");
var Tut_C_15 = document.getElementById("Tut-C-15");
var Tut_C_16 = document.getElementById("Tut-C-16");
var Tut_C_17 = document.getElementById("Tut-C-17");
var Tut_C_18 = document.getElementById("Tut-C-18");
var Tut_C_19 = document.getElementById("Tut-C-19");
var Tut_C_20 = document.getElementById("Tut-C-20");
var Tut_C_21 = document.getElementById("Tut-C-21");
var Tut_C_22 = document.getElementById("Tut-C-22");
var Tut_C_23 = document.getElementById("Tut-C-23");
var Tut_C_24 = document.getElementById("Tut-C-24");
var Tut_C_30 = document.getElementById("Tut-C-30");
var Tut_C_31 = document.getElementById("Tut-C-31");
var Tut_C_32 = document.getElementById("Tut-C-32");
var Tut_C_33 = document.getElementById("Tut-C-33");
var topics = document.querySelector('.sidebar');
var down_line = document.querySelector('.my_slide');
burger = document.querySelector('.burger');

Tut_C_1.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Tutorial</p>
  <p class="info">
    Python tutorial provides basic and advanced concepts of Python. Our Python tutorial is designed for beginners and professionals.  <br>
    Python is a simple, general purpose, high level, and object-oriented programming language.  <br>
    Python is an interpreted scripting language also. Guido Van Rossum is known as the founder of Python programming.  <br>
  </p>
  <p id="Head">What is Python</p>
  <p class="info">
    ~ &nbsp; Python is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications. It is simple and easy to learn and provides lots of high-level data structures.  <br>
    ~ &nbsp; Python is easy to learn yet powerful and versatile scripting language, which makes it attractive for Application Development.  <br>
    ~ &nbsp; Python's syntax and dynamic typing with its interpreted nature make it an ideal language for scripting and rapid application development.  <br>
    ~ &nbsp; Python supports multiple programming pattern, including object-oriented, imperative, and functional or procedural programming styles.  <br>
    ~ &nbsp; Python is not intended to work in a particular area, such as web programming. That is why it is known as multipurpose programming language because it can be used with web, enterprise, 3D CAD, etc.  <br>
    ~ &nbsp; We don't need to use data types to declare variable because it is dynamically typed so we can write a=10 to assign an integer value in an integer variable.  <br>
    ~ &nbsp; Python makes the development and debugging fast because there is no compilation step included in Python development, and edit-test-debug cycle is very fast.  <br>
  </p>
  <p id="Head">Why to Learn Python?</p>
  <p class="info">
    Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.   <br>
    Python is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Python:   <br>
    ~ &nbsp; Python is Interpreted − Python is processed at runtime by the interpreter. You do not need to compile your program before executing it. This is similar to PERL and PHP.  <br>
    ~ &nbsp; Python is Interactive − You can actually sit at a Python prompt and interact with the interpreter directly to write your programs.  <br>     
    ~ &nbsp; Python is Object-Oriented − Python supports Object-Oriented style or technique of programming that encapsulates code within objects.  <br>     
    ~ &nbsp; Python is a Beginner's Language − Python is a great language for the beginner-level programmers and supports the development of a wide range of applications from simple text processing to WWW browsers to games.  <br>
  </p>
  <p id="Head">Characteristics of Python</p>
  <p class="info">
    Following are important characteristics of Python Programming −   <br>
    ~ &nbsp; It supports functional and structured programming methods as well as OOP.  <br>
    ~ &nbsp; It can be used as a scripting language or can be compiled to byte-code for building large applications.  <br>     
    ~ &nbsp; It provides very high-level dynamic data types and supports dynamic type checking.  <br>     
    ~ &nbsp; It supports automatic garbage collection.  <br>
    ~ &nbsp; It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java.  <br>
  </p>
  <p id="Head">Applications of Python</p>
  <p class="info">
    As mentioned before, Python is one of the most widely used language over the web. I'm going to list few of them here:   <br>
    ~ &nbsp; Easy-to-learn − Python has few keywords, simple structure, and a clearly defined syntax. This allows the student to pick up the language quickly.  <br>
    ~ &nbsp; Easy-to-read − Python code is more clearly defined and visible to the eyes.  <br>      
    ~ &nbsp; Easy-to-maintain − Python's source code is fairly easy-to-maintain.  <br>      
    ~ &nbsp; A broad standard library − Python's bulk of the library is very portable and cross-platform compatible on UNIX, Windows, and Macintosh.  <br>      
    ~ &nbsp; Interactive Mode − Python has support for an interactive mode which allows interactive testing and debugging of snippets of code.  <br>      
    ~ &nbsp; Portable − Python can run on a wide variety of hardware platforms and has the same interface on all platforms.  <br>      
    ~ &nbsp; Extendable − You can add low-level modules to the Python interpreter. These modules enable programmers to add to or customize their tools to be more efficient.  <br>      
    ~ &nbsp; Databases − Python provides interfaces to all major commercial databases.  <br>      
    ~ &nbsp; GUI Programming − Python supports GUI applications that can be created and ported to many system calls, libraries and windows systems, such as Windows MFC, Macintosh, and the X Window system of Unix.  <br>     
    Scalable − Python provides a better structure and support for large programs than shell scripting.  <br>
  </p>`;
});

Tut_C_2.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">History of Python </p>
  <p class="info">
    ~ &nbsp; Python laid its foundation in the late 1980s.  <br>
    ~ &nbsp; The implementation of Python was started in December 1989 by Guido Van Rossum at CWI in Netherland.  <br>
    ~ &nbsp; In February 1991, Guido Van Rossum published the code (labeled version 0.9.0) to alt.sources.  <br>
    ~ &nbsp; In 1994, Python 1.0 was released with new features like lambda, map, filter, and reduce.  <br>
    ~ &nbsp; Python 2.0 added new features such as list comprehensions, garbage collection systems.  <br>
    ~ &nbsp; On December 3, 2008, Python 3.0 (also called "Py3K") was released. It was designed to rectify the fundamental flaw of the language.  <br>
    ~ &nbsp; ABC programming language is said to be the predecessor of Python language, which was capable of Exception Handling and interfacing with the Amoeba Operating System.  <br>
    ~ &nbsp; The following programming languages influence Python:  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> &nbsp; ABC language. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> &nbsp; Modula-3  <br><br>
  </p>
  <p id="Head">Why the Name Python? </p>
  <p class="info">
    There is a fact behind choosing the name Python. Guido van Rossum was reading the script of a popular BBC comedy series "Monty Python's Flying Circus". It was late on-air 1970s.  <br>
    Van Rossum wanted to select a name which unique, sort, and little-bit mysterious. So he decided to select naming Python after the "Monty Python's Flying Circus" for their newly created programming language.  <br>
    The comedy series was creative and well random. It talks about everything. Thus it is slow and unpredictable, which made it very interesting.  <br>
    Python is also versatile and widely used in every technical field, such as Machine Learning, Artificial Intelligence, Web Development, Mobile Application, Desktop Application, Scientific Calculation, etc.  <br>    </p>
  <p id="Head">Python Version List</p>
  <table class="alt">
    <tr><th>Python Version</th><th>Released Date</th></tr>
    <tr><td>Python 1.0</td><td>January 1994</td></tr>
    <tr><td>Python 1.5</td><td>December 31, 1997</td></tr>
    <tr><td>Python 1.6</td><td>September 5, 2000</td></tr>
    <tr><td>Python 2.0</td><td>October 16, 2000</td></tr>
    <tr><td>Python 2.1</td><td>April 17, 2001</td></tr>
    <tr><td>Python 2.2</td><td>December 21, 2001</td></tr>
    <tr><td>Python 2.3</td><td>July 29, 2003</td></tr>
    <tr><td>Python 2.4</td><td>November 30, 2004</td></tr>
    <tr><td>Python 2.5</td><td>September 19, 2006</td></tr>
    <tr><td>Python 2.6</td><td>October 1, 2008</td></tr>
    <tr><td>Python 2.7</td><td>July 3, 2010</td></tr>
    <tr><td>Python 3.0</td><td>December 3, 2008</td></tr>
    <tr><td>Python 3.1</td><td>June 27, 2009</td></tr>
    <tr><td>Python 3.2</td><td>February 20, 2011</td></tr>
    <tr><td>Python 3.3</td><td>September 29, 2012</td></tr>
    <tr><td>Python 3.4</td><td>March 16, 2014</td></tr>
    <tr><td>Python 3.5</td><td>September 13, 2015</td></tr>
    <tr><td>Python 3.6</td><td>December 23, 2016</td></tr>
    <tr><td>Python 3.7</td><td>June 27, 2018</td></tr>
    <tr><td>Python 3.8</td><td>October 14, 2019</td></tr>
    </table>
    <p id="Head">Python Features</p>
    <p class="info">
      Python's features include −  <br>

      ~ &nbsp; Easy-to-learn − Python has few keywords, simple structure, and a clearly defined syntax. This allows the student to pick up the language quickly.  <br><br>

      ~ &nbsp; Easy-to-read − Python code is more clearly defined and visible to the eyes.  <br><br>

      ~ &nbsp; Easy-to-maintain − Python's source code is fairly easy-to-maintain.  <br><br>

      ~ &nbsp; A broad standard library − Python's bulk of the library is very portable and cross-platform compatible on UNIX, Windows, and Macintosh.  <br><br>

      ~ &nbsp; Interactive Mode − Python has support for an interactive mode which allows interactive testing and debugging of snippets of code.  <br><br>

      ~ &nbsp; Portable − Python can run on a wide variety of hardware platforms and has the same interface on all platforms.  <br><br>

      ~ &nbsp; Extendable − You can add low-level modules to the Python interpreter. These modules enable programmers to add to or customize their tools to be more efficient.  <br><br>

      ~ &nbsp; Databases − Python provides interfaces to all major commercial databases.  <br><br>

      ~ &nbsp; GUI Programming − Python supports GUI applications that can be created and ported to many system calls, libraries and windows systems, such as Windows MFC, Macintosh, and the X Window system of Unix.  <br><br>

      ~ &nbsp; Scalable − Python provides a better structure and support for large programs than shell scripting.  <br><br>

      Apart from the above-mentioned features, Python has a big list of good features, few are listed below −  <br>

      ~ &nbsp; It supports functional and structured programming methods as well as OOP.  <br><br>

      ~ &nbsp; It can be used as a scripting language or can be compiled to byte-code for building large applications.  <br><br>

      ~ &nbsp; It provides very high-level dynamic data types and supports dynamic type checking.  <br><br>

      ~ &nbsp; It supports automatic garbage collection.  <br><br>

      ~ &nbsp; It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java.  <br><br>
    </p> 
    `;
});

Tut_C_3.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Applications</p>
  <p class="info">
    Python is known for its general-purpose nature that makes it applicable in almost every domain of software development. Python makes its presence in every emerging field. It is the fastest-growing programming language and can develop any application.  <br>
    Here, we are specifying application areas where Python can be applied.  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/Python_tut_img/python-applications_django.png" alt="">
  </p>
  <p id="Head">1) Web Applications</p>
  <p class="info">
    We can use Python to develop web applications. It provides libraries to handle internet protocols such as HTML and XML, JSON, Email processing, request, beautifulSoup, Feedparser, etc. One of Python web-framework named Django is used on Instagram. Python provides many useful frameworks, and these are given below:  <br>
    > &nbsp; Django and Pyramid framework(Use for heavy applications)  <br>
    > &nbsp; Flask and Bottle (Micro-framework)  <br>
    > &nbsp; Plone and Django CMS (Advance Content management)  <br>
  </p>
  <p id="Head">2) Desktop GUI Applications</p>
  <p class="info">
    The GUI stands for the Graphical User Interface, which provides a smooth interaction to any application. Python provides a Tk GUI library to develop a user interface. Some popular GUI libraries are given below.  <br>
    > &nbsp;Tkinter or Tk  <br>
    > &nbsp; wxWidgetM  <br>
    > &nbsp; Kivy (used for writing multitouch applications )  <br>
    > &nbsp; PyQt or Pyside  <br>
  </p>
  <p id="Head">3) Console-based Application</p>
  <p class="info">
    Console-based applications run from the command-line or shell. These applications are computer program which are used commands to execute. This kind of application was more popular in the old generation of computers. Python can develop this kind of application very effectively. It is famous for having REPL, which means the Read-Eval-Print Loop that makes it the most suitable language for the command-line applications. <br>
    Python provides many free library or module which helps to build the command-line apps. The necessary IO libraries are used to read and write. It helps to parse argument and create console help text out-of-the-box. There are also advance libraries that can develop independent console apps. <br>
  </p>
  <p id="Head">4) Software Development</p>
  <p class="info">
    Python is useful for the software development process. It works as a support language and can be used to build control and management, testing, etc. <br>
    > &nbsp; SCons is used to build control.  <br>
    > &nbsp; Buildbot and Apache Gumps are used for automated continuous compilation and testing. <br>
    > &nbsp; Round or Trac for bug tracking and project management.  <br>
  </p>
  <p id="Head">5) Scientific and Numeric</p>
  <p class="info">
    This is the era of Artificial intelligence where the machine can perform the task the same as the human. Python language is the most suitable language for Artificial intelligence or machine learning. It consists of many scientific and mathematical libraries, which makes easy to solve complex calculations.  <br>
    Implementing machine learning algorithms require complex mathematical calculation. Python has many libraries for scientific and numeric such as Numpy, Pandas, Scipy, Scikit-learn, etc. If you have some basic knowledge of Python, you need to import libraries on the top of the code. Few popular frameworks of machine libraries are given below.  <br>
    ~ &nbsp; SciPy  <br>
    ~ &nbsp; Scikit-learn  <br>
    ~ &nbsp; NumPy  <br>
    ~ &nbsp; Pandas  <br>
    Matplotlib  <br>
  </p>
  <p id="Head">6) Business Applications</p>
  <p class="info">
    Business Applications differ from standard applications. E-commerce and ERP are an example of a business application. This kind of application requires extensively, scalability and readability, and Python provides all these features. <br>
    Oddo is an example of the all-in-one Python-based application which offers a range of business applications. Python provides a Tryton platform which is used to develop the business application. <br>
  </p>
  <p id="Head">7) Audio or Video-based Applications</p>
  <p class="info">
    Python is flexible to perform multiple tasks and can be used to create multimedia applications. Some multimedia applications which are made by using Python are TimPlayer, cplay, etc. The few multimedia libraries are given below.  <br>
    > &nbsp; Gstreamer  <br>
    > &nbsp; Pyglet  <br>
    > &nbsp; QT Phonon  <br>
  </p>
  <p id="Head">8) 3D CAD Applications</p>
  <p class="info">
    The CAD (Computer-aided design) is used to design engineering related architecture. It is used to develop the 3D representation of a part of a system. Python can create a 3D CAD application by using the following functionalities.  <br>
    Fandango (Popular )  <br>
    > &nbsp; CAMVOX  <br>
    > &nbsp; HeeksCNC  <br>
    > &nbsp; AnyCAD  <br>
    > &nbsp; RCAM <br>
  </p>
  <p id="Head">9) Enterprise Applications</p>
  <p class="info">
    Python can be used to create applications that can be used within an Enterprise or an Organization. Some real-time applications are OpenERP, Tryton, Picalo, etc. <br>
  </p>
  <p id="Head">10) Image Processing Application</p>
  <p class="info">
    Python contains many libraries that are used to work with the image. The image can be manipulated according to our requirements. Some libraries of image processing are given below.  <br>
    > &nbsp; OpenCV  <br>
    > &nbsp; Pillow  <br>
    > &nbsp; SimpleITK <br>
  </p>
  `;
});

Tut_C_4.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Installation on Windows</p>
  <p class="info">
    Visit the link https://www.python.org/downloads/ to download the latest release of Python. In this process, we will install Python 3.8.6 on our Windows operating system. When we click on the above link, it will bring us the following page.  <br>
    Step - 1: Select the Python's version to download. <br>
    <img style="margin-left: 10%; width: 80%;" src="https://static.javatpoint.com/python/images/python-environment-set-up.png" alt="">
    <br><br>
    Step - 2: Click on the Install Now  <br>
    Double-click the executable file, which is downloaded; the following window will open. Select Customize installation and proceed. Click on the Add Path check box, it will set the Python path automatically.  <br>
    <img style="margin-left: 10%; width: 80%;" src="https://static.javatpoint.com/python/images/python-environment-set-up2.png" alt="">
    <br>
    We can also click on the customize installation to choose desired location and features. Other important thing is install launcher for the all user must be checked. <br><br>
    Step - 3 Installation in Process <br>
    <img style="margin-left: 10%; width: 80%;" src="https://static.javatpoint.com/python/images/python-environment-set-up3.png" alt="">
    <br>
    Now, try to run python on the command prompt. Type the command python -version in case of python3. <br>
  </p>
  <p id="Head">First Python Program</p>
    <p class="info">
      <pre class="info" style="color: blue;">
        print ("Hello, Python!");
      </pre>
      <span class="info" style="color: brown;">Output : <br>
        Hello, Python! <br></span>
    </p>
  `;
});

Tut_C_5.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Variables</p>
  <p class="info">
    Variable is a name that is used to refer to memory location. Python variable is also known as an identifier and used to hold value. <br>

    In Python, we don't need to specify the type of variable because Python is a infer language and smart enough to get variable type. <br>

    Variable names can be a group of both the letters and digits, but they have to begin with a letter or an underscore. <br>

    It is recommended to use lowercase letters for the variable name. Rahul and rahul both are two different variables. <br>
  </p>
  <p id="Head">Identifier Naming</p>
  <p class="info">
    Variables are the example of identifiers. An Identifier is used to identify the literals used in the program. The rules to name an identifier are given below.  <br>

    ~ &nbsp; The first character of the variable must be an alphabet or underscore ( _ ).  <br>
    ~ &nbsp; All the characters except the first character may be an alphabet of lower-case(a-z), upper-case (A-Z), underscore, or digit (0-9).  <br>
    ~ &nbsp; Identifier name must not contain any white-space, or special character (!, @, #, %, ^, &, *).  <br>
    ~ &nbsp; Identifier name must not be similar to any keyword defined in the language.  <br>
    ~ &nbsp; Identifier names are case sensitive; for example, my name, and MyName is not the same.  <br>
    ~ &nbsp; Examples of valid identifiers: a123, _n, n_9, etc.  <br>
    ~ &nbsp; Examples of invalid identifiers: 1a, n%4, n 9, etc. <br>
  </p>
  <p id="Head">Assigning Values to Variables</p>
  <p class="info">
    Python variables do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable. The equal sign (=) is used to assign values to variables.  <br>

    The operand to the left of the = operator is the name of the variable and the operand to the right of the = operator is the value stored in the variable. For example − <br>
    <pre style="color: blue;">
      counter = 100       
      miles = 1000.0      
      name = "John"  
      print(counter) 
      print(miles)  
      print(name) </pre><pre style="color: brown;">
      Output:
      100
      1000.0
      John </pre>
  </p>
  <p id="Head">Multiple Assignment</p>
  <p class="info">
    Python allows you to assign a single value to several variables simultaneously. For example −  <br>
    <span style="color: blue">a = b = c = 1</span> <br>
    Here, an integer object is created with the value 1, and all three variables are assigned to the same memory location. You can also assign multiple objects to multiple variables. For example − <br> </p>
    <pre style="color: blue;">
a,b,c = 1,2,"john"</pre>
      <p class="info">
    Here, two integer objects with values 1 and 2 are assigned to variables a and b respectively, and one string object with the value "john" is assigned to the variable c. <br>
  </p>
  `;
});

Tut_C_6.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Comments in Python</p>
  <p class="info">
    Python Comment is an essential tool for the programmers. Comments are generally used to explain the code. We can easily understand the code if it has a proper explanation. A good programmer must use the comments because in the future anyone wants to modify the code as well as implement the new module; then, it can be done easily.   <br>
    In the other programming language such as C++, It provides the // for single-lined comment and /*.... */ for multiple-lined comment, but Python provides the single-lined Python comment. To apply the comment in the code we use the hash(#) at the beginning of the statement or code.   <br>
    Let's understand the following example.   <br>
    <span style="color: grey;"># This is the print statement  </span> <br>
    <span style="color: blue;">print("Hello Python")  </span> <br>
    Here we have written comment over the print statement using the hash(#). It will not affect our print statement.  <br>
  </p>
  <p id="Head">Multiline Python Comment</p>
  <p class="info">
    We must use the hash(#) at the beginning of every line of code to apply the multiline Python comment. Consider the following example.  <br>
    In the other programming language such as C++, It provides the // for single-lined comment and /*.... */ for multiple-lined comment, but Python provides the single-lined Python comment. To apply the comment in the code we use the hash(#) at the beginning of the statement or code.   <br>
    Let's understand the following example.   <br>
    <span style="color: grey;"># First line of the comment     <br>
      # Second line of the comment    <br>
      # Third line of the comment   </span> <br>
    <span style="color: blue;">a = 5    <br>
      b = 10    <br>
      c = a+b    <br>
      print("The sum is:", c)   </span> <br>

      <span style="color: brown;">Output : <br> 15 <br></span>
  </p>
  <p id="Head">Docstrings Python Comment</p>
  <p class="info">
    The docstring comment is mostly used in the module, function, class or method. It is a documentation Python string. We will explain the class/method in further tutorials.     <br>
    Example: <br>
    <span style="color: blue;">a = 5    <br>
      
      def intro():  <br>
      <span style="color: grey;">""" <br>
        This function prints Hello Joseph <br>
        """ </span> <br>
      print("Hi Joseph")              <br>
      intro()  </span> <br>

      <span style="color: brown;">Output : <br> Hello Joseph <br></span>
  </p>
  `;
});

Tut_C_7.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Dictionary</p>
  <p class="info">
    Python Dictionary is used to store the data in a key-value pair format. The dictionary is the data type in Python, which can simulate the real-life data arrangement where some specific value exists for some particular key. It is the mutable data-structure. The dictionary is defined into element Keys and values.  <br>
    > &nbsp;Keys must be a single element  <br>
    > &nbsp;Value can be any type such as list, tuple, integer, etc.  <br>
    In other words, we can say that a dictionary is the collection of key-value pairs where the value can be any Python object. In contrast, the keys are the immutable Python object, i.e., Numbers, string, or tuple.  <br>
    Syntax:   <br>
    <span style="color: blue;">Dict = {"Name": "Tom", "Age": 22}</span> <br>
    In the above dictionary Dict, The keys Name and Age are the string that is an immutable object. <br>
    Let's see an example to create a dictionary and print its content. <br>
    Python provides the built-in function dict() method which is also used to create dictionary. The empty curly braces {} is used to create empty dictionary. <br>
  </p> <pre style="color: blue;">
    <span style="color: #444444;"># Creating an empty Dictionary</span>    
    Dict = {}   
    print("Empty Dictionary: ")   
    print(Dict)           
    <span style="color: #444444;"># Creating a Dictionary </span># Creating a Dictionary   
    <span style="color: #444444;"># with dict() method </span>    
    Dict = dict({1: 'Java', 2: 'T', 3:'Point'})   
    print("\\nCreate Dictionary by using  dict(): ")   
    print(Dict)   
    <span style="color: #444444;"># Creating a Dictionary   </span>
    <span style="color: #444444;"># with each item as a Pair</span>   
    Dict = dict([(1, 'Devansh'), (2, 'Sharma')])   
    print("\\nDictionary with each item as a pair: ")   
    print(Dict)    </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Empty Dictionary: 
    {}
    Create Dictionary by using dict(): 
    {1: 'Java', 2: 'T', 3: 'Point'}
    Dictionary with each item as a pair: 
    {1: 'Devansh', 2: 'Sharma'}</pre> 
  <p id="Head">Iterating Dictionary</p>
  <pre style="color: blue;">
    Employee={"Name":"Joshep","Age":29,"Salary":25000,"Company":"GOOGLE","Name":"John"}    
    for x,y in Employee.items():    
        print(x,y)     </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Name John
    Age 29
    Salary 25000
    Company GOOGLE</pre> 
    <p id="Head">Built-in Dictionary functions</p>
    <table>
      <tr>
        <th>SN</th>
        <th>Function</th>
        <th>Description</th>
      </tr>
      <tr>
          <td>1</td>
          <td>cmp(dict1, dict2)</td>
        <td>It compares the items of both the dictionary and returns true if the first dictionary values are greater than the second dictionary, otherwise it returns false.</td>
      </tr>
      <tr>
          <td>2</td>
          <td>len(dict)</td>
        <td>It is used to calculate the length of the dictionary.</td>
      </tr>
      <tr>
          <td>3</td>
          <td>str(dict)</td>
        <td>It converts the dictionary into the printable string representation.</td>
      </tr>
      <tr>
          <td>4</td>
          <td>type(variable)</td>
        <td>It is used to print the type of the passed variable.</td>
      </tr>
    </table>
    <p id="Head">Built-in Dictionary methods</p>
    <table style="width: 95%;">
      <tbody><tr>
        <th>SN</th>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
          <td>1</td>
          <td>dic.clear()</td>
        <td>It is used to delete all the items of the dictionary.</td>
      </tr>
      <tr>
          <td>2</td>
          <td>dict.copy()</td>
        <td>It returns a shallow copy of the dictionary. </td>
      </tr>
      <tr>
          <td>3</td>
          <td>dict.fromkeys(iterable, value = None, /)</td>
        <td>Create a new dictionary from the iterable with the values equal to value.</td>
      </tr>
      <tr>
          <td>4</td>
          <td>dict.get(key, default = "None")</td>
        <td>It is used to get the value specified for the passed key.</td>
      </tr>
      <tr>
          <td>5</td>
          <td>dict.has_key(key)</td>
        <td>It returns true if the dictionary contains the specified key.</td>
      </tr>
      <tr>
          <td>6</td>
          <td>dict.items()</td>
        <td>It returns all the key-value pairs as a tuple.</td>
      </tr>
      <tr>
          <td>7</td>
          <td>dict.keys()</td>
        <td>It returns all the keys of the dictionary.</td>
      </tr>
      <tr>
          <td>8</td>
          <td>dict.setdefault(key,default= "None")</td>
        <td>It is used to set the key to the default value if the key is not specified in the dictionary</td>
      </tr>
      <tr>
          <td>9</td>
          <td>dict.update(dict2)</td>
        <td>It updates the dictionary by adding the key-value pair of dict2 to this dictionary.</td>
      </tr>
      <tr>
          <td>10</td>
          <td>dict.values()</td>
        <td>It returns all the values of the dictionary.</td>
      </tr>
      <tr>
          <td>11</td>
        <td>len()</td>
        <td>This in-built method takes a Python object as an argument and returns the number of items in it. It can be used on strings, lists, dictionaries, tuples, and sets.</td>
      </tr>
      <tr>
          <td>12</td>
        <td>popItem()</td>
        <td>The popitem() method removes the item that was last inserted into the dictionary.</td>
      </tr>
      <tr>
          <td>13</td>
        <td>pop()</td>
        <td>The pop() method removes the specified item from the dictionary.</td>
      </tr>
      <tr>
          <td>14</td>
        <td>count()</td>
        <td>It returns the number of keys in dictionary</td>
      </tr>
    </table>
  `;
});

Tut_C_8.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Data Types</p>
  <p class="info">
    Variables can hold values, and every value has a data-type. Python is a dynamically typed language; hence we do not need to define the type of the variable while declaring it. The interpreter implicitly binds the value with its type.  <br>
    <span style="color: blue;">a = 5</span> <br>
    The variable a holds integer value five and we did not define its type. Python interpreter will automatically interpret variables a as an integer type.  <br>
    Python enables us to check the type of the variable used in the program. Python provides us the type() function, which returns the type of the variable passed. <br>
    Consider the following example to define the values of different data types and checking its type. <br>
    <span style="color: blue;">a=10  <br>
      b="Hi Python"  <br>
      c = 10.5  <br>
      print(type(a))  <br>
      print(type(b))  <br>
      print(type(c)) </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
      < type 'int' >   <br>
      < type 'str' >  <br>
      < type 'float' ></span>  <br>
  </p>
  <p id="Head">Standard data types</p>
  <p class="info">
    A variable can hold different types of values. For example, a person's name must be stored as a string whereas its id must be stored as an integer. <br>

    Python provides various standard data types that define the storage method on each of them. The data types defined in Python are given below. <br>
    > &nbsp; Numbers <br>
    > &nbsp; Sequence Type <br>
    > &nbsp; Boolean <br>
    > &nbsp; Set <br>
    > &nbsp; Dictionary <br><br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/Python_tut_img/python-data-types_django.png" alt="">
    <br>
    <span style="color: green;">Numbers</span>  <br>
    Number stores numeric values. The integer, float, and complex values belong to a Python Numbers data-type. Python provides the type() function to know the data-type of the variable. Similarly, the isinstance() function is used to check an object belongs to a particular class.  <br>
    Python creates Number objects when a number is assigned to a variable. For example;  <br>
    <span style="color: blue;">a = 5   <br>
      print("The type of a", type(a))   <br>
      b = 40.5   <br>
      print("The type of b", type(b))  <br>
      c = 1+3j   <br>
      print("The type of c", type(c))   <br>
      print(" c is a complex number", isinstance(1+3j,complex))   </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        The type of a < class 'int' >  <br>
        The type of b < class 'float' >  <br>
        The type of c < class 'complex' >  <br>
        c is complex number True</span>  <br>
  </p>
  <p id="Head">Sequence Types</p>
  <p class="info">
    <span style="color: green;">String</span>  <br>
    The string can be defined as the sequence of characters represented in the quotation marks. In Python, we can use single, double, or triple quotes to define a string.  <br>
    String handling in Python is a straightforward task since Python provides built-in functions and operators to perform operations in the string.  <br>
    In the case of string handling, the operator + is used to concatenate two strings as the operation "hello"+" python" returns "hello python".  <br>
    The operator * is known as a repetition operator as the operation "Python" *2 returns 'Python Python'.  <br>
    The following example illustrates the string in Python. <br>
    <span style="color: blue;">
      str = "string using double quotes"  
      print(str)    <br>
      s = '''''A multiline   <br>
      string'''    <br>
      print(s)  </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        string using double quotes  <br>
        A multiline  <br>
        string</span>  <br>
    <span style="color: green;">List</span>  <br>
    Python Lists are similar to arrays in C. However, the list can contain data of different types. The items stored in the list are separated with a comma (,) and enclosed within square brackets []. <br>
    We can use slice [:] operators to access the data of the list. The concatenation operator (+) and repetition operator (*) works with the list in the same way as they were working with the strings. <br>
    Consider the following example.  <br>
    The following example illustrates the string in Python. <br>
    <span style="color: blue;">  
      list1  = [1, "hi", "Python", 2]     <br>
      <span style="color: rgb(94, 91, 91);">#Checking type of given list</span>   <br>
      print(type(list1))   <br>
      #Printing the list1   <br>
      print (list1)            <br>
      <span style="color: rgb(94, 91, 91);"># List slicing</span>  <br>
      print (list1[3:])            <br>
      <span style="color: rgb(94, 91, 91);"># List slicing </span> <br>
      print (list1[0:2])             <br>
      <span style="color: rgb(94, 91, 91);"># List Concatenation using + operator</span>   <br>
      print (list1 + list1)             <br>
      <span style="color: rgb(94, 91, 91);"># List repetation using * operator  </span> <br>
      print (list1 * 3)   </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        [1, 'hi', 'Python', 2]   <br>
        [2]   <br>
        [1, 'hi']   <br>
        [1, 'hi', 'Python', 2, 1, 'hi', 'Python', 2]   <br>
        [1, 'hi', 'Python', 2, 1, 'hi', 'Python', 2, 1, 'hi', 'Python', 2]</span>  <br>
    <span style="color: green;">Tuple</span>  <br>
    A tuple is similar to the list in many ways. Like lists, tuples also contain the collection of the items of different data types. The items of the tuple are separated with a comma (,) and enclosed in parentheses (). <br>
    A tuple is a read-only data structure as we can't modify the size and value of the items of a tuple. <br>
    Let's see a simple example of the tuple. <br>
    <span style="color: blue;">  
      tup  = ("hi", "Python", 2)      <br>
      <span style="color: rgb(94, 91, 91);"># Checking type of tup </span>   <br>
      print (type(tup))      <br>
        
      <span style="color: rgb(94, 91, 91);">#Printing the tuple</span>    <br>
      print (tup)    <br>
        
      <span style="color: rgb(94, 91, 91);"># Tuple slicing</span>    <br>
      print (tup[1:])      <br>
      print (tup[0:1])      <br>
        
      <span style="color: rgb(94, 91, 91);"># Tuple concatenation using + operator </span>   <br>
      print (tup + tup)      <br>
        
      <span style="color: rgb(94, 91, 91);"># Tuple repatation using * operator  </span>  <br>
      print (tup * 3)       <br>
        
      <span style="color: rgb(94, 91, 91);"># Adding value to tup. It will throw an error.  </span>  <br>
      t[2] = "hi"    </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        <class 'tuple'>
          ('hi', 'Python', 2)  <br>
          ('Python', 2)  <br>
          ('hi',)  <br>
          ('hi', 'Python', 2, 'hi', 'Python', 2)  <br>
          ('hi', 'Python', 2, 'hi', 'Python', 2, 'hi', 'Python', 2)  <br>
          
          Traceback (most recent call last):  <br>
            File "main.py", line 14, in < module >  <br>
              t[2] = "hi";  <br>
          TypeError: 'tuple' object does not support item assignment</span>  <br>
    <span style="color: green;">Dictionary</span>  <br>
    Dictionary is an unordered set of a key-value pair of items. It is like an associative array or a hash table where each key stores a specific value. Key can hold any primitive data type, whereas value is an The items in the dictionary are separated with the comma (,) and enclosed in the curly braces {}. <br>
    Consider the following example. <br>
    <span style="color: blue;">  
      d = {1:'Jimmy', 2:'Alex', 3:'john', 4:'mike'}    <br>    
      <span style="color: rgb(94, 91, 91);"># Printing dictionary </span>   <br>
      print (d)    <br>
      <span style="color: rgb(94, 91, 91);"># Accesing value using keys </span>   <br>
      print("1st name is "+d[1])     <br>
      print("2nd name is "+ d[4])      <br>         
      print (d.keys())      <br>
      print (d.values()) </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        <class 'tuple'>
          1st name is Jimmy  <br>
          2nd name is mike  <br>
          {1: 'Jimmy', 2: 'Alex', 3: 'john', 4: 'mike'}  <br>
          dict_keys([1, 2, 3, 4])  <br>
          dict_values(['Jimmy', 'Alex', 'john', 'mike'])</span>  <br>
    <span style="color: green;">Boolean</span>  <br>
    Boolean type provides two built-in values, True and False. These values are used to determine the given statement true or false. It denotes by the class bool. True can be represented by any non-zero value or 'T' whereas false can be represented by the 0 or 'F'. Consider the following example. <br>
    <span style="color: blue;">  
      tup  = ("hi", "Python", 2)      <br>
      <span style="color: rgb(94, 91, 91);"># Python program to check the boolean type  </span>   <br> 
      print(type(True))    <br>
      print(type(False))    <br>
      print(false)    </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        < class 'tuple'>  <br>
        < class 'bool' >  <br>
        < class 'bool' >  <br>
        NameError: name 'false' is not defined</span>  <br>
    <span style="color: green;">Set</span>  <br>
    Python Set is the unordered collection of the data type. It is iterable, mutable(can modify after creation), and has unique elements. In set, the order of the elements is undefined; it may return the changed sequence of the element. The set is created by using a built-in function set(), or a sequence of elements is passed in the curly braces and separated by the comma. It can contain various types of values. Consider the following example. <br>
    <span style="color: blue;">  
      <span style="color: rgb(94, 91, 91);"># Creating Empty set </span>   <br>
      set1 = set()    <br>
        
      set2 = {'James', 2, 3,'Python'}    <br>
        
      <span style="color: rgb(94, 91, 91);">#Printing Set value</span>    <br>
      print(set2)    <br>
        
      <span style="color: rgb(94, 91, 91);"># Adding element to the set </span>   <br>
        
      set2.add(10)    <br>
      print(set2)    <br>
        
      <span style="color: rgb(94, 91, 91);">#Removing element from the set </span>   <br>
      set2.remove(2)    <br>
      print(set2)    </span> <br>
      <span style="color: rgb(138, 29, 29);">Output : <br>
        <class 'tuple'>
          {3, 'Python', 'James', 2}  <br>
          {'Python', 'James', 3, 2, 10}  <br>
          {'Python', 'James', 3, 10}</span>  <br>
  </p>
  `;
});

Tut_C_9.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Function</p>
  <p class="info">
    Functions are the most important aspect of an application. A function can be defined as the organized block of reusable code, which can be called whenever required.  <br>
    Python allows us to divide a large program into the basic building blocks known as a function. The function contains the set of programming statements enclosed by {}. A function can be called multiple times to provide reusability and modularity to the Python program.  <br>
    The Function helps to programmer to break the program into the smaller part. It organizes the code very effectively and avoids the repetition of the code. As the program grows, function makes the program more organized.  <br>
    Python provide us various inbuilt functions like range() or print(). Although, the user can create its functions, which can be called user-defined functions.  <br>
    There are mainly two types of functions. <br>
    1) &nbsp;User-define functions - The user-defined functions are those define by the user to perform the specific task. <br>
    2) &nbsp;Built-in functions - The built-in functions are those functions that are pre-defined in Python.
    <p id="Head">Advantage of Functions in Python</p>
    <p class="info">
      There are the following advantages of Python functions. <br>
      ~ &nbsp;Using functions, we can avoid rewriting the same logic/code again and again in a program. <br>
      ~ &nbsp;We can call Python functions multiple times in a program and anywhere in a program. <br>
      ~ &nbsp;We can track a large Python program easily when it is divided into multiple functions. <br>
      ~ &nbsp;Reusability is the main achievement of Python functions. <br>
      ~ &nbsp;However, Function calling is always overhead in a Python program.   <br> 
      Syntax:   <br> 
      <span style="color: blue;">def my_function(parameters):  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;  function_block  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;return expression</span> <br> 
Let's understand the syntax of functions definition.  <br>
> &nbsp;The def keyword, along with the function name is used to define the function.  <br>
> &nbsp;The identifier rule must follow the function name.  <br>
> &nbsp;A function accepts the parameter (argument), and they can be optional.  <br>
> &nbsp;The function block is started with the colon (:), and block statements must be at the same indentation.  <br>
> &nbsp;The return statement is used to return the value. A function can have only one return  <br></p>
    <p id="Head">Built-in Dictionary functions</p>
    <pre style="color: blue;">
      <span style="color: #444444;"># function with return statement</span>
      def sum():  
        a = 10  
        b = 20  
        c = a+b  
        return c    
    print("The sum is:",sum())  

    <span style="color: #444444;"># function without return statement</span>
    def sum():  
        a = 10  
        b = 20  
        c = a+b     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      The sum is: 30
      None</pre>
      <p class="info">
        If function does not return any value then it will show None if function is called. <br>
      </p>
    <p id="Head">Arguments in function</p>
    <p class="info">
      The arguments are types of information which can be passed into the function. The arguments are specified in the parentheses. We can pass any number of arguments, but they must be separate them with a comma.
    </p> 
    <pre style="color: blue;">
      <span style="color: #444444;">#defining the function</span>    
      def func (name):    
          print("Hi ",name)   
          <span style="color: #444444;">#calling the function</span>     
      func("Divash") </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      Hi Divash</pre>
    <p id="Head">Keyword arguments(**kwargs)</p>
    <p class="info">
      Python allows us to call the function with the keyword arguments. This kind of function call will enable us to pass the arguments in the random order.  <br>
      The name of the arguments is treated as the keywords and matched in the function calling and definition. If the same match is found, the values of the arguments are copied in the function definition.  <br>
      Consider the following example.  <br>
    </p> 
    <pre style="color: blue;">
      <span style="color: #444444;">#The function simple_interest(p, t, r) is called with the keyword 
      # arguments the order of arguments doesn't matter in this case</span>        
      def simple_interest(p,t,r):    
          return (p*t*r)/100    
      print("Simple Interest: ",simple_interest(t=10,r=10,p=1900))    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      Simple Interest:  1900.0</pre>
    <pre style="color: blue;">
      def food(**kwargs):  
          print(kwargs)  
      food(a="Apple")  
      food(fruits="Orange", Vagitables="Carrot")      </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      {'a': 'Apple'}
      {'fruits': 'Orange', 'Vagitables': 'Carrot'}</pre>`;
});

Tut_C_10.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Keywords</p>
  <p class="info">
    Python Keywords are special reserved words that convey a special meaning to the compiler/interpreter. Each keyword has a special meaning and a specific operation. These keywords can't be used as a variable. Following is the List of Python Keywords. <br><br>
  </p>
  <table style="width: 70%; margin-left: 5%;">
    <tr>
    <th>Keyword</th>
    <th>Description</th>
    </tr>
    
      <tr>
        <td>and</td><td>A logical operator</td>
      </tr>
      <tr>
        <td>as</td><td>To create an alias</td>
      </tr>
      <tr>
        <td>assert</td><td>For debugging</td>
      </tr>
      <tr>
        <td>break</td><td>To break out of a loop</td>
      </tr>
      <tr>
        <td>class</td><td>To define a class</td>
      </tr>
      <tr>
        <td>continue</td><td>To continue to the 
        next iteration of a loop</td>
      </tr>
      <tr>
        <td>def</td><td>To define a function</td>
      </tr>
      <tr>
        <td>del</td><td>To delete an object</td>
      </tr>
      <tr>
        <td>elif</td><td>Used in conditional 
        statements, same as else if</td>
      </tr>
      <tr>
        <td>else</td><td>Used in conditional 
        statements</td>
      </tr>
      <tr>
        <td>except</td><td>Used with exceptions, 
        what to do when an exception occurs</td>
      </tr>
      <tr>
        <td>False</td><td>Boolean value, result of 
        comparison operations</td>
      </tr>
      <tr>
        <td>finally</td><td>Used with exceptions, a 
        block of code that will be executed no matter if there is an exception or 
        not</td>
      </tr>
      <tr>
        <td>for</td><td>To create a for loop</td>
      </tr>
      <tr>
        <td>from</td><td>To import specific parts of 
        a module</td>
      </tr>
      <tr>
        <td>global</td><td>To declare a global 
        variable</td>
      </tr>
      <tr>
        <td>if</td><td>To make a conditional 
        statement</td>
      </tr>
      <tr>
        <td>import</td><td>To import a module</td>
      </tr>
      <tr>
        <td>in</td><td>To check if a value is 
        present in a list, tuple, etc.</td>
      </tr>
      <tr>
        <td>is</td><td>To test if two variables are 
        equal</td>
      </tr>
      <tr>
        <td>lambda</td><td>To create an anonymous 
        function </td>
      </tr>
      <tr>
        <td>None</td><td>Represents a null value</td>
      </tr>
      <tr>
        <td>nonlocal</td><td>To declare a 
        non-local variable</td>
      </tr>
      <tr>
        <td>not</td><td>A logical operator</td>
      </tr>
    <tr><td>or</td><td>A logical operator</td></tr>
    <tr><td>pass</td><td>A null statement, a 
      statement that will do nothing</td></tr>
    <tr><td>raise</td><td>To raise an exception</td></tr>
    <tr><td>return</td><td>To exit a function and 
      return a value</td></tr>
      <tr>
        <td>True</td><td>Boolean value, result of 
        comparison operations</td>
      </tr>
    <tr><td>try</td><td>To make a try...except 
      statement</td></tr>
    <tr><td>while</td><td>To create a while loop</td></tr>
    <tr><td>with</td><td>Used to simplify 
      exception handling</td></tr>
    <tr><td>yield</td><td>To end a function, returns 
      a generator</td></tr>
    </table>`;
});

Tut_C_11.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Indentation in Python</p>
  <p class="info">
    Indentation is a very important concept of Python because without proper indenting the Python code, you will end up seeing IndentationError and the code will not get compiled. <br>
    <span style="color: red;">Indentation</span> <br>
    In simple terms indentation refers to adding white space before a statement. But the question arises is it even necessary?  <br><br>
    To understand this consider a situation where you are reading a book and all of a sudden all the page numbers from the book went missing. So you don’t know, where to continue reading and you will get confused. This situation is similar with Python. Without indentation, Python does not know which statement to execute next or which statement belongs to which block. This will lead to IndentationError.  <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/Python_tut_img/indentation_django.png" alt="">
    <br><br>
    Python indentation is a way of telling a Python interpreter that the group of statements belongs to a particular block of code. A block is a combination of all these statements. Block can be regarded as the grouping of statements for a specific purpose. Most of the programming languages like C, C++, Java use braces { } to define a block of code. Python uses indentation to highlight the blocks of code. Whitespace is used for indentation in Python. All statements with the same distance to the right belong to the same block of code. If a block has to be more deeply nested, it is simply indented further to the right. You can understand it better by looking at the following lines of code. <br><br>
    <pre style="color: blue;">
<span style="color: rgb(78, 75, 75);"># Python program showing</span>  
<span style="color: rgb(78, 75, 75);"># indentation</span> 
site = 'gfg' 
if site == 'gfg': 
  print('Logging on to geeksforgeeks...') 
else: 
  print('retype the URL.') 
print('All set !')   </pre> <br>
      <pre style="color: rgb(138, 29, 29);">Output : 
Logging on to geeksforgeeks...
All set !</pre>  <br>
  </p>
  <p class="info">The lines print(‘Logging on to geeksforgeeks…’) and print(‘retype the URL.’) are two separate code blocks. The two blocks of code in our example if-statement are both indented four spaces. The final print(‘All set!’) is not indented, and so it does not belong to the else-block. <br>
  </p>`;
});

Tut_C_12.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Operators</p>
  <p class="info">
    The operator can be defined as a symbol which is responsible for a particular operation between two operands. Operators are the pillars of a program on which the logic is built in a specific programming language. Python provides a variety of operators, which are described as follows.  <br>
    ~ &nbsp; Arithmetic operators  <br>
    ~ &nbsp; Comparison operators  <br>
    ~ &nbsp; Assignment Operators  <br>
    ~ &nbsp; Logical Operators  <br>
    ~ &nbsp; Bitwise Operators  <br>
    ~ &nbsp; Membership Operators  <br>
    ~ &nbsp; Identity Operators  <br>
  </p>
  <p id="Head">Arithmetic Operators</p>
  <p class="info">
    Arithmetic operators are used to perform arithmetic operations between two operands. It includes + (addition), - (subtraction), *(multiplication), /(divide), %(reminder), //(floor division), and exponent (**) operators. <br>
    Consider the following table for a detailed explanation of arithmetic operators. <br>
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong>+ (Addition)</strong></td>
      <td>It is used to add two operands. For example, if a = 20, b = 10 =&gt; a+b = 30</td>
    </tr>
    <tr>
      <td><strong>- (Subtraction)</strong></td>
      <td>It is used to subtract the second operand from the first operand. If the first operand is less than the second operand, the value results negative. For example, if a = 20, b = 10 =&gt; a - b = 10</td>
    </tr>
    <tr>
      <td><strong>/ (divide)</strong></td>
      <td>It returns the quotient after dividing the first operand by the second operand. For example, if a = 20, b = 10 =&gt; a/b = 2.0</td>
    </tr>
    <tr>
      <td><strong>* (Multiplication)</strong></td>
      <td>It is used to multiply one operand with the other. For example, if a = 20, b = 10 =&gt; a * b = 200</td>
    </tr>
    <tr>
      <td><strong>% (reminder)</strong></td>
      <td>It returns the reminder after dividing the first operand by the second operand. For example, if a = 20, b = 10 =&gt; a%b = 0</td>
    </tr>
    <tr>
      <td><strong>** (Exponent)</strong></td>
      <td>It is an exponent operator represented as it calculates the first operand power to the second operand.</td>
    </tr>
    <tr>
      <td><strong>// (Floor division)</strong></td>
      <td>It gives the floor value of the quotient produced by dividing the two operands.</td>
    </tr>
    </table>
  <p id="Head">Comparison operator</p>
  <p class="info">
    Comparison operators are used to comparing the value of the two operands and returns Boolean true or false accordingly. The comparison operators are described in the following table.  <br>
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>==</td>
      <td>If the value of two operands is equal, then the condition becomes true.</td>
    </tr>
    <tr>
      <td>!=</td>
      <td>If the value of two operands is not equal, then the condition becomes true.</td>
    </tr>
    <tr>
      <td>&lt;=</td>
      <td>If the first operand is less than or equal to the second operand, then the condition becomes true.</td>
    </tr>
    <tr>
      <td>&gt;=</td>
      <td>If the first operand is greater than or equal to the second operand, then the condition becomes true.</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>If the first operand is greater than the second operand, then the condition becomes true.</td>
    </tr>
    <tr>
      <td><strong>&lt;</strong></td>
      <td>If the first operand is less than the second operand, then the condition becomes true.</td>
    </tr>
    </table>
  <p id="Head">Assignment Operators</p>
  <p class="info">
    The assignment operators are used to assign the value of the right expression to the left operand. The assignment operators are described in the following table.
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>= </td>
      <td>It assigns the value of the right expression to the left operand.</td>
    </tr>
    <tr>
      <td>+= </td>
      <td>It increases the value of the left operand by the value of the right operand and assigns the modified value back to left operand. For example, if a = 10, b = 20 =&gt; a+ = b will be equal to a = a+ b and therefore, a = 30.</td>
    </tr>
    <tr>
      <td>-=</td>
      <td>It decreases the value of the left operand by the value of the right operand and assigns the modified value back to left operand. For example, if a = 20, b = 10 =&gt; a- = b will be equal to a = a- b and therefore, a = 10.</td>
    </tr>
    <tr>
      <td>*=</td>
      <td>It multiplies the value of the left operand by the value of the right operand and assigns the modified value back to then the left operand. For example, if a = 10, b = 20 =&gt; a* = b will be equal to a = a* b and therefore, a = 200.</td>
    </tr>
    <tr>
      <td>%=</td>
      <td>It divides the value of the left operand by the value of the right operand and assigns the reminder back to the left operand. For example, if a = 20, b = 10 =&gt; a % = b will be equal to a = a % b and therefore, a = 0.</td>
    </tr>
    <tr>
      <td>**=</td>
      <td>a**=b will be equal to a=a**b, for example, if a = 4, b =2, a**=b will assign 4**2 = 16 to a.</td>
    </tr>
    <tr>
      <td>//=</td>
      <td>A//=b will be equal to a = a// b, for example, if a = 4, b = 3, a//=b will assign 4//3 = 1 to a.</td>
    </tr>
    </table>
  <p id="Head">Bitwise Operators</p>
  <p class="info">
    The bitwise operators perform bit by bit operation on the values of the two operands. Consider the following example.  <br>
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>&amp; (binary and)</td>
      <td>If both the bits at the same place in two operands are 1, then 1 is copied to the result. Otherwise, 0 is copied.</td>
    </tr>
    <tr>
      <td>| (binary or)</td>
      <td>The resulting bit will be 0 if both the bits are zero; otherwise, the resulting bit will be 1.</td>
    </tr>
    <tr>
      <td>^ (binary xor)</td>
      <td>The resulting bit will be 1 if both the bits are different; otherwise, the resulting bit will be 0.</td>
    </tr>
    <tr>
      <td>~ (negation) </td>
      <td>It calculates the negation of each bit of the operand, i.e., if the bit is 0, the resulting bit will be 1 and vice versa.</td>
    </tr>
    <tr>
      <td>&lt;&lt; (left shift)</td>
      <td>The left operand value is moved left by the number of bits present in the right operand.</td>
    </tr>
    <tr>
      <td>&gt;&gt; (right shift)</td>
      <td>The left operand is moved right by the number of bits present in the right operand.</td>
    </tr>
    </table>
  <p id="Head">Logical Operators</p>
  <p class="info">
    Python membership operators are used to check the membership of value inside a Python data structure. If the value is present in the data structure, then the resulting value is true otherwise it returns false. <br>
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>in</td>
      <td>It is evaluated to be true if the first operand is found in the second operand (list, tuple, or dictionary).</td>
    </tr>
    <tr>
      <td>not in</td>
      <td>It is evaluated to be true if the first operand is not found in the second operand (list, tuple, or dictionary).</td>
    </tr>
    </table>
  <p id="Head">Identity Operators</p>
  <p class="info">
    The identity operators are used to decide whether an element certain class or type.  <br>
  </p>
  <table>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>is</td>
      <td>It is evaluated to be true if the reference present at both sides point to the same object.</td>
    </tr>
    <tr>
      <td>is not</td>
      <td>It is evaluated to be true if the reference present at both sides do not point to the same object.</td>
    </tr>
    </table>
  <p id="Head">Operator Precedence</p>
  <p class="info">
    The precedence of the operators is essential to find out since it enables us to know which operator should be evaluated first. The precedence table of the operators in Python is given below.
  </p>
  <img style="margin: 20px 50px; width: 90%;" src="/static/mainpage/C_tut_img/precedance_django.png" alt="">
  `
});

Tut_C_13.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python If-else</p>
  <p class="info">
    Decision making is the most important aspect of almost all the programming languages. As the name implies, decision making allows us to run a particular block of code for a particular decision. Here, the decisions are made on the validity of the particular conditions. Condition checking is the backbone of decision making. <br>
    In python, decision making is performed by the following statements. <br>
    <table style="width: 90%;">
      <tr>
        <th>Statement</th>
        <th>Description</th>
      </tr><tr>
      </tr><tr>
        <td>If Statement </td>
        <td>The if statement is used to test a specific condition. If the condition is true, a block of code (if-block) will be executed.</td>
      </tr>
      <tr>
        <td>If - else Statement</td>
        <td>The if-else statement is similar to if statement except the fact that, it also provides the block of the code for the false case of the condition to be checked. If the condition provided in the if statement is false, then the else statement will be executed. </td>
      </tr>
      <tr>
        <td>Nested if Statement</td>
        <td>Nested if statements enable us to use if ? else statement inside an outer if statement. </td>
      </tr>
    </table>
  </p>
  <p id="Head">The if statement</p>
  <p class="info">
    The if statement is used to test a particular condition and if the condition is true, it executes a block of code known as if-block. The condition of if statement can be any valid logical expression which can be either evaluated to true or false.  <br>
    <img class="if-else-img" src="/static/mainpage/C_tut_img/if_django.png" alt="">
  </p>
<pre style="color: blue;">
  <span style="color: green;">Example :</span>  
  num = int(input("enter the number?"))  
  if num%2 == 0:  
      print("Number is even")  
</pre>
<p class="info">
  <span style="color: brown;">Output : <br>
    enter the number?10 <br>
    Number is even </span> <br>
</p>
  <p id="Head">The if-else statement</p>
  <p class="info">
    The if-else statement provides an else block combined with the if statement which is executed in the false case of the condition.  <br>
    If the condition is true, then the if-block is executed. Otherwise, the else-block is executed. <br>
    <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else_django.png" alt="">
  </p>
<pre style="color: blue;">
  <span style="color: green;">Example :</span>  
num = int(input("enter the number?"))  
if num%2 == 0:  
    print("Number is even...")  
else:  
    print("Number is odd...")   
</pre>
<p class="info">
  <span style="color: brown;">Output : <br>
    enter the number?10 <br>
Number is even </span> <br>
</p>
  <p id="Head">The elif statement</p>
  <p class="info">
    The elif statement enables us to check multiple conditions and execute the specific block of statements depending upon the true condition among them. We can have any number of elif statements in our program depending upon our need. However, using elif is optional.  <br>
    The elif statement works like an if-else-if ladder statement in C. It must be succeeded by an if statement.  <br>
    The syntax of the elif statement is given below.  <br>
    <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else-if_django.png" alt="">
  </p>
<pre style="color: blue;">
  <span style="color: green;">Example :</span>  
  number = int(input("Enter the number?"))  
  if number==10:  
      print("number is equals to 10")  
  elif number==50:  
      print("number is equal to 50") 
  elif number==100:  
      print("number is equal to 100")  
  else:  
      print("number is not equal to 10, 50 or 100")    
</pre>
<p class="info">
  <span style="color: brown;">Output : <br>
    Enter the number?15 <br>
number is not equal to 10, 50 or 100 </span> <br>
</p>`;
});

Tut_C_14.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Main Function</p>
  <p class="info">
    Main function is like the entry point of a program. However, Python interpreter runs the code right from the first line. The execution of the code starts from the starting line and goes line by line. It does not matter where the main function is present or it is present or not.  <br><br>
    Since there is no main() function in Python, when the command to run a Python program is given to the interpreter, the code that is at level 0 indentation is to be executed.  <br><br>
    However, before doing that, it will define a few special variables. __name__ is one such special variable. If the source file is executed as the main program, the interpreter sets the __name__ variable to have a value __main__. If this file is being imported from another module, __name__ will be set to the module’s name.  <br><br>
    __name__ is a built-in variable which evaluates to the name of the current module. <br><br>
    Example : 
  </p>
    <pre style="color: blue;">
      print("Hello")
      <span style="color: #444444;"># Defining main function</span> 
      def main():
          print("hey there")
      <span style="color: #444444;"># Using the special variable __name__</span>
      if __name__=="__main__":
          main() </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      Hello
      hey there</pre>`;
});

Tut_C_15.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Built-in Functions</p>
  <p class="info">
    The Python built-in functions are defined as the functions whose functionality is pre-defined in Python. The python interpreter has several functions that are always present for use. These functions are known as Built-in Functions. There are several built-in functions in Python which are listed below: <br> 
  </p>
  <p id="Head">Python abs() Function</p>
  <p class="info">The python abs() function is used to return absolute value of a number. It takes only one argument, a number whose absolute value is to be returned. The argument can be an integer and floating point number. If the argument is a complex number, then, abs() returns its magnitude.</p>
    <pre style="color: blue;">
      integer = -40  
      print('Absolute value of -40 is:', abs(integer))
      floating = -40.83  
      print('Absolute value of -40.83 is:', abs(floating))    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      Absolute value of -40 is: 40
      Absolute value of -40.83 is: 40.83</pre>
      <p id="Head">Python all() Function</p>
      <p class="info">The python all() function accepts an iterable object (such as list,dictionary etc.). It returns True if all items in passed iterable are true, otherwise it returns False. If the iterable object is empty, the all() function returns True.</p>
        <pre style="color: blue;">
          <span style="color: #444444;"># all values true </span> 
          k = [1, 3, 4, 5]  
          print(all(k))  
          <span style="color: #444444;"># all values false</span>  
          k = [0, False]  
          print(all(k))  
          <span style="color: #444444;"># one false value </span> 
          k = [1, 3, 4, 0]  
          print(all(k))  
          <span style="color: #444444;"># one true value  </span>
          k = [0, False, 5]  
          print(all(k))  
          <span style="color: #444444;"># empty iterable  </span>
          k = []  
          print(all(k))    </pre>
          <pre style="color: rgb(202, 15, 15);">
          Output:                       
          True
          False
          False
          False
          True</pre>
      <p id="Head">Python bin() Function</p>
      <p class="info">The python bin() function is used to return the binary representation of a specified integer. A result always starts with the prefix 0b.</p>
        <pre style="color: blue;">
          x =  10  
          y =  bin(x)  
          print (y)    </pre>
          <pre style="color: rgb(202, 15, 15);">
          Output:                       
          0b1010</pre>
      <p id="Head">Python exec() Function</p>
      <p class="info">The python exec() function is used for the dynamic execution of Python program which can either be a string or object code and it accepts large blocks of code, unlike the eval() function which only accepts a single expression.</p>
        <pre style="color: blue;">
          x = 5  
          exec('print(x==5)')  
          exec('print(x+4)')    </pre>
          <pre style="color: rgb(202, 15, 15);">
          Output:                       
          True
          9</pre>
  <p id="Head">Python sum() Function</p>
  <p class="info">As the name says, python sum() function is used to get the sum of numbers of an iterable, i.e. list.</p>
    <pre style="color: blue;">
      s = sum([1, 2,2 ])  
      print(s)           
      s = sum([1, 2, 2], 10)  
      print(s)    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      5
      15</pre>
  <p id="Head">Python any() Function</p>
  <p class="info">The python any() function returns True if any item in an iterable is true, otherwise it returns False.</p>
    <pre style="color: blue;">
      l = [4, 3, 2, 0]                              
      print(any(l))                                            
      l = [0, False]  
      print(any(l))           
      l = [0, False, 5]  
      print(any(l))           
      l = []  
      print(any(l))     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      True
      False
      True
      False</pre>
  <p id="Head">Python eval() Function</p>
  <p class="info">The python eval() function parses the expression passed to it and runs python expression(code) within the program.</p>
    <pre style="color: blue;">
      x = 5  
      print(eval('x + 1'))    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      6</pre>
  <p id="Head">Python len() Function</p>
  <p class="info">The python len() function is used to return the length (the number of items) of an object.</p>
    <pre style="color: blue;">
      strA = 'Python'  
      print(len(strA))  

      listA = ['Python', 'C', 'C++', 'Java']  
      print(len(listA)) 

      dictA = {  
        'name': 'Phill', 'university': 'GTU', 'ID': 1107  
      }  
      print(len(dictA))    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      6
      4
      3</pre>
  <p id="Head">Python list() Function</p>
  <p class="info">The python list() creates a list in python.</p>
    <pre style="color: blue;">
      Tuple = (1,2,3,4,5)  
      print(list(Tuple))      </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      [1,2,3,4,5]</pre>
  <p id="Head">Python map() Function</p>
  <p class="info">The python map() function is used to return a list of results after applying a given function to each item of an iterable(list, tuple etc.)</p>
    <pre style="color: blue;">
      def calculateAddition(n):  
        return n+n  
      numbers = (1, 2, 3, 4)  
      result = map(calculateAddition, numbers)  
      print(result)  
      <span style="color: #444444;"># converting map object to set</span>   
      numbersAddition = set(result)  
      print(numbersAddition)    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      < map object at 0x7fb04a6bec18 >
      {8, 2, 4, 6}</pre>
  <p id="Head">Python open() Function</p>
  <p class="info">The python open() function opens the file and returns a corresponding file object. <br>
  <span style="color: blue;">open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)  <br></span>
  <span style="color: green;">Parameters</span>
  ~ &nbsp;file: It is a path like object giving the pathname of the file to be opened. <br>
  ~ &nbsp;mode (optional): It specifies the mode in which the file is opened. If not provided, it defaults to 'r' which means open for reading in text mode. <br>
  ~ &nbsp;buffering (optional): It is used to set buffering policy. <br>
  ~ &nbsp;encoding (optional): It is a name of the encoding to encode or decode the file. <br>
  ~ &nbsp;errors (optional): A string that specify how to handle encoding/decoding errors. <br>
  ~ &nbsp;newline (optional): It controls how newlines mode works (available values: None, ' ', '\n', 'r', and '\r\n' <br>
  ~ &nbsp;closefd (optional): It must be True (default) if given otherwise an exception will be raised. <br>
  ~ &nbsp;opener (optional): a custom opener; must return an open file descriptor.</p>
    <pre style="color: blue;">
      <span style="color: #444444;"># file opens for rea</span>
      f = open("path_to_file", mode='r')  
      <span style="color: #444444;"># file opens for write</span>
      f = open("path_to_file", mode = 'w')  
      <span style="color: #444444;"># file opens for writing to the end</span>
      f = open("path_to_file", mode = 'a')      </pre>
  <p id="Head">Python pow() Function</p>
  <p class="info">Python pow() function is used to compute the powers of a number. It returns x to the power of y modulus z if a third argument(z) is present, i.e. (x, y) % z.</p>
    <pre style="color: blue;">
      <span style="color: #444444;"># positive x, positive y (x**y)</span>
      print(pow(4, 2))  
      <span style="color: #444444;"># negative x, positive y</span>
      print(pow(-4, 2))  
      <span style="color: #444444;"># positive x, negative y (x**-y)</span>
      print(pow(4, -2))  
      <span style="color: #444444;"># negative x, negative y</span>
      print(pow(-4, -2))     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      16
      16
      0.0625
      0.0625</pre>
  <p id="Head">Python reversed() Function</p>
  <p class="info">Python reversed() function returns the reversed iterator of the given sequence.</p>
    <pre style="color: blue;">
      Tuple = ('J', 'a', 'v', 'a')  
      print(list(reversed(Tuple)))     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      ['a', 'v', 'a', 'J']</pre>
  <p id="Head">Python range() Function</p>
  <p class="info">Python range() function returns an immutable sequence of numbers starting from 0, increments by 1 and ends at a specified number.</p>
    <pre style="color: blue;">
      print(list(range(1,7 )))     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      [1, 2, 3, 4, 5, 6]</pre>
  <p id="Head">Python round() Function</p>
  <p class="info">Python round() function rounds off the digits of a number and returns the floating-point number.</p>
    <pre style="color: blue;">
      print(round(10.8))    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      11</pre>
  <p id="Head">Python min() Function</p>
  <p class="info">Python min() function is used to get the smallest element from the collection. This function takes two arguments, first is a collection of elements and second is key and returns the smallest element from the collection.</p>
    <pre style="color: blue;">
      small = min(1000.25,2025.35,5625.36,10052.50)  
      print(small) </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      1000.25</pre>
  <p id="Head">Python slice() Function</p>
  <p class="info">Python slice() function is used to get a slice of elements from the collection of elements. Python provides two overloaded slice functions. The first function takes a single argument while the second function takes three arguments and returns a slice object. This slice object can be used to get a subsection of the collection. For example, if we want to get first two elements from the ten element?s list, here slice can be used. The signature of this function is given below.</p>
    <pre style="color: blue;">
      tup = (45,68,955,1214,41,558,636,66)  
      slic = slice(0,10,3)  
      slic2 = slice(-1,0,-3)
      str2 = tup[slic]  
      str3 = tup[slic2] 
      print(str2)  
      print(str3)     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      (45, 1214, 636)
      (66, 41, 68)</pre>
  <p id="Head">Python sorted() Function</p>
  <p class="info">Python sorted() function is used to sort elements. By default, it sorts elements in ascending order but can be sorted descending also. It takes four arguments and returns collection in sorted order. In the case of a dictionary, it sorts only keys, not values. The signature of the function is given below.</p>
    <pre style="color: blue;">
      li = [2003,56,98,659,622,1002,3652]  
      tupl = (232,2500,3698,5264,2578,21)  
      dic = {3: 'Three',4:'Four',1:'One',2:'Two'} 
      lisorted  = sorted(li) 
      tupsorted = sorted(tupl)   
      dicsorted = sorted(dic) 
      print(lisorted)  
      print(tupsorted)  
      print(dicsorted)     </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      [56, 98, 622, 659, 1002, 2003, 3652]
      [21, 232, 2500, 2578, 3698, 5264]
      [1, 2, 3, 4]</pre>
  <p id="Head">Python input() Function</p>
  <p class="info">Python input() function is used to get input from the user. It prompts for the user input and reads a line. After reading data, it converts it into a string and returns that. It throws an error EOFError if EOF is read.</p>
    <pre style="color: blue;">
      val = input("Enter a value: ")
      print("You entered:",val)      </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      Enter a value: 45
      You entered: 45</pre>
  <p id="Head">Python int() Function</p>
  <p class="info">Python int() function is used to get the integer value. It returns an expression converted into an integer number. If the argument is a floating point, the conversion truncates the number. If the argument is outside the integer range, It converts the number into long type. <br>
    If the number is not a number or if a base is given, the number must be a string.</p>
    <pre style="color: blue;">
      val = int(10) 
      val2 = int(10.52) 
      val3 = int('10') 
      print("integer values :",val, val2, val3) </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      integer values : 10 10 10</pre>
  <p id="Head">Python tuple() Function</p>
  <p class="info">Python tuple() function is used to create a tuple object.</p>
    <pre style="color: blue;">
      t2 = tuple([1, 6, 9])  
      print('t2=', t2)  </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      t2= (1, 6, 9)</pre>
  <p id="Head">Python set() Function</p>
  <p class="info">In python, a set is a built-in class, and this function is a constructor of this class. It is used to create a new set using elements passed during the call. It takes iterable as an argument and returns a new set object. The constructor syntax is given below.</p>
    <pre style="color: blue;">
      result = set(['12','13','15'])  
      result2 = set(('i','n','n','o','v','a','t','i','v','e'))  
      result3 = set({1:'One',2:'Two',3:'Three'})  
      print(result)  
      print(result2)  
      print(result3)    </pre>
      <pre style="color: rgb(202, 15, 15);">
      Output:                       
      {'15', '13', '12'}
      {'o', 'a', 't', 'n', 'e', 'i', 'v'}
      {1, 2, 3}</pre>`;
});

Tut_C_16.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Lambda Functions</p>
  <p class="info">
    Python Lambda function is known as the anonymous function that is defined without a name. Python allows us to not declare the function in the standard manner, i.e., by using the def keyword. Rather, the anonymous functions are declared by using the lambda keyword. However, Lambda functions can accept any number of arguments, but they can return only one value in the form of expression. <br>
    The anonymous function contains a small piece of code. It simulates inline functions of C and C++, but it is not exactly an inline function.  <br>
    The syntax to define an anonymous function is given below.  <br>
    <span style="color: blue;">lambda arguments: expression       </span> <br> 
  </p>
  <pre style="color: blue;">
    def table(n):    
        return lambda a:a*n  
    n = int(input("Enter the number:"))
    b = table(n)
    for i in range(1,11):    
        print(n,"X",i,"=",b(i)) </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Enter the number:10
    10 X 1 = 10 
    10 X 2 = 20
    10 X 3 = 30
    10 X 4 = 40
    10 X 5 = 50
    10 X 6 = 60
    10 X 7 = 70
    10 X 8 = 80
    10 X 9 = 90
    10 X 10 = 100</pre>`;
});

Tut_C_17.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python File Handling</p>
  <p class="info">
    Sometimes, it is not enough to only display the data on the console. The data to be displayed may be very large, and only a limited amount of data can be displayed on the console since the memory is volatile, it is impossible to recover the programmatically generated data again and again. <br>
    The file handling plays an important role when the data needs to be stored permanently into the file. A file is a named location on disk to store related information. We can access the stored information (non-volatile) after the program termination.  <br>
    The file-handling implementation is slightly lengthy or complicated in the other programming language, but it is easier and shorter in Python.  <br>
    In Python, files are treated in two modes as text or binary. The file may be in the text or binary format, and each line of a file is ended with the special character.  <br>
    Hence, a file operation can be done in the following order.  <br>
    1. &nbsp;Open a file  <br>
    2. &nbsp;Read or write - Performing operation  <br>
    3. &nbsp;Close the file  <br> 
  </p>
  <p id="Head">Opening a file</p>
  <p class="info">
    Python provides an open() function that accepts two arguments, file name and access mode in which the file is accessed. The function returns a file object which can be used to perform various operations like reading, writing, etc. <br>
Syntax: <br>
    <span style="color: blue;">file object = open(< file-name >, < access-mode >, < buffering >) <br> </span>
      The files can be accessed using various modes like read, write, or append. The following are the details about the access mode to open a file. <br>
      <table>
        <tr>
        <th>SN</th>
        <th>Access mode</th>
        <th>Description</th>
        </tr>
        <tr>
          <td>1</td>
          <td>r</td>
          <td>It opens the file to read-only mode. The file pointer exists at the beginning. The file is by default open in this mode if no access mode is passed.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>rb</td>
          <td>It opens the file to read-only in binary format. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>r+</td>
          <td>It opens the file to read and write both. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>4</td>
          <td>rb+</td>
          <td>It opens the file to read and write both in binary format. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>5</td>
          <td>w</td>
          <td>It opens the file to write only. It overwrites the file if previously exists or creates a new one if no file exists with the same name. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>6</td>
          <td>wb</td>
          <td>It opens the file to write only in binary format. It overwrites the file if it exists previously or creates a new one if no file exists. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>7</td>
          <td>w+</td>
          <td>It opens the file to write and read both. It is different from r+ in the sense that it overwrites the previous file if one exists whereas r+ doesn't overwrite the previously written file. It creates a new file if no file exists. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>8</td>
          <td>wb+</td>
          <td>It opens the file to write and read both in binary format. The file pointer exists at the beginning of the file.</td>
        </tr>
        <tr>
          <td>9</td>
          <td>a</td>
          <td>It opens the file in the append mode. The file pointer exists at the end of the previously written file if exists any. It creates a new file if no file exists with the same name.</td>
        </tr>
        <tr>
          <td>10</td>
          <td>ab</td>
          <td>It opens the file in the append mode in binary format. The pointer exists at the end of the previously written file. It creates a new file in binary format if no file exists with the same name.</td>
        </tr>
        <tr>
          <td>11</td>
          <td>a+</td>
          <td>It opens a file to append and read both. The file pointer remains at the end of the file if a file exists. It creates a new file if no file exists with the same name.</td>
        </tr>
        <tr>
          <td>12</td>
          <td>ab+</td>
          <td>It opens a file to append and read both in binary format. The file pointer remains at the end of the file.</td>
        </tr>
      </table>
  </p>
  <p id="Head">The close() method</p>
  <p class="info">
    Once all the operations are done on the file, we must close it through our Python script using the close() method. Any unwritten information gets destroyed once the close() method is called on a file object.  <br>
    We can perform any operation on the file externally using the file system which is the currently opened in Python; hence it is good practice to close the file once all the operations are done.  <br>
  </p>
  <pre style="color: blue;">
    fileptr = open("file.txt","r")    
    if fileptr:    
        print("file is opened successfully")   
    fileptr.close()   </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    file is opened successfully</pre>
  `;
});

Tut_C_18.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Exception</p>
  <p class="info">
    An exception can be defined as an unusual condition in a program resulting in the interruption in the flow of the program.  <br>
    Whenever an exception occurs, the program stops the execution, and thus the further code is not executed. Therefore, an exception is the run-time errors that are unable to handle to Python script. An exception is a Python object that represents an error  <br>
    Python provides a way to handle the exception so that the code can be executed without any interruption. If we do not handle the exception, the interpreter doesn't execute all the code that exists after the exception.  <br>
    Python has many built-in exceptions that enable our program to run without interruption and give the output. These exceptions are given below: <br> 
  </p>
  <p id="Head">The try-expect statement</p>
  <p class="info">
    If the Python program contains suspicious code that may throw the exception, we must place that code in the try block. The try block must be followed with the except statement, which contains a block of code that will be executed if there is some exception in the try block. <br>
Syntax: <br>
    <span style="color: blue;">
      try:     <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #444444;">#block of code</span>     <br> 
      except Exception1:     <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #444444;">#block of code</span>      <br>       
      except Exception2:     <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #444444;">#block of code</span>      <br>       
      <span style="color: #444444;">#other code <br></span> </span>
      Example:
  </p>
  <pre style="color: blue;">
    try:  
        a = int(input("Enter a:"))    
        b = int(input("Enter b:"))    
        c = a/b  
    except:  
        print("Can't divide with zero")    </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Enter a:10
    Enter b:0
    Can't divide with zero</pre>
    <p id="Head">The except statement using with exception variable</p>
  <p class="info">
    We can use the exception variable with the except statement. It is used by using the as keyword. this object will return the cause of the exception. Consider the following example:  <br>
      Example:
  </p>
  <pre style="color: blue;">
    try:    
        a = int(input("Enter a:"))    
        b = int(input("Enter b:"))    
        c = a/b  
        print("a/b = %d"%c)     
    except Exception as e:    
        print("can't divide by zero")    
        print(e)  
    else:    
        print("Hi I am else block")        </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Enter a:10
    Enter b:0
    can't divide by zero
    division by zero</pre>`;
});

Tut_C_19.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Random module</p>
  <p class="info">
    The Python random module functions depend on a pseudo-random number generator function random(), which generates the float number between 0.0 and 1.0.  <br>
    There are different types of functions used in a random module which is given below: <br> 
    <span style="color: green;">random.random()</span> <br>
    This function generates a random float number between 0.0 and 1.0. <br>
    <span style="color: green;">random.randint()</span> <br>
    This function returns a random integer between the specified integers. <br>
    <span style="color: green;">random.choice()</span> <br>
    This function returns a randomly selected element from a non-empty sequence. <br>
    <span style="color: green;">random.randrange(beg,end,step)</span> <br>
    This function is used to generate a number within the range specified in its argument. It accepts three arguments, beginning number, last number, and step, which is used to skip a number in the range. Consider the following example. <br>
  </p>
  <pre style="color: blue;">
    import random
    print ("The random number from list is : ",end="")  
    print (random.choice([50, 41, 84, 40, 31]))
    print ("A random number from range is : ",end="")  
    print (random.randrange(100, 500, 10))    </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    The random number from list is : 84
    A random number from range is : 290</pre>`;
});

Tut_C_20.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Sending Email using SMTP</p>
  <p class="info">
    Simple Mail Transfer Protocol (SMTP) is used as a protocol to handle the email transfer using Python. It is used to route emails between email servers. It is an application layer protocol which allows to users to send mail to another. The receiver retrieves email using the protocols POP(Post Office Protocol) and IMAP(Internet Message Access Protocol). <br>
    <img style="margin-left: 17%; " src="/static/mainpage/Python_tut_img/python-sending-email_django.png" alt=""> <br><br>
    <span style="color: green;">random.randrange(beg,end,step)</span> <br>
    When the server listens for the TCP connection from a client, it initiates a connection on port 587. <br>
    Python provides a smtplib module, which defines an the SMTP client session object used to send emails to an internet machine. For this purpose, we have to import the smtplib module using the import statement. <br>
    The SMTP object is used for the email transfer. The following syntax is used to create the smtplib object. <br>
    <span style="color: blue;">import smtplib     <br>
      smtpObj = smtplib.SMTP(host, port, local_hostname) </span>  <br>
      It accepts the following parameters.  <br>
      ~ &nbsp;host: It is the hostname of the machine which is running your SMTP server. Here, we can specify the IP address of the server like (https://www.javatpoint.com) or localhost. It is an optional parameter.  <br>
      ~ &nbsp;port: It is the port number on which the host machine is listening to the SMTP connections. It is 25 by default.  <br>
      ~ &nbsp;local_hostname: If the SMTP server is running on your local machine, we can mention the hostname of the local machine.  <br>
      ~ &nbsp;The sendmail() method of the SMTP object is used to send the mail to the desired machine. The syntax is given below.  <br>
      <span style="color: blue;">smtpObj.sendmail(sender, receiver, message)  </span>  <br>
  </p>
  <pre style="color: blue;">
    import smtplib    
    sender_mail = 'sender@fromdomain.com'    
    receivers_mail = ['reciever@todomain.com']
    message = "This is a test email......"
    try:    
      password = input('Enter the password');    
      smtpObj = smtplib.SMTP('gmail.com',587)    
      smtpobj.login(sender_mail,password)    
      smtpObj.sendmail(sender_mail, receivers_mail, message)    
      print("Successfully sent email")    
    except Exception:    
      print("Error: unable to send email")    </pre>`;
});

Tut_C_21.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python String</p>
  <p class="info">
    Till now, we have discussed numbers as the standard data-types in Python. In this section of the tutorial, we will discuss the most popular data type in Python, i.e., string. <br>
    Python string is the collection of the characters surrounded by single quotes, double quotes, or triple quotes. The computer does not understand the characters; internally, it stores manipulated character as the combination of the 0's and 1's. <br>
    Each character is encoded in the ASCII or Unicode character. So we can say that Python strings are also called the collection of Unicode characters. <br>
    In Python, strings can be created by enclosing the character or the sequence of characters in the quotes. Python allows us to use single quotes, double quotes, or triple quotes to create the string. <br>
    Consider the following example in Python to create a string. <br>
    <span style="color: blue;">str = "Hi Python !" </span>  <br>
    Here, if we check the type of the variable str using a Python script <br>
  </p>
  <p id="Head">Strings indexing and splitting</p>
  <p class="info">
    Like other languages, the indexing of the Python strings starts from 0. For example, The string "HELLO" is indexed as given in the below figure.  <br>
    Consider the following example: 
  </p>
  <pre style="color: blue;">
    str = "HELLO"  
    print(str[0])  
    print(str[1])  
    print(str[2])  
    print(str[3])  
    print(str[4]) </pre>
        <pre style="color: rgb(202, 15, 15);">
    Output:                       
    H
    E
    L
    L
    O</pre>
    <p class="info">
      As shown in Python, the slice operator [] is used to access the individual characters of the string. However, we can use the : (colon) operator in Python to access the substring from the given string. Consider the following example. <br>
      Here, we must notice that the upper range given in the slice operator is always exclusive i.e., if str = 'HELLO' is given, then str[1:3] will always include str[1] = 'E', str[2] = 'L' and nothing else.  <br>
      Consider the following example:  <br>
      <pre style="color: blue;">
        <span style="color: rgb(73, 71, 71);"># Given String</span>
        str = "INNOVATIVE"  
        <span style="color: rgb(73, 71, 71);"># Start Oth index to end</span>  
        print(str[0:])  
        <span style="color: rgb(73, 71, 71);"># Starts 1th index to 4th index</span>  
        print(str[1:5])  
        <span style="color: rgb(73, 71, 71);"># Starts 2nd index to 3rd index</span>  
        print(str[2:4])  
        <span style="color: rgb(73, 71, 71);"># Starts 0th to 2nd index</span>  
        print(str[:3])  
        <span style="color: rgb(73, 71, 71);">#Starts 4th to 6th index</span>  
        print(str[4:7])   </pre>
            <pre style="color: rgb(202, 15, 15);">
        Output:                       
        INNOVATIVE
        NNOV
        NO
        INN
        VAT</pre>
    </p>
    <p id="Head">String Operators</p>
    <table style="width: 90%;">
      <tr>
        <th>Operator</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>+</td>
        <td>It is known as concatenation operator used to join the strings given either side of the operator. </td>
      </tr>
      <tr>
        <td>*</td>
        <td>It is known as repetition operator. It concatenates the multiple copies of the same string.  </td>
      </tr>
      <tr>
        <td>[]</td>
        <td>It is known as slice operator. It is used to access the sub-strings of a particular string. </td>
      </tr>
      <tr>
        <td>[:]</td>
        <td>It is known as range slice operator. It is used to access the characters from the specified range. </td>
      </tr>
      <tr>
        <td>in</td>
        <td>It is known as membership operator. It returns if a particular sub-string is present in the specified string. </td>
      </tr>
      <tr>
        <td>not in </td>
        <td>It is also a membership operator and does the exact reverse of in. It returns true if a particular substring is not present in the specified string. </td>
      </tr>
      <tr>
        <td>r/R</td>
        <td>It is used to specify the raw string. Raw strings are used in the cases where we need to print the actual meaning of escape characters such as "C://python". To define any string as a raw string, the character r or R is followed by the string. </td>
      </tr>
      <tr>
        <td>%</td>
        <td>It is used to perform string formatting. It makes use of the format specifiers used in C programming like %d or %f to map their values in python. We will discuss how formatting is done in python. </td>
      </tr>
    </table>
    <p class="info">Example:</p> 
    <pre style="color: blue;">
      str = "Hello"     
      str1 = " world"    
      print(str*3)     
      print(str+str1)    
      print(str[4])             
      print(str[2:4]);                 
      print('w' in str)   
      print('wo' not in str1)     
      print(r'C://python37')    
      print("The string str : %s"%(str))  </pre>
          <pre style="color: rgb(202, 15, 15);">
      Output:                       
      HelloHelloHello
      Hello world
      o
      ll
      False
      False
      C://python37
      The string str : Hello</pre>`;
});

Tut_C_22.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python List</p>
  <p class="info">
    A list in Python is used to store the sequence of various types of data. Python lists are mutable type its mean we can modify its element after it created. However, Python consists of six data-types that are capable to store the sequences, but the most common and reliable type is the list.   <br>
    A list can be defined as a collection of values or items of different types. The items in the list are separated with the comma (,) and enclosed with the square brackets [].   <br>
    A list can be define as below   <br>
    <span style="color: blue;">L1 = ["John", 102, "USA"]    <br>
      L2 = [1, 2, 3, 4, 5, 6]  </span>  <br>
  </p>
  <p id="Head">Characteristics of Lists</p>
  <p class="info">
    The list has the following characteristics:  <br>
    > &nbsp; The lists are ordered.  <br>
    > &nbsp; The element of the list can access by index.  <br>
    > &nbsp; The lists are the mutable type.  <br>
    > &nbsp; The lists are mutable types.  <br>
    > &nbsp; A list can store the number of various elements.  <br>
    Example:
  </p> <pre style="color: blue;">
    emp = ["John", 102, "USA"]     
    Dep1 = ["CS",10]  
    Dep2 = ["IT",11]    
    HOD_CS = [10,"Mr. Holding"]    
    HOD_IT = [11, "Mr. Bewon"]    
    print("printing employee data...")    
    print("Name : %s, ID: %d, Country: %s"%(emp[0],emp[1],emp[2]))    
    print("printing departments...")   
    print("Department 1:\\nName: %s, ID: %d\\nDepartment 2:\\nName: %s, ID: %s"%(Dep1[0],Dep2[1],Dep2[0],Dep2[1]))    
    print("HOD Details ....")    
    print("CS HOD Name: %s, Id: %d"%(HOD_CS[1],HOD_CS[0]))    
    print("IT HOD Name: %s, Id: %d"%(HOD_IT[1],HOD_IT[0]))    
    print(type(emp),type(Dep1),type(Dep2),type(HOD_CS),type(HOD_IT))  </pre>
        <pre style="color: rgb(202, 15, 15);">
    Output:                       
    printing employee data...
    Name : John, ID: 102, Country: USA
    printing departments...
    Department 1:
    Name: CS, ID: 11
    Department 2:
    Name: IT, ID: 11
    HOD Details ....
    CS HOD Name: Mr. Holding, Id: 10
    IT HOD Name: Mr. Bewon, Id: 11
    < class 'list' > < class 'list' > < class 'list' > < class 'list' > < class 'list' ></pre> <p class="info">
    Example:
  </p> <pre style="color: blue;">
    <span style="color: rgb(78, 78, 78);"># Slicing the elements</span>  
    print(list[0:6])  
    <span style="color: rgb(78, 78, 78);"># By default the index value is 0 so its starts from the 0th element and go for index -1.</span>  
    print(list[:])  
    print(list[2:5])  
    print(list[1:6:2])   </pre>
        <pre style="color: rgb(202, 15, 15);">
    Output:                       
    [1, 2, 3, 4, 5, 6]
    [1, 2, 3, 4, 5, 6, 7]
    [3, 4, 5]
    [2, 4, 6]</pre>`;
});

Tut_C_23.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Tuple</p>
  <p class="info">
    Python Tuple is used to store the sequence of immutable Python objects. The tuple is similar to lists since the value of the items stored in the list can be changed, whereas the tuple is immutable, and the value of the items stored in the tuple cannot be changed.   <br>
    Creating a tuple with single element is slightly different. We will need to put comma after the element to declare the tuple.  <br>
    Let it clear with an example   <br>
    <span style="color: blue;">tup1 = ("JavaTpoint")  <br>
      print(type(tup1))  <br>
      #Creating a tuple with single element   <br>
      tup2 = ("JavaTpoint",)  <br>
      print(type(tup2))    </span>  <br>
      <span style="color: rgb(202, 15, 15);">Output : <br>
        < class 'str' > <br>
        < class 'tuple' ><br></span>
  </p>
  <p id="Head">Tuple indexing and slicing</p>
  <p class="info">
    A tuple is indexed in the same way as the lists. The items in the tuple can be accessed by using their specific index value.  <br>
    Example:
  </p> <pre style="color: blue;">
    tup = (1,2,3,4,5,6,7)  
    print(tup[0])  
    print(tup[1])  
    print(tup[2]) 
    tuple = (1,2,3,4,5,6,7)   
    print(tuple[1:])    
    print(tuple[:4])   
    print(tuple[1:5])    
    print(tuple[0:6:2])  </pre>
        <pre style="color: rgb(202, 15, 15);">
    Output:                       
    1
    2
    3
    (2, 3, 4, 5, 6, 7)
    (1, 2, 3, 4)
    (1, 2, 3, 4)
    (1, 3, 5)</pre>
  <p id="Head">Negative Indexing</p>
  <p class="info">
    The tuple element can also access by using negative indexing. The index of -1 denotes the rightmost element and -2 to the second last item and so on.  <br>
    The elements from left to right are traversed using the negative indexing. Consider the following example:  <br>
    Example:
  </p> <pre style="color: blue;">
    tuple1 = (1, 2, 3, 4, 5)    
    print(tuple1[-1])    
    print(tuple1[-4])    
    print(tuple1[-3:-1])  
    print(tuple1[:-1])  
    print(tuple1[-2:])   </pre>
        <pre style="color: rgb(202, 15, 15);">
    Output:                       
    5
    2
    (3, 4)
    (1, 2, 3, 4)
    (4, 5)  </pre>
    <p id="Head">Basic Tuple Operations</p>
    <p class="info">
      Let's say Tuple t = (1, 2, 3, 4, 5) and Tuple t1 = (6, 7, 8, 9) are declared.
    </p>
    <table style="width: 90%;">
      <tr>
          <th>Operator</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr>
          <td>Repetition</td>
          <td>The repetition operator enables the tuple elements to be repeated multiple times.</td>
          <td><pre>T1*2 = (1, 2, 3, 4, 5, 1, 2, 3, 4, 5)</pre></td>
      </tr>	
      <tr>
          <td>Concatenation</td>
          <td>It concatenates the tuple mentioned on either side of the operator.</td>
          <td><pre>T1+T2 = (1, 2, 3, 4, 5, 6, 7, 8, 9)</pre></td>
      </tr>
      <tr>
          <td>Membership</td>
          <td>It returns true if a particular item exists in the tuple otherwise false</td>
          <td><pre>print (2 in T1) prints True.</pre></td>
      </tr>
      <tr>
          <td>Iteration</td>
          <td>The for loop is used to iterate over the tuple elements.</td>
          <td><pre>for i in T1: 
          print(i)</pre>
      <strong>Output</strong>
      <pre>
      1
      2
      3
      4
      5</pre></td>
      </tr>
      <tr>
          <td>Length</td>
          <td>It is used to get the length of the tuple.</td>
          <td><pre>len(T1) = 5</pre></td>
      </tr>
    </table>
    <p id="Head">Python inbuilt Tuple functions</p>
    <table style="width: 90%;">
      <tr>
          <th>SN</th>
        <th>Function</th>
        <th>Description</th>
      </tr>
      <tr>
          <td>1</td>
          <td>cmp(tuple1, tuple2)</td>
          <td>It compares two tuples and returns true if tuple1 is greater than tuple2 otherwise false.</td>
      </tr>	
      <tr>
          <td>2</td>
          <td>len(tuple)</td>
          <td>It calculates the length of the tuple.</td>
      </tr>
      <tr>
          <td>3</td>
          <td>max(tuple)</td>
          <td>It returns the maximum element of the tuple</td>
      </tr>
      
          <tr><td>4</td>
          <td>min(tuple)</td>
          <td>It returns the minimum element of the tuple.</td>
      </tr><tr>
      </tr>
          <tr><td>5</td>
          <td>tuple(seq)</td>
          <td>It converts the specified sequence to the tuple.</td>
      </tr>
    </table>`;
});

Tut_C_24.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python Set</p>
  <p class="info">
    A Python set is the collection of the unordered items. Each element in the set must be unique, immutable, and the sets remove the duplicate elements. Sets are mutable which means we can modify it after its creation.  <br>
    Unlike other collections in Python, there is no index attached to the elements of the set, i.e., we cannot directly access any element of the set by the index. However, we can print them all together, or we can get the list of elements by looping through the set.  <br>
    Example   <br>
    <span style="color: blue;">
      Days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}      <br>
      print(Days)      <br>
      print(type(Days))      <br>
      print("looping through the set elements ... ")      <br>
      for i in Days:      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)    <br>
      <span style="color: #444444;"># Same as {"a", "b", "c"}</span>  <br>
      myset = set(["a", "b", "c"])  <br>
      print(myset)  <br>
      <span style="color: #444444;"># Adding element to the set</span>  <br>
      myset.add("d")  <br>
      print(myset) </span>  <br>
      <span style="color: rgb(202, 15, 15);">Output : <br>
        {'Friday', 'Tuesday', 'Monday', 'Saturday', 'Thursday', 'Sunday', 'Wednesday'}  <br>
        < class 'set' >  <br>
        looping through the set elements ...   <br>
        Friday  <br>
        Tuesday  <br>
        Monday  <br>
        Saturday  <br>
        Thursday  <br>
        Sunday  <br>
        Wednesday  <br>
        {'c', 'b', 'a'}  <br>
        {'d', 'c', 'b', 'a'}<br></span>
  </p>
  <p id="Head">Python Built-in set methods</p>
  <p class="info">
    Python contains the following methods to be used with the sets. <br>
  </p>
  <table style="width: 90%;">
    <tr>
      <th>SN</th>
      <th>Method </th>
      <th>Description</th>
    </tr>
    <tr>
      <td>1</td>
      <td>add(item)</td>
      <td>It adds an item to the set. It has no effect if the item is already present in the set. </td>
    </tr>
    <tr>
      <td>2</td>
      <td>clear()</td>
      <td>It deletes all the items from the set. </td>
    </tr>
    <tr>
      <td>3</td>
      <td>copy()</td>
      <td>It returns a shallow copy of the set. </td>
    </tr>
    <tr>
      <td>4</td>
      <td>difference_update(....)</td>
      <td>It modifies this set by removing all the items that are also present in the specified sets. </td>
    </tr>
    <tr>
      <td>5</td>
      <td>discard(item)</td>
      <td>It removes the specified item from the set. </td>
    </tr>
    <tr>
      <td>6</td>
      <td>intersection()</td>
      <td>It returns a new set that contains only the common elements of both the sets. (all the sets if more than two are specified). </td>
    </tr>
    <tr>
      <td>7</td>
      <td>intersection_update(....)</td>
      <td>It removes the items from the original set that are not present in both the sets (all the sets if more than one are specified).</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Isdisjoint(....)</td>
      <td>Return True if two sets have a null intersection.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Issubset(....)</td>
      <td>Report whether another set contains this set.</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Issuperset(....)</td>
      <td>Report whether this set contains another set.</td>
    </tr>
    <tr>
      <td>11</td>
      <td>pop()</td>
      <td>Remove and return an arbitrary set element that is the last element of the set. Raises KeyError if the set is empty.</td>
    </tr>
    <tr>
      <td>12</td>
      <td>remove(item)</td>
      <td>Remove an element from a set; it must be a member.  If the element is not a member, raise a KeyError.</td>
    </tr>
    <tr>
      <td>13</td>
      <td>symmetric_difference(....)</td>
      <td>Remove an element from a set; it must be a member. If the element is not a member, raise a KeyError.</td>
    </tr>
    <tr>
      <td>14</td>
      <td>symmetric_difference_update(....)</td>
      <td>Update a set with the symmetric difference of itself and another.</td>
    </tr>
    <tr>
      <td>15</td>
      <td>union(....)</td>
      <td>Return the union of sets as a new set.<br>(i.e. all elements that are in either set.)</td>
    </tr>
    <tr>
      <td>16</td>
      <td>update()</td>
      <td>Update a set with the union of itself and others.</td>
    </tr>
    <tr>
      <td>17</td>
      <td>difference()</td>
      <td>Returns a set containing the difference between two or more sets</td>
    </tr>
  </table>`;
});

Tut_C_30.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python break statement</p>
  <p class="info">
    The break is a keyword in python which is used to bring the program control out of the loop. The break statement breaks the loops one by one, i.e., in the case of nested loops, it breaks the inner loop first and then proceeds to outer loops. In other words, we can say that break is used to abort the current execution of the program and the control goes to the next line after the loop.  <br>
    The break is commonly used in the cases where we need to break the loop for a given condition.  <br>
    The syntax of the break is given below.  <br>
    <span style="color: rgb(85, 83, 83);">#loop statements </span> <br>
    break <br>
    Example:
    <pre style="color: blue;">
      str = "python"  
      for i in str:  
          if i == 'o':  
              break  
          print(i);  </pre>
          <pre style="color: rgb(202, 15, 15);">
      Output:                       
      P
      y
      t
      h </pre>
  </p>
  <br>
  <p id="Head">Python continue Statement</p>
  <p class="info">
    The continue statement in Python is used to bring the program control to the beginning of the loop. The continue statement skips the remaining lines of code inside the loop and start with the next iteration. It is mainly used for a particular condition inside the loop so that we can skip some specific code for a particular condition.The continue statement in Python is used to bring the program control to the beginning of the loop. The continue statement skips the remaining lines of code inside the loop and start with the next iteration. It is mainly used for a particular condition inside the loop so that we can skip some specific code for a particular condition.  <br>
    <span style="color: rgb(85, 83, 83);">#loop statements </span> <br>
    continue <br>
    <span style="color: rgb(85, 83, 83);">#the code to be skipped  </span> <br>
    Example:
    <pre style="color: blue;">
      i = 0                     
      while(i < 10):                
        i = i+1  
        if(i == 5):  
            continue  
        print(i)  </pre>
          <pre style="color: rgb(202, 15, 15);">
      Output:                       
      1
      2
      3
      4
      6
      7
      8
      9
      10 </pre>
  </p>
  <br>
  <p id="Head">Python Pass</p>
  <p class="info">
    In Python, the pass keyword is used to execute nothing; it means, when we don't want to execute code, the pass can be used to execute empty. It is the same as the name refers to. It just makes the control to pass by without executing any code. If we want to bypass any code pass statement can be used.  <br>
    It is beneficial when a statement is required syntactically, but we want we don't want to execute or execute it later. The difference between the comments and pass is that, comments are entirely ignored by the Python interpreter, where the pass statement is not ignored.  <br>
    Suppose we have a loop, and we do not want to execute right this moment, but we will execute in the future. Here we can use the pass.   <br>
    Consider the following example.  <br>
    <span style="color: rgb(85, 83, 83);">#loop statements </span> <br>
    break <br>
    Example:
    <pre style="color: blue;">
      for i in [1,2,3,4,5]:   
      if(i==4):  
          pass  
          print("This is pass block",i)  
      print(i)   </pre>
          <pre style="color: rgb(202, 15, 15);">
      Output:                       
      1
      2
      3
      This is pass block 4 
      4
      5 </pre>
  </p>`;
});

Tut_C_31.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python OOPs Concepts</p>
  <p class="info">
    Like other general-purpose programming languages, Python is also an object-oriented language since its beginning. It allows us to develop applications using an Object-Oriented approach. In Python, we can easily create and use classes and objects.  <br>
    An object-oriented paradigm is to design the program using classes and objects. The object is related to real-word entities such as book, house, pencil, etc. The oops concept focuses on writing the reusable code. It is a widespread technique to solve the problem by creating objects.  <br>
    Major principles of object-oriented programming system are given below.  <br>
    > &nbsp; Class  <br>
    > &nbsp; Object  <br>
    > &nbsp; Method  <br>
    > &nbsp; Inheritance  <br>
    > &nbsp; Polymorphism  <br>
    > &nbsp; Data Abstraction  <br>
    > &nbsp; Encapsulation <br>
  </p>
  <p id="Head">Class</p>
  <p class="info">
    The class can be defined as a collection of objects. It is a logical entity that has some specific attributes and methods. For example: if you have an employee class, then it should contain an attribute and method, i.e. an email id, name, age, salary, etc.  <br>
    Syntax : <br>
  </p>
  <pre style="color: blue;">
    class ClassName:     
      < statement-1 >     
      .     
      .      
      < statement-N > </pre>
  <p id="Head">Object</p>
  <p class="info">
    The object is an entity that has state and behavior. It may be any real-world object like the mouse, keyboard, chair, table, pen, etc.  <br>
    Everything in Python is an object, and almost everything has attributes and methods. All functions have a built-in attribute __doc__, which returns the docstring defined in the function source code.  <br>
    When we define a class, it needs to create an object to allocate the memory. Consider the following example.  <br>
    Example:  <br>
  </p>
  <pre style="color: blue;">
    class car:  
        def __init__(self,modelname, year):  
            self.modelname = modelname  
            self.year = year  
        def display(self):  
            print(self.modelname,self.year)  
      
    c1 = car("Toyota", 2016)  
    c1.display()    </pre>
    <pre style="color: rgb(202, 15, 15);">
    Output:                       
    Toyota 2016</pre>
    <p id="Head">Method</p>
    <p class="info">
      The method is a function that is associated with an object. In Python, a method is not unique to class instances. Any object type can have methods. <br>
    </p><p id="Head">Inheritance</p>
    <p class="info">
      Inheritance is the most important aspect of object-oriented programming, which simulates the real-world concept of inheritance. It specifies that the child object acquires all the properties and behaviors of the parent object.  <br>
      By using inheritance, we can create a class which uses all the properties and behavior of another class. The new class is known as a derived class or child class, and the one whose properties are acquired is known as a base class or parent class.  <br>
      It provides the re-usability of the code.  <br>
    </p><p id="Head">Polymorphism</p>
    <p class="info">
      Polymorphism contains two words "poly" and "morphs". Poly means many, and morph means shape. By polymorphism, we understand that one task can be performed in different ways. For example - you have a class animal, and all animals speak. But they speak differently. Here, the "speak" behavior is polymorphic in a sense and depends on the animal. So, the abstract "animal" concept does not actually "speak", but specific animals (like dogs and cats) have a concrete implementation of the action "speak".   <br>
    </p><p id="Head">Encapsulation</p>
    <p class="info">
      Encapsulation is also an essential aspect of object-oriented programming. It is used to restrict access to methods and variables. In encapsulation, code and data are wrapped together within a single unit from being modified by accident. <br>
    </p><p id="Head">Data Abstraction</p>
    <p class="info">
      Data abstraction and encapsulation both are often used as synonyms. Both are nearly synonyms because data abstraction is achieved through encapsulation.   <br>
      Abstraction is used to hide internal details and show only functionalities. Abstracting something means to give names to things so that the name captures the core of what a function or a whole program does.   <br>
    </p>`;
});

Tut_C_32.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python While loop</p>
  <p class="info">
    The Python while loop allows a part of the code to be executed until the given condition returns false. It is also known as a pre-tested loop.  <br>
    It can be viewed as a repeating if statement. When we don't know the number of iterations then the while loop is most effective to use.  <br>
    The syntax is given below.  <br>
  </p>
  <pre style="color: blue;">
  while(condition):
    statements </pre>
  <p class="info">
    Here, the statements can be a single statement or a group of statements. The expression should be any valid Python expression resulting in true or false. The true is any non-zero value and false is 0. <br>
    <span style="color: green;">While loop Flowchart</span> <br>
    <img style="margin-left: 20%; width: 50%; height: 500px;" src="/static/mainpage/C_tut_img/newwhile_django.png" alt="">
    <br>
  </p>
  <pre style="color: blue;">
i=1    
number=0    
b=9    
number = int(input("Enter the number:"))    
while i<=10:    
    print("%d X %d = %d \\n"%(number,i,number*i))    
    i = i+1 </pre>
    <pre style="color: rgb(202, 15, 15);">
Output:                       
Enter the number:10
10 X 1 = 10       
10 X 2 = 20       
10 X 3 = 30 
10 X 4 = 40       
10 X 5 = 50       
10 X 6 = 60       
10 X 7 = 70       
10 X 8 = 80       
10 X 9 = 90       
10 X 10 = 100 </pre>`;
});

Tut_C_33.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Python for loop</p>
  <p class="info">
    The for loop in Python is used to iterate the statements or a part of the program several times. It is frequently used to traverse the data structures like list, tuple, or dictionary. <br>
    The syntax of for loop in python is given below.  <br>
  </p>
  <pre style="color: blue;">
  for iterating_var in sequence:    
      statement(s)     </pre>
  <p class="info">
    Here, the statements can be a single statement or a group of statements. The expression should be any valid Python expression resulting in true or false. The true is any non-zero value and false is 0. <br>
    <span style="color: green;">The for loop flowchart</span> <br>
    <img style="margin-left: 20%; width: 50%;" src="/static/mainpage/C_tut_img/c-for-loop_django.jpg" alt="">
    <br>
  </p>
  <pre style="color: blue;">
str = "Python"  
for i in str:  
    print(i) </pre>
    <pre style="color: rgb(202, 15, 15);">
Output:                       
P
y
t
h
o
n </pre>
<p class="info">
  <span style="color: green;">For loop Using range() function</span> <br>
  The range() function is used to generate the sequence of the numbers. If we pass the range(10), it will generate the numbers from 0 to 9. The syntax of the range() function is given below.  <br>
  <span style="color: rgb(10, 14, 226);">range(start,stop,step size)  </span> <br>
  ~ &nbsp; The start represents the beginning of the iteration.  <br>
  ~ &nbsp; The stop represents that the loop will iterate till stop-1. The range(1,5) will generate numbers 1 to 4 iterations. It is optional.  <br>
  ~ &nbsp; The step size is used to skip the specific numbers from the iteration. It is optional to use. By default, the step size is 1. It is optional.  <br>
</p>
<pre style="color: blue;">
  n = int(input("Enter the number "))  
  for i in range(2,n,2):  
      print(i)  </pre>
      <pre style="color: rgb(202, 15, 15);">
  Output:                       
  Enter the number 20
  2
  4
  6
  8
  10
  12
  14
  16
  18 </pre>`;
});

function addClick1() {
  document.getElementById("Tut-C-10").click();
}

function addClick2() {
  document.getElementById("Tut-C-11").click();
}

function addClick3() {
  document.getElementById("Tut-C-21").click();
}

function addClick4() {
  document.getElementById("Tut-C-12").click();
}

function addClick5() {
  document.getElementById("Tut-C-15").click();
}

function addClick()
{
    var sideb = document.querySelector('.sidebar');
    var sideb2 = getComputedStyle(sideb);
    if(sideb2.display == 'block')
    {
        topics.classList.toggle("mediaside");
    }
}

down_line.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
});

burger.addEventListener("click", () => {
    addClick();
});
