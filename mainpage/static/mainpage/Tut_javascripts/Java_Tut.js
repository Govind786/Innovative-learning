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
var topics = document.querySelector(".sidebar");
var down_line = document.querySelector(".my_slide");
burger = document.querySelector(".burger");

Tut_C_1.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">What is Java </p>
  <p class="info">
    Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language. <br>

    Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the Oak name to Java. <br>

    Platform: Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.<br>
  </p>

  <p id="Head">Application</p>
  <p class="info">
    According to Sun, 3 billion devices run Java. There are many devices where Java is currently used. Some of them are as follows: <br>
    1. &nbsp; Desktop Applications such as acrobat reader, media player, antivirus, etc. <br>
    2. &nbsp; Web Applications such as irctc.co.in, javatpoint.com, etc. <br>
    3. &nbsp; Enterprise Applications such as banking applications. <br>
    4. &nbsp; Mobile <br> 
    5. &nbsp; Embedded System <br>
    6. &nbsp; Smart Card <br>
    7. &nbsp; Robotics <br>
    8. &nbsp; Games, etc. <br>
  </p>
  <p id="Head">Java Platforms / Editions</p>
  <p class="info">
    There are 4 platforms or editions of Java: <br>
    <span style="color: rgb(35, 54, 33);">1) Java SE (Java Standard Edition) <br></span>
    It is a Java programming platform. It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc. It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc. <br>
    <span style="color: rgb(35, 54, 33);">2) Java EE (Java Enterprise Edition) <br></span>
    It is an enterprise platform which is mainly used to develop web and enterprise applications. It is built on the top of the Java SE platform. It includes topics like Servlet, JSP, Web Services, EJB, JPA, etc. <br>
    <span style="color: rgb(35, 54, 33);">3) Java ME (Java Micro Edition) <br></span>
    It is a micro platform which is mainly used to develop mobile applications. <br>
    <span style="color: rgb(35, 54, 33);">4) JavaFX <br></span>
    It is used to develop rich internet applications. It uses a light-weight user interface API. <br>
  </p>`;
});

Tut_C_2.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">History of Java </p>
  <img style="margin-left: 70px;" src="/static/mainpage/Java_tut_img/j-gosling_django.jpg" alt="">
    <p class="info">
      The history of Java is very interesting. Java was originally designed for interactive television, but it was too advanced technology for the digital cable television industry at the time. The history of Java starts with the Green Team. Java team members (also known as Green Team), initiated this project to develop a language for digital devices such as set-top boxes, televisions, etc. However, it was suited for internet programming. Later, Java technology was incorporated by Netscape. <br><br>

      The principles for creating Java programming were "Simple, Robust, Portable, Platform-independent, Secured, High Performance, Multithreaded, Architecture Neutral, Object-Oriented, Interpreted, and Dynamic". Java was developed by James Gosling, who is known as the father of Java, in 1995. James Gosling and his team members started the project in the early '90s. <br><br>        
      Currently, Java is used in internet programming, mobile devices, games, e-business solutions, etc. There are given significant points that describe the history of Java. <br><br>       
      1) James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991. The small team of sun engineers called Green Team. <br><br>
      2) Initially designed for small, embedded systems in electronic appliances like set-top boxes. <br>         <br>
      3) Firstly, it was called "Greentalk" by James Gosling, and the file extension was .gt. <br>          <br>
      4) After that, it was called Oak and was developed as a part of the Green project. <br>     <br>    
      5) Why Oak? Oak is a symbol of strength and chosen as a national tree of many countries like the U.S.A., France, Germany, Romania, etc. <br><br>
      6) In 1995, Oak was renamed as "Java" because it was already a trademark by Oak Technologies. <br><br>
      7) Why had they chosen java name for Java language? The team gathered to choose a new name. The suggested words were "dynamic", "revolutionary", "Silk", "jolt", "DNA", etc. They wanted something that reflected the essence of the technology: revolutionary, dynamic, lively, cool, unique, and easy to spell and fun to say. <br><br>
      According to James Gosling, "Java was one of the top choices along with Silk". Since Java was so unique, most of the team members preferred Java than other names. <br><br>
      8) Java is an island of Indonesia where the first coffee was produced (called java coffee). It is a kind of espresso bean. Java name was chosen by James Gosling while having coffee near his office. <br><br>
      9) Notice that Java is just a name, not an acronym. <br><br>
      10) Initially developed by James Gosling at Sun Microsystems (which is now a subsidiary of Oracle Corporation) and released in 1995. <br><br>
      11) In 1995, Time magazine called Java one of the Ten Best Products of 1995. <br><br>
      12) JDK 1.0 released in(January 23, 1996). After the first release of Java, there have been many additional features added to the language. Now Java is being used in Windows applications, Web applications, enterprise applications, mobile applications, cards, etc. Each new version adds the new features in Java. 
      <br><br>
    </p> 
    `;
});

Tut_C_3.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Features of Java </p>
  <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/Java_tut_img/java-features_django.png" alt="">
  <p class="info">
    <br>
    The primary objective of Java programming language creation was to make it portable, simple and secure programming
    language. Apart from this, there are also some excellent features which play an important role in the popularity
    of this language. The features of Java are also known as java buzzwords. <br><br>

    A list of most important features of Java language is given below : <br>
    1. &nbsp Simple <br>
    2. &nbsp Object-Oriented <br>
    3. &nbsp Portable <br>
    4. &nbsp Platform independent <br>
    5. &nbsp Secured <br>
    6. &nbsp Robust <br>
    7. &nbsp Architecture neutral <br>
    8. &nbsp Interpreted <br>
    9. &nbsp High Performance <br>
    10. &nbsp Multithreaded <br>
    11. &nbsp Distributed <br>
    12. &nbsp Dynamic <br>
  </p>
  <p id="Head">Simple </p>
  <p class="info">
    Java is very easy to learn, and its syntax is simple, clean and easy to understand. According to Sun, Java
    language is a simple programming language because: <br>

    > &nbsp; Java syntax is based on C++ (so easier for programmers to learn it after C++). <br>
    > &nbsp; Java has removed many complicated and rarely-used features, for example, explicit pointers, operator
    overloading,
    etc. <br>
    > &nbsp; There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.
    <br>
  </p>
  <p id="Head">Object-oriented</p>
  <p class="info">
    Java is an object-oriented programming language. Everything in Java is an object. Object-oriented means we
    organize our software as a combination of different types of objects that incorporates both data and behavior.
    <br>
    Object-oriented programming (OOPs) is a methodology that simplifies software development and maintenance by
    providing some rules. <br>
    Basic concepts of OOPs are: <br>
    1. &nbsp; Object <br>
    2. &nbsp; Class <br>
    3. &nbsp; Inheritance <br>
    4. &nbsp; Polymorphism <br>
    5. &nbsp; Abstraction <br>
    6. &nbsp; Encapsulation <br>
  </p>
  <p id="Head">Platform Independent</p>
  <p class="info">
    Java is platform independent because it is different from other languages like C, C++, etc. which are compiled
    into platform specific machines while Java is a write once, run anywhere language. A platform is the hardware or
    software environment in which a program runs. <br>

    There are two types of platforms software-based and hardware-based. Java provides a software-based platform. <br>

    The Java platform differs from most other platforms in the sense that it is a software-based platform that runs on
    the top of other hardware-based platforms. It has two components: <br>

    1. &nbsp; Runtime Environment <br>
    2. &nbsp; API(Application Programming Interface) <br>
    Java code can be run on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is
    compiled by the compiler and converted into bytecode. This bytecode is a platform-independent code because it can
    be run on multiple platforms, i.e., Write Once and Run Anywhere(WORA). <br>
  </p>
  <p id="Head">Secured</p>
  <p class="info">
    Java is best known for its security. With Java, we can develop virus-free systems. Java is secured because: <br>

    > &nbsp; No explicit pointer <br>
    > &nbsp; Java Programs run inside a virtual machine <br>
    <span style="color: rgb(35, 54, 33);">1. &nbsp; Classloader: <br></span> Classloader in Java is a part of the Java
    Runtime Environment(JRE) which is used to load Java classes
    into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of the local
    file system from those that are imported from network sources. <br>
    <span style="color: rgb(35, 54, 33);">2. &nbsp; Bytecode Verifier: <br></span> It checks the code fragments for
    illegal code that can violate access right to objects. <br>
    <span style="color: rgb(35, 54, 33);">3. &nbsp; Security Manager: <br></span> It determines what resources a class
    can access such as reading and writing to the local disk. <br><br>
    Java language provides these securities by default. Some security can also be provided by an application developer
    explicitly through SSL, JAAS, Cryptography, etc. <br>

  </p>
  <p id="Head">Robust </p>

  <p class="info">
    Robust simply means strong. Java is robust because: <br>

    > &nbsp; It uses strong memory management. <br>
    > &nbsp; There is a lack of pointers that avoids security problems. <br>
    > &nbsp; There is automatic garbage collection in java which runs on the Java Virtual Machine to get rid of
    objects which
    are not being used by a Java application anymore. <br>
    > &nbsp; There are exception handling and the type checking mechanism in Java. All these points make Java robust.
    <br>
  </p>
  <p id="Head">Architecture-neutral </p>

  <p class="info">
    Java is architecture neutral because there are no implementation dependent features, for example, the size of
    primitive types is fixed. <br>

    In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for
    64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java. <br>
  </p>
  <p id="Head">Portable</p>

  <p class="info">
    Java is portable because it facilitates you to carry the Java bytecode to any platform. It doesn't require any
    implementation. <br>
  </p>
  <p id="Head">High-performance </p>

  <p class="info">
    Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native
    code. It is still a little bit slower than a compiled language (e.g., C++). Java is an interpreted language that
    is why it is slower than compiled languages, e.g., C, C++, etc. <br>
  </p>
  <p id="Head">Distributed</p>

  <p class="info">
    Java is distributed because it facilitates users to create distributed applications in Java. RMI and EJB are used
    for creating distributed applications. This feature of Java makes us able to access files by calling the methods
    from any machine on the internet. <br>
  </p>
  <p id="Head">Multi-threaded</p>

  <p class="info">
    A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks
    at once by defining multiple threads. The main advantage of multi-threading is that it doesn't occupy memory for
    each thread. It shares a common memory area. Threads are important for multi-media, Web applications, etc. <br>
  </p>
  <p id="Head">Dynamic</p>

  <p class="info">
    Java is a dynamic language. It supports dynamic loading of classes. It means classes are loaded on demand. It also
    supports functions from its native languages, i.e., C and C++. <br>
    Java supports dynamic compilation and automatic memory management (garbage collection). <br>
  </p>
  `;
});

Tut_C_4.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">JVM (Java Virtual Machine) Architecture </p>
  <p class="info">
    JVM(Java Virtual Machine) acts as a run-time engine to run Java applications. JVM is the one that actually calls the main method present in a java code. JVM is a part of JRE(Java Runtime Environment).
<br>
    Java applications are called WORA (Write Once Run Anywhere). This means a programmer can develop Java code on one system and can expect it to run on any other Java-enabled system without any adjustment. This is all possible because of JVM.
<br>
    When we compile a .java file, .class files(contains byte-code) with the same class names present in .java file are generated by the Java compiler. This .class file goes into various steps when we run it. These steps together describe the whole JVM. 
    <br> <br>
    <img style="margin-left: 10%;" width="80%" src="/static/mainpage/Java_tut_img/jvm_django.jpg" alt="">
  </p>
  <p class="info">
    <span style="color: rgb(44, 95, 29);">Class Loader Subsystem</span> <br>
    It is mainly responsible for three activities.  <br>
    <span style="color: rgb(33, 33, 146);">Loading:</span> The Class loader reads the “.class” file, generate the corresponding binary data and save it in the method area. For each “.class” file, JVM stores the following information in the method area. <br>
    > &nbsp; The fully qualified name of the loaded class and its immediate parent class. <br>
    > &nbsp; Whether the “.class” file is related to Class or Interface or Enum. <br>
    > &nbsp; Modifier, Variables and Method information etc. <br>
    After loading the “.class” file, JVM creates an object of type Class to represent this file in the heap memory. Please note that this object is of type Class predefined in java.lang package. These Class object can be used by the programmer for getting class level information like the name of the class, parent name, methods and variable information etc. To get this object reference we can use getClass() method of Object class.<br>
    <span style="color: rgb(33, 33, 146);">Linking:</span> Performs verification, preparation, and (optionally) resolution.  <br>
    > &nbsp; Verification: It ensures the correctness of the .class file i.e. it checks whether this file is properly formatted and generated by a valid compiler or not. If verification fails, we get run-time exception java.lang.VerifyError. This activity is done by the component ByteCodeVerifier. Once this activity is completed then the class file is ready for compilation.<br>
    > &nbsp; Preparation: JVM allocates memory for class variables and initializing the memory to default values. <br>
    > &nbsp; Resolution: It is the process of replacing symbolic references from the type with direct references. It is done by searching into the method area to locate the referenced entity. <br>
    <span style="color: rgb(33, 33, 146);">Initialization:</span> In this phase, all static variables are assigned with their values defined in the code and static block(if any). This is executed from top to bottom in a class and from parent to child in the class hierarchy.<br>
    n general, there are three class loaders : <br>
    > &nbsp; Bootstrap class loader: Every JVM implementation must have a bootstrap class loader, capable of loading trusted classes. It loads core java API classes present in the “JAVA_HOME/jre/lib” directory. This path is popularly known as the bootstrap path. It is implemented in native languages like C, C++.<br>
    > &nbsp; Extension class loader: It is a child of the bootstrap class loader. It loads the classes present in the extensions directories “JAVA_HOME/jre/lib/ext”(Extension path) or any other directory specified by the java.ext.dirs system property. It is implemented in java by the sun.misc.Launcher$ExtClassLoader class. <br>
    > &nbsp; System/Application class loader: It is a child of the extension class loader. It is responsible to load classes from the application classpath. It internally uses Environment Variable which mapped to java.class.path. It is also implemented in Java by the sun.misc.Launcher$AppClassLoader class. <br>
  </p>
  <p id="Head">JVM Memory</p>
  <p class="info">
    <span style="color: rgb(33, 33, 146);">1. &nbsp; Method area:</span> In the method area, all class level information like class name, immediate parent class name, methods and variables information etc. are stored, including static variables. There is only one method area per JVM, and it is a shared resource.<br>
    <span style="color: rgb(33, 33, 146);">2. &nbsp; Heap area:</span> Information of all objects is stored in the heap area. There is also one Heap Area per JVM. It is also a shared resource.<br>
    <span style="color: rgb(33, 33, 146);">3. &nbsp; Stack area:</span> For every thread, JVM creates one run-time stack which is stored here. Every block of this stack is called activation record/stack frame which stores methods calls. All local variables of that method are stored in their corresponding frame. After a thread terminates, its run-time stack will be destroyed by JVM. It is not a shared resource.<br>
    <span style="color: rgb(33, 33, 146);">4. &nbsp; PC Registers: </span> Store address of current execution instruction of a thread. Obviously, each thread has separate PC Registers.<br>
    <span style="color: rgb(33, 33, 146);">5. &nbsp; Native method stacks:</span> For every thread, a separate native stack is created. It stores native method information. <br>
  </p>
  `;
});

