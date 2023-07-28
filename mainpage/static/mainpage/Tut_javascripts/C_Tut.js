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
  change_page[0].innerHTML = `<p id="Head">What is C Language </p>
  <p class="info">
      The C Language is developed by Dennis Ritchie for creating system applications that directly interact with
      the hardware devices such as drivers, kernels, etc. <br>

      C programming is considered as the base for other programming languages, that is why it is known as mother
      language. <br>

      It can be defined by the following ways: <br>

      1. Mother language <br>
      2. System programming language <br>
      3. Procedure-oriented programming language <br>
      4. Structured programming language <br>
      5. Mid-level programming language <br>
  </p>
  <p id="Head">1) C as a mother language </p>
  <p class="info">
      C language is considered as the mother language of all the modern programming languages because most of the
      compilers, JVMs, Kernels, etc. are written in C language, and most of the programming languages follow C
      syntax, for example, C++, Java, C#, etc.  <br>

      It provides the core concepts like the array, strings, functions, file handling, etc. that are being used in
      many languages like C++, Java, C#, etc.  <br>
  </p>
  <p id="Head">2) C as a system programming language </p>
  <p class="info">
      A system programming language is used to create system software. C language is a system programming language
      because it can be used to do low-level programming (for example driver and kernel). It is generally used to
      create hardware devices, OS, drivers, kernels, etc. For example, Linux kernel is written in C.  <br>

      It can't be used for internet programming like Java, .Net, PHP, etc.  <br>
  </p>
  <p id="Head">3) C as a procedural language</p>
  <p class="info">
      A procedure is known as a function, method, routine, subroutine, etc. A procedural language specifies a
      series of steps for the program to solve the problem.  <br>

      A procedural language breaks the program into functions, data structures, etc.  <br>

      C is a procedural language. In C, variables and function prototypes must be declared before being used.
  </p>
  <p id="Head">4) C as a structured programming language</p>
  <p class="info">
      A structured programming language is a subset of the procedural language. Structure means to break a program
      into parts or blocks so that it may be easy to understand.  <br>


      In the C language, we break the program into parts using functions. It makes the program easier to
      understand and modify.
  </p>
  <p id="Head">5) C as a mid-level programming language</p>
  <p class="info">
      C is considered as a middle-level language because it supports the feature of both low-level and high-level
      languages.  <br> C language program is converted into assembly code, it supports pointer arithmetic (low-level),
      but it is machine independent (a feature of high-level).  <br>

      A Low-level language is specific to one machine, i.e., machine dependent. It is machine dependent, fast to
      run. But it is not easy to understand.  <br>

      A High-Level language is not specific to one machine, i.e., machine independent. It is easy to understand.
  </p>`;
});

Tut_C_2.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">History of C Language </p>
  <img style="margin-left: 70px;" src="/static/mainpage/C_tut_img/dennis_django.jpg" alt="">
    <p class="info">
    History of C language is interesting to know. Here we are going to discuss a brief history of the c language. <br><br>

    C programming language was developed in 1972 by Dennis Ritchie at bell laboratories of AT&T (American Telephone & Telegraph), located in the U.S.A. <br><br>
    
    Dennis Ritchie is known as the founder of the c language. <br><br>
    
    It was developed to overcome the problems of previous languages such as B, BCPL, etc. <br><br>
    </p> 
    <p id="Head">Some Important Facts About History of C :  </p>
    <p class="info">
    1. &nbsp C is one of the high-level programming languages developed by Dennis Ritchie.<br><br>

    2. &nbsp C was originally developed for UNIX operating system to beat the issues of previous languages such as B, BCPL, etc. <br><br>

    3.&nbsp  The UNIX operating system development started in the year 1969, and its code was rewritten in C in the year 1972. <br><br>

    4. &nbsp The UNIX operating system development started in the year 1969, and its code was rewritten in C in the year 1972. <br><br>

    5. &nbsp In 1985, Windows 1.0 was released. Even though Windows source code isn’t publicly available on the market, it’s been stated that its kernel is mostly written in C. <br><br>

    6. &nbsp In 1991, Linux kernel development started, and it’s additionally written in C. <br><br>

    7. &nbsp  After a year it was released under the GNU license and was used as part of the GNU Operating System. <br><br>

    8. &nbsp The GNU operating system was started using C and Lisp programming languages. So, many of its components are written in C. <br><br>

    9. &nbsp In 1977, Oracle database development started, and in 1983 its code was rewritten from assembly to C. It became one in all the foremost widespread databases within the world. <br><br>

    10. &nbsp Now a days C is exclusively used for building OS, application packages and customized software. Because of its power and efficiency, it has gained more popularity. <br><br>

    11. &nbsp C is increasingly used by system programmers, application developers and researchers for a spread of programming tasks. <br><br>
    </p> 
    `;
});

Tut_C_3.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Features of C Language </p>
  <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/C_tut_img/Features-of-C_django.jpg" alt=""> 
  <p class="info">
  <br>
  C is the widely used language. It provides many features that are given below. <br>
  1. &nbsp Simple <br>
  2. &nbsp Machine Independent or Portable <br>
  3. &nbsp Mid-level programming language <br>
  4. &nbsp structured programming language <br>
  5. &nbsp Rich Library <br>
  6. &nbsp Memory Management <br>
  7. &nbsp Fast Speed <br>
  8. &nbsp Pointers <br>
  9. &nbsp Recursion <br>
  10. &nbsp Extensible <br>
  </p>
  <p id="Head">1) Simple </p>
  <p class="info">
  C is a simple language in the sense that it provides a structured approach (to break the problem into parts), the rich set of library functions, data types, etc.
  </p>
  <p id="Head">2) Machine Independent or Portable </p>
  
  <p class="info">
  Unlike assembly language, c programs can be executed on different machines with some machine specific changes. Therefore, C is a machine independent language.
  </p>
  <p id="Head">3) Mid-level programming language </p>
  
  <p class="info">
  Although, C is intended to do low-level programming. It is used to develop system applications such as kernel, driver, etc. It also supports the features of a high-level language. That is why it is known as mid-level language.
  </p>
  <p id="Head">4) Structured programming language</p>
  
  <p class="info">
  C is a structured programming language in the sense that we can break the program into parts using functions. So, it is easy to understand and modify. Functions also provide code reusability.
  </p>
  <p id="Head">5) Rich Library </p>
  
  <p class="info">
  C provides a lot of inbuilt functions that make the development fast.
  </p>
  <p id="Head">6) Memory Management </p>
  
  <p class="info">
  It supports the feature of dynamic memory allocation. In C language, we can free the allocated memory at any time by calling the free() function.
  </p>
  <p id="Head">7) Speed</p>
  
  <p class="info">
  The compilation and execution time of C language is fast since there are lesser inbuilt functions and hence the lesser overhead.
  </p>
  <p id="Head">8) Pointer </p>
  
  <p class="info">
  C provides the feature of pointers. We can directly interact with the memory by using the pointers. We can use pointers for memory, structures, functions, array, etc.
  </p>
  <p id="Head">9) Recursion </p>
  
  <p class="info">
  In C, we can call the function within the function. It provides code reusability for every function. Recursion enables us to use the approach of backtracking.
  </p>
  <p id="Head">10) Extensible</p>
  
  <p class="info">
  C language is extensible because it can easily adopt new features.
  </p>
  `;
});

Tut_C_4.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">How to Install C </p>
  <p class="info">
  You can easily download C compiler by follow some steps :- <br>
  1. &nbsp Go through the website to donload the CodeBlocks IDE(Integrated Development Environment) i.e. <a href="https://nchc.dl.sourceforge.net/project/codeblocks/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe">Click to Download CodeBlocks.</a> <br>
  2. &nbsp The above link will install CodeBlocks with MinGw setup to your desktop. <br>
  3. &nbsp Now rum <strong>mingw-get-setup.exe</strong>.
  </p>
  <p class="info">
  4. &nbsp Click Install. <br>The following pop-up window will appear. <br>
  </p>
  <img style="margin-left: 19%; width: 60%;" src="https://www.ics.uci.edu/~pattis/common/handouts/mingweclipse/images/2install.jpg" alt="">
  <p class="info">
  You can install this software anywhere, but I recommend installing it in the default directory: C:\\MinGW. <br>
  5. &nbsp Click Continue. <br>
  The following pop-up window will appear, showing the downloading progress. After about a minute, it should appear as follows. <br>
  </p>
  <img style="margin-left: 19%; width: 60%;" src="https://www.ics.uci.edu/~pattis/common/handouts/mingweclipse/images/4installed.jpg" alt="">
  <p class="info">
  6. &nbsp Click Continue. <br>
  The following pop-up window will appear. Ensure on the left that Basic Setup is highlighted. Click the three boxes indicated below: mingw32-base, mingw32-gcc=g++, msys-base. After clicking each, select Mark for selection. This window should appear as follows. <br>
  </p>
  <img style="margin-left: 19%; width: 60%;" src="https://www.ics.uci.edu/~pattis/common/handouts/mingweclipse/images/5whattoinstall.jpg" alt="">
  <p class="info">
  7. &nbsp Click Review Change <br>
  The following pop-up window should appear <br>
  </p>
  <img style="margin-left: 19%; width: 60%;" src="https://www.ics.uci.edu/~pattis/common/handouts/mingweclipse/images/7applychanges.jpg" alt="">
  <p class="info">
  8. &nbsp Click To Apply <br>
  9. &nbsp Now Leave all as default and press continue, untill final done. <br>
  10. &nbsp CodeBlocks MinGw setup Start <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Now You can easily make programs of C in CodeBlocks. <br>
  </p>
  `;
});

Tut_C_5.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">First C Program </p>
  <p class="info">
  Before starting the abcd of C language, you need to learn how to write, compile and run the first c program.
  <br>
  To write the first c program, open the C console and write the following code:
  <br> <br>
  </p>
  <p class="info" style="color: blue">
  #include &nbsp "stdio.h"   <br>
  int main(){    <br>
  printf("Hello C Language");    <br>
  return 0;   <br>
  }  <br>
  </p>
  <p class="info">
  <br>
  #include "stdio.h" includes the standard input output library functions.  <br><br>
  The printf() function is defined in stdio.h .
  <br><br>
  int main() <br> The main() function is the entry point of every program in c language.
  <br><br>
  printf()  <br> The printf() function is used to print data on the console.
  <br><br>
  return 0  <br> The return 0 statement, returns execution status to the OS. The 0 value is used for successful execution and 1 for unsuccessful execution.
  <br>
  </p>
  `;
});

Tut_C_6.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Comments in C </p>
  <p class="info">
  Comments in C language are used to provide information about lines of code. It is widely used for documenting code. There are 2 types of comments in the C language. <br>

  1. Single Line Comments <br>
  2. Multi-Line Comments <br><br>
  1) Single Line Comments <br>
  Single line comments are represented by double slash \\ \\. Let's see an example of a single line comment in C.
  <br><br>
  </p>
  <p class="info" style="color: blue">
  #include"stdio.h"  <br>  
  int main(){    <br>
      <span style="color: rgb(121, 116, 116);">//printing information</span>     <br>
      printf("Hello C");    <br>
  return 0;  <br>
  }  <br>
  Output : Hello C
  </p>
  <p class="info">
  2) Multi Line Comments <br>
  Multi-Line comments are represented by slash asterisk \* ... *\. It can occupy many lines of code, but it can't be nested.<br> Syntax:
  <br>
  <span style="color: rgb(121, 116, 116);">/*  
  code <br>
  to be commented <br>
  */</span>
    <br>
  Let's see an example of a multi-Line comment in C. <br>
  </p>
  <p class="info" style="color: blue">
  #include"stdio.h"  <br>  
  int main(){    <br>
    <span style="color: rgb(121, 116, 116);">/*printing information   <br>
    Multi-Line Comment*/  <br></span>
    printf("Hello C");    <br>
  return 0;  <br>
  }  <br>
  Output : Hello C <br>
  </p>
  `;
});

Tut_C_7.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Variables in C </p>
  <p class="info">
  A variable is a name of the memory location. It is used to store data. Its value can be changed, and it can be reused many times. <br><br>

  It is a way to represent memory location through symbol so that it can be easily identified. <br><br>

  Let's see the syntax to declare a variable: <br>
  <span style="color: blue;">type variable_list;  <br></span>
  The example of declaring the variable is given below: <br>
  <span style="color: blue;">int a;  <br>
  float b;  <br>
  char c;   <br></span> <br>
  Here, a, b, c are variables. The int, float, char are the data types. <br>

  We can also provide values while declaring the variables as given below: <br>
  <span style="color: blue;">int a=10,b=20; <br> 
  <span style="color: rgb(121, 116, 116);"> //declaring 2 variable of integer type   <br></span> 
  float f=20.8;  <br>
  char c='A';  <br></span> <br>
  </p>
  <p id="Head">Rules for defining variables </p> 
  <p class="info">
  > &nbsp A variable can have alphabets, digits, and underscore. <br>
  > &nbsp A variable name can start with the alphabet, and underscore only. It can't start with a digit. <br>
  > &nbsp No whitespace is allowed within the variable name. <br>
  > &nbsp A variable name must not be any reserved word or keyword, e.g. int, float, etc. <br>
  </p>
  <p class="info">
  Valid variable names: <br>
  <span style="color: blue;"> 
  int a;  <br>
  int _ab;  <br>
  int a30;    <br></span> 
  Invalid variable names: <br>
  <span style="color: blue;"> 
  int 2;  <br>
  int a b;  <br>
  int long;  <br></span> 
  </p>
  <p id="Head">Types of Variables in C </p>
  <p class="info">
  There are many types of variables in c: <br>

  1. &nbsp Local variable <br>
  2. &nbsp  Global variable <br>
  3. &nbsp  Static variable <br>
  4. &nbsp  Automatic variable <br>
  5. &nbsp  External variable  <br>
  </p>
  <p id="Head">Local Variable</p>
  <p class="info">
  A variable that is declared inside the function or block is called a local variable. <br>
  It must be declared at the start of the block. <br>
  <span style="color: blue;"> void function1(){   <br>
    int x=10; <br>
    <span style="color: rgb(121, 116, 116);"> //local variable <br></span>   
    }   <br></span> 
    You must have to initialize the local variable before it is used.
  </p>
  <p id="Head">Global Variable </p>
  <p class="info">
  A variable that is declared outside the function or block is called a global variable. Any function can change the value of the global variable. It is available to all the functions. <br>
  It must be declared at the start of the block. <br>
  <span style="color: blue;">int value=20; <br>
  <span style="color: rgb(121, 116, 116);"> //global variable <br></span>   
  void function1(){   <br>
  int x=10; <br>
  <span style="color: rgb(121, 116, 116);"> //local variable <br></span>   
  }   <br></span> 
  </p>
  <p id="Head">Static Variable </p>
  <p class="info">
  A variable that is declared with the static keyword is called static variable. <br>
  It retains its value between multiple function calls. <br>
  <span style="color: blue;">void function1(){  <br>
    int x=10; <br>
    <span style="color: rgb(121, 116, 116);"> //local variable <br></span>    
    static int y=10; <br>
    <span style="color: rgb(121, 116, 116);"> //static variable <br></span>   
    x=x+1;  <br>
    y=y+1;  <br>
    printf("%d,%d",x,y);  <br>
    }   <br></span> 
    If you call this function many times, the local variable will print the same value for each function call, e.g, 11,11,11 and so on. But the static variable will print the incremented value in each function call, e.g. 11, 12, 13 and so on. <br>
  </p>
  <p id="Head">Automatic Variable </p>
  <p class="info">
  All variables in C that are declared inside the block, are automatic variables by default. We can explicitly declare an automatic variable using auto keyword.  <br>
  <span style="color: blue;">void main(){  <br>
    int x=10;<span style="color: rgb(121, 116, 116);"> //local variable (also automatic) <br></span>  
    auto int y=20;<span style="color: rgb(121, 116, 116);"> //automatic variable <br></span>   
    }  <br></span> 
  </p>
  <p id="Head">External Variable </p>
  <p class="info">
  We can share a variable in multiple C source files by using an external variable. To declare an external variable, you need to use extern keyword. <br>
  <span style="color: blue;"> 
  <span style="color: rgb(121, 116, 116);"> //there exist a file name myfile.h <br></span>
  #include "myfile.h"  <br>
  #include < stdio.h >  <br>
  void printValue(){  <br>
      printf("Global variable: %d", global_variable);  <br>
  }  <br></span> 
  </p>
  `;
});

Tut_C_8.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Data Types in C </p>
  <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/C_tut_img/C-dt_django.jpg" alt=""> 
  <table>
  <br><br>
    <tr>
      <th>Types</th>
      <th>Data Types</th>
    </tr>
    <tr>
      <td>Basic Data Type</td>
      <td>int, char, float, double</td>
    </tr>
    <tr>
      <td>Derived Data Type</td>
      <td>array, pointer, structure, union</td>
    </tr>
    <tr>
      <td>Enumeration Data Type</td>
      <td>enum</td>
    </tr>
    <tr>
      <td>Void Data Type</td>
      <td>void</td>
    </tr>