Tut_C_5.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">First Java Program | Hello World</p>
  <p class="info">
    In this page, we will learn how to write the simple program of java. We can write a simple hello java program
    easily after installing the JDK. <br>

    To create a simple java program, you need to create a class that contains the main method. <br>
    <br>
    Let's create the hello java program:
    <br> <br>
  </p>
  <p class="info" style="color: blue">
    class Simple{ <br>
    public static void main(String args[]){ <br>
    System.out.println("Hello Java"); <br>
    } <br>
    } <br>
  </p>
  <p class="info">
    save this file as Simple.java <br>
    To compile: <br>
    javac Simple.java <br>
    To execute: <br>
    java Simple <br>
    <span style="color: rgb(126, 37, 37);">Output : Hello Java</span> <br>
  </p>
  <p id="Head">Parameters used in First Java Program</p>
  <p class="info">
    Let's see what is the meaning of class, public, static, void, main, String[], System.out.println(). <br>

    > &nbsp; class keyword is used to declare a class in java. <br><br>
    > &nbsp; public keyword is an access modifier which represents visibility. It means it is visible to all. <br><br>
    > &nbsp; static is a keyword. If we declare any method as static, it is known as the static method. The core advantage of
    the static method is that there is no need to create an object to invoke the static method. The main method is
    executed by the JVM, so it doesn't require to create an object to invoke the main method. So it saves memory. <br><br>
    > &nbsp; void is the return type of the method. It means it doesn't return any value. <br><br>
    > &nbsp; main represents the starting point of the program. <br><br>
    > &nbsp; String[] args is used for command line argument. We will learn it later. <br><br>
    > &nbsp; System.out.println() is used to print statement. Here, System is a class, out is the object of PrintStream class,
    println() is the method of PrintStream class. We will learn about the internal working of System.out.println
    statement later. <br><br>
  </p>
  `;
});

Tut_C_6.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java Comments</p>
  <p class="info">
    The Java comments are the statements that are not executed by the compiler and interpreter. The comments can be
    used
    to provide information or explanation about the variable, method, class or any statement. It can also be used to
    hide program code. <br>

    Types of Java Comments <br>
    There are three types of comments in Java. <br>

    1. &nbsp; Single Line Comment <br>
    2. &nbsp; Multi Line Comment <br>
    3. &nbsp; Documentation Comment <br><br>
    Java Types of Comments <br>
    <img style="margin-left: 10%;" src="/static/mainpage/Java_tut_img/java-types-of-comments_django.png" alt="">
    <br><br>
  </p>
  <p id="Head">1) Java Single Line Comment</p>
  <p class="info">
    The single line comment is used to comment only one line.  <br>
    Syntax: <br>
    <span style="color: rgb(71, 71, 73);">//This is single line comment</span>  <br>
    Example: <br>
    <span style="color: rgb(0, 0, 255);">
      public class CommentExample1 { <br>
      public static void main(String[] args) { <br>
      int i=10;<span style="color: rgb(71, 71, 73);">//Here, i is a variable</span>  <br>
      System.out.println(i); <br>
      } <br>
      }</span>  <br>
    <span style="color: rgb(161, 26, 26);">Output: <br>
      10</span>
    
  </p>
  <p id="Head">2) Java Multi Line Comment</p>
  <p class="info">
    The multi line comment is used to comment multiple lines of code. <br>
    Syntax: <br>
    <span style="color: rgb(71, 71, 73);">/*  <br>
      This <br>
      is <br>
      multi line <br>
      comment <br>
      */</span>  <br>
    Example: <br>
    <span style="color: rgb(0, 0, 255);">
      public class CommentExample2 { <br>
      public static void main(String[] args) { <br>
      int i=10; <br><span style="color: rgb(71, 71, 73);">/* Let's declare and <br>
        print variable in java. */</span>  <br>
      System.out.println(i); <br>
      } <br>
      }</span>  <br>
    <span style="color: rgb(161, 26, 26);">Output: <br>
      10</span>
    
  </p>
  <p id="Head">3) Java Documentation Comment</p>
  <p class="info">
    The documentation comment is used to create documentation API. To create documentation API, you need to use javadoc
  tool. <br>
    Syntax: <br>
    <span style="color: rgb(71, 71, 73);">/**  <br>
      This  <br>
      is  <br>
      documentation  <br>
      comment  <br>
      */</span>  <br>
    Example: <br>
    <span style="color: rgb(0, 0, 255);">
    <span style="color: rgb(71, 71, 73);">/** The Calculator class provides methods to get addition and subtraction of given 2 numbers.*/</span>  <br>
      public class Calculator { <br>
        <span style="color: rgb(71, 71, 73);">/** The add() method returns addition of given numbers.*/</span>  <br>
      public static int add(int a, int b){return a+b;} <br>
      <span style="color: rgb(71, 71, 73);">/** The sub() method returns subtraction of given numbers.*/</span>  <br>
      public static int sub(int a, int b){return a-b;} <br>
    } <br>
    </span> 
    <span style="color: rgb(161, 26, 26);">Compile it by javac tool: <br>
      javac Calculator.java <br>
      Create Documentation API by javadoc tool: <br>
      javadoc Calculator.java<br> </span><br>
      Now, there will be HTML files created for your Calculator class in the current directory. Open the HTML files and
      see the explanation of Calculator class provided through documentation comment.  <br>
  </p>
  `;
});

Tut_C_7.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java Variables</p>
  <p class="info">
    A variable is a container which holds the value while the Java program is executed. A variable is assigned with a data type. <br>
    Variable is a name of memory location. There are three types of variables in java: local, instance and static. <br>
  </p>
  <p id="Head">Types of Variables</p>
  <p class="info">
    There are three types of variables in Java: <br>
    > &nbsp; local variable <br>
    > &nbsp; instance variable <br>
    > &nbsp; static variable <br>
    Types of variables in java <br>
    <span style="color: rgb(44, 95, 29);">1) Local Variable </span><br>
    A variable declared inside the body of the method is called local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists. <br>
    A local variable cannot be defined with "static" keyword. <br>
    <span style="color: rgb(44, 95, 29);">2) Instance Variable</span> <br>
    A variable declared inside the class but outside the body of the method, is called instance variable. It is not declared as static.
    It is called instance variable because its value is instance specific and is not shared among instances. <br>
    <span style="color: rgb(44, 95, 29);">3) Static variable</span> <br>
    A variable which is declared as static is called static variable. It cannot be local. You can create a single copy of static variable and share among all the instances of the class. Memory allocation for static variable happens only once when the class is loaded in the memory. <br>
  </p>
  <p id="Head">Example : </p>
  <p class="info">
    <span style="color: blue;">
      class A{  <br>
        int data=50;<span style="color: rgb(71, 71, 73);">//instance variable</span>  <br>
        static int m=100;<span style="color: rgb(71, 71, 73);">//static variable</span>  <br>
        void method(){  <br>
        int n=90;<span style="color: rgb(71, 71, 73);">//local variable</span>  <br>
        }  <br>
        }<span style="color: rgb(71, 71, 73);">//end of class</span>  <br>
    </span>
  </p>
  `;
});

Tut_C_8.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Data Types in Java</p>
  <p class="info">
    Data types specify the different sizes and values that can be stored in the variable. There are two types of data
    types in Java: <br>
    <span style="color: rgb(36, 116, 25);">1. &nbsp; Primitive data types:</span> The primitive data types include
    boolean, char, byte, short, int, long, float and double. <br>
    <span style="color: rgb(36, 116, 25);">2. &nbsp; Non-primitive data types: </span>The non-primitive data types
    include Classes, Interfaces, and Arrays. <br>
  </p>
  <p id="Head">Java Primitive Data Types</p>
  <p class="info">
    In Java language, primitive data types are the building blocks of data manipulation. These are the most basic data
    types available in Java language. <br>
    <span style="color: rgb(194, 25, 194);">Note : Java is a statically-typed programming language. It means, all
      variables must be declared before its use. That is why we need to declare variable's type and name.</span> <br>
    There are 8 types of primitive data types: <br>
    > &nbsp; boolean data type <br>
    > &nbsp; byte data type <br>
    > &nbsp; char data type <br>
    > &nbsp; short data type <br>
    > &nbsp; int data type <br>
    > &nbsp; long data type <br>
    > &nbsp; float data type <br>
    > &nbsp; double data type <br>
  </p>
  <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/Java_tut_img/java-datatypes_django.png" alt="">
  <table class="alt">
    <tr>
      <th id="table_dvpt_datatype"><strong>Data Type</strong></th>
      <th id="table_dvpt_defaultvalue"><strong>Default Value</strong></th>
      <th id="table_dvpt_defaultsize"><strong>Default size</strong></th>

    </tr>

    <tr>
      <td headers="table_dvpt_datatype">boolean</td>
      <td headers="table_dvpt_defaultvalue">false</td>
      <td headers="table_dvpt_defaultsize">1 bit</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">char</td>
      <td headers="table_dvpt_defaultvalue">'\\u0000'</td>
      <td headers="table_dvpt_defaultsize">2 byte</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">byte</td>
      <td headers="table_dvpt_defaultvalue">0</td>
      <td headers="table_dvpt_defaultsize">1 byte</td>

    </tr>

    <tr>
      <td headers="table_dvpt_datatype">short</td>
      <td headers="table_dvpt_defaultvalue">0</td>
      <td headers="table_dvpt_defaultsize">2 byte</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">int</td>
      <td headers="table_dvpt_defaultvalue">0</td>
      <td headers="table_dvpt_defaultsize">4 byte</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">long</td>
      <td headers="table_dvpt_defaultvalue">0L</td>
      <td headers="table_dvpt_defaultsize">8 byte</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">float</td>
      <td headers="table_dvpt_defaultvalue">0.0f</td>
      <td headers="table_dvpt_defaultsize">4 byte</td>
    </tr>

    <tr>
      <td headers="table_dvpt_datatype">double</td>
      <td headers="table_dvpt_defaultvalue">0.0d</td>
      <td headers="table_dvpt_defaultsize">8 byte</td>
    </tr>
  </table>
  <p id="Head">Boolean Data Type</p>
  <p class="info">
    The Boolean data type is used to store only two possible values: true and false. This data type is used for simple flags that track true/false conditions.  <br>
    The Boolean data type specifies one bit of information, but its "size" can't be defined precisely.  <br>
    Example:  <br>
    <span style="color: blue;">Boolean one = false;  </span>
  </p>
  <p id="Head">Byte Data Type</p>
  <p class="info">
    The byte data type is an example of primitive data type. It isan 8-bit signed two's complement integer. Its value-range lies between -128 to 127 (inclusive). Its minimum value is -128 and maximum value is 127. Its default value is 0.  <br>
    The byte data type is used to save memory in large arrays where the memory savings is most required. It saves space because a byte is 4 times smaller than an integer. It can also be used in place of "int" data type.  <br>
    Example:  <br>
    <span style="color: blue;">byte a = 10, byte b = -20;</span>
  </p>
  <p id="Head">Short Data Type</p>
  <p class="info">
    The short data type is a 16-bit signed two's complement integer. Its value-range lies between -32,768 to 32,767 (inclusive). Its minimum value is -32,768 and maximum value is 32,767. Its default value is 0.  <br>
    The short data type can also be used to save memory just like byte data type. A short data type is 2 times smaller than an integer.  <br>
    Example:  <br>
    <span style="color: blue;">short s = 10000, short r = -500;</span>
  </p>
  <p id="Head">Int Data Type</p>
  <p class="info">
    The int data type is a 32-bit signed two's complement integer. Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) (inclusive). Its minimum value is - 2,147,483,648and maximum value is 2,147,483,647. Its default value is 0.  <br>
    The int data type is generally used as a default data type for integral values unless if there is no problem about memory.  <br>
    Example:  <br>
    <span style="color: blue;">int a = 100000, int b = -200000;</span>
  </p>
  <p id="Head">Long Data Type</p>
  <p class="info">
    The long data type is a 64-bit two's complement integer. Its value-range lies between -9,223,372,036,854,775,808(-2^63) to 9,223,372,036,854,775,807(2^63 -1)(inclusive). Its minimum value is - 9,223,372,036,854,775,808and maximum value is 9,223,372,036,854,775,807. Its default value is 0. The long data type is used when you need a range of values more than those provided by int.  <br>
    Example:  <br>
    <span style="color: blue;">long a = 100000L, long b = -200000L;</span>
  </p>
  <p id="Head">Float Data Type</p>
  <p class="info">
    The float data type is a single-precision 32-bit IEEE 754 floating point.Its value range is unlimited. It is recommended to use a float (instead of double) if you need to save memory in large arrays of floating point numbers. The float data type should never be used for precise values, such as currency. Its default value is 0.0F. <br>
    Example: <br>
    <span style="color: blue;">float f1 = 234.5f;</span>
  </p>
  <p id="Head">Double Data Type</p>
  <p class="info">
    The double data type is a double-precision 64-bit IEEE 754 floating point. Its value range is unlimited. The double data type is generally used for decimal values just like float. The double data type also should never be used for precise values, such as currency. Its default value is 0.0d.  <br>
    Example:  <br>
    <span style="color: blue;">double d1 = 12.3;</span>
  </p>
  <p id="Head">Char Data Type</p>
  <p class="info">
    The char data type is a single 16-bit Unicode character. Its value-range lies between '\u0000' (or 0) to '\uffff' (or 65,535 inclusive).The char data type is used to store characters.  <br>
    Example:  <br>
    <span style="color: blue;">char letterA = 'A';</span>
  </p>
  <p id="Head">Why char uses 2 byte in java and what is \u0000 ?</p>
  <p class="info">
    It is because java uses Unicode system not ASCII code system. The \u0000 is the lowest range of Unicode system. To get detail explanation about Unicode <a href="https://docs.oracle.com/javase/tutorial/i18n/text/unicode.html" target="_blank">go through this link</a>.
    <br>
  </p>
  `;
});