</table>  
  <p id="Head">Basic Data Types</p>
  <p class="info">
  The basic data types are integer-based and floating-point based. C language supports both signed and unsigned literals. <br>

  The memory size of the basic data types may change according to 32 or 64-bit operating system. <br>

  Let's see the basic data types. <br>  Its size is given according to 
  <span style="color: rgb(179, 49, 49);"> 32-bit architecture. <br></span> 
  </p>
  <table class="alt">
            <tr>
                <th>Data Types</th>
                <th>Memory Size</th>
                <th>Range</th>
            </tr>
            <tr>
                <td><b>char</b></td>
                <td>1 byte</td>
                <td>−128 to 127</td>
            </tr>
            <tr>
                <td>signed char</td>
                <td>1 byte</td>
                <td>−128 to 127</td>
            </tr>
            <tr>
                <td>unsigned char</td>
                <td>1 byte</td>
                <td>0 to 255</td>
            </tr>
            <tr>
                <td><b>short</b></td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>signed short</td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>unsigned short</td>
                <td>2 byte</td>
                <td>0 to 65,535</td>
            </tr>
            <tr>
                <td><b>int</b></td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>signed int</td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>unsigned int</td>
                <td>2 byte</td>
                <td>0 to 65,535</td>
            </tr>
            <tr>
                <td><b>short int</b></td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>signed short int</td>
                <td>2 byte</td>
                <td>−32,768 to 32,767</td>
            </tr>
            <tr>
                <td>unsigned short int</td>
                <td>2 byte</td>
                <td>0 to 65,535</td>
            </tr>
            <tr>
                <td><b>long int</b></td>
                <td>4 byte</td>
                <td>-2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td>signed long int</td>
                <td>4 byte</td>
                <td>-2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td>unsigned long int</td>
                <td>4 byte</td>
                <td>0 to 4,294,967,295</td>
            </tr>
            <tr>
                <td><b>float</b></td>
                <td>4 byte</td>
                <td>±3.40282347E+38F i.e. 6-7 significant digits</td>
            </tr>
            <tr>
                <td><b>double</b></td>
                <td>8 byte</td>
                <td>±1.79769313486231570E+308 i.e. 15-16 significant digits</td>
            </tr>
            <tr>
                <td><b>long double</b></td>
                <td>10 byte</td>
                <td>±1.79769313486231570E+308 i.e. 15-16 significant digits</td>
            </tr>
        </table>
  `;
});

Tut_C_9.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">printf() and scanf() in C</p>
  <p class="info">
      The printf() and scanf() functions are used for input and output in C language. Both functions are inbuilt library functions, defined in stdio.h (header file). <br>
  </p>
  <p id="Head">printf() function</p>
  <p class="info">
      The printf() function is used for output. It prints the given statement to the console.
      <br>
      The syntax of printf() function is given below:
      <br>
      <span style="color: rgb(179, 49, 49);">printf("format string",argument_list); <br></span> 
      The format string can be %d (integer), %c (character), %s (string), %f (float) etc. <br>
  </p>
  <p id="Head">scanf() function</p>
  <p class="info">
      The scanf() function is used for input. It reads the input data from the console. <br>
      <span style="color: rgb(179, 49, 49);">scanf("format string",argument_list); <br></span>
      Program to print cube of given number <br>
      Let's see a simple example of c language that gets input from the user and prints the cube of the given
      number. <br>
      <span style="color: blue;">
          #include"stdio.h" <br>
          int main(){ <br>
          int number; <br>
          printf("enter a number:"); <br>
          scanf("%d",&number); <br>
          printf("cube of number is:%d ",number*number*number); <br>
          return 0; <br>
          } <br>
          Output : <br>

          enter a number:5 <br>
          cube of number is:125 <br>
          <br></span>
  </p>
  <p class="info">
      The <span style="color: rgb(179, 49, 49);">scanf("%d",&number)</span> statement reads integer number from the console and stores the given value in number
      variable. <br> 

      The <span style="color: rgb(179, 49, 49);">printf("cube of number is:%d ",number*number*number)</span> statement prints the cube of number on the console. <br>

      Program to print sum of 2 numbers <br>
      Let's see a simple example of input and output in C language that prints addition of 2 numbers. <br>
      <span style="color: blue;"> 
          #include"stdio.h" <br>
          int main(){ <br>
          int x=0,y=0,result=0; <br>
          printf("enter first number:"); <br>
          scanf("%d",&x); <br> 
          printf("enter second number:"); <br>
          scanf("%d",&y); <br>
          result=x+y; <br>
          printf("sum of 2 numbers:%d ",result); <br>
          return 0; <br>
          } <br>
          Output : <br>

          enter first number:9 <br>
          enter second number:9 <br>
          sum of 2 numbers:18 <br>
          <br></span>
  </p>`;
});

Tut_C_10.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Keywords in C</p>
  <p class="info">
      A keyword is a reserved word. You cannot use it as a variable name, constant name, etc. There are only 32
      reserved words (keywords) in the C language. <br><br>
      A list of 32 keywords in the c language is given below: <br><br>
      <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/C_tut_img/C-Keywords_django.png" alt=""> 
      <br><br>
  </p>
  <table class="alt">
            <tr>
                <td><strong>auto</strong></td>
                <td><strong>double</strong></td>
                <td><strong>int</strong></td>
                <td><strong>struct</strong></td>
            </tr>
            <tr>
                <td><strong>break</strong></td>
                <td><strong>else</strong></td>
                <td><strong>long</strong></td>
                <td><strong>switch</strong></td>
            </tr>
            <tr>
                <td><strong>case</strong></td>
                <td><strong>enum</strong></td>
                <td><strong>register</strong></td>
                <td><strong>typedef</strong></td>
            </tr>
            <tr>
                <td><strong>char</strong></td>
                <td><strong>extern</strong></td>
                <td><strong>return</strong></td>
                <td><strong>union</strong></td>
            </tr>
            <tr>
                <td><strong>const</strong></td>
                <td><strong>float</strong></td>
                <td><strong>short</strong></td>
                <td><strong>unsigned</strong></td>
            </tr>
            <tr>
                <td><strong>continue</strong></td>
                <td><strong>for</strong></td>
                <td><strong>signed</strong></td>
                <td><strong>void</strong></td>
            </tr>
            <tr>
                <td><strong>default</strong></td>
                <td><strong>goto</strong></td>
                <td><strong>sizeof</strong></td>
                <td><strong>volatile</strong></td>
            </tr>
            <tr>
                <td><strong>do</strong></td>
                <td><strong>if</strong></td>
                <td><strong>static</strong></td>
                <td><strong>while</strong></td>
            </tr>
        </table>`;
});

Tut_C_11.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Identifiers in C</p>
  <p class="info">
      C identifiers represent the name in the C program, for example, variables, functions, arrays, structures,
      unions, labels, etc. An identifier can be composed of letters such as uppercase, lowercase letters,
      underscore, digits, but the starting letter should be either an alphabet or an underscore. If the identifier
      is not used in the external linkage, then it is called as an internal identifier. If the identifier is used
      in the external linkage, then it is called as an external identifier.
      <br><br>
      We can say that an identifier is a collection of alphanumeric characters that begins either with an
      alphabetical character or an underscore, which are used to represent various programming elements such as
      variables, functions, arrays, structures, unions, labels, etc. There are 52 alphabetical characters
      (uppercase and lowercase), underscore character, and ten numerical digits (0-9) that represent the
      identifiers. There is a total of 63 alphanumerical characters that represent the identifiers.
  </p>
  <p id="Head">Rules for constructing C identifiers</p>
  <p class="info">
      > &nbsp; The first character of an identifier should be either an alphabet or an underscore, and then it can
      be followed by any of the character, digit, or underscore. <br>
      > &nbsp; It should not begin with any numerical digit. <br>
      > &nbsp; In identifiers, both uppercase and lowercase letters are distinct. Therefore, we can say that
      identifiers are case sensitive. <br>
      > &nbsp; Commas or blank spaces cannot be specified within an identifier. <br>
      > &nbsp; Keywords cannot be represented as an identifier. <br>
      > &nbsp; The length of the identifiers should not be more than 31 characters. <br>
      > &nbsp; Identifiers should be written in such a way that it is meaningful, short, and easy to read. <br>
      Example of valid identifiers : <br>
      <span style="color: rgb(37, 136, 153);">total, sum, average, _m _, sum_1, etc. <br></span>
      Example of Invalid identifiers : <br>
      <span style="color: rgb(37, 136, 153);">2sum (starts with a numerical digit) <br>
          int (reserved word) <br>
          char (reserved word) <br>
          m+n (special character, i.e., '+') <br></span>
  </p>
  <p id="Head">Types of identifiers</p>
  <p class="info">
      1. &nbsp; Internal identifier <br>
      2. &nbsp; External identifier <br><br>
      <strong style="color: rgb(38, 56, 10);">1. &nbsp;Internal Identifier</strong> <br>
      If the identifier is not used in the external linkage, then it is known as an internal identifier. The
      internal identifiers can be local variables. <br>
      <strong style="color: rgb(38, 56, 10);">1. &nbsp;External Identifier</strong> <br>
      If the identifier is used in the external linkage, then it is known as an external identifier. The external
      identifiers can be function names, global variables. <br>
  </p>
  <p id="Head">Differences between Keyword and Identifier</p>
  <table style="width: 80%;">
      <tr>
          <th>Keyword</th>
          <th>Identifier</th>
      </tr>
      <tr>
          <td>Keyword is a pre-defined word.</td>
          <td>The identifier is a user-defined word</td>
      </tr>
      <tr>
          <td>It must be written in a lowercase letter.</td>
          <td>It can be written in both lowercase and uppercase letters.</td>
      </tr>
      <tr>
          <td>Its meaning is pre-defined in the c compiler.</td>
          <td>Its meaning is not defined in the c compiler.</td>
      </tr>
      <tr>
          <td>It is a combination of alphabetical characters.</td>
          <td>It is a combination of alphanumeric characters.</td>
      </tr>
      <tr>
          <td>It does not contain the underscore character.</td>
          <td>It can contain the underscore character.</td>
      </tr>
  </table>`;
});