Tut_C_9.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Method in Java</p>
  <p class="info">
    In general, a method is a way to perform some task. Similarly, the method in Java is a collection of instructions that performs a specific task. It provides the reusability of code. We can also easily modify code using methods. In this section, we will learn what is a method in Java, types of methods, method declaration, and how to call a method in Java.  <br>
    A method is a block of code or collection of statements or a set of code grouped together to perform a certain task or operation. It is used to achieve the reusability of code. We write a method once and use it many times. We do not require to write code again and again. It also provides the easy modification and readability of code, just by adding or removing a chunk of code. The method is executed only when we call or invoke it.  <br>
  </p>
  <p id="Head">Method Declaration</p>
  <p class="info">
    The method declaration provides information about method attributes, such as visibility, return-type, name, and arguments. It has six components that are known as method header, as we have shown in the following figure.  <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/Java_tut_img/method-in-java_django.png" alt=""> <br>
    <span style="color: green;">Method Signature:</span> Every method has a method signature. It is a part of the method declaration. It includes the method name and parameter list. <br>
    <span style="color: green;">Access Specifier:</span> Access specifier or modifier is the access type of the method. It specifies the visibility of the method. Java provides four types of access specifier. <br>
    <span style="color: green;"> > &nbsp; Public:</span>The method is accessible by all classes when we use public specifier in our application.  <br>
    <span style="color: green;"> > &nbsp; Private: </span>When we use a private access specifier, the method is accessible only in the classes in which it is defined.  <br>
    <span style="color: green;"> > &nbsp; Protected:</span> When we use protected access specifier, the method is accessible within the same package or subclasses in a different package. <br>
    <span style="color: green;" > &nbsp; >Default: </span>When we do not use any access specifier in the method declaration, Java uses default access specifier by default. It is visible only from the same package only.  <br>
    <span style="color: green;">Return Type:</span>Return type is a data type that the method returns. It may have a primitive data type, object, collection, void, etc. If the method does not return anything, we use void keyword.  <br>
    <span style="color: green;">Method Name:</span> It is a unique name that is used to define the name of a method. It must be corresponding to the functionality of the method. Suppose, if we are creating a method for subtraction of two numbers, the method name must be subtraction(). A method is invoked by its name. <br>
    <span style="color: green;">Parameter List: </span> It is the list of parameters separated by a comma and enclosed in the pair of parentheses. It contains the data type and variable name. If the method has no parameter, left the parentheses blank. <br>
    <span style="color: green;">Method Body:</span> It is a part of the method declaration. It contains all the actions to be performed. It is enclosed within the pair of curly braces. <br>
  </p>`;
});

Tut_C_10.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java Keywords</p>
  <p class="info">
    Java keywords are also known as reserved words. Keywords are particular words which acts as a key to a code. These are predefined words by Java so it cannot be used as a variable or object name. <br>
  </p>
  <p id="Head">List of Java Keywords</p>
  <p class="info">
    A list of all the 48 Java keywords or reserved words are given below: <br>

    <span style="color: rgb(134, 19, 115);">abstract:</span> Java abstract keyword is used to declare abstract class. Abstract class can provide the implementation of interface. It can have abstract and non-abstract methods. <br><br>
    <span style="color: rgb(134, 19, 115);">boolean:</span> Java boolean keyword is used to declare a variable as a boolean type. It can hold True and False values only. <br><br>
    <span style="color: rgb(134, 19, 115);">break: </span>Java break keyword is used to break loop or switch statement. It breaks the current flow of the program at specified condition. <br><br>
    <span style="color: rgb(134, 19, 115);">byte:</span> Java byte keyword is used to declare a variable that can hold an 8-bit data values. <br><br>
    <span style="color: rgb(134, 19, 115);">case:</span> Java case keyword is used to with the switch statements to mark blocks of text. <br><br>
    <span style="color: rgb(134, 19, 115);">catch:</span> Java catch keyword is used to catch the exceptions generated by try statements. It must be used after the try block only. <br><br>
    <span style="color: rgb(134, 19, 115);">char:</span> Java char keyword is used to declare a variable that can hold unsigned 16-bit Unicode characters <br><br>
    <span style="color: rgb(134, 19, 115);">class:</span> Java class keyword is used to declare a class. <br><br>
    <span style="color: rgb(134, 19, 115);">continue:</span> Java continue keyword is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition. <br><br>
    <span style="color: rgb(134, 19, 115);">default:</span> Java default keyword is used to specify the default block of code in a switch statement. <br><br>
    <span style="color: rgb(134, 19, 115);">do: </span>Java do keyword is used in control statement to declare a loop. It can iterate a part of the program several times. <br><br>
    <span style="color: rgb(134, 19, 115);">double:</span> Java double keyword is used to declare a variable that can hold a 64-bit floating-point numbers. <br><br>
    <span style="color: rgb(134, 19, 115);">else:</span> Java else keyword is used to indicate the alternative branches in an if statement. <br><br>
    <span style="color: rgb(134, 19, 115);">enum:</span> Java enum keyword is used to define a fixed set of constants. Enum constructors are always private or default. <br><br>
    <span style="color: rgb(134, 19, 115);">extends:</span> Java extends keyword is used to indicate that a class is derived from another class or interface. <br><br>
    <span style="color: rgb(134, 19, 115);">final:</span> Java final keyword is used to indicate that a variable holds a constant value. It is applied with a variable. It is used to restrict the user. <br><br>
    <span style="color: rgb(134, 19, 115);">finally:</span> Java finally keyword indicates a block of code in a try-catch structure. This block is always executed whether exception is handled or not. <br><br>
    <span style="color: rgb(134, 19, 115);">float:</span> Java float keyword is used to declare a variable that can hold a 32-bit floating-point number. <br><br>
    <span style="color: rgb(134, 19, 115);">for:</span> Java for keyword is used to start a for loop. It is used to execute a set of instructions/functions repeatedly when some conditions become true. If the number of iteration is fixed, it is recommended to use for loop. <br><br>
    <span style="color: rgb(134, 19, 115);">if:</span> Java if keyword tests the condition. It executes the if block if condition is true. <br><br>
    <span style="color: rgb(134, 19, 115);">implements: </span>Java implements keyword is used to implement an interface. <br><br>
    <span style="color: rgb(134, 19, 115);">import: </span>Java import keyword makes classes and interfaces available and accessible to the current source code. <br><br>
    <span style="color: rgb(134, 19, 115);">instanceof:</span> Java instanceof keyword is used to test whether the object is an instance of the specified class or implements an interface. <br><br>
    <span style="color: rgb(134, 19, 115);">int:</span> Java int keyword is used to declare a variable that can hold a 32-bit signed integer. <br><br>
    <span style="color: rgb(134, 19, 115);">interface:</span> Java interface keyword is used to declare an interface. It can have only abstract methods. <br><br>
    <span style="color: rgb(134, 19, 115);">long:</span> Java long keyword is used to declare a variable that can hold a 64-bit integer. <br><br>
    <span style="color: rgb(134, 19, 115);">native:</span> Java native keyword is used to specify that a method is implemented in native code using JNI (Java Native Interface). <br><br>
    <span style="color: rgb(134, 19, 115);">new:</span> Java new keyword is used to create new objects. <br><br>
    <span style="color: rgb(134, 19, 115);">null:</span> Java null keyword is used to indicate that a reference does not refer to anything. It removes the garbage value. <br><br>
    <span style="color: rgb(134, 19, 115);">package:</span> Java package keyword is used to declare a Java package that includes the classes. <br><br>
    <span style="color: rgb(134, 19, 115);">private:</span> Java private keyword is an access modifier. It is used to indicate that a method or variable may be accessed only in the class in which it is declared. <br><br>
    <span style="color: rgb(134, 19, 115);">protected:</span> Java protected keyword is an access modifier. It can be accessible within package and outside the package but through inheritance only. It can't be applied on the class. <br><br>
    <span style="color: rgb(134, 19, 115);">public:</span> Java public keyword is an access modifier. It is used to indicate that an item is accessible anywhere. It has the widest scope among all other modifiers. <br><br>
    <span style="color: rgb(134, 19, 115);">return: </span>Java return keyword is used to return from a method when its execution is complete. <br><br>
    <span style="color: rgb(134, 19, 115);">short:</span> Java short keyword is used to declare a variable that can hold a 16-bit integer. <br><br>
    <span style="color: rgb(134, 19, 115);">static:</span> Java static keyword is used to indicate that a variable or method is a class method. The static keyword in Java is used for memory management mainly. <br><br>
    <span style="color: rgb(134, 19, 115);">strictfp:</span> Java strictfp is used to restrict the floating-point calculations to ensure portability. <br><br>
    <span style="color: rgb(134, 19, 115);">super:</span> Java super keyword is a reference variable that is used to refer parent class object. It can be used to invoke immediate parent class method. <br><br>
    <span style="color: rgb(134, 19, 115);">switch:</span> The Java switch keyword contains a switch statement that executes code based on test value. The switch statement tests the equality of a variable against multiple values. <br><br>
    <span style="color: rgb(134, 19, 115);">synchronized:</span> Java synchronized keyword is used to specify the critical sections or methods in multithreaded code. <br><br>
    <span style="color: rgb(134, 19, 115);">this:</span> Java this keyword can be used to refer the current object in a method or constructor. <br><br>
    <span style="color: rgb(134, 19, 115);">throw:</span> The Java throw keyword is used to explicitly throw an exception. The throw keyword is mainly used to throw custom exception. It is followed by an instance. <br><br>
    <span style="color: rgb(134, 19, 115);">throws:</span> The Java throws keyword is used to declare an exception. Checked exception can be propagated with throws. <br><br>
    <span style="color: rgb(134, 19, 115);">transient:</span> Java transient keyword is used in serialization. If you define any data member as transient, it will not be serialized. <br><br>
    <span style="color: rgb(134, 19, 115);">try:</span> Java try keyword is used to start a block of code that will be tested for exceptions. The try block must be followed by either catch or finally block. <br><br>
    <span style="color: rgb(134, 19, 115);">void:</span> Java void keyword is used to specify that a method does not have a return value. <br><br>
    <span style="color: rgb(134, 19, 115);">volatile:</span> Java volatile keyword is used to indicate that a variable may change asynchronously. <br><br>
    <span style="color: rgb(134, 19, 115);">while:</span> Java while keyword is used to start a while loop. This loop iterates a part of the program several times. If the number of iteration is not fixed, it is recommended to use while loop. <br><br>
  </p>`;
});

Tut_C_11.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Constructors in Java</p>
  <p class="info">
    In Java, a constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.  <br>
    It is a special type of method which is used to initialize the object.  <br>
    Every time an object is created using the new() keyword, at least one constructor is called.  <br>
    It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.  <br>
    There are two types of constructors in Java: no-arg constructor, and parameterized constructor. <br>
    <span style="color: rgb(207, 207, 30);">Note: It is called constructor because it constructs the values at the time of object creation. It is not necessary to write a constructor for a class. It is because java compiler creates a default constructor if your class doesn't have any.</span>  <br>
  </p>
  <p id="Head">Rules for creating Java constructor</p>
  <p class="info">
    There are two rules defined for the constructor.  <br>
    1. &nbsp; Constructor name must be the same as its class name  <br>
    2. &nbsp; A Constructor must have no explicit return type  <br>
    3.&nbsp; A Java constructor cannot be abstract, static, final, and synchronized  <br>
    <span style="color: rgb(207, 207, 30);">Note: We can use access modifiers while declaring a constructor. It controls the object creation. In other words, we can have private, protected, public or default constructor in Java.</span>  <br>
  </p>
  <p id="Head">Types of Java constructors</p>
  <p class="info">
    There are three types of constructors in Java:  <br>
    > &nbsp; Default constructor (no-arg constructor)  <br>
    > &nbsp; Parameterized constructor  <br>
    > &nbsp; Copy constructor  <br>
    <img style="margin-left:10%;width: 50%;" src="/static/mainpage/Java_tut_img/java-constructor_django.png" alt=""> <br>
    <span style="color: green;">Java Default Constructor</span> <br>
    A constructor is called "Default Constructor" when it doesn't have any parameter. <br>
    Syntax of default constructor:  <br>
    <span style="color: blue;"> < class_name >(){}  </span>  <br>
    Example : 
  <span style="color: blue">  <br>
    <span style="color: rgb(82, 76, 76);">//Java Program to create and call a default constructor</span>    <br>
    class Bike1{    <br>
      <span style="color: rgb(82, 76, 76);">//creating a default constructor</span>    <br>
    Bike1(){System.out.println("Bike is created");}    <br>
    <span style="color: rgb(82, 76, 76);">//main method </span>   <br>
    public static void main(String args[]){    <br>
      <span style="color: rgb(82, 76, 76);">//calling a default constructor</span>    <br>
    Bike1 b=new Bike1();    <br>
    }    <br>
    }   <br>
  </span>
  <span style="color: rgb(105, 23, 23);">Output : <br>
    Bike is created</span> <br><span style="color: rgb(207, 207, 30);">Rule: If there is no constructor in a class, compiler automatically creates a default constructor.</span>  <br><br>

    <span style="color: green;">Java Parameterized Constructor</span> <br>
    A constructor which has a specific number of parameters is called a parameterized constructor. <br>
    The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also. <br>
    Syntax of default constructor:  <br>
    <span style="color: blue;"> < class_name >(parameters, ...., ...., ... ){}  </span>  <br>
    Example : 
  <span style="color: blue">  <br>
    <span style="color: rgb(82, 76, 76);">//Java Program to create and call a parameterized constructor</span>    <br>
    class Student4{   <br>
      int id;   <br>
      String name;   <br>
      <span style="color: rgb(82, 76, 76);">//creating a parameterized constructor</span>   <br>
      Student4(int i,String n){   <br>
      id = i;   <br>
      name = n;   <br>
      }   <br>
      <span style="color: rgb(82, 76, 76);">//method to display the values</span>  <br> 
      void display(){System.out.println(id+" "+name);}   <br>
     
      public static void main(String args[]){   <br>
        <span style="color: rgb(82, 76, 76);">//creating objects and passing values</span>   <br>
      Student4 s1 = new Student4(111,"Karan");   <br>
      Student4 s2 = new Student4(222,"Aryan");   <br>
      <span style="color: rgb(82, 76, 76);">//calling method to display the values of object</span>   <br>
      s1.display();   <br>
      s2.display();   <br>
     }   <br>
  } <br>
  </span>
  <span style="color: rgb(105, 23, 23);">Output : <br>
    111 Karan  <br>
    222 Aryan</span> <br>

    <span style="color: green;">Java Copy Constructor</span> <br>
    There is no copy constructor in Java. However, we can copy the values from one object to another like copy constructor in C++.  <br>
    There are many ways to copy the values of one object into another in Java. They are:  <br>
    ~ &nbsp; By constructor  <br>
    ~ &nbsp; By assigning the values of one object into another  <br>
    ~ &nbsp; By clone() method of Object class  <br>
    Example : 
  <span style="color: blue">  <br>
    <span style="color: rgb(82, 76, 76);">//Java program to initialize the values from one object to another object. </span>    <br>
    class Student6{  
      int id;  
      String name;  
      <span style="color: rgb(82, 76, 76);">//constructor to initialize integer and string</span>  
      Student6(int i,String n){  
      id = i;  
      name = n;  
      }  
      <span style="color: rgb(82, 76, 76);">//constructor to initialize another object</span>  
      Student6(Student6 s){  
      id = s.id;  
      name =s.name;  
      }  
      void display(){System.out.println(id+" "+name);}  
     
      public static void main(String args[]){  
      Student6 s1 = new Student6(111,"Karan");  
      Student6 s2 = new Student6(s1);  
      s1.display();  
      s2.display();  
     }  
  }  <br>
  </span>
  <span style="color: rgb(105, 23, 23);">Output : <br>
    111 Karan  <br>
    111 Aryan</span> <br><br>
</p> 
<p id="Head">Difference between constructor and method in Java</p> <br>
<img style="margin-left:10%;width: 70%;" src="/static/mainpage/Java_tut_img/constructor-vs-method-in-java_django.jpg" alt=""> <br>`;
});

Tut_C_12.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Operators in Java</p>
  <p class="info">
    Operator in Java is a symbol which is used to perform operations. For example: +, -, *, / etc. <br>
    There are many types of operators in Java which are given below: <br>
    1. &nbsp; Unary Operator <br>
    2. &nbsp; Arithmetic Operator <br>
    3. &nbsp; Shift Operator <br>
    4. &nbsp; Relational Operator <br>
    5. &nbsp; Bitwise Operator <br>
    6. &nbsp; Logical Operator <br>
    7. &nbsp; Ternary Operator <br>
    8. &nbsp; Assignment Operator <br>
  </p>
  <p id="Head">Java Operator Precedence</p>
  <img style="margin: 20px 50px; width: 90%;" src="/static/mainpage/C_tut_img/precedance_django.png" alt="">
  <p id="Head">Java Unary Operator</p>
  <p class="info">
    The Java unary operators require only one operand. Unary operators are used to perform various operations i.e.:
    <br>
    > &nbsp; incrementing/decrementing a value by one <br>
    > &nbsp; negating an expression <br>
    > &nbsp; inverting the value of a boolean <br>
    <span style="color: rgb(21, 88, 27);">Example:</span> <br>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample{ <br>
      public static void main(String args[]){ <br>
      int x=10; <br>
      int a=10; <br>
      int b=-10; <br>
      boolean c=true; <br>
      boolean d=false; <br>
      <span style="color: rgb(82, 78, 81);">// incrementing/decrementing a value by one</span> <br>
      System.out.println(x++); <br>
      System.out.println(++x); <br>
      System.out.println(x--); <br>
      System.out.println(--x); <br>
      <span style="color: rgb(82, 78, 81);">// negating an expression</span> <br>
      System.out.println(~a); <br>
      System.out.println(~b); <br>
      <span style="color: rgb(82, 78, 81);">// inverting the value of a boolean</span> <br>
      System.out.println(!c); <br>
      System.out.println(!d); <br>
      } } <br>
    </span>
    <span style="color: rgb(90, 9, 70);">Output: <br>
      10 <br>
      12 <br>
      12 <br>
      10 <br>
      -11 <br>
      9 <br>
      false <br>
      true <br>
    </span>
  </p>
  <p id="Head">Java Arithmetic Operators</p>
  <p class="info">
    Java arithmatic operators are used to perform addition, subtraction, multiplication, and division. They act as
    basic mathematical operations. <br>
    <span style="color: rgb(21, 88, 27);">Example : <br></span>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample{ <br>
      public static void main(String args[]){ <br>
      int a=10; <br>
      int b=5; <br>
      <span style="color: rgb(82, 78, 81);">// incrementing/decrementing a value by one</span> <br>
      System.out.println(a+b); <br>
      System.out.println(a-b); <br>
      System.out.println(a*b); <br>
      System.out.println(a/b); <br>
      System.out.println(a%b); <br>
      } } <br>
    </span>
    <span style="color: rgb(90, 9, 70);">Output: <br>
      15 <br>
      5 <br>
      50 <br>
      2 <br>
      0 <br>
    </span>
  </p>
  <p id="Head">Java Left Shift Operator</p>
  <p class="info">
    The Java left shift operator << is used to shift all of the bits in a value to the left side of a specified number
      of times. <br>
      <span style="color: rgb(21, 88, 27);">Example : <br></span>
      <span style="color: rgb(15, 12, 199);">
        class OperatorExample{ <br>
        public static void main(String args[]){ <br>
        System.out.println(10<<2); <br>
          System.out.println(10<<3); <br>
            } } <br>
      </span>
      <span style="color: rgb(90, 9, 70);">Output: <br>
        40 <br>
        80 <br>
      </span>
  </p>
  <p id="Head">Java Right Shift Operator</p>
  <p class="info">
    The Java right shift operator >> is used to move left operands value to right by the number of bits specified by
    the right operand. <br>
    <span style="color: rgb(21, 88, 27);">Example : <br></span>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample2{ <br>
      public static void main(String args[]){ <br>
      System.out.println(20>>2); <br>
      System.out.println(-20>>2); <br>
      <span style="color: rgb(82, 78, 81);">//For positive number, >> and >>> works same</span> <br>
      System.out.println(20>>>2); <br>
      <span style="color: rgb(82, 78, 81);">//For negative number, >>> changes parity bit (MSB) to 0 </span> <br>
      System.out.println(-20>>>2); <br>
      } } <br>
    </span>
    <span style="color: rgb(90, 9, 70);">Output: <br>
      5 <br>
      -5 <br>
      5 <br>
      1073741819 <br>
    </span>
  </p>
  <p id="Head">Logical && and Bitwise &</p>
  <p class="info">
    The logical && operator doesn't check second condition if first condition is false. It checks second condition
    only if first one is true. <br>
    The bitwise & operator always checks both conditions whether first condition is true or false. <br>
    <span style="color: rgb(21, 88, 27);">Example : <br></span>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample{ <br>
      public static void main(String args[]){ <br>
      int a=10; <br>
      int b=5; <br>
      int c=20; <br>
      System.out.println(a < b&&a < c); <span style="color: rgb(82, 78, 81);">//false && true = false </span> <br>
    System.out.println(a < b&a < c);<span style="color: rgb(82, 78, 81);">//false && true = false </span> <br>
      } } <br>
      </span>
      <span style="color: rgb(90, 9, 70);">Output: <br>
        false <br>
        false <br>
      </span>
  </p>
  <p id="Head">Logical || and Bitwise |</p>
  <p class="info">
    The logical || operator doesn't check second condition if first condition is true. It checks second condition only
    if first one is false. <br>
    The bitwise | operator always checks both conditions whether first condition is true or false. <br>
    <span style="color: rgb(21, 88, 27);">Example : <br></span>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample{ <br>
      public static void main(String args[]){ <br>
      int a=10; <br>
      int b=5; <br>
      int c=20; <br>
      System.out.println(a < b||a < c); <span style="color: rgb(82, 78, 81);">//true || true = true </span> <br>
    System.out.println(a < b&a < c);<span style="color: rgb(82, 78, 81);">//true | true = true
      //|| vs | </span> <br>
      } } <br>
      </span>
      <span style="color: rgb(90, 9, 70);">Output: <br>
        true <br>
        true <br>
      </span>
  </p>
  <p id="Head">Java Ternary Operator</p>
  <p class="info">
    Java Ternary operator is used as one liner replacement for if-then-else statement and used a lot in Java
    programming. it is the only conditional operator which takes three operands. <br>
    <span style="color: rgb(21, 88, 27);">Example : <br></span>
    <span style="color: rgb(15, 12, 199);">
      class OperatorExample{ <br>
      public static void main(String args[]){ <br>
      int a=2; <br>
      int b=5; <br>
      int min=(a < b)?a:b; <br>
        System.out.println(min); <br>
        } } <br>
    </span>
    <span style="color: rgb(90, 9, 70);">Output: <br>
      2 <br>
    </span>
  </p>
  <p id="Head">Java ShortHand Operators</p>
  <p class="info">
    Shorthand operators are used to update the value of a variable in an easy way. There are various assignment
    operators : <br>
    <table>
      <tr class="yoast-text-mark">
        <td class="yoast-text-mark">
          <h3><strong>Operator</strong></h3>
        </td>
        <td class="yoast-text-mark">
          <h3><strong>Description</strong></h3>
        </td>
        <td class="yoast-text-mark">
          <h3><strong>Example</strong></h3>
        </td>
      </tr>
      <tr class="yoast-text-mark">
        <td class="yoast-text-mark" style="text-align: center;">=</td>
        <td class="yoast-text-mark">It is used to assign some value to a variable.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10</strong></span>
        </td>
      </tr>
      <tr class="yoast-text-mark">
        <td class="yoast-text-mark" style="text-align: center;">+=</td>
        <td class="yoast-text-mark">It is used to increment the value of a numeric variable by adding some value to
          the existing value.</td>
        <td class="yoast-text-mark"><span style="color: #000080;"><strong><span
                class="yoast-text-mark">A=10</span></strong></span><br>
          <span style="color: #000080;"><strong><span class="yoast-text-mark">A+=5&nbsp;
                [A=A+5]</span></strong></span><br>
          <span style="color: #000080;"><strong><span class="yoast-text-mark">A=15</span></strong></span>
        </td>
      </tr>
      <tr class="yoast-text-mark">
        <td class="yoast-text-mark" style="text-align: center;">-=</td>
        <td class="yoast-text-mark">It is used to decrement the existing value of a numeric variable by subtracting
          some value from the existing value.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark"
            style="color: #000080;"><strong>A=10</strong></span><br>
          <span class="yoast-text-mark" style="color: #000080;"><strong>A-=5&nbsp; [A=A-5]</strong></span><br>
          <span class="yoast-text-mark" style="color: #000080;"><strong>A=5</strong></span>
        </td>
      </tr>
      <tr class="yoast-text-mark">
        <td class="yoast-text-mark" style="text-align: center;">*=</td>
        <td class="yoast-text-mark">It is used to multiply existing value of a numeric variable by another value and
          then store the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A*=5&nbsp; [A=A*5]<br>
              A=50<br>
            </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">/=</td>
        <td class="yoast-text-mark">It is used to divide the existing value of a numeric variable by another value and
          then store the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A/=5&nbsp; [A=A/5]<br>
              A=2 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">%=</td>
        <td class="yoast-text-mark">It is used to divide the existing value of a numeric variable by another value and
          then storing the remainder in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A%=5&nbsp; [A=A%5]<br>
              A=0 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">&amp;=</td>
        <td class="yoast-text-mark">It is used to apply bitwise AND operator on existing value of a numeric variable
          by another value and then storing the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A&amp;=7&nbsp; [A=A&amp;7]<br>
              A=2 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">|=</td>
        <td class="yoast-text-mark">It is used to apply bitwise OR operator on existing value of a numeric variable by
          another value and then storing the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A|=7&nbsp; [A=A|7]<br>
              A=15 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">^=</td>
        <td class="yoast-text-mark">It is used to apply bitwise XOR operator on existing value of a numeric variable
          by another value and then storing the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A^=7&nbsp; [A=A^7]<br>
              A=13 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">&lt;&lt;=</td>
        <td class="yoast-text-mark">It is used to apply Bitwise LEFT SHIFT operator on existing value of a numeric
          variable by another value and then storing the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A&lt;&lt;=1&nbsp; [A=A&lt;&lt;1]<br>
              A=20 </strong></span></td>
      </tr>
      <tr>
        <td class="yoast-text-mark" style="text-align: center;">&gt;&gt;=</td>
        <td class="yoast-text-mark">It is used to apply Bitwise RIGHT SHIFT operator on existing value of a numeric
          variable by another value and then storing the result in it.</td>
        <td class="yoast-text-mark"><span class="yoast-text-mark" style="color: #000080;"><strong>A=10<br>
              A&gt;&gt;=1&nbsp; [A=A&gt;&gt;1]<br>
              A=5 </strong></span></td>
      </tr>
    </table>`;
});