Tut_C_12.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Operators in C</p>
  <p class="info">
      An operator is simply a symbol that is used to perform operations. There can be many types of operations like arithmetic, logical, bitwise, etc. <br>
      There are following types of operators to perform different types of operations in C language. <br>
      > &nbsp; Arithmetic Operators <br>
      > &nbsp; Relational Operators <br>
      > &nbsp; Shift Operators <br>
      > &nbsp; Logical Operators <br>
      > &nbsp; Bitwise Operators <br>
      > &nbsp; Ternary or Conditional Operators <br>
      > &nbsp; Assignment Operator <br>
      > &nbsp; Misc Operator <br>
      > &nbsp; Shorthand Operators <br>
  </p>
  <p id="Head">C ShortHand Operators</p>
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
      </table>
  <p id="Head">Precedence of Operators in C</p>
  <p class="info">
      The precedence of operator species that which operator will be evaluated first and next. The associativity specifies the operator direction to be evaluated; it may be left to right or right to left. <br>
      Let's understand the precedence by the example given below: <br>
      <span style="color: rgb(37, 136, 153);">int value=10+20*10;   <br></span>
      The value variable will contain 210 because * (multiplicative operator) is evaluated before + (additive operator). <br>
      The precedence and associativity of C operators is given below: <br>
  </p>
  <img style="margin: 20px 50px; width: 90%;" src="/static/mainpage/C_tut_img/precedance_django.png" alt="">
  `
});

Tut_C_13.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Format Specifier in C</p>
  <p class="info">
      The Format specifier is a string used in the formatted input and output functions. The format string
      determines the format of the input and output. The format string always starts with a '%' character. <br>
      <strong style="color: rgb(38, 56, 10);">The commonly used format specifiers in printf() function
          are:</strong> <br>
  </p>
  <table style="width: 98%;">
      <tr>
          <th>Format specifier</th>
          <th>Description</th>
      </tr>
      <tr>
          <td>%d or %i</td>
          <td>It is used to print the signed integer value where signed integer means that the variable can hold
              both positive and negative values.</td>
      </tr>
      <tr>
          <td>%u</td>
          <td>It is used to print the unsigned integer value where the unsigned integer means that the variable
              can hold only positive value.</td>
      </tr>
      <tr>
          <td>%o</td>
          <td>It is used to print the octal unsigned integer where octal integer value always starts with a 0
              value.</td>
      </tr>
      <tr>
          <td>%x</td>
          <td>It is used to print the hexadecimal unsigned integer where the hexadecimal integer value always
              starts with a 0x value. In this, alphabetical characters are printed in small letters such as a, b,
              c, etc.</td>
      </tr>
      <tr>
          <td>%X</td>
          <td>It is used to print the hexadecimal unsigned integer, but %X prints the alphabetical characters in
              uppercase such as A, B, C, etc.</td>
      </tr>
      <tr>
          <td>%f</td>
          <td>It is used for printing the decimal floating-point values. By default, it prints the 6 values after
              '.'.</td>
      </tr>
      <tr>
          <td>%e/%E</td>
          <td>It is used for scientific notation. It is also known as Mantissa or Exponent. </td>
      </tr>
      <tr>
          <td>%g</td>
          <td>It is used to print the decimal floating-point values, and it uses the fixed precision, i.e., the
              value after the decimal in input would be exactly the same as the value in the output.</td>
      </tr>
      <tr>
          <td>%p</td>
          <td>It is used to print the address in a hexadecimal form.</td>
      </tr>
      <tr>
          <td>%c</td>
          <td>It is used to print the unsigned character.</td>
      </tr>
      <tr>
          <td>%s</td>
          <td>It is used to print the strings.</td>
      </tr>
      <tr>
          <td>%ld</td>
          <td>It is used to print the long-signed integer value.</td>
      </tr>
  </table>
  <p class="info">
      Let's understand the format specifiers in detail through an example. <br>
      <span style="color: rgb(160, 6, 6);">> &nbsp; For Signed Integer format specifier : %d, %i <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      int x = 45, y = 90; <br>
      printf("%d\n", x); <br>
      printf("%i\n", x); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          45 <br>
          45 <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; Unsigned Integer Format Specifier: %u: <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      printf("%u\n", -10); <br>
      printf("%u\n", 10); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          4294967286 <br>
          10 <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; Floating-point format specifier : %f, %e or %E<br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      float a = 12.67; <br>
      printf("%f\n", a); <br>
      printf("%e\n", a); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          12.670000 <br>
          1.267000e+01 <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; Character format specifier : %c <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      char ch = 'A'; <br>
      printf("%c\n", ch); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          A <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp;Unsigned Octal number for integer : %o <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      int a = 67; <br>
      printf("%o\n", a); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          103 <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; Unsigned Hexadecimal for integer: %x, %X <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      int a = 15; <br>
      printf("%x\n", a); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          f <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; String printing: %s <br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      char a[] = "govindkushwaha"; <br>
      printf("%s\n", a); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          govindkushwaha <br></span>

      <span style="color: rgb(160, 6, 6);">> &nbsp; Address Printing: %p<br></span>
      #include "stdio.h" <br>
      int main() <br>
      { <br>
      int a = 10; <br>
      printf("The Memory Address of a: %p\n",(void*)&a); <br>
      return 0; <br>
      } <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          The Memory Address of a: 0x7ffc85861624 <br></span>
  </p>`;
});

Tut_C_14.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Escape Sequence in C</p>
  <p class="info">
      An escape sequence in C language is a sequence of characters that doesn't represent itself when used inside
      string literal or character. <br>
      It is composed of two or more characters starting with backslash \. For example: \n represents new line.
      <br>
  </p>
  <p id="Head">List of Escape Sequences in C</p>
  <table class="alt">
      <tr>
          <th>Escape Sequence</th>
          <th>Meaning</th>
      </tr>
      <tr>
          <td>\a</td>
          <td>Alarm or Beep</td>
      </tr>
      <tr>
          <td>\\b</td>
          <td>Backspace</td>
      </tr>
      <tr>
          <td>\\f</td>
          <td>Form Feed</td>
      </tr>
      <tr>
          <td>\\n</td>
          <td>New Line</td>
      </tr>
      <tr>
          <td>\\r</td>
          <td>Carriage Return</td>
      </tr>
      <tr>
          <td>\\t</td>
          <td>Tab (Horizontal)</td>
      </tr>
      <tr>
          <td>\\v</td>
          <td>Vertical Tab</td>
      </tr>
      <tr>
          <td>\\</td>
          <td>Backslash</td>
      </tr>
      <tr>
          <td>\'</td>
          <td>Single Quote</td>
      </tr>
      <tr>
          <td>\"</td>
          <td>Double Quote</td>
      </tr>
      <tr>
          <td>\?</td>
          <td>Question Mark</td>
      </tr>
      <tr>
          <td>\\nnn</td>
          <td>octal number</td>
      </tr>
      <tr>
          <td>\\xhh</td>
          <td>hexadecimal number</td>
      </tr>
      <tr>
          <td>\\0</td>
          <td>Null</td>
      </tr>
  </table>
  <p id="Head">Escape Sequence Example</p>
  <p class="info">
      #include"stdio.h"    <br>
          int main(){    <br>
               int number=50;  <br>
              printf("You\nare\nlearning\n\'c\' language\n\"Do you know C language\"");     <br>
          return 0;  <br>
          }     <br>
      <span style="color: rgb(30, 47, 206);">Output: <br>
          You <br>
          are <br>
          learning <br>
          'c' language <br>
          "Do you know C language" <br></span>
  </p>`;
});

Tut_C_15.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Constants in C</p>
  <p class="info">
      A constant is a value or variable that can't be changed in the program, for example: 10, 20, 'a', 3.4, "c
      programming" etc. <br>
      There are different types of constants in C programming. <br>
      <br>
  </p>
  <p id="Head">List of Constants in C</p>
  <table class="alt">
      <tr>
          <th>Constant</th>
          <th>Example</th>
      </tr>
      <tr>
          <td>Decimal Constant</td>
          <td>10, 20, 450 etc.</td>
      </tr>
      <tr>
          <td>Real or Floating-point Constant</td>
          <td>10.3, 20.2, 450.6 etc.</td>
      </tr>
      <tr>
          <td>Octal Constant</td>
          <td>021, 033, 046 etc.</td>
      </tr>
      <tr>
          <td>Hexadecimal Constant</td>
          <td>0x2a, 0x7b, 0xaa etc.</td>
      </tr>
      <tr>
          <td>Character Constant</td>
          <td>'a', 'b', 'x' etc.</td>
      </tr>
      <tr>
          <td>String Constant</td>
          <td>"c", "c program", "c in innovative-learning" etc.</td>
      </tr>
  </table>
  <p class="info">
      There are two ways to define constant in C programming. <br>
      1. &nbsp;const keyword <br>
      2. &nbsp;#define preprocessor <br>
  </p>
  <p id="Head">1) C const keyword</p>
  <p class="info">
      The const keyword is used to define constant in C programming. <br>
      <span style="color: rgb(13, 10, 180);">
          #include'stdio.h" <br>
          int main(){ <br>
          const float PI=3.14; <br>
          <span style="color: rgb(66, 61, 61);">// The value of PI variable can't be changed <br>
              //If you try to change the the value of PI, it will render compile time error <br></span>
          printf("The value of PI is: %f",PI); <br>
          return 0; <br>
          } <br>
      </span>
      <span style="color: rgb(126, 47, 47);">Output: <br>
          The value of PI is: 3.140000</span>
      <br>
  </p>
  <p id="Head">2) C #define preprocessor</p>
  <p class="info">
      The #define preprocessor directive is used to define constant or micro substitution. It can use any basic
      data type. <br>
      Let's see an example of #define to define a constant. <br>
      <span style="color: rgb(13, 10, 180);">
          #include'stdio.h" <br>
          #define PI 3.14 <br>
          int main(){ <br>
          printf("%f",PI); <br>
          <span style="color: rgb(66, 61, 61);">// The value of PI variable can't be changed <br>
              //If you try to change the the value of PI, it will render compile time error <br></span>
          return 0; <br>
          } <br>
      </span>
      <span style="color: rgb(126, 47, 47);">Output: <br>
          The value of PI is: 3.140000</span>
  </p>`;
});