Tut_C_13.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">1) this keyword in java</p>
  <p class="info">
    There can be a lot of usage of java this keyword. In java, this is a reference variable that refers to the current object. <br>
    <img style="margin-left:10%;width: 50%;" src="/static/mainpage/Java_tut_img/thisr_django.jpg" alt=""> <br><br>
    <span style="color: green;">Usage of java this keyword</span> <br>
    Here is given the 6 usage of java this keyword.  <br>
    1. &nbsp; this can be used to refer current class instance variable.  <br>
    2. &nbsp; this can be used to invoke current class method (implicitly)  <br>
    3. &nbsp; this() can be used to invoke current class constructor.  <br>
    4. &nbsp; this can be passed as an argument in the method call.  <br>
    5. &nbsp; this can be passed as argument in the constructor call.  <br>
    6. &nbsp; this can be used to return the current class instance from the method.  <br>
  </p>
<br>

  <p id="Head">2) super keyword in java</p>
  <p class="info">
    The super keyword in Java is a reference variable which is used to refer immediate parent class object.  <br>
    Whenever you create the instance of subclass, an instance of parent class is created implicitly which is referred by super reference variable.  <br><br>
    <span style="color: green;">Usage of Java super Keyword</span> <br>
    ~ &nbsp; super can be used to refer immediate parent class instance variable.  <br>
    ~ &nbsp; super can be used to invoke immediate parent class method.  <br>
    ~ &nbsp; super() can be used to invoke immediate parent class constructor.    <br>
  </p>
  <img style="margin-left:10%;width: 50%;" src="/static/mainpage/Java_tut_img/usage-of-java-super_django.jpg" alt=""> <br><br>`;
});

Tut_C_14.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Inheritance in Java</p>
  <p class="info">
    Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent
    object. It is an important part of OOPs (Object Oriented programming system). <br><br>
    The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When
    you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add
    new methods and fields in your current class also. <br><br>
    Inheritance represents the IS-A relationship which is also known as a parent-child relationship. <br>
    <span style="color: green;">Terms used in Inheritance</span> <br>
    1. &nbsp; Class: A class is a group of objects which have common properties. It is a template or blueprint from
    which objects are created. <br>
    2. &nbsp; Sub Class/Child Class: Subclass is a class which inherits the other class. It is also called a derived
    class, extended class, or child class. <br>
    3. &nbsp; Super Class/Parent Class: Superclass is the class from where a subclass inherits the features. It is
    also called a base class or a parent class. <br>
    4. &nbsp; Reusability: As the name specifies, reusability is a mechanism which facilitates you to reuse the fields
    and methods of the existing class when you create a new class. You can use the same fields and methods already
    defined in the previous class. <br>
    <span style="color: green;">The syntax of Java Inheritance</span> <br>
    <span style="color: rgb(16, 67, 145);">
      class Subclass-name extends Superclass-name <br>
      { <br>
      <span style="color: rgb(71, 72, 73);">//methods and fields</span> <br>
      } <br>
    </span>
    The extends keyword indicates that you are making a new class that derives from an existing class. The meaning of
    "extends" is to increase the functionality. <br>
    In the terminology of Java, a class which is inherited is called a parent or superclass, and the new class is
    called child or subclass. <br>
  </p>
  <p id="Head">Types of inheritance in java</p>
  <p class="info">
    On the basis of class, there can be three types of inheritance in java: single, multilevel and hierarchical. <br>
    <img style="margin-left:10%;width: 73%;" src="/static/mainpage/Java_tut_img/Java-Inheritance_django.png" alt=""> <br><br>
  </p>
  <p id="Head">Single Inheritance in java</p>
  <p class="info">
    When a single class gets derived from its base class, then this type of inheritance is termed as single
    inheritance. The figure drawn above has class A as the base class, and class B gets derived from that base class.
    <br>
    Example :
    <span style="color: blue"> <br>
      class Teacher { <br>
      void teach() { <br>
      System.out.println("Teaching subjects"); <br>
      } <br>
      } <br>
      class Students extends Teacher { <br>
      void listen() { <br>
      System.out.println("Listening to teacher"); <br>
      } <br>
      } <br>
      class CheckForInheritance { <br>
      public static void main(String args[]) { <br>
      Students s1 = new Students(); <br>
      s1.teach(); <br>
      s1.listen(); <br>
      } <br>
      } <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      Teaching subjects <br>
      Listening to teacher </span> <br>
  </p>
  <p id="Head">Multilevel Inheritance in java</p>
  <p class="info">
    In this type of inheritance, a derived class gets created from another derived class and can have any number of
    levels. <br>
    Example :
    <span style="color: blue"> <br>
      class Teacher { <br>
      void teach() { <br>
      System.out.println("Teaching subject"); <br>
      } <br>
      } <br>
      class Student extends Teacher { <br>
      void listen() { <br>
      System.out.println("Listening"); <br>
      } <br>
      } <br>
      class homeTution extends Student { <br>
      void explains() { <br>
      System.out.println("Does homework"); <br>
      } <br>
      } <br>
      class CheckForInheritance { <br>
      public static void main(String argu[]) { <br>
      homeTution h = new himeTution(); <br>
      h.explains(); <br>
      d.teach(); <br>
      d.listen(); <br>
      } <br>
      } <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      Does homework <br>
      Teaching subjects <br>
      Listening to teacher</span> <br>
  </p>
  <p id="Head">Hierarchical Inheritance in java</p>
  <p class="info">
    In this type of inheritance, there are more than one derived classes which get created from one single base class.
    <br>
    Example :
    <span style="color: blue"> <br>
      <span style="color: rgb(82, 76, 76);">//Java Program to create and call a default constructor</span> <br>
      class Teacher { <br>
      void teach() { <br>
      System.out.println("Teaching subject"); <br>
      } <br>
      } <br>
      class Student extends Teacher { <br>
      void listen() { <br>
      System.out.println("Listening"); <br>
      } <br>
      } <br>
      class Principal extends Teacher { <br>
      void evaluate() { <br>
      System.out.println("Evaluating"); <br>
      } <br>
      } <br>
      class CheckForInheritance { <br>
      public static void main(String argu[]) { <br>
      Principal p = new Principal(); <br>
      p.evaluate(); <br>
      p.teach(); <br>
      <span style="color: rgb(82, 76, 76);">// p.listen(); will produce an error</span> <br>
      } <br>
      } <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      Evaluating <br>
      Teaching subject</span> <br>
  </p>`;
});

Tut_C_15.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Constant in Java</p>
  <p class="info">
    A constant is a variable whose value cannot change once it has been assigned. Java doesn't have built-in support for constants.  <br>
    A constant can make our program more easily read and understood by others. In addition, a constant is cached by the JVM as well as our application, so using a constant can improve performance.  <br>
    To define a variable as a constant, we just need to add the keyword “final” in front of the variable declaration.  <br><br>
    <span style="color: rgb(44, 95, 29);">Syntax : </span><br>
    <span style="color: rgb(35, 21, 228);">final float pi = 3.14f; </span><br><br>
    The above statement declares the float variable “pi” as a constant with a value of 3.14f. We cannot change the value of "pi" at any point in time in the program. Later if we try to do that by using a statement like “pi=5.25f”, Java will throw errors at compile time itself. It is not mandatory that we need to assign values of constants during initialization itself.  <br><br>
    In the below example, we can define the primitive data type (byte, short, int, long, float, double, boolean and char) variables as constants by just adding the keyword “final” when we declare the variable.  <br>
    <span style="color: rgb(35, 21, 228);">public class ConstantsDemo {  <br>
      public static void main(String args[]) {  <br>
         final int var = 100;  <br>
         final int var1;  <br>
         var6 = -112;  <br>
         <span style="color: rgb(49, 47, 47);">// If you try to change the name you will get error. <br></span>
         System.out.println("value of var5 : "+var);  <br>
         System.out.println("value of var6 : "+var1);  <br>
      }  <br>
   } </span><br>
    <span style="color: rgb(155, 23, 23);">Output :   <br>
      value of var : 100  <br>
      value of var1 : -112  <br>
    </span>
  </p>`;
});

Tut_C_16.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Abstract class in Java</p>
  <p class="info">
    A class which is declared with the abstract keyword is known as an abstract class in Java. It can have abstract and non-abstract methods (method with the body).  <br>
    Before learning the Java abstract class, let's understand the abstraction in Java first.  <br>
    <span style="color: green;">Abstraction in Java</span>  <br>
    Abstraction is a process of hiding the implementation details and showing only functionality to the user.  <br>
    Another way, it shows only essential things to the user and hides the internal details, for example, sending SMS where you type the text and send the message. You don't know the internal processing about the message delivery.  <br>
    Abstraction lets you focus on what the object does instead of how it does it.  <br>
    <img style="margin-left:10%;width: 70%;" src="/static/mainpage/Java_tut_img/abstract-class-in-java_django.jpg" alt=""> <br><br>
    <span style="color: green;">Abstract Method in Java</span>  <br>
    A method which is declared as abstract and does not have implementation is known as an abstract method.  <br>
    Syntax of abstract method  <br>
    <span style="color: blue;">
      abstract void printStatus();  <br>
    </span>
    Example :
    <span style="color: blue"> <br>
      abstract class Bike{  <br>
        abstract void run();  <br>
      }  <br>
      class Honda4 extends Bike{  <br>
      void run(){System.out.println("running safely");}  <br>
      public static void main(String args[]){  <br>
       Bike obj = new Honda4();  <br>
       obj.run();  <br>
      }  <br>
      } <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      running safely</span> <br>
  </p>`;
});

Tut_C_17.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Exception Handling in Java</p>
  <p class="info">
    The Exception Handling in Java is one of the powerful mechanism to handle the runtime errors so that normal flow
    of the application can be maintained. <br>
    In this page, we will learn about Java exceptions, its type and the difference between checked and unchecked
    exceptions. <br>
    <span style="color: green;">What is Exception in Java</span> <br>
    Dictionary Meaning: Exception is an abnormal condition. <br>
    In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at
    runtime.<br>
  </p>
  <p id="Head">Hierarchy of Java Exception classes</p>
  <p class="info">
    The java.lang.Throwable class is the root class of Java Exception hierarchy which is inherited by two subclasses:
    Exception and Error. A hierarchy of Java Exception classes are given below: <br>
    <img style="margin-left:10%;width: 70%;" src="/static/mainpage/Java_tut_img/throwable_django.png" alt=""> <br><br>
    <span style="color: green;">Types of Java Exceptions</span> <br>
    There are mainly two types of exceptions: checked and unchecked. Here, an error is considered as the unchecked
    exception. According to Oracle, there are three types of exceptions: <br>
    ~ &nbsp; Checked Exception <br>
    ~ &nbsp; Unchecked Exception <br>
    ~ &nbsp; Error <br>
    <img style="margin-left:10%;width: 50%;" src="/static/mainpage/Java_tut_img/types-of-java-exceptions_django.jpg" alt="">
    <br><br>
  </p>
  <p id="Head">Difference between Checked and Unchecked Exceptions</p>
  <p class="info">
    <span style="color: green;">1) Checked Exception</span> <br>
    The classes which directly inherit Throwable class except RuntimeException and Error are known as checked
    exceptions e.g. IOException, SQLException etc. Checked exceptions are checked at compile-time. <br>
    <span style="color: green;">2) Unchecked Exception</span> <br>
    The classes which inherit RuntimeException are known as unchecked exceptions e.g. ArithmeticException,
    NullPointerException, ArrayIndexOutOfBoundsException etc. Unchecked exceptions are not checked at compile-time,
    but they are checked at runtime. <br>
    <span style="color: green;">3) Error</span> <br>
    Error is irrecoverable e.g. OutOfMemoryError, VirtualMachineError, AssertionError etc. <br>
  </p>
  <p id="Head">Java Exception Keywords</p>
  <p class="info">
    There are 5 keywords which are used in handling exceptions in Java. <br>
  <table>
    <tr>
      <th>Keyword</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>try</td>
      <td>The "try" keyword is used to specify a block where we should place exception code. The try block must be
        followed by either catch or finally. It means, we can't use try block alone.</td>
    </tr>
    <tr>
      <td>catch</td>
      <td>The "catch" block is used to handle the exception. It must be preceded by try block which means we can't use
        catch block alone. It can be followed by finally block later.</td>
    </tr>
    <tr>
      <td>finally</td>
      <td>The "finally" block is used to execute the important code of the program. It is executed whether an
        exception is handled or not.</td>
    </tr>
    <tr>
      <td>throw</td>
      <td>The "throw" keyword is used to throw an exception.</td>
    </tr>
    <tr>
      <td>throws</td>
      <td>The "throws" keyword is used to declare exceptions. It doesn't throw an exception. It specifies that there
        may occur an exception in the method. It is always used with method signature.</td>
    </tr>
  </table>
  </p>
  <p class="info">
  Example :  
  <span style="color: blue"> <br>
    public class JavaExceptionExample{    <br>
      public static void main(String args[]){    <br>
       try{    <br>
        <span style="color: rgb(65, 63, 63);">//code that may raise exception</span>   <br> 
          int data=100/0;    <br>
       }catch(ArithmeticException e){System.out.println(e);}    <br>
       <span style="color: rgb(65, 63, 63);">//rest code of the program </span>    <br>
       System.out.println("rest of the code...");    <br>
      }    <br>
    }   <br>
  </span>
  <span style="color: rgb(105, 23, 23);">Output : <br>
    Exception in thread main java.lang.ArithmeticException:/ by zero  <br>
    rest of the code...</span> <br>
  </p>
  `;
});

Tut_C_18.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Multithreading in Java</p>
  <p class="info">
    Multithreading in Java is a process of executing multiple threads simultaneously.  <br>
    A thread is a lightweight sub-process, the smallest unit of processing. Multiprocessing and multithreading, both are used to achieve multitasking.  <br>
    However, we use multithreading than multiprocessing because threads use a shared memory area. They don't allocate separate memory area so saves memory, and context-switching between the threads takes less time than process.  <br>
    Java Multithreading is mostly used in games, animation, etc.  <br><br>
    <span style="color: green;">Advantages of Java Multithreading</span> <br>
    1) It doesn't block the user because threads are independent and you can perform multiple operations at the same time.  <br>
    2) You can perform many operations together, so it saves time.  <br>
    3) Threads are independent, so it doesn't affect other threads if an exception occurs in a single thread.  <br>
  </p>
  <p id="Head">What is Thread in java</p>
  <p class="info">
    A thread is a lightweight subprocess, the smallest unit of processing. It is a separate path of execution.  <br>
    Threads are independent. If there occurs exception in one thread, it doesn't affect other threads. It uses a shared memory area.  <br>
    As shown in the above figure, a thread is executed inside the process. There is context-switching between the threads. There can be multiple processes inside the OS, and one process can have multiple threads.  <br>
    <span style="color: rgb(194, 194, 47);">Note: At a time one thread is executed only.</span>
  </p>
  <p id="Head">Java Thread class</p>
  <p class="info">
    Java provides Thread class to achieve thread programming. Thread class provides constructors and methods to create and perform operations on a thread. Thread class extends Object class and implements Runnable interface.  <br>
  </p>
  <p id="Head">Java Thread Methods</p>
  <table style="width: 99%;">
    <tr>
      <th>S.N.</th>
      <th>Modifier and Type</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>1)</td>
      <td>void</td>
      <td>start()</td>
      <td>It is used to start the execution of the thread.</td>
    </tr>
    <tr>
      <td>2)</td>
      <td>void</td>
      <td>run()</td>
      <td>It is used to do an action for a thread.</td>
    </tr>
    <tr>
      <td>3)</td>
      <td>static void</td>
      <td>sleep()</td>
      <td>It sleeps a thread for the specified amount of time.</td>
    </tr>
    <tr>
      <td>4)</td>
      <td>static Thread</td>
      <td>currentThread()</td>
      <td>It returns a reference to the currently executing thread object.</td>
    </tr>
    <tr>
      <td>5)</td>
      <td>void</td>
      <td>join()</td>
      <td>It waits for a thread to die.</td>
    </tr>
    <tr>
      <td>6)</td>
      <td>int</td>
      <td>getPriority()</td>
      <td>It returns the priority of the thread.</td>
    </tr>
    <tr>
      <td>7)</td>
      <td>void</td>
      <td>setPriority()</td>
      <td>It changes the priority of the thread.</td>
    </tr>
    <tr>
      <td>8)</td>
      <td>String</td>
      <td>getName()</td>
      <td>It returns the name of the thread.</td>
    </tr>
    <tr>
      <td>9)</td>
      <td>void</td>
      <td>setName()</td>
      <td>It changes the name of the thread.</td>
    </tr>
    <tr>
      <td>10)</td>
      <td>long</td>
      <td>getId()</td>
      <td>It returns the id of the thread.</td>
    </tr>
    <tr>
      <td>11)</td>
      <td>boolean</td>
      <td>isAlive()</td>
      <td>It tests if the thread is alive.</td>
    </tr>
    <tr>
      <td>12)</td>
      <td>static void</td>
      <td>yield()</td>
      <td>It causes the currently executing thread object to pause and allow other threads to execute temporarily.</td>
    </tr>
    <tr>
      <td>13)</td>
      <td>void</td>
      <td>suspend()</td>
      <td>It is used to suspend the thread.</td>
    </tr>
    <tr>
      <td>14)</td>
      <td>void</td>
      <td>resume()</td>
      <td>It is used to resume the suspended thread.</td>
    </tr>
    <tr>
      <td>15)</td>
      <td>void</td>
      <td>stop()</td>
      <td>It is used to stop the thread.</td>
    </tr>
    <tr>
      <td>16)</td>
      <td>void</td>
      <td>destroy()</td>
      <td>It is used to destroy the thread group and all of its subgroups.</td>
    </tr>
    <tr>
      <td>17)</td>
      <td>boolean</td>
      <td>isDaemon()</td>
      <td>It tests if the thread is a daemon thread.</td>
    </tr>
    <tr>
      <td>18)</td>
      <td>void</td>
      <td>setDaemon()</td>
      <td>It marks the thread as daemon or user thread.</td>
    </tr>
    <tr>
      <td>19)</td>
      <td>void</td>
      <td>interrupt()</td>
      <td>It interrupts the thread.</td>
    </tr>
    <tr>
      <td>20)</td>
      <td>boolean</td>
      <td>isinterrupted()</td>
      <td>It tests whether the thread has been interrupted.</td>
    </tr><tr>
      <td>21)</td>
      <td>static boolean</td>
      <td>interrupted()</td>
      <td>It tests whether the current thread has been interrupted.</td>
    </tr>
    <tr>
      <td>22)</td>
      <td>static int</td>
      <td>activeCount()</td>
      <td>It returns the number of active threads in the current thread's thread group.</td>
    </tr>
    <tr>
      <td>23)</td>
      <td>void</td>
      <td>checkAccess()</td>
      <td>It determines if the currently running thread has permission to modify the thread.</td>
    </tr>
    <tr>
      <td>24)</td>
      <td>static boolean</td>
      <td>holdLock()</td>
      <td>It returns true if and only if the current thread holds the monitor lock on the specified object.</td>
    </tr>
    <tr>
      <td>25)</td>
      <td>static void</td>
      <td>dumpStack()</td>
      <td>It is used to print a stack trace of the current thread to the standard error stream.</td>
    </tr>
    <tr>
      <td>26)</td>
      <td>StackTraceElement[]</td>
      <td>getStackTrace()</td>
      <td>It returns an array of stack trace elements representing the stack dump of the thread.</td>
    </tr>
    <tr>
      <td>27)</td>
      <td>static int</td>
      <td>enumerate()</td>
      <td>It is used to copy every active thread's thread group and its subgroup into the specified array.</td>
    </tr>
    <tr>
      <td>28)</td>
      <td>Thread.State</td>
      <td>getState()</td>
      <td>It is used to return the state of the thread.</td>
    </tr>
    <tr>
      <td>29)</td>
      <td>ThreadGroup</td>
      <td>getThreadGroup()</td>
      <td>It is used to return the thread group to which this thread belongs</td>
    </tr>
    <tr>
      <td>30)</td>
      <td>String</td>
      <td>toString()</td>
      <td>It is used to return a string representation of this thread, including the thread's name, priority, and thread group.</td>
    </tr>
    <tr>
      <td>31)</td>
      <td>void</td>
      <td>notify()</td>
      <td>It is used to give the notification for only one thread which is waiting for a particular object.</td>
    </tr>
    <tr>
      <td>32)</td>
      <td>void</td>
      <td>notifyAll()</td>
      <td>It is used to give the notification to all waiting threads of a particular object.</td>
    </tr>
    <tr>
      <td>33)</td>
      <td>void</td>
      <td>setContextClassLoader()</td>
      <td>It sets the context ClassLoader for the Thread.</td>
    </tr>
    <tr>
      <td>34)</td>
      <td>ClassLoader</td>
      <td>getContextClassLoader()</td>
      <td>It returns the context ClassLoader for the thread.</td>
    </tr>
    <tr>
      <td>35)</td>
      <td>static Thread.UncaughtExceptionHandler</td>
      <td>getDefaultUncaughtExceptionHandler()</td>
      <td>It returns the default handler invoked when a thread abruptly terminates due to an uncaught exception.</td>
    </tr>
    <tr>
      <td>36)</td>
      <td>static void	</td>
      <td>setDefaultUncaughtExceptionHandler()</td>
      <td>It sets the default handler invoked when a thread abruptly terminates due to an uncaught exception.</td>
    </tr>
    </table>`;
});

Tut_C_19.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java if else Statement</p>
  <p class="info">
    The Java if statement is used to test the condition. It checks boolean condition: true or false. There are various types of if statement in Java. <br>
      > &nbsp;If statement <br>
      > &nbsp;If-else statement <br>
      > &nbsp;If else-if ladder <br>
      > &nbsp;Nested if <br>
  </p>
  <p id="Head">If Statement</p>
  <p class="info">
    The Java if statement tests the condition. It executes the if block if condition is true. <br> The syntax of the if statement is given below. <br>
      <span style="color: blue;">
          if(condition){  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
          } <br>
      </span>
      <span>Flowchart of if statement </span><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if_django.png" alt="">
      <br>
      Example of if statement :
      <span style="color: blue;">
          <br>
          public class IfExample {   <br>
            public static void main(String[] args) {  <br>
                int age=20;   <br>
                if(age>18){   <br>
                    System.out.print("Age is greater than 18");   <br>
            }   <br>
            }   } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          Age is greater than 18</span> <br>
  </p>
  <p id="Head">If-else Statement</p>
  <p class="info">
    The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed. <br>
      <span style="color: blue;">
          if(expression){  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is true </span> <br>
          } <br>
          else{  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is false  </span> <br>
          } <br>
      </span>
      <span>Flowchart of if-else statement</span><br><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else_django.png" alt="">
      <br>
      Example of if-else statement :
      <span style="color: blue;">
          <br>
          public class IfElseExample {  <br>
            public static void main(String[] args) {  <br>
                int number=13;    <br>
                if(number%2==0){  <br>
                    System.out.println("even number");  <br>
                }else{  <br>
                    System.out.println("odd number");  <br>
              }  <br>
            }} <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          odd number</span> <br>
  </p>
  <p id="Head">If else-if ladder Statement</p>
  <p class="info">
      The if-else-if ladder statement is an extension to the if-else statement. It is used in the scenario where there are multiple cases to be performed for different conditions. In if-else-if ladder statement, if a condition is true then the statements defined in the if block will be executed, otherwise if some other condition is true then the statements defined in the else-if block will be executed, at the last if none of the condition is true then the statements defined in the else block will be executed. There are multiple else-if blocks possible. <br>
      <span style="color: blue;">
          if(condition1){  <br>
              <span style="color: rgb(102, 102, 104);">//code to be executed if condition is true </span> <br>  
              }else if(condition2){ <br>
              <span style="color: rgb(102, 102, 104);">//code to be executed if condition2 is true</span>   <br>
              }  <br>
              else if(condition3){ <br>
              <span style="color: rgb(102, 102, 104);">//code to be executed if condition3 is true</span>  <br>
              }  <br>
              ...  <br>
              else{  <br>
              <span style="color: rgb(102, 102, 104);">//code to be executed if all the conditions are false</span>  <br>
              }  <br>
      </span>
      <span>Flowchart of else-if ladder statement</span><br><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else-if_django.png" alt="">
      <br>
      The example of an if-else-if statement :
      <span style="color: blue;">
          <br>
          public class IfElseIfExample {    <br>
            public static void main(String[] args) {    <br>
                int marks=65;    <br>
                  
                if(marks<  50){    <br>
                    System.out.println("fail");    <br>
                }    <br>
                else if(marks >= 50 && marks< 60){    <br>
                    System.out.println("D grade");    <br>
                }    <br>
                else if(marks>=60 && marks< 70){    <br>
                    System.out.println("C grade");    <br>
                }    <br>
                else if(marks>=70 && marks< 80){    <br>
                    System.out.println("B grade");    <br>
                }    <br>
                else if(marks>=80 && marks< 90){    <br>
                    System.out.println("A grade");    <br>
                }else if(marks>=90 && marks< 100){    <br>
                    System.out.println("A+ grade");    <br>
                }else{    <br>
                    System.out.println("Invalid!");    <br>
                }    <br>
            }  }<br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          C grade</span> <br>
  </p>`;
});

Tut_C_20.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java do-while Loop</p>
  <p class="info">
    The Java do-while loop is used to iterate a part of the program several times. If the number of iteration is not fixed and you must have to execute the loop at least once, it is recommended to use do-while loop.
<br>
    The Java do-while loop is executed at least once because condition is checked after loop body. <br>
      The syntax of do-while loop is given below: <br>
      <span style="color: blue;">
          do{ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
          }while(condition); <br>
      </span>
      Flowchart of do while loop
  </p>
  <img style="margin-left: 20%; width: 50%;" src="/static/mainpage/C_tut_img/do-while_django.png" alt="">
  <br>
  </p>
  <p class="info">
      There is given the simple program of do while loop where we are printing the table of 2. <br>
      <span style="color: blue;">
          <br>
          public class DoWhileExample {  <br>
            public static void main(String[] args) {  <br>
          int i=2; <br>
          do{ <br>
            System.out.println(i); <br>
          i = i + 2; <br>
          }while(i<=20); <br>
        }  } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          2 <br>
          4 <br>
          6 <br>
          8 <br>
          10 <br>
          12 <br>
          14 <br>
          16 <br>
          18 <br>
          20 <br>
      </span> <br>
  </p>`;
});