Tut_C_16.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Literals in C</p>
  <p class="info">
      Literals are the constant values assigned to the constant variables. We can say that the literals represent the fixed values that cannot be modified. It also contains memory but does not have references as variables. For example, const int =10; is a constant integer expression in which 10 is an integer literal. <br>
      <span style="color: rgb(49, 83, 25);">Types of literals <br></span>
      There are four types of literals that exist in C programming:
      1. &nbsp; Integer literal
      2. &nbsp; Float literal
      3. &nbsp; Character literal
      4. &nbsp; String literal <br>
      <br>
      <span style="color: rgb(49, 83, 25);">Integer literal<br></span>
      It is a numeric literal that represents only integer type values. It represents the value neither in fractional nor exponential part. <br>
      <span style="color: rgb(49, 83, 25);">Float literal<br></span>
      It is a literal that contains only floating-point values or real numbers. These real numbers contain the number of parts such as integer part, real part, exponential part, and fractional part. The floating-point literal must be specified either in decimal or in exponential form. <br>
      <span style="color: rgb(49, 83, 25);">Character literal<br></span>
      A character literal contains a single character enclosed within single quotes. If multiple characters are assigned to the variable, then we need to create a character array. If we try to store more than one character in a variable, then the warning of a multi-character character constant will be generated. <br>
      <span style="color: rgb(49, 83, 25);">String literal<br></span>
      A string literal represents multiple characters enclosed within double-quotes. It contains an additional character, i.e., '\0' (null character), which gets automatically inserted. This null character specifies the termination of the string. We can use the '+' symbol to concatenate two strings. <br>

      For example, <br>
      String1= "govind"; <br>
      String2= "kushwaha"; <br>
      To concatenate the above two strings, we use '+' operator, as shown in the below statement: <br>
      "govind " + "kushwaha"= govind kushwaha <br>
  </p>`;
});

Tut_C_17.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Tokens in C</p>
  <p class="info">
      Tokens in C is the most important element to be used in creating a program in C. We can define the token as the smallest individual element in C. For 'example, we cannot create a sentence without using words; similarly, we cannot create a program in C without using tokens in C. Therefore, we can say that tokens in C is the building block or the basic component for creating a program in C language. <br>
      <span style="color: rgb(49, 83, 25);">Classification of tokens in C <br><br></span>
      <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/C_tut_img/tokens-in-c_django.png" alt="">
      <br><br> 
      Tokens in C language can be divided into the following categories: <br>
      1. &nbsp; Keywords in C <br>
      2. &nbsp; Identifiers in C <br>
      3. &nbsp; Strings in C <br>
      4. &nbsp; Operators in C <br>
      5. &nbsp; Constant in C <br>
      6. &nbsp; Special Characters in C <br>
      <br>
  </p>
      <p id="Tut-C-25" onclick="addClick1()" style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Keywords in C</p> <br>
      <p id="Tut-C-26" onclick="addClick2()" style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Identifiers in C</p> <br>
      <p id="Tut-C-27" onclick="addClick3()" style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Strings in C</p> <br>
      <p id="Tut-C-28" onclick="addClick4()" style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Operators in C</p> <br>
      <p id="Tut-C-29" onclick="addClick5()" style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Constant in C</p> <br>
      <p style="cursor: pointer; color: blue; font-size: 1.4rem;font-family: 'Baloo Bhai 2', cursive;">> Special Characters in C</p> <br>
  <p class="info">
      Some special characters are used in C, and they have a special meaning which cannot be used for another purpose. 
      <span style="color: rgb(49, 83, 25);">Square brackets [ ]:</span> The opening and closing brackets represent the single and multidimensional subscripts. <br><br>
      <span style="color: rgb(49, 83, 25);">Simple brackets ( ):</span> It is used in function declaration and function calling. For example, printf() is a pre-defined function. <br><br>
      <span style="color: rgb(49, 83, 25);">Curly braces { }:</span> It is used in the opening and closing of the code. It is used in the opening and closing of the loops. <br><br>
      <span style="color: rgb(49, 83, 25);">Comma (,):</span> It is used for separating for more than one statement and for example, separating function parameters in a function call, separating the variable when printing the value of more than one variable using a single printf statement. <br><br>
      <span style="color: rgb(49, 83, 25);">Hash/pre-processor (#):</span> It is used for pre-processor directive. It basically denotes that we are using the header file. <br><br>
      <span style="color: rgb(49, 83, 25);">Asterisk (*):</span> This symbol is used to represent pointers and also used as an operator for multiplication. <br><br>
      <span style="color: rgb(49, 83, 25);">Tilde (~):</span> It is used as a destructor to free memory. <br><br>
      <span style="color: rgb(49, 83, 25);">Period (.):</span> It is used to access a member of a structure or a union. <br><br>
  </p>
  `;
});