Tut_C_21.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java String</p>
  <p class="info">
    In Java, string is basically an object that represents sequence of char values. An array of characters works same as Java string. <br> For example:  <br>
    <span style="color: blue;">char[] ch={'I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'v', 'e'};   <br>
      String s=new String(ch);  </span>
      is same as: <br>
      <span style="color: blue;">String s="Innovative";  </span>
      <br><br>
      There are two ways to create String object:   <br>
      1. &nbsp; By string literal  <br>
      2. &nbsp; By new keyword  <br>
      <span style="color: rgb(22, 92, 49);">1) String Literal</span> <br>
      Java String literal is created by using double quotes. For Example:  <br>
      <span style="color: blue;">String s="welcome";   </span>  <br>
      Each time you create a string literal, the JVM checks the "string constant pool" first. If the string already exists in the pool, a reference to the pooled instance is returned. If the string doesn't exist in the pool, a new string instance is created and placed in the pool. For example: <br>
      <span style="color: blue;"> String s1="Welcome";   <br>
        String s2="Welcome";<span style="color: rgb(74, 74, 78);">//It doesn't create a new instance</span></span>  <br>
        <span style="color: rgb(195, 207, 20);">Note: String objects are stored in a special memory area known as the "string constant pool".</span>  <br>
        <span style="color: rgb(22, 92, 49);">2) By new keyword</span> <br>
        <span style="color: blue;"> String s=new String("Welcome"); <br><span style="color: rgb(74, 74, 78);">//creates two objects and one reference variable </span></span>  <br>
        In such case, JVM will create a new string object in normal (non-pool) heap memory, and the literal "Welcome" will be placed in the string constant pool. The variable s will refer to the object in a heap (non-pool).  <br>
  </p>
  <p id="Head">Java String charAt()</p>
  <p class="info">
    The java string charAt() method returns a char value at the given index number.  <br>
    The index number starts from 0 and goes to n-1, where n is length of the string. It returns StringIndexOutOfBoundsException if given index number is greater than or equal to this string length or a negative number.  <br>
    Example :   <br>
    <span style="color: blue;">
      public class CharAtExample{    <br>
        public static void main(String args[]){    <br>
        String name="Innovative-Learning";  <br>  
        char ch=name.charAt(4);   <br>
        System.out.println(ch);    <br>
        }}    <br>
    </span>  
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
    v</span>  <br>
  </p>
  <p id="Head">Java String indexOf()</p>
  <p class="info">
    TThe java string indexOf() method returns index of given character value or substring. If it is not found, it returns -1. The index counter starts from zero. <br>
    <br>
    Parameters :  <br>
    > &nbsp; ch: char value i.e. a single character e.g. 'a' <br>
    > &nbsp; fromIndex: index position from where index of the char value or substring is retured <br>
    > &nbsp; substring: substring to be searched in this string <br>
    Example :  <br>
    <span style="color: blue;">
      public class IndexOfExample{    <br>
        public static void main(String args[]){    <br>
        String s1="this is index of example";  <br>
        int index1=s1.indexOf("is");<span style="color: rgb(66, 64, 64);">//returns the index of is substring</span>    <br>
        int index2=s1.indexOf("index");<span style="color: rgb(66, 64, 64);">//returns the index of index substring</span>    <br>
        System.out.println(index1+"  "+index2);<span style="color: rgb(66, 64, 64);">//2 8 </span>   <br>
          <span style="color: rgb(66, 64, 64);">//passing substring with from index</span>           <br>   
        int index3=s1.indexOf("is",4);<span style="color: rgb(66, 64, 64);">//returns the index of is substring after 4th index</span>    <br>
        System.out.println(index3);<span style="color: rgb(66, 64, 64);">//5 i.e. the index of another is</span>    <br>
        <span style="color: rgb(66, 64, 64);">//passing char value </span>   <br>
        int index4=s1.indexOf('s');<span style="color: rgb(66, 64, 64);">//returns the index of s char value</span>    <br>
        System.out.println(index4);<span style="color: rgb(66, 64, 64);">//3</span>    <br>
        }}   <br>
    </span>  
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      2  8  <br>
      5  <br>
      3</span>  <br>
  </p>
  <p id="Head">Java String length()</p>
  <p class="info">
    The java string length() method length of the string. It returns count of total number of characters. The length of java string is same as the unicode code units of the string.  <br>
    Example :   <br>
    <span style="color: blue;">
      public class LengthExample{    <br>
        public static void main(String args[]){   <br> 
        String s1="innovative";    <br>
        String s2="python";    <br>
        System.out.println("string length is: "+s1.length());<span style="color: rgb(66, 64, 64);">//10 is the length of innovative string</span>    <br>
        System.out.println("string length is: "+s2.length());<span style="color: rgb(66, 64, 64);">//6 is the length of python string</span>    <br>
        }}    <br>
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      string length is: 10  <br>
      string length is: 6</span>  <br>
  </p>
  <p id="Head">Java String replaceAll()</p>
  <p class="info">
    The java string replaceAll() method returns a string replacing all the sequence of characters matching regex and replacement string.  <br>
    Example :   <br>
    <span style="color: blue;">
      public class ReplaceAllExample1{    <br>
        public static void main(String args[]){    <br>
        String s1="innovative-learning is a very good website";    <br>
        String replaceString=s1.replaceAll("a","e");<span style="color: rgb(66, 64, 64);">//replaces all occurrences of "a" to "e"</span>    <br>
        System.out.println(replaceString);    <br>
        }}     <br>
    </span>  
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      innovetive-leerning is e very good website</span>  <br>
  </p>
  <p id="Head">Java String split()</p>
  <p class="info">
    The java string split() method splits this string against given regular expression and returns a char array. <br>
    Parameter <br>
    > &nbsp; regex : regular expression to be applied on string. <br>
    > &nbsp; limit : limit for the number of strings in array. If it is zero, it will returns all the strings matching regex. <br>
    Example :  <br>
    <span style="color: blue;">
      public class SplitExample{    <br>
        public static void main(String args[]){    <br>
        String s1="java string split method by innovative-learning";    <br>
        String[] words=s1.split("\\s");<span style="color: rgb(66, 64, 64);">//splits the string based on whitespace  </span>  <br>
        <span style="color: rgb(66, 64, 64);">//using java foreach loop to print elements of string array</span>    <br>
        for(String w:words){    <br>
        System.out.println(w);    <br>
        }    <br>
        }}    <br>
    </span>  <br>
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      java  <br>
      string  <br>
      split  <br>
      method  <br>
      by  <br>
      innovative-learning</span>  <br>
  </p>
  <p id="Head">Java String toLowerCase()</p>
  <p class="info">
    The java string toLowerCase() method returns the string in lowercase letter. In other words, it converts all characters of the string into lower case letter.  <br>
    The toLowerCase() method works same as toLowerCase(Locale.getDefault()) method. It internally uses the default locale.  <br>
    Example :   <br>
    <span style="color: blue;">
      public class StringLowerExample{    <br>
        public static void main(String args[]){    <br>
        String s1="INNOVATIVE-LEARNING HELLO stRIng";    <br>
        String s1lower=s1.toLowerCase();    <br>
        System.out.println(s1lower);    <br>
        }}  <br>
    </span>  
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      innovative-learning hello string</span>  <br>
  </p>
  <p id="Head">Java String toUpperCase()</p>
  <p class="info">
    The java string toUpperCase() method returns the string in uppercase letter. In other words, it converts all characters of the string into upper case letter.  <br>
    The toUpperCase() method works same as toUpperCase(Locale.getDefault()) method. It internally uses the default locale. <br>
    Example :   <br>
    <span style="color: blue;">
      public class StringUpperExample{    <br>
        public static void main(String args[]){    <br>
        String s1="hello string";    <br>
        String s1upper=s1.toUpperCase();    <br>
        System.out.println(s1upper);    <br>
        }}   <br>
    </span>  
    <span style="color: rgb(105, 23, 23);;">Output :   <br>
      HELLO STRING</span>  <br>
  </p>`;
});

Tut_C_22.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java Arrays</p>
  <p class="info">
    Normally, an array is a collection of similar type of elements which has contiguous memory location. <br>
    Java array is an object which contains elements of a similar data type. Additionally, The elements of an array are
    stored in a contiguous memory location. It is a data structure where we store similar elements. We can store only
    a fixed set of elements in a Java array. <br>
    Array in Java is index-based, the first element of the array is stored at the 0th index, 2nd element is stored on
    1st index and so on. <br>
    Unlike C/C++, we can get the length of the array using the length member. In C/C++, we need to use the sizeof
    operator. <br>
    In Java, array is an object of a dynamically generated class. Java array inherits the Object class, and implements
    the Serializable as well as Cloneable interfaces. We can store primitive values or objects in an array in Java.
    Like C/C++, we can also create single dimentional or multidimentional arrays in Java. <br>
    Moreover, Java provides the feature of anonymous arrays which is not available in C/C++. <br> </p>
  <p id="Head">Single Dimensional Array in Java</p>
  <p class="info">
    Syntax to Declare an Array in Java <br>
    <span style="color: blue;">dataType[] arr; (or) <br>
      dataType []arr; (or) <br>
      dataType arr[];</span> <br>
    Example : <br>
    <span style="color: blue">
      class Testarray{ <br>
      public static void main(String args[]){ <br>
      int a[]=new int[5];<span style="color: rgb(82, 76, 76);">//declaration and instantiation</span> <br>
      a[0]=10;<span style="color: rgb(82, 76, 76);">//initialization</span> <br>
      a[1]=20; <br>
      a[2]=70; <br>
      a[3]=40; <br>
      a[4]=50; <br>
      <span style="color: rgb(82, 76, 76);">//traversing array</span> <br>
      for(int i=0;i< a.length;i++)<span style="color: rgb(82, 76, 76);">//length is the property of array </span> <br>
    System.out.println(a[i]); <br>
    }} <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      10 <br>
      20 <br>
      70 <br>
      40 <br>
      50</span> <br>
  </p>
  <p id="Head">For-each Loop for Java Array</p>
  <p class="info">
    We can also print the Java array using for-each loop. The Java for-each loop prints the array elements one by one.
    It holds an array element in a variable, then executes the body of the loop. <br>
    The syntax of the for-each loop is given below: <br>
    <span style="color: blue;">
      for(data_type variable:array){ <br>
      <span style="color: rgb(82, 76, 76);">//body of the loop</span> <br>
      } <br>
    </span>
    Example : <br>
    <span style="color: blue;">
      class Testarray1{ <br>
      public static void main(String args[]){ <br>
      int arr[]={33,3,4,5}; <br>
      for(int i:arr) <br>
      System.out.println(i); <br>
      }} <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      33 <br>
      3 <br>
      4 <br>
      5</span> <br>
  </p>
  <p id="Head">Multidimensional Array in Java</p>
  <p class="info">
    In such case, data is stored in row and column based index (also known as matrix form).
    Syntax to Declare Multidimensional in Java <br>
    <span style="color: blue;">dataType[][] arrayRefVar; (or) <br>
      dataType [][]arrayRefVar; (or) <br>
      dataType arrayRefVar[][]; (or) <br>
      dataType []arrayRefVar[]; </span> <br>
    Example : <br>
    <span style="color: blue">
      class Testarray3{ <br>
      public static void main(String args[]){ <br>
      <span style="color: rgb(82, 76, 76);">//declaring and initializing 2D array</span> <br>
      int arr[][]={ &nbsp; {&nbsp;1,2,3&nbsp;},{&nbsp;2,4,5&nbsp;},{&nbsp;4,4,5&nbsp;}&nbsp;}; <br>
      <span style="color: rgb(82, 76, 76);">//printing 2D array </span> <br>
      for(int i=0;i< 3;i++){ <br>
        for(int j=0;j< 3;j++){ <br>
          System.out.print(arr[i][j]+" "); <br>
          } <br>
          System.out.println(); <br>
          } <br>
          }} <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      1 2 3 <br>
      2 4 5 <br>
      4 4 5 </span> <br>
  </p>
  <p id="Head">Anonymous Array in Java</p>
  <p class="info">
    Java supports the feature of an anonymous array, so you don't need to declare the array while passing an array to
    the method. <br>
    Example : <br>
    <span style="color: blue;">
      <span style="color: rgb(82, 76, 76);">//Java Program to demonstrate the way of passing an anonymous array to
        method.</span> <br>
      public class TestAnonymousArray{ <br>
      <span style="color: rgb(82, 76, 76);">//creating a method which receives an array as a parameter</span> <br>
      static void printArray(int arr[]){ <br>
      for(int i=0;i< arr.length;i++) <br>
        System.out.println(arr[i]); <br>
        } <br>
        public static void main(String args[]){ <br>
        printArray(new int[]{10,22,44,66});<span style="color: rgb(82, 76, 76);">//passing anonymous array to
          method</span> <br>
        }} <br>
    </span>
    <span style="color: rgb(105, 23, 23);">Output : <br>
      10 <br>
      22 <br>
      44 <br>
      66</span> <br>
  </p>`;
});

Tut_C_23.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java OOPs Concepts</p>
  <p class="info">
    In this page, we will learn about the basics of OOPs. Object-Oriented Programming is a paradigm that provides many concepts, such as inheritance, data binding, polymorphism, etc.  <br>
    Simula is considered the first object-oriented programming language. The programming paradigm where everything is represented as an object is known as a truly object-oriented programming language.  <br>
    Smalltalk is considered the first truly object-oriented programming language.  <br>
    The popular object-oriented languages are Java, C#, PHP, Python, C++, etc.  <br>
    The main aim of object-oriented programming is to implement real-world entities, for example, object, classes, abstraction, inheritance, polymorphism, etc. <br>
  </p>
  <p id="Head">OOPs (Object-Oriented Programming System)</p>
  <p class="info">
    Object means a real-world entity such as a pen, chair, table, computer, watch, etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts:  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Object</span>  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Class</span>  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Inheritance</span>  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Polymorphism</span>  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Abstraction</span>  <br>
    <span style="color: rgb(38, 90, 38);">> &nbsp; Encapsulation</span>  <br>
    Apart from these concepts, there are some other terms which are used in Object-Oriented design:  <br>
    > &nbsp; Coupling  <br>
    > &nbsp; Cohesion  <br>
    > &nbsp; Association  <br>
    > &nbsp; Aggregation  <br>
    > &nbsp; Composition   <br>
  </p>
  <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/Java_tut_img/java-oops_django.png" alt="">
  <p id="Head">Object</p>
  <p class="info">
    Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.  <br>
    An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects.  <br>
    Example: A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.  <br>    </p>
  <p id="Head">class</p>
  <p class="info">
    Collection of objects is called class. It is a logical entity.  <br>
    A class can also be defined as a blueprint from which you can create an individual object. Class doesn't consume any space.  <br>    </p>
  <p id="Head">Inheritance</p>
  <p class="info">
    When one object acquires all the properties and behaviors of a parent object, it is known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.  <br>
  </p>
  <p id="Head">Polymorphism</p>
  <p class="info">
    If one task is performed in different ways, it is known as polymorphism. For example: to convince the customer differently, to draw something, for example, shape, triangle, rectangle, etc.  <br>
    In Java, we use method overloading and method overriding to achieve polymorphism.  <br>
    Another example can be to speak something; for example, a cat speaks meow, dog barks woof, etc  <br>
  </p>
  <p id="Head">Abstraction</p>
  <p class="info">
    Hiding internal details and showing functionality is known as abstraction. For example phone call, we don't know the internal processing.  <br>
    In Java, we use abstract class and interface to achieve abstraction.  <br>
  </p>
  <p id="Head">Encapsulation</p>
  <p class="info">
    Binding (or wrapping) code and data together into a single unit are known as encapsulation. For example, a capsule, it is wrapped with different medicines.  <br>
    A java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.  <br>
  </p>
  <p id="Head">Coupling</p>
  <p class="info">
    Coupling refers to the knowledge or information or dependency of another class. It arises when classes are aware of each other. If a class has the details information of another class, there is strong coupling. In Java, we use private, protected, and public modifiers to display the visibility level of a class, method, and field. You can use interfaces for the weaker coupling because there is no concrete implementation.  <br>
  </p>
  <p id="Head">Cohesion</p>
  <p class="info">
    Cohesion refers to the level of a component which performs a single well-defined task. A single well-defined task is done by a highly cohesive method. The weakly cohesive method will split the task into separate parts. The java.io package is a highly cohesive package because it has I/O related classes and interface. However, the java.util package is a weakly cohesive package because it has unrelated classes and interfaces.  <br>
  </p>
  <p id="Head">Association</p>
  <p class="info">
    Association represents the relationship between the objects. Here, one object can be associated with one object or many objects. There can be four types of association between the objects:  <br>
    > &nbsp; One to One  <br>
    > &nbsp; One to Many  <br>
    > &nbsp; Many to One, and  <br>
    > &nbsp; Many to Many  <br>
    Let's understand the relationship with real-time examples. For example, One country can have one prime minister (one to one), and a prime minister can have many ministers (one to many). Also, many MP's can have one prime minister (many to one), and many ministers can have many departments (many to many).  <br>
    Association can be undirectional or bidirectional.  <br>
  </p>
  <p id="Head">Aggregation</p>
  <p class="info">
    Aggregation is a way to achieve Association. Aggregation represents the relationship where one object contains other objects as a part of its state. It represents the weak relationship between objects. It is also termed as a has-a relationship in Java. Like, inheritance represents the is-a relationship. It is another way to reuse objects.  <br>
  </p>
  <p id="Head">Composition</p>
  <p class="info">
    The composition is also a way to achieve Association. The composition represents the relationship where one object contains other objects as a part of its state. There is a strong relationship between the containing object and the dependent object. It is the state where containing objects do not have an independent existence. If you delete the parent object, all the child objects will be deleted automatically.  <br>
  </p>`;
});

Tut_C_24.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Objects and Classes in Java</p>
  <p class="info">
    In this page, we will learn about Java objects and classes. In object-oriented programming technique, we design a program using objects and classes.  <br>
  </p>
  <p id="Head">Objects in Java</p>
  <p class="info">
    An object in Java is the physical as well as a logical entity, whereas, a class in Java is a logical entity only.  <br>
    An object has three characteristics: <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/Java_tut_img/characteristics-of-object_django.jpg" alt="">  <br>
    <span style="color: green;">> &nbsp; State: </span> represents the data (value) of an object.  <br>
    <span style="color: green;">> &nbsp; Behavior: </span> represents the behavior (functionality) of an object such as deposit, withdraw, etc.  <br>
    <span style="color: green;">> &nbsp; Identity: </span> An object identity is typically implemented via a unique ID. The value of the ID is not visible to the external user. However, it is used internally by the JVM to identify each object uniquely.  <br>
    For Example, Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior.  <br>
    An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class.  <br>
    <span style="color: green;">Object Definitions: </span> <br>
    > &nbsp; An object is a real-world entity.  <br>
    > &nbsp; An object is a runtime entity.  <br>
    > &nbsp; The object is an entity which has state and behavior.  <br>
    > &nbsp; The object is an instance of a class.  <br>
  </p>
  <p id="Head">Class in Java</p>
  <p class="info">
    A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical.   <br>
    A class in Java can contain:   <br>
    > &nbsp; Fields   <br>
    > &nbsp; Methods   <br>
    > &nbsp; Constructors   <br>
    > &nbsp; Blocks   <br>
    > &nbsp; Nested class and interface   <br>
    <img style="margin-left: 10%; width: 35%;" src="/static/mainpage/Java_tut_img/class-in-java_django.png" alt="">  <br>
    Syntax to declare a class:  <br>
    <span style="color: blue;">
      class < class_name >{    <br>
        field;    <br>
        method;    <br>
    }  </span>  <br>
  </p>
  <p id="Head">Instance variable in Java</p>
  <p class="info">
    A variable which is created inside the class but outside the method is known as an instance variable. Instance variable doesn't get memory at compile time. It gets memory at runtime when an object or instance is created. That is why it is known as an instance variable. 
  </p>`;
});

Tut_C_30.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Interface in Java</p>
  <p class="info">
    An interface in Java is a blueprint of a class. It has static constants and abstract methods.   <br>
    The interface in Java is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body. It is used to achieve abstraction and multiple inheritance in Java.   <br>
    In other words, you can say that interfaces can have abstract methods and variables. It cannot have a method body.   <br>
    Java Interface also represents the IS-A relationship.   <br>
    It cannot be instantiated just like the abstract class.   <br>
    Since Java 8, we can have default and static methods in an interface.   <br>
    Since Java 9, we can have private methods in an interface.   <br>
    <img style="margin-left:10%;width: 50%;" src="/static/mainpage/Java_tut_img/why-use-java-interface_django.jpg" alt=""> <br><br>
    Syntax:  <br>
    <span style="color: blue;">interface <interface_name>{    <br>
      <span style="color: rgb(95, 91, 91);">// declare constant fields    <br>
        // declare methods that abstract     <br>
        // by default.</span>   <br>
  }  </span>  <br>
  <span style="color: rgb(211, 211, 33);">Note : The Java compiler adds public and abstract keywords before the interface method. Moreover, it adds public, static and final keywords before data members.</span>  <br>
  Example :
  <span style="color: blue"> <br>
    interface printable{    <br>
      void print();    <br>
      }    <br>
      class A6 implements printable{    <br>
      public void print(){System.out.println("Hello");}    <br>
      public static void main(String args[]){    <br>
      A6 obj = new A6();    <br>
      obj.print();    <br>
       }    <br>
      }  <br>
  </span>
  <span style="color: rgb(105, 23, 23);">Output : <br>
    Hello</span> <br>
  </p>`;
});

Tut_C_31.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">switch Statement</p>
  <p class="info">
    The Java switch statement executes one statement from multiple conditions. It is like if-else-if ladder statement.
    The switch statement works with byte, short, int, long, enum types, String and some wrapper types like Byte,
    Short, Int, and Long. Since Java 7, you can use strings in the switch statement. <br>
    In other words, the switch statement tests the equality of a variable against multiple values. <br><br>
    <span style="color: rgb(31, 99, 31);">Points to Remember</span> <br>
    > &nbsp; There can be one or N number of case values for a switch expression. <br>
    > &nbsp; The case value must be of switch expression type only. The case value must be literal or constant. It
    doesn't allow variables. <br>
    > &nbsp; The case values must be unique. In case of duplicate value, it renders compile-time error. <br>
    > &nbsp; The Java switch expression must be of byte, short, int, long (with its Wrapper type), enums and string.
    <br>
    > &nbsp; Each case statement can have a break statement which is optional. When control reaches to the break
    statement, it jumps the control after the switch expression. If a break statement is not found, it executes the
    next case. <br>
    > &nbsp; The case value can have a default label which is optional. <br>
    The syntax of switch statement is given below:<br>
    <span style="color: blue;">
      switch(expression){ <br>
      case value1: <br>
      <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
      break; <br>
      <span style="color: rgb(102, 102, 104);">//optional </span> <br>
      case value2: <br>
      <span style="color: rgb(102, 102, 104);">//code to be executed</span> <br>
      break; <br>
      <span style="color: rgb(102, 102, 104);">//optional </span> <br>
      ...... <br>

      default: <br>
      code to be executed if all cases are not matched;
      <br>
      } <br>
    </span>
    <span style="color: rgb(255, 0, 34);">Flowchart of switch statement</span> <br><br>
  </p>
  <img style="margin-left: 20%; width: 60%;" src="/static/mainpage/C_tut_img/cpp-switch_django.png" alt="">
  <p id="Head">Functioning of switch case statement</p>
  <p class="info">
    Let's see a simple example ofe switch statement :
    <span style="color: blue;">
      <br>
      public class SwitchVowelExample { <br>
      public static void main(String[] args) { <br>
      char ch='O'; <br>
      switch(ch) <br>
      { <br>
      case 'a': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'e': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'i': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'o': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'u': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'A': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'E': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'I': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'O': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      case 'U': <br>
      System.out.println("Vowel"); <br>
      break; <br>
      default: <br>
      System.out.println("Consonant"); <br>
      } <br>
      } } <br>
    </span>
    <span style="color: rgb(110, 35, 100);">
      Output : <br>
      Vowel</span> <br>
  </p>
  <p id="Head">Nested switch case statement</p>
  <p class="info">
    We can use as many switch statement as we want inside a switch statement. Such type of statements is called
    nested switch case statements. Consider the following example.<br>
    <span style="color: blue;">
      <br>
      public class NestedSwitchExample {  <br>
      public static void main(String args[])  <br>
      {  <br>
      <span style="color: rgb(70, 65, 65);">//C - CSE, E - ECE, M - Mechanical</span><br>
      char branch = 'C';  <br>
      int collegeYear = 4;  <br>
      switch( collegeYear )  <br>
      {  <br>
      case 1:  <br>
      System.out.println("English, Maths, Science");  <br>
      break;  <br>
      case 2:  <br>
      switch( branch )  <br>
      {  <br>
      case 'C':  <br>
      System.out.println("Operating System, Java, Data Structure");  <br>
      break;  <br>
      case 'E':  <br>
      System.out.println("Micro processors, Logic switching theory");  <br>
      break;  <br>
      case 'M':  <br>
      System.out.println("Drawing, Manufacturing Machines");  <br>
      break;  <br>
      }  <br>
      break;  <br>
      case 3:  <br>
      switch( branch )  <br>
      {  <br>
      case 'C':  <br>
      System.out.println("Computer Organization, MultiMedia");  <br>
      break;  <br>
      case 'E':  <br>
      System.out.println("Fundamentals of Logic Design, Microelectronics");  <br>
      break;  <br>
      case 'M':  <br>
      System.out.println("Internal Combustion Engines, Mechanical Vibration");  <br>
      break;  <br>
      }  <br>
      break;  <br>
      case 4:  <br>
      switch( branch )  <br>
      {  <br>
      case 'C':  <br>
      System.out.println("Data Communication and Networks, MultiMedia");  <br>
      break;  <br>
      case 'E':  <br>
      System.out.println("Embedded System, Image Processing");  <br>
      break;  <br>
      case 'M':  <br>
      System.out.println("Production Technology, Thermal Engineering");  <br>
      break;  <br>
      }  <br>
      break;  <br>
      } <br>
    } } <br>
    </span>
    <span style="color: rgb(110, 35, 100);">
      Output : <br>
      Data Communication and Networks, MultiMedia</span> <br>
  </p>`;
});

Tut_C_32.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Java while loop</p>
  <p class="info">
    The Java while loop is used to iterate a part of the program several times. If the number of iteration is not fixed, it is recommended to use while loop. <br>
      The syntax of while loop is given below: <br>
      <span style="color: blue;">
          while(condition){ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
          } <br>
      </span>
      Flowchart of while loop
  </p>
  <img style="margin-left: 20%; width: 40%;" src="/static/mainpage/C_tut_img/newwhile_django.png" alt="">
  <br>
  </p>
  <p class="info">
      There is given the simple program of while loop where we are printing the table of 2. <br>
      <span style="color: blue;">
          <br>
          public class WhileExample {  <br>
            public static void main(String[] args) {   <br>
          int i=2; <br>
          while(i<=20){ <br>
            System.out.println(i);  <br>
          i = i + 2; <br>
          } <br>
          } } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          2 <br>
          4 <br>
          6 <br>
          8 <br>
          10 <br>
          12 <br>
          14 <br>
          16 <br>
          18 <br>
          20 <br>
      </span> <br>
  </p>`;
});

Tut_C_33.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">for loop in Java</p>
  <p class="info">
    A simple for loop is the same as C/C++. We can initialize the variable, check condition and increment/decrement value. It consists of four parts:  <br>

    1. &nbsp;Initialization: It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.  <br>
    2. &nbsp;Condition: It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.  <br>
    3. &nbsp;Statement: The statement of the loop is executed each time until the second condition is false.  <br>
    4. &nbsp;Increment/Decrement: It increments or decrements the variable value. It is an optional condition. <br>
      <span style="color: blue;">
          for(Expression 1; Expression 2; Expression 3){ <br>
          <span style="color: rgb(102, 102, 104);">//statement or code to be executed </span> <br>
          } <br>
      </span>
      Flowchart of for loop
  </p>
  <img style="margin-left: 20%; width: 40%;" src="/static/mainpage/C_tut_img/c-for-loop_django.jpg" alt="">
  <br>
  </p>
  <p class="info">
      Let's see the simple program of for loop that prints table of 2. <br>
      <span style="color: blue;">
          <br>
          public class ForExample {  <br>
          public static void main(String[] args) {  <br>
          for(int i=2;i<=20;i++) <br>
              { <br>
                System.out.println(i++); <br>
              } <br>
             } } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          2 <br>
          4 <br>
          6 <br>
          8 <br>
          10 <br>
          12 <br>
          14 <br>
          16 <br>
          18 <br>
          20 <br>
      </span> <br>
  </p>`;
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

function addClick() {
  var sideb = document.querySelector(".sidebar");
  var sideb2 = getComputedStyle(sideb);
  if (sideb2.display == "block") {
    topics.classList.toggle("mediaside");
  }
}

down_line.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
});

burger.addEventListener("click", () => {
  addClick();
});