Tut_C_18.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Bitwise Operator in C</p>
  <p class="info">
      The bitwise operators are the operators used to perform the operations on the data at the bit-level. When we
      perform the bitwise operations, then it is also known as bit-level programming. It consists of two digits,
      either 0 or 1. It is mainly used in numerical computations to make the calculations faster. <br>

      We have different types of bitwise operators in the C programming language. The following is the list of the
      bitwise operators: <br>
  </p>
  <table>
      <tr>
          <th>Operator</th>
          <th>Meaning of operator</th>
      </tr>
      <tr>
          <td>&amp;</td>
          <td>Bitwise AND operator</td>
      </tr>
      <tr>
          <td>|</td>
          <td>Bitwise OR operator</td>
      </tr>
      <tr>
          <td>^</td>
          <td>Bitwise exclusive OR operator</td>
      </tr>
      <tr>
          <td>~</td>
          <td>One's complement operator (unary operator)</td>
      </tr>
      <tr>
          <td>&lt;&lt;</td>
          <td>Left shift operator</td>
      </tr>
      <tr>
          <td>&gt;&gt;</td>
          <td>Right shift operator</td>
      </tr>
  </table>
  <span style="color: rgb(49, 83, 25);">Let's look at the truth table of the bitwise operators
      : <br><br></span>

  <table>

      <tr>
          <th>X</th>
          <th>Y</th>
          <th>X&amp;Y</th>
          <th>X|Y</th>
          <th>X^Y</th>
      </tr>
      <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
      <tr>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
      </tr>
      <tr>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
      </tr>
      <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
      </tr>
  </table>
  <p id="Head">Bitwise AND operator</p>
  <p class="info">
      Bitwise AND operator is denoted by the single ampersand sign (&). Two integer operands are written on both sides of the (&) operator. If the corresponding bits of both the operands are 1, then the output of the bitwise AND operation is 1; otherwise, the output would be 0.
          <br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">We have two variables a and b.   <br>
      a =6;  <br>
      b=4;  <br>
      The binary representation of the above two variables are given below:  <br>
      a = 0110  <br>
      b = 0100  <br>
      When we apply the bitwise AND operation in the above two variables, i.e., a&b, the output would be:  <br>
      <span style="color: rgb(27, 48, 167);">Result = 0100</span>
      <br></span>
      As we can observe from the above result that bits of both the variables are compared one by one. If the bit of both the variables is 1 then the output would be 1, otherwise 0. <br>
      > &nbsp;Let's understand the bitwise AND operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
             int a=6, b=14;  <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The output of the Bitwise AND operator a&b is %d",a&b);  <br>
             return 0;  <br>
          }  </span> <br>
          In the above code, we have created two variables, i.e., 'a' and 'b'. The values of 'a' and 'b' are 6 and 14 respectively. The binary value of 'a' and 'b' are 0110 and 1110, respectively. When we apply the AND operator between these two variables, <br>
          a AND b = 0110 && 1110 = 0110 <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The output of the Bitwise AND operator a&b is 6
          </span>
  </p>
  <p id="Head">Bitwise OR operator</p>
  <p class="info">
      The bitwise OR operator is represented by a single vertical sign (|). Two integer operands are written on both sides of the (|) symbol. If the bit value of any of the operand is 1, then the output would be 1, otherwise 0.
          <br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">We consider two variables,     <br>
      a =23;  <br>
      b=10;  <br>
      The binary representation of the above two variables are given below:  <br>
      a = 0001 0111  <br>
      b = 0000 1010  <br>
      When we apply the bitwise OR operation in the above two variables, i.e., a|b, the output would be:  <br>
      <span style="color: rgb(27, 48, 167);">Result = 0001 1111</span>
      <br></span>
      As we can observe from the above result that the bits of both the operands are compared one by one; if the value of either bit is 1, then the output would be 1 otherwise 0. <br>
      > &nbsp;Let's understand the bitwise OR operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
              int a=23,b=10; <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The output of the Bitwise OR operator a|b is %d",a|b);  <br>
             return 0;  <br>
          }  </span> <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The output of the Bitwise OR operator a|b is 31
          </span>
  </p>
  <p id="Head">Bitwise exclusive OR operator</p>
  <p class="info">
      Bitwise exclusive OR operator is denoted by (^) symbol. Two operands are written on both sides of the exclusive OR operator. If the corresponding bit of any of the operand is 1 then the output would be 1, otherwise 0.
          <br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">We have two variables a and b.   <br>
      a = 12;  <br>
      b = 10;  <br>
      The binary representation of the above two variables are given below:  <br>
      a = 0000 1100  <br>
      b = 0000 1010  <br>
      When we apply the bitwise AND operation in the above two variables, i.e., a&b, the output would be:  <br>
      <span style="color: rgb(27, 48, 167);">Result = 0000 1110 </span>
      <br></span>
      As we can observe from the above result that the bits of both the operands are compared one by one; if the corresponding bit value of any of the operand is 1, then the output would be 1 otherwise 0. <br>
      > &nbsp;Let's understand the bitwise AND operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
             int a=12,b=10;  <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The output of the Bitwise exclusive OR operator a^b is %d",a^b);  <br>
             return 0;  <br>
          }  </span> <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The output of the Bitwise exclusive OR operator a^b is 6
          </span>
  </p>
  <p id="Head">Bitwise complement operator</p>
  <p class="info">
      The bitwise complement operator is also known as one's complement operator. It is represented by the symbol tilde (~). It takes only one operand or variable and performs complement operation on an operand. When we apply the complement operation on any bits, then 0 becomes 1 and 1 becomes 0.
          <br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">If we have a variable named 'a',   <br>
      a = 8;  <br>
      The binary representation of the above variable is given below:   <br>
      a = 1000  <br>
      When we apply the bitwise complement operator to the operand, then the output would be:  <br>
      <span style="color: rgb(27, 48, 167);">Result = 0111  </span>
      <br></span>
      As we can observe from the above result that if the bit is 1, then it gets changed to 0 else 1. <br>
      > &nbsp;Let's understand the bitwise AND operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
              int a=8;  <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The output of the Bitwise complement operator ~a is %d",~a);  <br>
             return 0;  <br>
          }  </span> <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The output of the Bitwise complement operator ~a is -9
          </span>
  </p>
  <p id="Head">Bitwise Left-shift operators</p>
  <p class="info">
      It is an operator that shifts the number of bits to the left-side.<br>
      Syntax of the left-shift operator is given below: <br>
      Operand << n <br>
      Where,<br>
      Operand is an integer expression on which we apply the left-shift operation. <br>
      n is the number of bits to be shifted. <br>
      In the case of Left-shift operator, 'n' bits will be shifted on the left-side. The 'n' bits on the left side will be popped out, and 'n' bits on the right-side are filled with 0. <br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">If we have a variable named 'a',   <br>
      a = 5;  <br>
      The binary representation of the above variable is given below:   <br>
      a = 0101  <br>
      If we want to left-shift the above representation by 2, then the statement would be:     <br>
      a << 2;  <br>
      0101 << 2  <br>
      <span style="color: rgb(27, 48, 167);">Result = 00010100</span>
      <br></span>
      > &nbsp;Let's understand the bitwise AND operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
              int a=5;  <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The value of a<<2 is : %d ", a<<2);  <br>
             return 0;  <br>
          }  </span> <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The value of a<<2 is : 20
          </span>
  </p>
  <p id="Head">Bitwise Right-shift operators</p>
  <p class="info">
      It is an operator that shifts the number of bits to the right side.<br>
      Syntax of the left-shift operator is given below: <br>
      Operand >> n <br>
      Where,<br>
      Operand is an integer expression on which we apply the right-shift operation.<br>
      n is the number of bits to be shifted.<br>
      In the case of the right-shift operator, 'n' bits will be shifted on the right-side. The 'n' bits on the right-side will be popped out, and 'n' bits on the left-side are filled with 0.<br>
      For example, <br>
      <span style="color: rgb(160, 6, 6);">If we have a variable named 'a',   <br>
      a = 7;  <br>
      The binary representation of the above variable is given below:   <br>
      a = 0111 <br>
      If we want to left-shift the above representation by 2, then the statement would be:     <br>
      a >> 2;  <br>
      0101 >> 2  <br>
      <span style="color: rgb(27, 48, 167);">Result = 0000 0001</span>
      <br></span>
      > &nbsp;Let's understand the bitwise AND operator through the program. <br>
      <span style="color: rgb(63, 55, 185);">#include "stdio.h"   <br>
          int main()   <br>
          {  <br>
              int a=7;  <br>
             <span style="color: rgb(80, 80, 83);">// variable declarations </span> <br>
             printf("The value of a>>2 is : %d ", a>>2);  <br>
             return 0;  <br>
          }  </span> <br>
          <span style="color: rgb(160, 6, 6);">Output : <br>
              The value of a>>2 is : 1
          </span>
  </p>`;
});

Tut_C_19.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">C if else Statement</p>
  <p class="info">
      The if-else statement in C is used to perform the operations based on some specific condition. The operations specified in if block are executed if and only if the given condition is true. <br>
      There are the following variants of if statement in C language. <br>
      > &nbsp;If statement <br>
      > &nbsp;If-else statement <br>
      > &nbsp;If else-if ladder <br>
      > &nbsp;Nested if <br>
  </p>
  <p id="Head">If Statement</p>
  <p class="info">
      The if statement is used to check some given condition and perform some operations depending upon the correctness of that condition. It is mostly used in the scenario where we need to perform the different operations for the different conditions. <br> The syntax of the if statement is given below. <br>
      <span style="color: blue;">
          if(expression){  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
          } <br>
      </span>
      <span>Flowchart of if statement in C</span><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if_django.png" alt="">
      <br>
      Let's see a simple example of C language if statement.
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>   
              int main(){    <br>
              int number=0;    <br>
              printf("Enter a number:");    <br>
              scanf("%d",&number);    <br>
              if(number%2==0){    <br>
              printf("%d is even number",number);  <br>  
              }    <br>
              return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          Enter a number:4 <br>
          4 is even number <br>
          enter a number:5</span> <br>
  </p>
  <p id="Head">If-else Statement</p>
  <p class="info">
      The if-else statement is used to perform two operations for a single condition. The if-else statement is an extension to the if statement using which, we can perform two different operations, i.e., one is for the correctness of that condition, and the other is for the incorrectness of the condition. Here, we must notice that if and else block cannot be executed simiulteneously. Using if-else statement is always preferable since it always invokes an otherwise case with every if condition. The syntax of the if-else statement is given below.<br>
      <span style="color: blue;">
          if(expression){  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is true </span> <br>
          } <br>
          else{  <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is false  </span> <br>
          } <br>
      </span>
      <span>Flowchart of if-else statement in C</span><br><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else_django.png" alt="">
      <br>
      Let's see a simple example of C language if-else statement.
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>   
          int main(){    <br>
              int number=0;    <br>
              printf("enter a number:");    <br>
              scanf("%d",&number);     <br>
              if(number%2==0){    <br>
              printf("%d is even number",number);    <br>
              }    <br>
              else{    <br>
              printf("%d is odd number",number);    <br>
              }         <br>
              return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          enter a number:4 <br>
          4 is even number <br>
          enter a number:5 <br>
          5 is odd number</span> <br>
  </p>
  <p id="Head">If else-if ladder Statement</p>
  <p class="info">
      The if-else-if ladder statement is an extension to the if-else statement. It is used in the scenario where there are multiple cases to be performed for different conditions. In if-else-if ladder statement, if a condition is true then the statements defined in the if block will be executed, otherwise if some other condition is true then the statements defined in the else-if block will be executed, at the last if none of the condition is true then the statements defined in the else block will be executed. There are multiple else-if blocks possible. It is similar to the switch case statement where the default is executed instead of else block if none of the cases is matched.<br>
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
      <span>Flowchart of else-if ladder statement in C</span><br><br>
      <img class="if-else-img" src="/static/mainpage/C_tut_img/if-else-if_django.png" alt="">
      <br>
      The example of an if-else-if statement in C language is given below.
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>   
          int main(){    <br>
              int number=0;     <br>
              printf("enter a number:");     <br>
              scanf("%d",&number);      <br>
              if(number==10){     <br>
              printf("number is equals to 10");     <br>
              }     <br>
              else if(number==50){     <br>
              printf("number is equal to 50");     <br>
              }     <br>
              else if(number==100){     <br>
              printf("number is equal to 100");     <br>
              }     <br>
              else{     <br>
              printf("number is not equal to 10, 50 or 100");     <br>
              } <br>
              return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          enter a number:4 <br>
          number is not equal to 10, 50 or 100 <br>
          enter a number:50 <br>
          number is equal to 50</span> <br>
  </p>`;
});

Tut_C_20.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">do while loop in C</p>
  <p class="info">
      The do while loop is a post tested loop. Using the do-while loop, we can repeat the execution of several
      parts of the statements. The do-while loop is mainly used in the case where we need to execute the loop at
      least once. The do-while loop is mostly used in menu-driven programs where the termination condition depends
      upon the end user.<br>
      The syntax of the C language do-while loop is given below: <br>
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
      There is given the simple program of c language do while loop where we are printing the table of 2. <br>
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>
          int main(){ <br>
          int main(){ <br>
          int i=2; <br>
          do{ <br>
          printf("%d \\n",i); <br>
          i = i + 2; <br>
          }while(i<=20); <br>
              return 0; <br>
              } <br>
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
  change_page[0].innerHTML = `<p id="Head">C Strings</p>
  <p class="info">
      The string can be defined as the one-dimensional array of characters terminated by a null ('\\0'). The character array or the string is used to manipulate text such as word or sentences. Each character in the array occupies one byte of memory, and the last character must always be 0. The termination character ('\\0') is important in a string since it is the only way to identify where the string ends. When we define a string as char s[10], the character s[10] is implicitly initialized with the null in the memory. <br>
      There are two ways to declare a string in c language. <br>
      1. &nbsp; By string literal <br>
      2. &nbsp; By char array <br><br>
      Let's see a simple example where a string is declared and being printed. The '%s' is used as a format specifier for the string in c language. <br>
      <span style="color: blue;">
          #include "stdio.h"  <br>
          #include "string.h"  <br>
              int main()  <br>
              {  <br>
                  char ch[11]={'g', 'o', 'v', 'i', 'n', 'd', '\\0'};    <br>
                  char ch2[11]="govind";    <br>                            
                  printf("Char Array Value is: %s\\n", ch);     <br>
                  printf("String Literal Value is: %s\\n", ch2);  <br>
                  return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(158, 52, 144);">
      Output : <br>
      Char Array Value is: govind  <br>
      String Literal Value is: govind <br>
      </span>
  </p>`;
});

Tut_C_22.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">C Array</p>
  <p class="info">
      An array is defined as the collection of similar type of data items stored at contiguous memory locations. Arrays are the derived data type in C programming language which can store the primitive type of data such as int, char, double, float, etc. It also has the capability to store the collection of derived data types, such as pointers, structure, etc. The array is the simplest data structure where each data element can be randomly accessed by using its index number. <br><br>
      C array is beneficial if you have to store similar elements. For example, if we want to store the marks of a student in 6 subjects, then we don't need to define different variables for the marks in the different subject. Instead of that, we can define an array which can store the marks in each subject at the contiguous memory locations. <br><br>
      By using the array, we can access the elements easily. Only a few lines of code are required to access the elements of the array. <br><br>
      We can declare an array in the c language in the following way. <br>
      <span style="color: rgb(209, 46, 46);">data_type array_name[array_size];  <br></span>
      Let's see the C program to declare and initialize the array in C. <br>
      <span style="color: blue;">
          #include "stdio.h"  <br>
          #include "string.h"  <br>
              int main()  <br>
              {  <br>
                  int i=0;    <br>
                  int marks[5];       
                  <span style="color: rgb(78, 74, 74);">//declaration of array</span> <br>
                  marks[0]=80; 
                  <span style="color: rgb(78, 74, 74);">//initialization of array   <br></span>
                  marks[1]=60;    <br>
                  marks[2]=70;    <br>
                  marks[3]=85;    <br>
                  marks[4]=75;    <br>
                  <span style="color: rgb(78, 74, 74);">//traversal of array </span>
                   <br>
                  for(i=0;i < 5;i++){      <br>
                  printf("%d \\n",marks[i]);    <br>
                  } <br>
                  <span style="color: rgb(78, 74, 74);">//end of for loop  <br></span>
                  return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(158, 52, 144);">
      Output : <br>
      80  <br>
      60 <br>
      70 <br>
      85 <br>
      75 <br>
      </span>
  </p>`;
});

Tut_C_23.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">C Pointers</p>
  <p class="info">
      The pointer in C language is a variable which stores the address of another variable. This variable can be of type int, char, array, function, or any other pointer. The size of the pointer depends on the architecture. However, in 32-bit architecture the size of a pointer is 2 byte. <br><br>
  </p>
  <p id="Head">Declaring a pointer</p>
  <p class="info">
      The pointer in c language can be declared using * (asterisk symbol). It is also known as indirection pointer used to dereference a pointer. <br>
      <span style="color: rgb(209, 46, 46);">int *a;<span style="color: rgb(78, 74, 74);">//pointer to int</span> <br>  
          char *c;<span style="color: rgb(78, 74, 74);">//pointer to char </span> <br> <br>
      </span>
      <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/C_tut_img/pointer_c_django.png" alt="">
      <br>
      Let's see the pointer example as explained for the above figure. <br>
      <span style="color: blue;">
          #include "stdio.h"  <br>
          int main()  <br>
          {  <br>
          int number=50;    <br>
          int *p;      <br>
          p=&number;
          <br>
          <span style="color: rgb(78, 74, 74);">//stores the address of number variable </span> <br>  
          printf("Address of p variable is %x \\n",p); <br>
            <span style="color: rgb(78, 74, 74);">// p contains the address of the number therefore printing p gives the address of number. <br></span>     
          printf("Value of p variable is %d \\n",*p); <br> 
          <span style="color: rgb(78, 74, 74);">// As we know that * is used to dereference a pointer therefore if we print *p, we will get the value stored at the address contained by p.</span> <br>
          return 0;  <br>
              }  <br>
      </span>
      <span style="color: rgb(158, 52, 144);">
      Output : <br>
      Address of number variable is fff4 <br>
      Address of p variable is fff4 <br>
      Value of p variable is 50 <br>
      </span>
  </p>`;
});

Tut_C_24.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">C Functions</p>
  <p class="info">
      n c, we can divide a large program into the basic building blocks known as function. The function contains the set of programming statements enclosed by {}. A function can be called multiple times to provide reusability and modularity to the C program. In other words, we can say that the collection of functions creates a program. The function is also known as procedureor subroutinein other programming languages.<br><br>
  </p>
  <p id="Head">Advantage of functions in C</p>
  <p class="info">
      There are the following advantages of C functions. <br>
      > &nbsp; By using functions, we can avoid rewriting same logic/code again and again in a program.  <br>
      > &nbsp; We can call C functions any number of times in a program and from any place in a program. <br>
      > &nbsp; We can track a large C program easily when it is divided into multiple functions. <br>
      > &nbsp; Reusability is the main achievement of C functions. <br>
      > &nbsp; However, Function calling is always a overhead in a C program. <br>
  </p>
  <p id="Head">Function Aspects</p>
  <p class="info">
      There are three aspects of a C function. <br>
      <span style="color: rgb(38, 120, 126);">Function declaration : </span> A function must be declared globally in a c program to tell the compiler about the function name, function parameters, and return type. <br>
      <span style="color: rgb(38, 120, 126);">Function call  : </span> Function can be called from anywhere in the program. The parameter list must not differ in function calling and function declaration. We must pass the same number of functions as it is declared in the function declaration. <br>
      <span style="color: rgb(38, 120, 126);">Function definition : </span> It contains the actual statements which are to be executed. It is the most important aspect to which the control comes when the function is called. Here, we must notice that only one value can be returned from the function. <br>
  </p>
  <table>
      <tr><th>SN</th><th>C function aspects</th><th>Syntax</th></tr>
      <tr><td>1</td><td>Function declaration</td><td>return_type function_name (argument list);</td></tr>
      <tr><td>2</td><td>Function call</td><td>function_name (argument_list)</td></tr>
      <tr><td>3</td><td>Function definition</td><td>return_type function_name (argument list) {function body;}</td></tr>
  </table>
  <p class="info">
      <br>
      The syntax of creating function in c language is given below: <br>
      <span style="color: blue;">return_type function_name(data_type parameter...){   <br>
          <span style="color: rgb(58, 55, 55);">//code to be executed</span>   <br>
          }  </span> <br>
  </p>
  <p id="Head">Types of Functions</p>
  <p class="info">
      There are two types of functions in C programming: <br>
      <span style="color: rgb(38, 120, 126);">Library Functions: </span>are the functions which are declared in the C header files such as scanf(), printf(), gets(), puts(), ceil(), floor() etc.  <br>
      <span style="color: rgb(38, 120, 126);">User-defined functions: </span> are the functions which are created by the C programmer, so that he/she can use it many times. It reduces the complexity of a big program and optimizes the code. <br><br>
      <img style="margin-left: 19%; width: 60%;" src="/static/mainpage/C_tut_img/c-function_django.jpg" alt="">
      <br><br>
  </p>
  <p id="Head">Return Value</p>
  <p class="info">
      A C function may or may not return a value from the function. If you don't have to return any value from the function, use void for the return type. <br>
      Let's see a simple example of C function that doesn't return any value from the function. <br>
      Example without return value: <br>
      <span style="color: rgb(145, 56, 56);">
          void hello(){  <br>
              printf("hello c");  <br>
              }  <br>
      </span>
      If you want to return any value from the function, you need to use any data type such as int, long, char, etc. The return type depends on the value to be returned from the function. <br><br>
      Let's see a simple example of C function that returns int value from the function. <br>
      Example with return value: <br>
      <span style="color: rgb(145, 56, 56);">
          int get(){  <br>
              return 10;  <br>
              }  <br>
      </span>
      In the above example, we have to return 10 as a value, so the return type is int. If you want to return floating-point value (e.g., 10.2, 3.1, 54.5, etc), you need to use float as the return type of the method. <br><br>
      <span style="color: rgb(145, 56, 56);">
          float get(){  <br>
              return 10.2;  <br>
              }    <br>
      </span>
  </p>`;
});

Tut_C_30.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Ternary Operator</p>
  <p class="info">
      The conditional operator is also known as a ternary operator. The conditional statements are the decision-making statements which depends upon the output of the expression. It is represented by two symbols, i.e., '?' and ':'. <br><br>
      As conditional operator works on three operands, so it is also known as the ternary operator. <br><br>
      The behavior of the conditional operator is similar to the 'if-else' statement as 'if-else' statement is also a decision-making statement. <br><br>
      Syntax of a conditional operator <br>
      <span style="color: rgb(151, 24, 24);">Expression1? expression2: expression3;  <br></span> <br>
      The pictorial representation of the above syntax is shown below: <br>
      <img style="margin-left: 20%; width: 70%;" src="/static/mainpage/C_tut_img/ternary_django.png" alt="">
      <br>
      Let's understand the ternary or conditional operator through an example. <br>
      <span style="color: blue;">
          #include "stdio.h"  <br>
              int main()  <br>
              {  <br>
                  int age;  <br>
                  <span style="color: rgb(71, 67, 67);">// variable declaration</span>  <br>
                  printf("Enter your age");  <br>
                  scanf("%d",&age);<br>
                  <span style="color: rgb(71, 67, 67);">// taking user input for age variable</span>  <br> 
                  (age>=18)? (printf("eligible for voting")) : (printf("not eligible for voting")); <br>
                  <span style="color: rgb(71, 67, 67);"> // conditional operator</span>  <br>
                  return 0;  <br>
              }  <br>
      </span>
      In the above code, we are taking input as the 'age' of the user. After taking input, we have applied the condition by using a conditional operator. In this condition, we are checking the age of the user. If the age of the user is greater than or equal to 18, then the statement1 will execute, i.e., (printf("eligible for voting")) otherwise, statement2 will execute, i.e., (printf("not eligible for voting")). <br>
      <span style="color: rgb(158, 52, 144);">
      Output : <br>
      Enter your age 12 <br>
      not eligible for voting <br><br>
      Enter your age 22 <br>
      eligible for voting 
      </span>
  </p>`;
});

Tut_C_31.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">switch Statement</p>
  <p class="info">
      The switch statement in C is an alternate to if-else-if ladder statement which allows us to execute multiple
      operations for the different possibles values of a single variable called switch variable. Here, We can
      define various statements in the multiple cases for the different values of a single variable. <br>
      The syntax of switch statement in c language is given below:<br>
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
  </p>
  <p id="Head">Rules for switch statement in C language</p>
  <p class="info">
      1) The switch expression must be of an integer or character type. <br>
      2) The case value must be an integer or character constant. <br>
      3) The case value can be used only inside the switch statement. <br>
      4) The break statement in switch case is not must. It is optional. If there is no break statement found in
      the case, all the cases will be executed present after the matched case. It is known as fall through the
      state of C switch statement. <br>
      <span style="color: blue;">
          if(expression){ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is true </span> <br>
          } <br>
          else{ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed if condition is false </span> <br>
          } <br>
      </span>
      <span style="color: rgb(51, 124, 44);">Flowchart of switch statement in C</span> <br><br>
      <img style="margin-left: 20%; width: 60%;" src="/static/mainpage/C_tut_img/cpp-switch_django.png" alt="">
      <br>
  </p>
  <p id="Head">Functioning of switch case statement</p>
  <p class="info">
      First, the integer expression specified in the switch statement is evaluated. This value is then matched one
      by one with the constant values given in the different cases. If a match is found, then all the statements
      specified in that case are executed along with the all the cases present after that case including the
      default statement. No two cases can have similar values. If the matched case contains a break statement,
      then all the cases present after that will be skipped, and the control comes out of the switch. Otherwise,
      all the cases following the matched case will be executed. <br>
      Let's see a simple example of c language switch statement.
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>
          int main(){ <br>
          int number=0; <br>
          printf("enter a number:"); <br>
          scanf("%d",&number); <br>
          switch(number){ <br>
          case 10: <br>
          printf("number is equals to 10"); <br>
          break; <br>
          case 50: <br>
          printf("number is equal to 50"); <br>
          break; <br>
          case 100: <br>
          printf("number is equal to 100"); <br>
          break; <br>
          default: <br>
          printf("number is not equal to 10, 50 or 100"); <br>
          return 0; <br>
          } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          enter a number:4 <br>
          number is not equal to 10, 50 or 100 <br><br>

          enter a number:50 <br>
          number is equal to 50</span> <br>
  </p>
  <p id="Head">Nested switch case statement</p>
  <p class="info">
      We can use as many switch statement as we want inside a switch statement. Such type of statements is called
      nested switch case statements. Consider the following example.<br>
      <span style="color: blue;">
          <br>
          #include"stdio.h" <br>
          int main(){ <br>
          int i = 10;  <br>
          int j = 20; <br>
          switch(i) { <br>
          case 10: <br>
          printf("the value of i evaluated in outer switch: %d\\n",i); <br>
          case 20: <br>
          switch(j) { <br>
          case 20: <br>
          printf("The value of j evaluated in nested switch: %d\\n",j); <br>
          } <br>
          } <br>
          printf("Exact value of i is : %d\\n", i ); <br>
          printf("Exact value of j is : %d\\n", j ); <br>
          return 0; <br>
          } <br>
      </span>
      <span style="color: rgb(110, 35, 100);">
          Output : <br>
          the value of i evaluated in outer switch: 10 <br>
          The value of j evaluated in nested switch: 20 <br>
          Exact value of i is : 10 <br>
          Exact value of j is : 20 </span> <br>
  </p>`;
});

Tut_C_32.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">while loop in C</p>
  <p class="info">
      While loop is also known as a pre-tested loop. In general, a while loop allows a part of the code to be executed multiple times depending upon a given boolean condition. It can be viewed as a repeating if statement. The while loop is mostly used in the case where the number of iterations is not known in advance.<br>
      The syntax of the C language while loop is given below: <br>
      <span style="color: blue;">
          while(condition){ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
          } <br>
      </span>
      Flowchart of while loop
  </p>
  <img style="margin-left: 20%; width: 50%; height: 500px;" src="/static/mainpage/C_tut_img/newwhile_django.png" alt="">
  <br>
  </p>
  <p class="info">
      There is given the simple program of c language while loop where we are printing the table of 2. <br>
      <span style="color: blue;">
          #include"stdio.h" <br>
          int main(){ <br>
          int main(){ <br>
          int i=2; <br>
          while(i<=20){ <br>
          printf("%d \\n",i); <br>
          i = i + 2; <br>
          } <br>
              return 0; <br>
              } <br>
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
  change_page[0].innerHTML = `<p id="Head">for loop in C</p>
  <p class="info">
      The for loop in C language is used to iterate the statements or a part of the program several times. It is
      frequently used to traverse the data structures like the array and linked list.<br>
      The syntax of for loop in c language is given below: <br>
      <span style="color: blue;">
          for(Expression 1; Expression 2; Expression 3){ <br>
          <span style="color: rgb(102, 102, 104);">//code to be executed </span> <br>
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
          #include"stdio.h" <br>
          int main(){ <br>
          int main(){ <br>
          int i=0; <br>
          for(i=2;i<=20;i++) <br>
              { <br>
              printf("%d \\n",i++); <br>
              } <br>
          return 0; <br>
              } <br>
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
