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
var Tut_C_34 = document.getElementById("Tut-C-34");
var topics = document.querySelector('.sidebar');
var down_line = document.querySelector('.my_slide');
burger = document.querySelector('.burger');

Tut_C_1.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">What is Data Structure</p>
  <p class="info">
    Data Structure can be defined as the group of data elements which provides an efficient way of storing and organising data in the computer so that it can be used efficiently. Some examples of Data Structures are arrays, Linked List, Stack, Queue, etc. Data Structures are widely used in almost every aspect of Computer Science i.e. Operating System, Compiler Design, Artifical intelligence, Graphics and many more. <br><br>
    Data Structures are the main part of many computer science algorithms as they enable the programmers to handle the data in an efficient way. It plays a vital role in enhancing the performance of a software or a program as the main function of the software is to store and retrieve the user's data as fast as possible. <br>
  </p>
  <p id="Head">Basic Terminology</p>
  <p class="info">
    Data structures are the building blocks of any program or the software. Choosing the appropriate data structure for a program is the most difficult task for a programmer. Following terminology is used as far as data structures are concerned. <br>
    ~ &nbsp;Data: Data can be defined as an elementary value or the collection of values, for example, student's name and its id are the data about the student. <br>
    ~ &nbsp;Group Items: Data items which have subordinate data items are called Group item, for example, name of a student can have first name and the last name. <br>
    ~ &nbsp;Record: Record can be defined as the collection of various data items, for example, if we talk about the student entity, then its name, address, course and marks can be grouped together to form the record for the student. <br>
    ~ &nbsp;File: A File is a collection of various records of one type of entity, for example, if there are 60 employees in the class, then there will be 20 records in the related file where each record contains the data about each employee. <br>
    ~ &nbsp;Attribute and Entity: An entity represents the class of certain objects. it contains various attributes. Each attribute represents the particular property of that entity. <br>
    ~ &nbsp;Field: Field is a single elementary unit of information representing the attribute of an entity. <br>    </p>
  <p id="Head">Need of Data Structures</p>
  <p class="info">
    As applications are getting complexed and amount of data is increasing day by day, there may arrise the following problems:  <br>
    ~ &nbsp;Processor speed: To handle very large amout of data, high speed processing is required, but as the data is growing day by day to the billions of files per entity, processor may fail to deal with that much amount of data.  <br>
    ~ &nbsp;Data Search: Consider an inventory size of 106 items in a store, If our application needs to search for a particular item, it needs to traverse 106 items every time, results in slowing down the search process.  <br>
    ~ &nbsp;Multiple requests: If thousands of users are searching the data simultaneously on a web server, then there are the chances that a very large server can be failed during that process in order to solve the above problems, data structures are used. Data is organized to form a data structure in such a way that all items are not required to be searched and required data can be searched instantly.  <br>    </p>
  <p id="Head">Advantages of Data Structures</p>
  <p class="info">
    > &nbsp;Efficiency: Efficiency of a program depends upon the choice of data structures. For example: suppose, we have some data and we need to perform the search for a perticular record. In that case, if we organize our data in an array, we will have to search sequentially element by element. hence, using array may not be very efficient here. There are better data structures which can make the search process efficient like ordered array, binary search tree or hash tables.  <br>
    > &nbsp;Reusability: Data structures are reusable, i.e. once we have implemented a particular data structure, we can use it at any other place. Implementation of data structures can be compiled into libraries which can be used by different clients.  <br>
    > &nbsp;Abstraction: Data structure is specified by the ADT which provides a level of abstraction. The client program uses the data structure through interface only, without getting into the implementation details.
  </p>
  <p id="Head">Data Structure Classification</p>
  <p class="info">
    <img style="margin-left: 15%; " src="/static/mainpage/DS_tut_img/ds-introduction_django.jpg" alt=""> <br><br>
    1) &nbsp; Linear Data Structures: A data structure is called linear if all of its elements are arranged in the linear order. In linear data structures, the elements are stored in non-hierarchical way where each element has the successors and predecessors except the first and last element. <br>
    2) &nbsp;Non Linear Data Structures: This data structure does not form a sequence i.e. each item or element is connected with two or more other items in a non-linear arrangement. The data elements are not arranged in sequential structure.
  </p>
  <p id="Head">Operations on data structure</p>
  <p class="info">
    1) Traversing: Every data structure contains the set of data elements. Traversing the data structure means visiting each element of the data structure in order to perform some specific operation like searching or sorting.  <br><br>
    Example: If we need to calculate the average of the marks obtained by a student in 6 different subject, we need to traverse the complete array of marks and calculate the total sum, then we will devide that sum by the number of subjects i.e. 6, in order to find the average.  <br><br>

    2) Insertion: Insertion can be defined as the process of adding the elements to the data structure at any location.  <br><br>

    If the size of data structure is n then we can only insert n-1 data elements into it.  <br><br>

    3) Deletion:The process of removing an element from the data structure is called Deletion. We can delete an element from the data structure at any random location.  <br><br>

    If we try to delete an element from an empty data structure then underflow occurs.  <br><br>

    4) Searching: The process of finding the location of an element within the data structure is called Searching. There are two algorithms to perform searching, Linear Search and Binary Search. We will discuss each one of them later in this tutorial.  <br><br>

    5) Sorting: The process of arranging the data structure in a specific order is known as Sorting. There are many algorithms that can be used to perform sorting, for example, insertion sort, selection sort, bubble sort, etc.  <br><br>

    6) Merging: When two lists List A and List B of size M and N respectively, of similar type of elements, clubbed or joined to produce the third list, List C of size (M+N), then this process is called merging
  </p>`;
});

Tut_C_2.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">DS Algorithm</p>
  <p class="info">
    An algorithm is a process or a set of rules required to perform calculations or some other problem-solving operations especially by a computer. The formal definition of an algorithm is that it contains the finite set of instructions which are being carried in a specific order to perform the specific task. It is not the complete program or code; it is just a solution (logic) of a problem, which can be represented either as an informal description using a Flowchart or Pseudocode. <br>
  </p>
  <p id="Head">Characteristics of an Algorithm</p>
  <p class="info">
    The following are the characteristics of an algorithm:  <br>
    -> &nbsp;Input: An algorithm has some input values. We can pass 0 or some input value to an algorithm.
    -> &nbsp;Output: We will get 1 or more output at the end of an algorithm.  <br>
    -> &nbsp;Unambiguity: An algorithm should be unambiguous which means that the instructions in an algorithm should be clear and simple.  <br>
    -> &nbsp;Finiteness: An algorithm should have finiteness. Here, finiteness means that the algorithm should contain a limited number of instructions, i.e., the instructions should be countable.  <br>
    -> &nbsp;Effectiveness: An algorithm should be effective as each instruction in an algorithm affects the overall process.  <br>
    -> &nbsp;Language independent: An algorithm must be language-independent so that the instructions in an algorithm can be implemented in any of the languages with the same output. <br>    </p>
  <p id="Head">Dataflow of an Algorithm</p>
  <p class="info">
    ~ &nbsp;Problem: A problem can be a real-world problem or any instance from the real-world problem for which we need to create a program or the set of instructions. The set of instructions is known as an algorithm.  <br>
    ~ &nbsp;Algorithm: An algorithm will be designed for a problem which is a step by step procedure.  <br>
    Input: After designing an algorithm, the required and the desired inputs are provided to the algorithm.  <br>
    ~ &nbsp;Processing unit: The input will be given to the processing unit, and the processing unit will produce the desired output.  <br>
    ~ &nbsp;Output: The output is the outcome or the result of the program.  <br>    </p>
  <p id="Head">Why do we need Algorithms?</p>
  <p class="info">
    1)&nbsp;Scalability: It helps us to understand the scalability. When we have a big real-world problem, we need to scale it down into small-small steps to easily analyze the problem.
    2)&nbsp;Performance: The real-world is not easily broken down into smaller steps. If the problem can be easily broken into smaller steps means that the problem is feasible.
  </p>
  <p id="Head">Factors of an Algorithm</p>
  <p class="info">
    > &nbsp;Modularity: If any problem is given and we can break that problem into small-small modules or small-small steps, which is a basic definition of an algorithm, it means that this feature has been perfectly designed for the algorithm. <br>
    > &nbsp;Correctness: The correctness of an algorithm is defined as when the given inputs produce the desired output, which means that the algorithm has been designed algorithm. The analysis of an algorithm has been done correctly. <br>
    > &nbsp;Maintainability: Here, maintainability means that the algorithm should be designed in a very simple structured way so that when we redefine the algorithm, no major change will be done in the algorithm. <br>
    > &nbsp;Functionality: It considers various logical steps to solve the real-world problem. <br>
    > &nbsp;Robustness: Robustness means that how an algorithm can clearly define our problem. <br>
    > &nbsp;User-friendly: If the algorithm is not user-friendly, then the designer will not be able to explain it to the programmer. <br>
    > &nbsp;Simplicity: If the algorithm is simple then it is easy to understand. <br>
    > &nbsp;Extensibility: If any other algorithm designer or programmer wants to use your algorithm then it should be extensible.
  </p> 
    `;
});

Tut_C_3.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Asymptotic Analysis</p>
  <p class="info">
    As we know that data structure is a way of organizing the data efficiently and that efficiency is measured either in terms of time or space. So, the ideal data structure is a structure that occupies the least possible time to perform all its operation and the memory space. Our focus would be on finding the time complexity rather than space complexity, and by finding the time complexity, we can decide which data structure is the best for an algorithm.  <br><br>

    The main question arises in our mind that on what basis should we compare the time complexity of data structures?. The time complexity can be compared based on operations performed on them. Let's consider a simple example.  <br>

    Suppose we have an array of 100 elements, and we want to insert a new element at the beginning of the array. This becomes a very tedious task as we first need to shift the elements towards the right, and we will add new element at the starting of the array.  <br><br>

    Suppose we consider the linked list as a data structure to add the element at the beginning. The linked list contains two parts, i.e., data and address of the next node. We simply add the address of the first node in the new node, and head pointer will now point to the newly added node. Therefore, we conclude that adding the data at the beginning of the linked list is faster than the arrays. In this way, we can compare the data structures and select the best possible data structure for performing the operations. <br>
    Usually, the time required by an algorithm falls under three types − <br>
    -> &nbsp;Best Case − Minimum time required for program execution.  <br>
    -> &nbsp;Average Case − Average time required for program execution.  <br>
    -> &nbsp;Worst Case − Maximum time required for program execution.<br><br>
  </p>
  <p id="Head">Asymptotic Notations</p>
  <p class="info">
    The commonly used asymptotic notations used for calculating the running time complexity of an algorithm is given below:  <br>
    1)&nbsp;Big oh Notation (O)  <br>
    2)&nbsp;Omega Notation (Ω)  <br>
    3)&nbsp;Theta Notation (θ)    </p>
  <p id="Head">Big Oh Notation, Ο</p>
  <p class="info">
    The notation Ο(n) is the formal way to express the upper bound of an algorithm's running time. It measures the worst case time complexity or the longest amount of time an algorithm can possibly take to complete.  <br>
    <img style="margin-left: 20%;" src="/static/mainpage/DS_tut_img/big_o_notation_django.jpg" alt=""> <br>
    For example, for a function f(n) <br>
    <span style="background: rgb(212, 219, 212);">Ο(f(n)) = { g(n) : there exists c > 0 and n0 such that f(n) ≤ c.g(n) for all n > n0. }</span>   </p>
  <p id="Head">Omega Notation, Ω</p>
  <p class="info">
    The notation Ω(n) is the formal way to express the lower bound of an algorithm's running time. It measures the best case time complexity or the best amount of time an algorithm can possibly take to complete. <br>
    <img style="margin-left: 20%;" src="/static/mainpage/DS_tut_img/omega_notation_django.jpg" alt=""> <br>
    For example, for a function f(n) <br>
    <span style="background: rgb(212, 219, 212);">Ω(f(n)) ≥ { g(n) : there exists c > 0 and n0 such that g(n) ≤ c.f(n) for all n > n0. }</span>   </p>
  <p id="Head">Theta Notation, θ</p>
  <p class="info">
    The notation θ(n) is the formal way to express both the lower bound and the upper bound of an algorithm's running time. It is represented as follows −  <br>
    <img style="margin-left: 20%;" src="/static/mainpage/DS_tut_img/theta_notation_django.jpg" alt=""> <br>
    For example, for a function f(n) <br>
    <span style="background: rgb(212, 219, 212);">θ(f(n)) = { g(n) if and only if g(n) =  Ο(f(n)) and g(n) = Ω(f(n)) for all n > n0. }</span>   </p>
  `;
});

Tut_C_4.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Pointer</p>
  <p class="info">
    Pointer is used to points the address of the value stored anywhere in the computer memory. To obtain the value stored at the location is known as dereferencing the pointer. Pointer improves the performance for repetitive process such as:  <br>

    > &nbsp;Traversing String  <br>
    > &nbsp;Lookup Tables  <br>
    > &nbsp;Control Tables  <br>
    > &nbsp;Tree Structures  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/data-structure-pointer_django.jpg" alt="">  <br>
  </p>
  <p id="Head">Pointer Details</p>
  <p class="info">
    ~ &nbsp;Pointer arithmetic: There are four arithmetic operators that can be used in pointers: ++, --, +, -  <br>
    ~ &nbsp;Array of pointers: You can define arrays to hold a number of pointers.  <br>
    ~ &nbsp;Pointer to pointer: C allows you to have pointer on a pointer and so on.  <br>
    ~ &nbsp;Passing pointers to functions in C: Passing an argument by reference or by address enable the passed argument to be changed in the calling function by the called function.  <br>
    ~ &nbsp;Return pointer from functions in C: C allows a function to return a pointer to the local variable, static variable and dynamically allocated memory as well.  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/pointer_django.png" alt=""> <br></p>
  <p id="Head">Program</p>
  <pre>
      #include < stdio.h >  

      int main( )  
      {  
      int a = 5;  
      int *b;  
      b = &a;  
        
      printf ("value of a = %d\\n", a);  
      printf ("value of a = %d\\n", *(&a));  
      printf ("value of a = %d\\n", *b);  
      printf ("address of a = %u\\n", &a);  
      printf ("address of a = %d\\n", b);  
      printf ("address of b = %u\\n", &b);  
      printf ("value of b = address of a = %u", b);  
      return 0;  
      }  </pre>
  <pre>
    Output:
    value of a = 5                                                                                                               
    value of a = 5                                                                                                               
    address of a = 3010494292                                                                                                    
    address of a = -1284473004                                                                                                   
    address of b = 3010494296                                                                                                    
    value of b = address of a = 3010494292 </pre>
  `;
});

Tut_C_5.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Structure</p>
  <p class="info">
    A structure is a composite data type that defines a grouped list of variables that are to be placed under one name in a block of memory. It allows different variables to be accessed by using a single pointer to the structure.  <br>

    Syntax <br> </p>
    <pre>
      struct structure_name   
      {  
          data_type member1;  
          data_type member2;  
          .  
          .  
          data_type memeber;  
      };  </pre>
  <p id="Head">Advantages</p>
  <p class="info">
    > &nbsp;It can hold variables of different data types.  <br>
    > &nbsp;We can create objects containing different types of attributes.  <br>
    > &nbsp;It allows us to re-use the data layout across programs.  <br>
    > &nbsp;It is used to implement other data structures like linked lists, stacks, queues, trees, graphs etc.  <br>
    Program <br></p>
  <pre>
      #include< stdio.h >  
      #include< conio.h >  
      void main( )  
      {  
      struct employee  
      {  
      int id ;  
      float salary ;  
      int mobile ;  
      } ;  
      struct employee e1,e2,e3 ;  
      clrscr();  
      printf ("\\nEnter ids, salary & mobile no. of 3 employee\\n"  
      scanf ("%d %f %d", &e1.id, &e1.salary, &e1.mobile);  
      scanf ("%d%f %d", &e2.id, &e2.salary, &e2.mobile);  
      scanf ("%d %f %d", &e3.id, &e3.salary, &e3.mobile);  
      printf ("\\n Entered Result ");  
      printf ("\\n%d %f %d", e1.id, e1.salary, e1.mobile);  
      printf ("\\n%d%f %d", e2.id, e2.salary, e2.mobile);  
      printf ("\\n%d %f %d", e3.id, e3.salary, e3.mobile);  
      getch();  
      }  
  </pre>
  `;
});

Tut_C_6.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Array</p>
  <p class="info">
    -> &nbsp;Arrays are defined as the collection of similar type of data items stored at contiguous memory locations. <br>
    -> &nbsp;Arrays are the derived data type in C programming language which can store the primitive type of data such as int, char, double, float, etc.  <br>
    -> &nbsp;Array is the simplest data structure where each data element can be randomly accessed by using its index number.  <br>
    -> &nbsp;For example, if we want to store the marks of a student in 6 subjects, then we don't need to define different variable for the marks in different subject. instead of that, we can define an array which can store the marks in each subject at a the contiguous memory locations.  <br>

    The array marks[10] defines the marks of the student in 10 different subjects where each subject marks are located at a particular subscript in the array i.e. marks[0] denotes the marks in first subject, marks[1] denotes the marks in 2nd subject and so on. <br> </p>
  <p id="Head">Properties of the Array</p>
  <p class="info">
    > &nbsp;Each element is of same data type and carries a same size i.e. int = 4 bytes.  <br>
    > &nbsp;Elements of the array are stored at contiguous memory locations where the first element is stored at the smallest memory location.  <br>
    > &nbsp;Elements of the array can be randomly accessed since we can calculate the address of each element of the array with the given base address and the size of data element.  <br>
    Syntax <br></p>
  <pre>
    int arr[10]; char arr[10]; float arr[5]  </pre>
  <p id="Head">Need of using Array</p>
  <p class="info">
    In computer programming, the most of the cases requires to store the large number of data of similar type. To store such amount of data, we need to define a large number of variables. It would be very difficult to remember names of all the variables while writing the programs. Instead of naming all the variables with a different name, it is better to define an array and store all the elements into it.  <br>
    Following example illustrates, how array can be useful in writing code for a particular problem.  <br>
    In the following example, we have marks of a student in six different subjects. The problem intends to calculate the average of all the marks of the student.  <br>
    In order to illustrate the importance of array, we have created two programs, one is without using array and other involves the use of array to store marks.  <br>
  </p>
  <pre>
      #include < stdio.h >  
      void main ()  
      {  
          int marks[6] = {56,78,88,76,56,89);  
          int i;    
          float avg;  
          for (i=0; i < 6; i++ )   
          {  
              avg = avg + marks[i];   
          }    
          printf(avg);   
      }    </pre>
      <p id="Head">Time Complexity</p>
      <table>
        <tr>
            <th>Algorithm</th>
            <th>Average Case</th>
            <th>Worst Case</th>
        </tr>
        <tr>
            <td>Access</td>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Search</td>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <td>Insertion</td>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <td>Deletion</td>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
  </table>
      <p id="Head">Advantages of Array</p>
      <p class="info">
        1) &nbsp;Array provides the single name for the group of variables of the same type therefore, it is easy to remember the name of all the elements of an array.  <br>
        2) &nbsp;Traversing an array is a very simple process, we just need to increment the base address of the array in order to visit each element one by one.  <br>
        3) &nbsp;Any element in the array can be directly accessed by using the index.  <br>
      </p> 
  `;
});

Tut_C_7.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Linked List</p>
  <p class="info">
    A linked list is also a collection of elements, but the elements are not stored in a consecutive location.  <br>
    Suppose a programmer made a request for storing the integer value then size of 4-byte memory block is assigned to the integer value. The programmer made another request for storing 3 more integer elements; then, three different memory blocks are assigned to these three elements but the memory blocks are available in a random location. So, how are the elements connected?.  <br>
    These elements are linked to each other by providing one additional information along with an element, i.e., the address of the next element. The variable that stores the address of the next element is known as a pointer. Therefore, we conclude that the linked list contains two parts, i.e., the first one is the data element, and the other is the pointer. The pointer variable will occupy 4 bytes which is pointing to the next element.  <br>
    <span style="color: rgb(24, 185, 185);">A linked list can also be defined as the collection of the nodes in which one node is connected to another node, and node consists of two parts, i.e., one is the data part and the second one is the address part, as shown in the below figure:</span>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/ds-linked-list_django.png" alt=""> <br> 
    In the above figure, we can observe that each node contains the data and the address of the next node. The last node of the linked list contains the NULL value in the address part.<br> </p>
  <p id="Head">How can we declare the Linked list?</p>
  <p class="info">
    The declaration of an array is very simple as it is of single type. But the linked list contains two parts, which are of two different types, i.e., one is a simple variable, and the second one is a pointer variable. We can declare the linked list by using the user-defined data type known as structure. <br>
    The structure of a linked list can be defined as:  <br></p>
  <pre>
    struct node  
    {  
      int data;  
      struct node *next;  
    }   </pre> <p class="info">
      In the above declaration, we have defined a structure named as a node consisting of two variables: an integer variable (data), and the other one is the pointer (next), which contains the address of the next node.  <br>
  </p>
      <p id="Head">Advantages of using a Linked list over Array</p>
      <p class="info">
        The following are the advantages of using a linked list over an array:  <br> <br>
        > &nbsp;Dynamic data structure: <br>
        The size of the linked list is not fixed as it can vary according to our requirements.  <br> <br>
        > &nbsp;Insertion and Deletion: <br>
        Insertion and deletion in linked list are easier than array as the elements in an array are stored in a consecutive location. In contrast, in the case of a linked list, the elements are stored in a random location. The complexity for insertion and deletion of elements from the beginning is O(1) in the linked list, while in the case of an array, the complexity would be O(n). If we want to insert or delete the element in an array, then we need to shift the elements for creating the space. On the other hand, in the linked list, we do not have to shift the elements. In the linked list, we just need to update the address of the pointer in the node.  <br> <br>
        > &nbsp;Memory efficient <br>
        Its memory consumption is efficient as the size of the linked list can grow or shrink according to our requirements.  <br> <br>
        > &nbsp;Implementation <br>
        Both the stacks and queues can be implemented using a linked list.  <br>
      </p>
  `;
});

Tut_C_8.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Types of Linked List</p>
  <p class="info">
    The following are the types of linked list:  <br>
    1) &nbsp;Singly Linked list  <br>
    2) &nbsp;Doubly Linked list  <br>
    3) &nbsp;Circular Linked list  <br>
    4) &nbsp;Doubly Circular Linked list<br> </p>
  <p id="Head">Singly Linked list</p>
  <p class="info">
    It is the commonly used linked list in programs. If we are talking about the linked list, it means it is a singly linked list. The singly linked list is a data structure that contains two parts, i.e., one is the data part, and the other one is the address part, which contains the address of the next or the successor node. The address part in a node is also known as a pointer. <br>
    Suppose we have three nodes, and the addresses of these three nodes are 100, 200 and 300 respectively. The representation of three nodes as a linked list is shown in the below figure:  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-types-of-linked-list_django.png" alt=""> <br>
    We can observe in the above figure that there are three different nodes having address 100, 200 and 300 respectively. The first node contains the address of the next node, i.e., 200, the second node contains the address of the last node, i.e., 300, and the third node contains the NULL value in its address part as it does not point to any node. The pointer that holds the address of the initial node is known as a head pointer.  <br>
    The linked list, which is shown in the above diagram, is known as a singly linked list as it contains only a single link. In this list, only forward traversal is possible; we cannot traverse in the backward direction as it has only one link in the list. <br>
    Representation of the node in a singly linked list <br>
  </p>
  <pre>
    struct node  
    {  
      int data;  
      struct node *next;  
    }   </pre> <p class="info">
      In the above representation, we have defined a user-defined structure named a node containing two members, the first one is data of integer type, and the other one is the pointer (next) of the node type. <br> </p>
  
  <p id="Head">Doubly linked list</p>
  <p class="info">
    As the name suggests, the doubly linked list contains two pointers. We can define the doubly linked list as a linear data structure with three parts: the data part and the other two address part. In other words, a doubly linked list is a list that has three parts in a single node, includes one data part, a pointer to its previous node, and a pointer to the next node. <br>
    Suppose we have three nodes, and the address of these nodes are 100, 200 and 300, respectively. The representation of these nodes in a doubly-linked list is shown below:  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-types-of-linked-list2_django.png" alt=""> <br>
    As we can observe in the above figure, the node in a doubly-linked list has two address parts; one part stores the address of the next while the other part of the node stores the previous node's address. The initial node in the doubly linked list has the NULL value in the address part, which provides the address of the previous node. <br>
    Representation of the node in a doubly linked list <br>
  </p>
  <pre>
    struct node  
    {  
      int data;  
      struct node *next;  
    struct node *prev;   
    }  </pre> <p class="info">
      In the above representation, we have defined a user-defined structure named a node with three members, one is data of integer type, and the other two are the pointers, i.e., next and prev of the node type. The next pointer variable holds the address of the next node, and the prev pointer holds the address of the previous node. The type of both the pointers, i.e., next and prev is struct node as both the pointers are storing the address of the node of the struct node type. <br> </p>

  <p id="Head">Circular linked list</p>
  <p class="info">
    A circular linked list is a variation of a singly linked list. The only difference between the singly linked list and a circular linked list is that the last node does not point to any node in a singly linked list, so its link part contains a NULL value. On the other hand, the circular linked list is a list in which the last node connects to the first node, so the link part of the last node holds the first node's address. The circular linked list has no starting and ending node. We can traverse in any direction, i.e., either backward or forward. The diagrammatic representation of the circular linked list is shown below:  <br>
    <pre>
      struct node  
      {  
        int data;  
        struct node *next;  
      }   </pre>
      <p class="info">
        A circular linked list is a sequence of elements in which each node has a link to the next node, and the last node is having a link to the first node. The representation of the circular linked list will be similar to the singly linked list, as shown below: <br> </p>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-types-of-linked-list3_django.png" alt=""> <br>
  </p>

  <p id="Head">Doubly Circular linked list</p>
  <p class="info">
    The doubly circular linked list has the features of both the circular linked list and doubly linked list.  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-types-of-linked-list4_django.png" alt=""> <br>
    The above figure shows the representation of the doubly circular linked list in which the last node is attached to the first node and thus creates a circle. It is a doubly linked list also because each node holds the address of the previous node also. The main difference between the doubly linked list and doubly circular linked list is that the doubly circular linked list does not contain the NULL value in the previous field of the node. As the doubly circular linked contains three parts, i.e., two address parts and one data part so its representation is similar to the doubly linked list. <br>
  </p>
  <pre>
    struct node  
    {  
      int data;  
      struct node *next;  
      struct node *prev;   
    }  </pre> <p class="info">
      In the above representation, we have defined a user-defined structure named a node containing two members, the first one is data of integer type, and the other one is the pointer (next) of the node type. <br> </p>
  `;
});

Tut_C_9.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Stack</p>
  <p class="info">
    The following are the types of linked list:  <br>
    1) &nbsp;Singly Linked list  <br>
    2) &nbsp;Doubly Linked list  <br>
    3) &nbsp;Circular Linked list  <br>
    4) &nbsp;Doubly Circular Linked list<br> </p>
  <p id="Head">Singly Linked list</p>
  <p class="info">
    A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. Stack has one end, whereas the Queue has two ends (front and rear). It contains only one pointer top pointer pointing to the topmost element of the stack. Whenever an element is added in the stack, it is added on the top of the stack, and the element can be deleted only from the stack. In other words, a <span style="color: rgb(51, 134, 134);">stack can be defined as a container in which insertion and deletion can be done from the one end known as the top of the stack.</span>  <br>
  <p id="Head">Working of Stack</p>
  <p class="info">
    Stack works on the LIFO pattern. As we can observe in the below figure there are five memory blocks in the stack; therefore, the size of the stack is 5. <br>
    Suppose we want to store the elements in a stack and let's assume that stack is empty. We have taken the stack of size 5 as shown below in which we are pushing the elements one by one until the stack becomes full.  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-stack_django.png" alt=""> <br>
    Since our stack is full as the size of the stack is 5. In the above cases, we can observe that it goes from the top to the bottom when we were entering the new element in the stack. The stack gets filled up from the bottom to the top. <br>
    When we perform the delete operation on the stack, there is only one way for entry and exit as the other end is closed. It follows the LIFO pattern, which means that the value entered first will be removed last. In the above case, the value 5 is entered first, so it will be removed only after the deletion of all the other elements. <br>
  </p>
  <p id="Head">Standard Stack Operations</p>
  <p class="info">
    -> &nbsp;push(): When we insert an element in a stack then the operation is known as a push. If the stack is full then the overflow condition occurs.
    -> &nbsp;pop(): When we delete an element from the stack, the operation is known as a pop. If the stack is empty means that no element exists in the stack, this state is known as an underflow state.
    -> &nbsp;isEmpty(): It determines whether the stack is empty or not.
    -> &nbsp;isFull(): It determines whether the stack is full or not.'
    -> &nbsp;peek(): It returns the element at the given position.
    -> &nbsp;count(): It returns the total number of elements available in a stack.
    -> &nbsp;change(): It changes the element at the given position.
    -> &nbsp;display(): It prints all the elements available in the stack. <br> </p>

  <p id="Head">PUSH operation</p>
  <p class="info">
    Before inserting an element in a stack, we check whether the stack is full. <br>
    If we try to insert the element in a stack, and the stack is full, then the overflow condition occurs.
    When we initialize a stack, we set the value of top as -1 to check that the stack is empty.
    When the new element is pushed in a stack, first, the value of the top gets incremented, i.e., top=top+1, and the element will be placed at the new position of the top.
    The elements will be inserted until we reach the max size of the stack. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/ds-stack2_django.png" alt=""> <br>
  <p id="Head">POP operation</p>
  <p class="info">
    Before deleting the element from the stack, we check whether the stack is empty.
    If we try to delete the element from the empty stack, then the underflow condition occurs.
    If the stack is not empty, we first access the element which is pointed by the top
    Once the pop operation is performed, the top is decremented by 1, i.e., top=top-1.  <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/ds-stack3_django.png" alt=""> <br>
  </p>`;
});

Tut_C_10.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Queue</p>
  <p class="info">
    1. &nbsp;A queue can be defined as an ordered list which enables insert operations to be performed at one end called REAR and delete operations to be performed at another end called FRONT. <br>
    2. &nbsp;Queue is referred to be as First In First Out list. <br>
    3. &nbsp;For example, people waiting in line for a rail ticket form a queue.<br><br>
    A queue in the data structure can be considered similar to the queue in the real-world. A queue is a data structure in which whatever comes first will go out first. It follows the FIFO (First-In-First-Out) policy. In Queue, the insertion is done from one end known as the rear end or the tail of the queue, whereas the deletion is done from another end known as the front end or the head of the queue. In other words, it can be defined as a list or a collection with a constraint that the insertion can be performed at one end called as the rear end or tail of the queue and deletion is performed on another end called as the front end or the head of the queue. </p>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/queue_django.png" alt=""> <br>
    <p id="Head">Operations on Queue</p>
    <p class="info">
      > &nbsp;Enqueue: The enqueue operation is used to insert the element at the rear end of the queue. It returns void. <br><br>
      > &nbsp;Dequeue: The dequeue operation performs the deletion from the front-end of the queue. It also returns the element which has been removed from the front-end. It returns an integer value. The dequeue operation can also be designed to void. <br><br>
      > &nbsp;Peek: This is the third operation that returns the element, which is pointed by the front pointer in the queue but does not delete it. <br><br>
      > &nbsp;Queue overflow (isfull): When the Queue is completely full, then it shows the overflow condition. <br><br>
      > &nbsp;Queue underflow (isempty): When the Queue is empty, i.e., no elements are in the Queue then it throws the underflow condition.  <br> </p>

  <p id="Head">Applications of Queue</p>
  <p class="info">
    Due to the fact that queue performs actions on first in first out basis which is quite fair for the ordering of actions. There are various applications of queues discussed as below.  <br>
    ~ &nbsp;Queues are widely used as waiting lists for a single shared resource like printer, disk, CPU.  <br>
    ~ &nbsp;Queues are used in asynchronous transfer of data (where data is not being transferred at the same rate between two processes) for eg. pipes, file IO, sockets.  <br>
    ~ &nbsp;Queues are used as buffers in most of the applications like MP3 media player, CD player, etc.  <br>
    ~ &nbsp;Queue are used to maintain the play list in media players in order to add and remove the songs from the play-list.  <br>
    ~ &nbsp;Queues are used in operating systems for handling interrupts.  <br> </p>

  <p id="Head">Complexity</p>
  <table style="width: 95%;">
    <tr>
      <th>Data Structure</th>
      <th colspan="8">Time Complexity</th>
      <th>Space Compleity</th>
    </tr>
    <tr>
    <td></td>
      <td colspan="4"><strong>Average</strong></td>
      <td colspan="4"><strong>Worst</strong></td>
      <td><strong>Worst</strong></td>
    </tr>
    <tr>
      <td></td>
      <td>Access</td>
      <td>Search</td>
      <td>Insertion</td>
      <td>Deletion</td>
      <td>Access</td>
      <td>Search</td>
      <td>Insertion</td>
      <td>Deletion</td>
      <td></td>
    </tr>
    <tr>
    <td>Queue</td>
    <td>θ(n)</td>
    <td>θ(n)</td>
    <td>θ(1)</td>
    <td>θ(1)</td>
    <td>O(n)</td>
    <td>O(n)</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td>O(n)</td>
    </tr>
  </table>`;
});

Tut_C_11.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Types of Queue</p>
  <p class="info">
    There are four types of Queues:<br>
  </p>
  <p id="Head">Linear Queue</p>
  <p class="info">
    In Linear Queue, an insertion takes place from one end while the deletion occurs from another end. The end at which the insertion takes place is known as the rear end, and the end at which the deletion takes place is known as front end. It strictly follows the FIFO rule. The linear Queue can be represented, as shown in the below figure: <br>
    <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/ds-types-of-queues2_django.png" alt=""> <br>
    The above figure shows that the elements are inserted from the rear end, and if we insert more elements in a Queue, then the rear value gets incremented on every insertion. If we want to show the deletion, then it can be represented as: <br>
    <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/ds-types-of-queues3_django.png" alt=""> <br>
    In the above figure, we can observe that the front pointer points to the next element, and the element which was previously pointed by the front pointer was deleted.  <br>
    The major drawback of using a linear Queue is that insertion is done only from the rear end. If the first three elements are deleted from the Queue, we cannot insert more elements even though the space is available in a Linear Queue. In this case, the linear Queue shows the overflow condition as the rear is pointing to the last element of the Queue.  <br>
  </p>
  <p id="Head">Circular Queue</p>
  <p class="info">
    In Circular Queue, all the nodes are represented as circular. It is similar to the linear Queue except that the last element of the queue is connected to the first element. It is also known as Ring Buffer as all the ends are connected to another end. The circular queue can be represented as: <br>
    <img style="margin-left: 10%; width: 50%;" src="/static/mainpage/DS_tut_img/ds-types-of-queues4_django.png" alt=""> <br>
    The drawback that occurs in a linear queue is overcome by using the circular queue. If the empty space is available in a circular queue, the new element can be added in an empty space by simply incrementing the value of rear. <br>
  </p>
  <p id="Head">Priority Queue</p>
  <p class="info">
    A priority queue is another special type of Queue data structure in which each element has some priority associated with it. Based on the priority of the element, the elements are arranged in a priority queue. If the elements occur with the same priority, then they are served according to the FIFO principle. <br>
    In priority Queue, the insertion takes place based on the arrival while the deletion occurs based on the priority. The priority Queue can be shown as: <br>
    The above figure shows that the highest priority element comes first and the elements of the same priority are arranged based on FIFO structure.  <br>
  </p>
  <p id="Head">Deque</p>
  <p class="info">
    Both the Linear Queue and Deque are different as the linear queue follows the FIFO principle whereas, deque does not follow the FIFO principle. In Deque, the insertion and deletion can occur from both ends.  <br>
  </p>`;
});

Tut_C_12.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Tree Data Structure</p>
  <p class="info">
    A tree is also one of the data structures that represent hierarchical data. <br><br>
    Let's understand some key points of the Tree data structure.  <br>
    ~ &nbsp;A tree data structure is defined as a collection of objects or entities known as nodes that are linked together to represent or simulate hierarchy.  <br>
    ~ &nbsp;A tree data structure is a non-linear data structure because it does not store in a sequential manner. ~ &nbsp;It is a hierarchical structure as elements in a Tree are arranged in multiple levels.  <br>
    ~ &nbsp;In the Tree data structure, the topmost node is known as a root node. Each node contains some data, and data can be of any type. In the above tree structure, the node contains the name of the employee, so the type of data would be a string.  <br>
    ~ &nbsp;Each node contains some data and the link or reference of other nodes that can be called children.  <br>
  </p>
  <p id="Head">Some basic terms used in Tree data structure</p>
  <p class="info">
    Let's consider the tree structure, which is shown below: <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/tree_django.png" alt=""> <br>
    In the above structure, each node is labeled with some number. Each arrow shown in the above figure is known as a link between the two nodes. <br>
    1) &nbsp;Root: The root node is the topmost node in the tree hierarchy. In other words, the root node is the one that doesn't have any parent. In the above structure, node numbered 1 is the root node of the tree. If a node is directly linked to some other node, it would be called a parent-child relationship. <br>
    2) &nbsp;Child node: If the node is a descendant of any node, then the node is known as a child node. <br>
    3) &nbsp;Parent: If the node contains any sub-node, then that node is said to be the parent of that sub-node. <br>
    4) &nbsp;Sibling: The nodes that have the same parent are known as siblings. <br>
    5) &nbsp;Leaf Node:- The node of the tree, which doesn't have any child node, is called a leaf node. A leaf node is the bottom-most node of the tree. There can be any number of leaf nodes present in a general tree. Leaf nodes can also be called external nodes. <br>
    6) &nbsp;Internal nodes: A node has atleast one child node known as an internal <br>
    7) &nbsp;Ancestor node:- An ancestor of a node is any predecessor node on a path from the root to that node. The root node doesn't have any ancestors. In the tree shown in the above image, nodes 1, 2, and 5 are the ancestors of node 10. <br>
    8) &nbsp;Descendant: The immediate successor of the given node is known as a descendant of a node. In the above figure, 10 is the descendant of node 5.  <br> <br>
  </p>
  <p id="Head">Important Terms of Tree Data Structure</p>
  <p id="Head">Edge</p>
  <p class="info">
    Edge – connection between one node to another. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/edge-1_django.jpg" alt=""> <br>
    An example of edge is shown above between A and B. Basically, an edge is a line between two nodes, or a node and a leaf.<br>
  </p>
  <p id="Head">Path</p>
  <p class="info">
    Path – a sequence of nodes and edges connecting a node with a descendant. <br>
    <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/path-1_django.jpg" alt=""> <br>
    A path starts from a node and ends at another node or a leaf. <br>
  </p><p id="Head">Height</p>
  <p class="info">
    Height of node – The height of a node is the number of edges on the longest downward path between that node and a leaf. <br>
    <img style="margin-left: 10%; width: 50%;" src="/static/mainpage/DS_tut_img/height-3_django.jpg" alt=""> <br>
    <br>
  </p><p id="Head">Depth</p>
  <p class="info">
    Depth –The depth of a node is the number of edges from the node to the tree's root node. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/depth-1_django.jpg" alt=""> <br>
    We don't care about path any more when depth pops in. We just count how many edges between the targeting node and the root, ignoring directions. For example, D's depth is 2. <br>
    Note that the depth of the root is 0.<br>
  </p>
  </p><p id="Head">Level</p>
  <p class="info">
    Level – The level of a node is defined by 1 + the number of connections between the node and the root. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/level_django.jpg" alt=""> <br>
    Simply, level is depth plus 1.
    The important thing to remember is when talking about level, it starts from 1 and the level of the root is 1. We need to be careful about this when solving problems related to level.<br>
  </p>
<p id="Head">Implementation of Tree</p>
<p class="info">
  The tree data structure can be created by creating the nodes dynamically with the help of the pointers. The tree in the memory can be represented as shown below: <br>
  <img style="margin-left: 10%; width: 50%;" src="/static/mainpage/DS_tut_img/tree4_django.png" alt=""> <br>
  The above figure shows the representation of the tree data structure in the memory. In the above structure, the node contains three fields. The second field stores the data; the first field stores the address of the left child, and the third field stores the address of the right child. <br>
In programming, the structure of a node can be defined as: <br>
</p> <pre>
  struct node  
  {  
    int data;  
  struct node *left;  
  struct node *right;   
  }  
</pre>
<p class="info">
  The above structure can only be defined for the binary trees because the binary tree can have utmost two children, and generic trees can have more than two children. The structure of the node for generic trees would be different as compared to the binary tree. <br>
</p>
  `
});

Tut_C_13.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Binary Tree</p>
  <p class="info">
    The Binary tree means that the node can have maximum two children. Here, binary name itself suggests that 'two'; therefore, each node can have either 0, 1 or 2 children.  <br>
  </p>
  <p id="Head">Types of Binary Tree</p>
  <p id="Head">1. Full/ proper/ strict Binary tree</p>
  <p class="info">
    The full binary tree is also known as a strict binary tree. The tree can only be considered as the full binary tree if each node must contain either 0 or 2 children. The full binary tree can also be defined as the tree in which each node must contain 2 children except the leaf nodes. <br>
Let's look at the simple example of the Full Binary tree. <br>
    <img style="margin-left: 10%; width: 20%;" src="/static/mainpage/DS_tut_img/types-of-binary-tree_django.png" alt=""> <br>
    In the above tree, we can observe that each node is either containing zero or two children; therefore, it is a Full Binary tree.<br>
  </p>
  <p id="Head">2. Complete Binary Tree</p>
  <p class="info">
    The complete binary tree is a tree in which all the nodes are completely filled except the last level. In the last level, all the nodes must be as left as possible. In a complete binary tree, the nodes should be added from the left. <br>
    Let's create a complete binary tree. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/types-of-binary-tree2_django.png" alt=""> <br>
    The above tree is a complete binary tree because all the nodes are completely filled, and all the nodes in the last level are added at the left first. <br>
  </p><p id="Head">3. Perfect Binary Tree</p>
  <p class="info">
    A tree is a perfect binary tree if all the internal nodes have 2 children, and all the leaf nodes are at the same level. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/types-of-binary-tree3_django.png" alt=""> <br>
    <span style="color: rgb(221, 221, 34);">Note: All the perfect binary trees are the complete binary trees as well as the full binary tree, but vice versa is not true, i.e., all complete binary trees and full binary trees are the perfect binary trees.</span>
    <br>
  </p><p id="Head">Degenerate Binary Tree</p>
  <p class="info">
    The degenerate binary tree is a tree in which all the internal nodes have only one children. <br>
    <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/types-of-binary-tree5_django.png" alt=""> <br>
    The above tree is also a degenerate binary tree because all the nodes have only one child. It is also known as a right-skewed tree as all the nodes have a right child only.<br>
  </p>`;
});

Tut_C_14.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Binary Search Tree</p>
  <p class="info">
    1. &nbsp;Binary Search tree can be defined as a class of binary trees, in which the nodes are arranged in a specific order. This is also called ordered binary tree.  <br>
    2. &nbsp;In a binary search tree, the value of all the nodes in the left sub-tree is less than the value of the root.  <br>
    3. &nbsp;Similarly, value of all the nodes in the right sub-tree is greater than or equal to the value of the root.  <br>
    4. &nbsp;This rule will be recursively applied to all the left and right sub-trees of the root. <br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/binary-search-tree_django.png" alt=""> <br>
    A Binary search tree is shown in the above figure. As the constraint applied on the BST, we can see that the root node 30 doesn't contain any value greater than or equal to 30 in its left sub-tree and it also doesn't contain any value less than 30 in its right sub-tree. <br>
  </p>
  <p id="Head">Advantages of using binary search tree</p>
  <p class="info">
    -> &nbsp;Searching become very efficient in a binary search tree since, we get a hint at each step, about which sub-tree contains the desired element. <br>
    -> &nbsp;The binary search tree is considered as efficient data structure in compare to arrays and linked lists. In searching process, it removes half sub-tree at every step. Searching for an element in a binary search tree takes o(log2n) time. In worst case, the time it takes to search an element is 0(n). <br>
    -> &nbsp;It also speed up the insertion and deletion operations as compare to that in array and linked list.<br>
  </p>
  <p id="Head">Program to implement BST operations</p>
  <pre>
      #include < iostream >  
      #include < stdlib.h >  
      using namespace std;  
      struct Node {  
          int data;  
          Node *left;  
          Node *right;  
      };  
      Node* create(int item)  
      {  
          Node* node = new Node;  
          node->data = item;  
          node->left = node->right = NULL;  
          return node;  
      }  
        
      void inorder(Node *root)  
      {  
          if (root == NULL)  
              return;  
        
          inorder(root->left);  
          cout<< root->data << "   ";  
          inorder(root->right);  
      }  
      Node* findMinimum(Node* cur)  
      {  
          while(cur->left != NULL) {  
              cur = cur->left;  
          }  
          return cur;  
      }  
      Node* insertion(Node* root, int item)  
      {  
          if (root == NULL)  
              return create(item);  
          if (item < root->data)  
              root->left = insertion(root->left, item);  
          else  
              root->right = insertion(root->right, item);  
        
          return root;  
      }  
        
      void search(Node* &cur, int item, Node* &parent)  
      {  
          while (cur != NULL && cur->data != item)  
          {  
              parent = cur;  
        
              if (item < cur->data)  
                  cur = cur->left;  
              else  
                  cur = cur->right;  
          }  
      }  
        
      void deletion(Node*& root, int item)  
      {  
          Node* parent = NULL;  
          Node* cur = root;  
        
          search(cur, item, parent);  
          if (cur == NULL)  
              return;  
        
          if (cur->left == NULL && cur->right == NULL)  
          {  
              if (cur != root)  
              {  
                  if (parent->left == cur)  
                      parent->left = NULL;  
                  else  
                      parent->right = NULL;  
              }  
              else  
                  root = NULL;  
        
              free(cur);       
          }  
          else if (cur->left && cur->right)  
          {  
              Node* succ  = findMinimum(cur- >right);  
        
              int val = succ->data;  
        
              deletion(root, succ->data);  
        
              cur->data = val;  
          }  
        
          else  
          {  
              Node* child = (cur->left)? Cur- >left: cur->right;  
        
              if (cur != root)  
              {  
                  if (cur == parent->left)  
                      parent->left = child;  
                  else  
                      parent->right = child;  
              }  
        
              else  
                  root = child;  
              free(cur);  
          }  
      }  
        
      int main()  
      {  
         Node* root = NULL;  
         int keys[8];  
         for(int i=0;i<8;i++)  
          {  
          cout << "Enter value to be inserted";  
          cin>>keys[i];  
              root = insertion(root, keys[i]);  
          }  
        
          inorder(root);  
          cout<<"\n";  
          deletion(root, 10);  
          inorder(root);  
          return 0;  
      }  </pre>
      <pre>
        Output:
        Enter value to be inserted? 10
        Enter value to be inserted? 20
        Enter value to be inserted? 30
        Enter value to be inserted? 40
        Enter value to be inserted?  5 
        Enter value to be inserted? 25
        Enter value to be inserted? 15
        Enter value to be inserted?  5
        
        5	5	10	15	20	25	30	40	
        5	5	15	20	25	30	40	</pre>`;
});

Tut_C_15.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">AVL Tree</p>
  <p class="info">
    AVL Tree is invented by GM Adelson - Velsky and EM Landis in 1962. The tree is named AVL in honour of its inventors. <br>

    AVL Tree can be defined as height balanced binary search tree in which each node is associated with a balance factor which is calculated by subtracting the height of its right sub-tree from that of its left sub-tree. <br>

    Tree is said to be balanced if balance factor of each node is in between -1 to 1, otherwise, the tree will be unbalanced and need to be balanced. <br>
  </p>
  <p id="Head">Balance Factor (k) = height (left(k)) - height (right(k))</p>
  <p class="info">
    If balance factor of any node is 1, it means that the left sub-tree is one level higher than the right sub-tree. <br>
    If balance factor of any node is 0, it means that the left sub-tree and right sub-tree contain equal height. <br>
    If balance factor of any node is -1, it means that the left sub-tree is one level lower than the right sub-tree. <br>
    An AVL tree is given in the following figure. We can see that, balance factor associated with each node is in between -1 and +1. therefore, it is an example of AVL tree.<br>
    <img style="margin-left: 10%; width: 40%;" src="/static/mainpage/DS_tut_img/avl-tree_django.png" alt=""> <br>
  </p>
  <p id="Head">AVL Rotations</p>
  <p class="info">
    We perform rotation in AVL tree only in case if Balance Factor is other than -1, 0, and 1. There are basically four types of rotations which are as follows:
    1) &nbsp;L L rotation: Inserted node is in the left subtree of left subtree of A  <br>
    2) &nbsp;R R rotation : Inserted node is in the right subtree of right subtree of A  <br>
    3) &nbsp;L R rotation : Inserted node is in the right subtree of left subtree of A  <br>
    4) &nbsp;R L rotation : Inserted node is in the left subtree of right subtree of A  <br>
    Where node A is the node whose balance Factor is other than -1, 0, 1.
  </p>
  <p id="Head">1. RR Rotation</p>
  <p class="info">
    When BST becomes unbalanced, due to a node is inserted into the right subtree of the right subtree of A, then we perform RR rotation, RR rotation is an anticlockwise rotation, which is applied on the edge below a node having balance factor -2 <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/avl-tree2_django.jpg" alt=""> <br>
    In above example, node A has balance factor -2 because a node C is inserted in the right subtree of A right subtree. We perform the RR rotation on the edge below A.
  </p>
  <p id="Head">2. LL Rotation</p>
  <p class="info">
    When BST becomes unbalanced, due to a node is inserted into the left subtree of the left subtree of C, then we perform LL rotation, LL rotation is clockwise rotation, which is applied on the edge below a node having balance factor 2. <br>
    <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/avl-tree1_django.jpg" alt=""> <br>
    In above example, node C has balance factor 2 because a node A is inserted in the left subtree of C left subtree. We perform the LL rotation on the edge below A.
  </p>
  <p id="Head">3. LR Rotation</p>
  <p class="info">
    Double rotations are bit tougher than single rotation which has already explained above. LR rotation = RR rotation + LL rotation, i.e., first RR rotation is performed on subtree and then LL rotation is performed on full tree, by full tree we mean the first node from the path of inserted node whose balance factor is other than -1, 0, or 1. <br>
  </p>
  <table>
    <tr>
        <th>State</th>
      <th>Action</th>
    </tr>
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree3.jpg" alt="AVL Rotations"></td>
      <td>A node B has been inserted into the right subtree of A the left subtree of C, because of which C has become an unbalanced node having balance factor 2. This case is L R rotation where: Inserted node is in the right subtree of left subtree of C</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree4.jpg" alt="AVL Rotations"></td>
      <td>As LR rotation = RR + LL rotation, hence RR (anticlockwise) on subtree rooted at A is performed first. By doing RR rotation, node <strong>A</strong>, has become the left subtree of <strong>B</strong>.</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree5.jpg" alt="AVL Rotations"></td>
      <td>After performing RR rotation, node C is still unbalanced, i.e., having balance factor 2, as inserted node A is in the left of left of <strong>C</strong></td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree6.jpg" alt="AVL Rotations"></td>
      <td>Now we perform LL clockwise rotation on full tree, i.e. on node C. node <strong>C</strong> has now become the right subtree of node B, A is left subtree of B</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree7.jpg" alt="AVL Rotations"></td>
      <td>Balance factor of each node is now either -1, 0, or 1, i.e. BST is balanced now.</td>
    </tr>	
  </table>
  <p id="Head">4. RL Rotation</p>
  <p class="info">
    As already discussed, that double rotations are bit tougher than single rotation which has already explained above. R L rotation = LL rotation + RR rotation, i.e., first LL rotation is performed on subtree and then RR rotation is performed on full tree, by full tree we mean the first node from the path of inserted node whose balance factor is other than -1, 0, or 1. <br>
  </p>
  <table>
    <tr>
        <th>State</th>
      <th>Action</th>
    </tr>
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree8.jpg" alt="AVL Rotations"></td>
      <td>A node <strong>B</strong> has been inserted into the left subtree of <strong>C</strong> the right subtree of <strong>A</strong>, because of which A has become an unbalanced node having balance factor - 2. This case is RL rotation where: Inserted node is in the left subtree of right subtree of A</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree9.jpg" alt="AVL Rotations"></td>
      <td>As RL rotation = LL rotation + RR rotation, hence, LL (clockwise) on subtree rooted at <strong>C</strong> is performed first. By doing RR rotation, node <strong>C</strong> has become the right subtree of <strong>B</strong>.</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree10.jpg" alt="AVL Rotations"></td>
      <td>After performing LL rotation, node <strong>A</strong> is still unbalanced, i.e. having balance factor -2, which is because of the right-subtree of the right-subtree node A.</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree11.jpg" alt="AVL Rotations"></td>
      <td>Now we perform RR rotation (anticlockwise rotation) on full tree, i.e. on node A. node <strong>C</strong> has now become the right subtree of node B, and node A has become the left subtree of B.</td>
    </tr>	
    <tr>	
        <td><img src="https://static.javatpoint.com/ds/images/avl-tree12.jpg" alt="AVL Rotations"></td>
      <td>Balance factor of each node is now either -1, 0, or 1, i.e., BST is balanced now.</td>
    </tr>	
  </table>`;
});

Tut_C_16.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">B Tree</p>
  <p class="info">
    B Tree is a specialized m-way tree that can be widely used for disk access. A B-Tree of order m can have at most m-1 keys and m children. One of the main reason of using B tree is its capability to store large number of keys in a single node and large key values by keeping the height of the tree relatively small. <br>
    A B tree of order m contains all the properties of an M way tree. In addition, it contains the following properties. <br>
    > &nbsp;Every node in a B-Tree contains at most m children.  <br>
    > &nbsp;Every node in a B-Tree except the root node and the leaf node contain at least m/2 children.  <br>
    > &nbsp;The root nodes must have at least 2 nodes.  <br>
    > &nbsp;All leaf nodes must be at the same level.  <br>
    It is not necessary that, all the nodes contain the same number of children but, each node must have m/2 number of nodes.  <br>

    A B tree of order 4 is shown in the following image. <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-tree_django.png" alt=""> <br>
    While performing some operations on B Tree, any property of B Tree may violate such as number of minimum children a node can have. To maintain the properties of B Tree, the tree may split or join. <br>
  </p>
  <p id="Head">Operations</p>
  <p id="Head">Searching :</p>
  <p class="info">
    Searching in B Trees is similar to that in Binary search tree. For example, if we search for an item 49 in the following B Tree. The process will something like following :  <br>
    Compare item 49 with root node 78. since 49 < 78 hence, move to its left sub-tree.  <br>
    Since, 40< 49< 56, traverse right sub-tree of 40.  <br>
    49>45, move to right. Compare 49.  <br>
    match found, return.  <br>
    Searching in a B tree depends upon the height of the tree. The search algorithm takes O(log n) time to search any element in a B tree. <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-tree-searching_django.png" alt=""> <br>
  </p>
  <p id="Head">Inserting</p>
  <p class="info">
    Insertions are done at the leaf node level. The following algorithm needs to be followed in order to insert an item into B Tree.  <br>

    1) &nbsp;Traverse the B Tree in order to find the appropriate leaf node at which the node can be inserted.  <br>
    2) &nbsp;If the leaf node contain less than m-1 keys then insert the element in the increasing order.  <br>
    3) &nbsp;Else, if the leaf node contains m-1 keys, then follow the following steps.  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;Insert the new element in the increasing order of elements.  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;Split the node into the two nodes at the median.  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;Push the median element upto its parent node.  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;If the parent node also contain m-1 number of keys, then split it too by following the same steps.  <br>
    Example:  <br>

    Insert the node 8 into the B Tree of order 5 shown in the following image.  <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-tree-inserting_django.png" alt=""> <br>
    8 will be inserted to the right of 5, therefore insert 8. <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-tree-inserting2_django.png" alt=""> <br>
    The node, now contain 5 keys which is greater than (5 -1 = 4 ) keys. Therefore split the node from the median i.e. 8 and push it up to its parent node shown as follows. <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-tree-inserting3_django.png" alt=""> <br><br>
  </p>`;
});

Tut_C_17.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">B+ Tree</p>
  <p class="info">
    B+ Tree is an extension of B Tree which allows efficient insertion, deletion and search operations.
    In B Tree, Keys and records both can be stored in the internal as well as leaf nodes. Whereas, in B+ tree, records (data) can only be stored on the leaf nodes while internal nodes can only store the key values.  <br>
    The leaf nodes of a B+ tree are linked together in the form of a singly linked lists to make the search queries more efficient.  <br>
    B+ Tree are used to store the large amount of data which can not be stored in the main memory. Due to the fact that, size of main memory is always limited, the internal nodes (keys to access records) of the B+ tree are stored in the main memory whereas, leaf nodes are stored in the secondary memory.  <br>
    The internal nodes of B+ tree are often called index nodes. A B+ tree of order 3 is shown in the following figure.  <br>
    <br>
    <img style="margin-left: 10%; width: 80%;" src="/static/mainpage/DS_tut_img/b-plus-tree_django.jpg" alt=""> 
  </p>
  <p id="Head">Advantages of B+ Tree</p>
  <img style="margin-left: 10%; width: 60%;" src="/static/mainpage/DS_tut_img/b-plus-tree-advantages_django.jpg" alt=""> <br>
  <p id="Head">Insertion in B+ Tree</p>
  <p class="info">
    -> &nbsp;Step 1: Insert the new node as a leaf node  <BR></BR>
    -> &nbsp;Step 2: If the leaf doesn't have required space, split the node and copy the middle node to the next index node.  <BR></BR>
    -> &nbsp;Step 3: If the index node doesn't have required space, split the node and copy the middle element to the next index page.<br>
  </p>
  <p id="Head">Deletion in B+ Tree</p>
  <p class="info">
    -> &nbsp;Step 1: Delete the key and data from the leaves. <BR></BR>
    -> &nbsp;Step 2: if the leaf node contains less than minimum number of elements, merge down the node with its sibling and delete the key in between them. <BR></BR>
    -> &nbsp;Step 3: if the index node contains less than minimum number of elements, merge the node with the sibling and move down the key in between them.<br>
  </p>
  `;
});

Tut_C_18.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Graph</p>
  <p class="info">
    A graph G can be defined as an ordered set G(V, E) where V(G) represents the set of vertices and E(G) represents the set of edges which are used to connect these vertices. <br><br>
A Graph G(V, E) with 5 vertices (A, B, C, D, E) and six edges ((A,B), (B,C), (C,E), (E,D), (D,B), (D,A)) is shown in the following figure.  <br>
    <br>
    <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/graph-definition_django.png" alt=""> 
  </p>
  <p id="Head">Directed and Undirected Graph</p>
  <p class="info">
    A graph can be directed or undirected. However, in an undirected graph, edges are not associated with the directions with them. An undirected graph is shown in the above figure since its edges are not attached with any of the directions. If an edge exists between vertex A and B then the vertices can be traversed from B to A as well as A to B.  <br>

In a directed graph, edges form an ordered pair. Edges represent a specific path from some vertex A to another vertex B. Node A is called initial node while node B is called terminal node.  <br>

A directed graph is shown in the following figure. <br>
  </p>
  <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/directed-and-undirected-graph_django.png" alt=""> <br>
  <p id="Head">Graph Terminology</p>
  <p id="Head">Path</p>
  <p class="info">
    A path can be defined as the sequence of nodes that are followed in order to reach some terminal node V from the initial node U. <br>
  </p>
  <p id="Head">Closed Path</p>
  <p class="info">
    A path will be called as closed path if the initial node is same as terminal node. A path will be closed path if V0=VN. <br>
  </p>
  <p id="Head">Simple Path</p>
  <p class="info">
    If all the nodes of the graph are distinct with an exception V0=VN, then such path P is called as closed simple path. <br>
  </p>
  <p id="Head">Cycle</p>
  <p class="info">
    A cycle can be defined as the path which has no repeated edges or vertices except the first and last vertices. <br>
  </p>
  <p id="Head">Connected Graph</p>
  <p class="info">
    A connected graph is the one in which some path exists between every two vertices (u, v) in V. There are no isolated nodes in connected graph. <br>
  </p>
  <p id="Head">Complete Graph</p>
  <p class="info">
    A complete graph is the one in which every node is connected with all other nodes. A complete graph contain n(n-1)/2 edges where n is the number of nodes in the graph. <br>
  </p>
  <p id="Head">Weighted Graph</p>
  <p class="info">
    In a weighted graph, each edge is assigned with some data such as length or weight. The weight of an edge e can be given as w(e) which must be a positive (+) value indicating the cost of traversing the edge. <br>
  </p>
  <p id="Head">Digraph</p>
  <p class="info">
    A digraph is a directed graph in which each edge of the graph is associated with some direction and the traversing can be done only in the specified direction. <br>
  </p>
  <p id="Head">Loop</p>
  <p class="info">
    An edge that is associated with the similar end points can be called as Loop. <br>
  </p>
  <p id="Head">Adjacent Nodes</p>
  <p class="info">
    If two nodes u and v are connected via an edge e, then the nodes u and v are called as neighbours or adjacent nodes. <br>
  </p>
  <p id="Head">Degree of the Node</p>
  <p class="info">
    A degree of a node is the number of edges that are connected with that node. A node with degree 0 is called as isolated node. <br>
  </p>`;
});

Tut_C_19.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Graph Representation</p>
  <p class="info">
    By Graph representation, we simply mean the technique which is to be used in order to store some graph into the computer's memory. <br>
There are two ways to store Graph into the computer's memory. In this part of this tutorial, we discuss each one of them in detail.  <br>
  </p>
  <p id="Head">1. Sequential Representation</p>
  <p class="info">
    In sequential representation, we use adjacency matrix to store the mapping represented by vertices and edges. In adjacency matrix, the rows and columns are represented by the graph vertices. A graph having n vertices, will have a dimension n x n.  <br>
    An entry Mij in the adjacency matrix representation of an undirected graph G will be 1 if there exists an edge between Vi and Vj. <br>
    An undirected graph and its adjacency matrix representation is shown in the following figure. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/sequential-representation_django.png" alt=""> <br>
    in the above figure, we can see the mapping among the vertices (A, B, C, D, E) is represented by using the adjacency matrix which is also shown in the figure.   <br>
    There exists different adjacency matrices for the directed and undirected graph. In directed graph, an entry Aij will be 1 only when there is an edge directed from Vi to Vj.  <br>
    A directed graph and its adjacency matrix representation is shown in the following figure. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/sequential-representation2_django.png" alt=""> <br>
    Representation of weighted directed graph is different. Instead of filling the entry by 1, the Non- zero entries of the adjacency matrix are represented by the weight of respective edges. <br>
    The weighted directed graph along with the adjacency matrix representation is shown in the following figure. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/sequential-representation3_django.png" alt=""> <br>
  </p>
  <p id="Head">2. Linked Representation</p>
  <p class="info">
    In the linked representation, an adjacency list is used to store the Graph into the computer's memory. <br>Consider the undirected graph shown in the following figure and check the adjacency list representation. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/graph-representation-linked-representation_django.png" alt=""> <br>
    An adjacency list is maintained for each node present in the graph which stores the node value and a pointer to the next adjacent node to the respective node. If all the adjacent nodes are traversed then store the NULL in the pointer field of last node of the list. The sum of the lengths of adjacency lists is equal to the twice of the number of edges present in an undirected graph.  <br>
    Consider the directed graph shown in the following figure and check the adjacency list representation of the graph. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/graph-representation-linked-representation2_django.png" alt=""> <br>
    In a directed graph, the sum of lengths of all the adjacency lists is equal to the number of edges present in the graph. <br>
    In the case of weighted directed graph, each node contains an extra field that is called the weight of the node. The adjacency list representation of a directed graph is shown in the following figure. <br>
    <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/graph-representation-linked-representation3_django.png" alt=""> <br><br>
  </p>`;
});

Tut_C_20.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Spanning Tree</p>
    <p class="info">
      In this topic, we will learn about the spanning tree and minimum spanning tree. Before knowing about the spanning trees, we should know about some graphs. <br>
      The following are the types of graphs: <br><br>
      1) &nbsp;Undirected graph: An undirected graph is a graph in which all the edges do not point to any particular direction, i.e., they are not unidirectional; they are bidirectional.
      It can also be defined as a graph in which set of V vertices and set of E edges, each edge connecting two different vertices.  <br><br>
      2) &nbsp;Connected graph: A connected graph is a graph in which a path always exists from a vertex to any other vertex.
      A graph is connected if we can reach any vertex from any other vertex by following edges in either direction.  <br><br>
      3) &nbsp;Directed graph: A directed graph is defined as a graph in which set of V vertices and set of Edges, each connecting two different vertices, but it is not mandatory that node points in the opposite direction also. <br><br>
    </p>
    <p id="Head">What is a Spanning tree?</p>
    <p class="info">
      If we have a graph containing V vertices and E edges, then the graph can be represented as: <br>      G(V, E) <br>
      If we create the spanning tree from the above graph, then the spanning tree would have the same number of vertices as the graph, but the vertices are not equal. The edges in the spanning tree would be equal to the number of edges in the graph minus 1. <br>
      Suppose the spanning tree is represented as: <br>
      G\`(V\`, E\`) <br>
      where, <br>
      V=V\` <br>
      E\`ϵ E -1 <br>
      E\`=|V| - 1 <br>
      Let's understand through an example. <br>
      Suppose we want to create the spanning tree of the graph, which is shown below: <br>
      <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/spanning-tree_django.png" alt=""> <br>
      <br>
      As we know, that spanning tree contains the same number of vertices as the graph, so the total number of vertices in the graph is 5; therefore, the spanning tree will also contain the 5 vertices. The edges in the spanning tree are equal to the number of vertices in the graph minus 1; therefore, the number of edges is 4. Three spanning trees can be created, which are shown below:  <br>
      <img style="margin-left: 10%; width: 70%;" src="/static/mainpage/DS_tut_img/spanning-tree2_django.png" alt=""> <br>
      <br>
    </p>
    <p id="Head">Minimum Spanning Trees</p>
    <p class="info">
      The minimum spanning tree is the tree whose sum of the edge weights is minimum. From the above spanning trees, the total edge weight of the spanning tree 1 is 12, the total edge weight of the spanning tree 2 is 14, and the total edge weight of the spanning tree 3 is 11; therefore, the total edge weight of the spanning tree 3 is minimum. From the above graph, we can also create one more spanning tree as shown below: <br>
      <img style="margin-left: 10%; width: 30%;" src="/static/mainpage/DS_tut_img/spanning-tree3_django.png" alt=""> <br>
      In the above tree, the total edge weight is 10 which is less than the above spanning trees; therefore, the minimum spanning tree is a tree which is having an edge weight, i.e., 10.
      <br>
    </p>`;
});

Tut_C_21.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Selection Sort</p>
  <p class="info">
    In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. <br>
    First, find the smallest element of the array and place it on the first position. Then, find the second smallest element of the array and place it on the second position. The process continues until we get the sorted array. <br>
    The array with n elements is sorted by using n-1 pass of selection sort algorithm. <br>
    ~ &nbsp;In 1st pass, smallest element of the array is to be found along with its index pos. then, swap A[0] and A[pos]. Thus A[0] is sorted, we now have n -1 elements which are to be sorted. <br>
    ~ &nbsp;In 2nd pas, position pos of the smallest element present in the sub-array A[n-1] is found. Then, swap, A[1] and A[pos]. Thus A[0] and A[1] are sorted, we now left with n-2 unsorted elements. <br>
    ~ &nbsp;In n-1th pass, position pos of the smaller element between A[n-1] and A[n-2] is to be found. Then, swap, A[pos] and A[n-1]. <br>
    <span style="color: green;">Algorithm</span> <br><pre>
    <span style="color: green;">SELECTION SORT(ARR, N)</span>
->&nbsp;Step 1: Repeat Steps 2 and 3 for K = 1 to N-1
->&nbsp;Step 2: CALL SMALLEST(ARR, K, N, POS)
->&nbsp;Step 3: SWAP A[K] with ARR[POS]
        [END OF LOOP]
->&nbsp;Step 4: EXIT

      <span style="color: green;">SELECTION SORT(ARR, N)</span>
->&nbsp;Step 1: [INITIALIZE] SET SMALL = ARR[K]
->&nbsp;Step 2: [INITIALIZE] SET POS = K
->&nbsp;Step 3: Repeat for J = K+1 to N -1
        IF SMALL > ARR[J]
        SET SMALL = ARR[J]
        SET POS = J
        [END OF IF]
        [END OF LOOP]
->&nbsp;Step 4: RETURN POS
    </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Complexity</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      </tr>
      <tr>
      <td>Time</td>
      <td>Ω(n)</td>
      <td>θ(n<sup>2</sup>)</td>
      <td>o(n<sup>2</sup>)</td>
      </tr>
      <tr>
      <td>Space</td>
      <td></td>
      <td></td>
      <td>o(1)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    int smallest(int[],int,int);  
    void main ()  
    {  
        int a[10] = {10, 9, 7, 101, 23, 44, 12, 78, 34, 23};  
        int i,j,k,pos,temp;  
        for(i=0;i < 10;i++)  
        {  
            pos = smallest(a,10,i);  
            temp = a[i];  
            a[i]=a[pos];  
            a[pos] = temp;  
        }  
        printf("\\nprinting sorted elements...\\n");  
        for(i=0;i < 10;i++)  
        {  
            printf("%d\\n",a[i]);  
        }  
    }  
    int smallest(int a[], int n, int i)  
    {  
        int small,pos,j;  
        small = a[i];  
        pos = i;  
        for(j=i+1;j < 10;j++)  
        {  
            if(a[j] < small)  
            {  
                small = a[j];  
                pos=j;  
            }  
        }  
        return pos;  
    }     </pre> <pre>
    Output :
    Printing Sorted Element List . . . 
    7
    9
    10
    12
    23
    34
    34
    44
    78 
    101 </pre>`;
});

Tut_C_22.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Insertion Sort</p>
  <p class="info">
    Insertion sort is the simple sorting algorithm which is commonly used in the daily lives while ordering a deck of cards. In this algorithm, we insert each element onto its proper place in the sorted array. This is less efficient than the other sort algorithms like quick sort, merge sort, etc. <br>
    Consider an array A whose elements are to be sorted. Initially, A[0] is the only element on the sorted set. In pass 1, A[1] is placed at its proper index in the array. <br>
    Consider an array A whose elements are to be sorted. Initially, A[0] is the only element on the sorted set. In pass 1, A[1] is placed at its proper index in the array. <br>
    To insert an element A[k] to its proper index, we must compare it with all other elements i.e. A[k-1], A[k-2], and so on until we find an element A[j] such that, A[j]<=A[k]. <br>
    All the elements from A[k-1] to A[j] need to be shifted and A[k] will be moved to A[j+1]. <br>
    <span style="color: green;">Algorithm</span> <br><pre>
    <span style="color: green;">INSERTION SORT(ARR, N)</span>
->&nbsp;Step 1: Repeat Steps 2 to 5 for K = 1 to N-1
->&nbsp;Step 2: SET TEMP = ARR[K]
->&nbsp;Step 3: SET J = K - 1
->&nbsp;Step 4: Repeat while TEMP <=ARR[J]
        SET ARR[J + 1] = ARR[J]
        SET J = J - 1
        [END OF INNER LOOP]
->&nbsp;Step 5: SET ARR[J + 1] = TEMP
        [END OF LOOP]
->&nbsp;Step 6: EXIT
    </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Complexity</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      </tr>
      <tr>
      <td>Time</td>
      <td>Ω(n)</td>
      <td>θ(n<sup>2</sup>)</td>
      <td>o(n<sup>2</sup>)</td>
      </tr>
      <tr>
      <td>Space</td>
      <td></td>
      <td></td>
      <td>o(1)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    void main ()  
    {  
        int i,j, k,temp;  
        int a[10] = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23};   
        printf("\\nprinting sorted elements...\\n");  
        for(k=1; k < 10; k++)   
        {  
            temp = a[k];  
            j= k-1;  
            while(j>=0 && temp <= a[j])  
            {  
                a[j+1] = a[j];   
                j = j-1;  
            }  
            a[j+1] = temp;  
        }  
        for(i=0;i < 10;i++)  
        {  
            printf("\n%d\n",a[i]);  
        }  
    }     </pre> <pre>
    Output :
    Printing Sorted Element List . . . 
    7
    9
    10
    12
    23
    34
    34
    44
    78 
    101 </pre>`;
});

Tut_C_23.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Heap Sort</p>
  <p class="info">
    Heap sort processes the elements by creating the min heap or max heap using the elements of the given array. Min heap or max heap represents the ordering of the array in which root element represents the minimum or maximum element of the array. At each step, the root element of the heap gets deleted and stored into the sorted array and the heap will again be heapified. <br>
    The heap sort basically recursively performs two main operations. <br>
    ~ &nbsp;Build a heap H, using the elements of ARR. <br>
    ~ &nbsp;Repeatedly delete the root element of the heap formed in phase 1. <br>
    <span style="color: green;">Algorithm</span> <br><pre>
    <span style="color: green;">HEAP_SORT(ARR, N)</span>
->&nbsp;Step 1: [Build Heap H]
    Repeat for i=0 to N-1
    CALL INSERT_HEAP(ARR, N, ARR[i])
    [END OF LOOP]
->&nbsp;Step 2: Repeatedly Delete the root element
    Repeat while N > 0
    CALL Delete_Heap(ARR,N,VAL)
    SET N = N+1
    [END OF LOOP]
->&nbsp;Step 3: END </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Complexity</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst case</th>
      </tr>
      <tr>
      <td>Time Complexity</td>
      <td>Ω(n log (n))</td>
      <td>θ(n log (n))</td>
      <td>O(n log (n))</td>
      </tr>
      <tr>
      <td>Space Complexity</td>
      <td></td>
      <td></td>
      <td>O(1)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    int temp;  

    void heapify(int arr[], int size, int i)  
    {  
    int largest = i;    
    int left = 2*i + 1;    
    int right = 2*i + 2;    
      
    if (left < size && arr[left] >arr[largest])  
    largest = left;  
      
    if (right < size && arr[right] > arr[largest])  
    largest = right;  
      
    if (largest != i)  
    {  
    temp = arr[i];  
        arr[i]= arr[largest];   
        arr[largest] = temp;  
    heapify(arr, size, largest);  
    }  
    }  
      
    void heapSort(int arr[], int size)  
    {  
    int i;  
    for (i = size / 2 - 1; i >= 0; i--)  
    heapify(arr, size, i);  
    for (i=size-1; i>=0; i--)  
    {  
    temp = arr[0];  
        arr[0]= arr[i];   
        arr[i] = temp;  
    heapify(arr, i, 0);  
    }  
    }  
      
    void main()  
    {  
    int arr[] = {1, 10, 2, 3, 4, 1, 2, 100,23, 2};  
    int i;  
    int size = sizeof(arr)/sizeof(arr[0]);  
      
    heapSort(arr, size);  
      
    printf("printing sorted elements\\n");  
    for (i=0; i < size; ++i)  
    printf("%d\\n",arr[i]);  
    }     </pre> <pre>
    Output :
    printing sorted elements 

    1
    1
    2
    2
    2
    3
    4
    10
    23
    100 </pre>`;
});

Tut_C_24.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Quick Sort</p>
  <p class="info">
    Quick sort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting of an array of n elements. This algorithm follows divide and conquer approach. The algorithm processes the array in the following way. <br><br>
    1) &nbsp;Set the first index of the array to left and loc variable. Set the last index of the array to right variable. i.e. left = 0, loc = 0, en d = n - 1, where n is the length of the array. <br><br>
    2) &nbsp;Start from the right of the array and scan the complete array from right to beginning comparing each element of the array with the element pointed by loc. <br>
    Ensure that, a[loc] is less than a[right]. <br><br>
    
    &nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;If this is the case, then continue with the comparison until right becomes equal to the loc. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;If a[loc] > a[right], then swap the two values. And go to step 3. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;Set, loc = right <br><br>
    3) &nbsp;tart from element pointed by left and compare each element in its way with the element pointed by the variable loc. Ensure that a[loc] > a[left] <br>
    &nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;if this is the case, then continue with the comparison until loc becomes equal to left. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;[loc] < a[right], then swap the two values and go to step 2. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;Set, loc = left. <br><br>
    <span style="color: green;">Algorithm</span> <br><pre>
    <span style="color: green;">PARTITION (ARR, BEG, END, LOC)</span>
->&nbsp;Step 1: [INITIALIZE] SET LEFT = BEG, RIGHT = END, LOC = BEG, FLAG =
->&nbsp;Step 2: Repeat Steps 3 to 6 while FLAG =
->&nbsp;Step 3: Repeat while ARR[LOC] <=ARR[RIGHT]
    AND LOC != RIGHT
    SET RIGHT = RIGHT - 1
    [END OF LOOP]
->&nbsp;Step 4: IF LOC = RIGHT
    SET FLAG = 1
    ELSE IF ARR[LOC] > ARR[RIGHT]
    SWAP ARR[LOC] with ARR[RIGHT]
    SET LOC = RIGHT
    [END OF IF]
->&nbsp;Step 5: IF FLAG = 0
    Repeat while ARR[LOC] >= ARR[LEFT] AND LOC != LEFT
    SET LEFT = LEFT + 1
    [END OF LOOP]
->&nbsp;Step 6:IF LOC = LEFT
    SET FLAG = 1
    ELSE IF ARR[LOC] < ARR[LEFT]
    SWAP ARR[LOC] with ARR[LEFT]
    SET LOC = LEFT
    [END OF IF]
    [END OF IF]
->&nbsp;Step 7: [END OF LOOP]
->&nbsp;Step 8: END
  
    <span style="color: green;">QUICK_SORT (ARR, BEG, END)</span>
->&nbsp;Step 1: IF (BEG < END)
    CALL PARTITION (ARR, BEG, END, LOC)
    CALL QUICKSORT(ARR, BEG, LOC - 1)
    CALL QUICKSORT(ARR, LOC + 1, END)
    [END OF IF]
->&nbsp;Step 2: END</pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Complexity</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      </tr>
      <tr>
      <td>Time Complexity</td>
      <td>O(n) for 3 way partition or O(n log n) simple partition</td>
      <td>O(n log n)</td>
      <td>O(n<sup>2</sup>)</td>
      </tr>
      <tr>
      <td>Space Complexity</td>
      <td></td>
      <td></td>
      <td>O(log n)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    int partition(int a[], int beg, int end);  
    void quickSort(int a[], int beg, int end);  
    void main()  
    {  
        int i;  
        int arr[10]={90,23,101,45,65,23,67,89,34,23};  
        quickSort(arr, 0, 9);  
        printf("\\n The sorted array is: \\n");  
        for(i=0;i < 10;i++)  
        printf(" %d\\t", arr[i]);  
    }  
    int partition(int a[], int beg, int end)  
    {  
          
        int left, right, temp, loc, flag;     
        loc = left = beg;  
        right = end;  
        flag = 0;  
        while(flag != 1)  
        {  
            while((a[loc] <= a[right]) && (loc!=right))  
            right--;  
            if(loc==right)  
            flag =1;  
            else if(a[loc]>a[right])  
            {  
                temp = a[loc];  
                a[loc] = a[right];  
                a[right] = temp;  
                loc = right;  
            }  
            if(flag!=1)  
            {  
                while((a[loc] >= a[left]) && (loc!=left))  
                left++;  
                if(loc==left)  
                flag =1;  
                else if(a[loc] < a[left])  
                {  
                    temp = a[loc];  
                    a[loc] = a[left];  
                    a[left] = temp;  
                    loc = left;  
                }  
            }  
        }  
        return loc;  
    }  
    void quickSort(int a[], int beg, int end)  
    {  
          
        int loc;  
        if(beg < end)  
        {  
            loc = partition(a, beg, end);  
            quickSort(a, beg, loc-1);  
            quickSort(a, loc+1, end);  
        }  
    }   </pre> <pre>
    Output :
    The sorted array is: 
    23
    23
    23
    34
    45
    65
    67
    89
    90
    101 </pre>`;
});

Tut_C_30.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Bubble Sort</p>
  <p class="info">
    In Bubble sort, Each element of the array is compared with its adjacent element. The algorithm processes the list in passes. A list with n elements requires n-1 passes for sorting. Consider an array A of n elements whose elements are to be sorted by using Bubble sort. The algorithm processes like following. <br>
    In Pass 1, A[0] is compared with A[1], A[1] is compared with A[2], A[2] is compared with A[3] and so on. At the end of pass 1, the largest element of the list is placed at the highest index of the list. <br>
    In Pass 2, A[0] is compared with A[1], A[1] is compared with A[2] and so on. At the end of Pass 2 the second largest element of the list is placed at the second highest index of the list.
    In pass n-1, A[0] is compared with A[1], A[1] is compared with A[2] and so on. At the end of this pass. The smallest element of the list is placed at the first index of the list. <br>
    <span style="color: green;">Algorithm</span> <br><pre>
->&nbsp;Step 1: Repeat Step 2 For i = 0 to N-1
->&nbsp;Step 2: Repeat For J = i + 1 to N - I
->&nbsp;Step 3: IF A[J] > A[i]
      SWAP A[J] and A[i]
      [END OF INNER LOOP]
      [END OF OUTER LOOP
->&nbsp;Step 4: EXIT
    </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Scenario</th>
      <th>Complexity</th>
      </tr>
      <tr>
      <td>Space</td>
      <td>O(1)</td>
      </tr>
      <tr>
      <td>Worst case running time</td>
      <td>O(n<sup>2</sup>)</td>
      </tr>
      <tr>
      <td>Average case running time</td>
      <td>O(n)</td>
      </tr>
      <tr>
      <td>Best case running time</td>
      <td>O(n<sup>2</sup>)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >     
    void main ()  
    {  
        int i, j,temp;   
        int a[10] = { 10, 9, 7, 101, 23, 44, 12, 78, 34, 23};   
        for(i = 0; i < 10; i++)  
        {  
            for(j = i+1; j < 10; j++)  
            {  
                if(a[j] > a[i])  
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;   
                }   
            }   
        }   
        printf("Printing Sorted Element List ...\\n");  
        for(i = 0; i < 10; i++)  
        {  
            printf("%d\\n",a[i]);  
        }  
    }     </pre> <pre>
    Output :
    Printing Sorted Element List . . . 
    7
    9
    10
    12
    23
    34
    34
    44
    78 
    101 </pre>`;
});

Tut_C_31.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Graph Traversal Algorithm</p>
  <p class="info">
    In this part of the tutorial we will discuss the techniques by using which, we can traverse all the vertices of the graph. <br>
    Traversing the graph means examining all the nodes and vertices of the graph. There are two standard methods by using which, we can traverse the graphs. Lets discuss each one of them in detail. <br>
    1) &nbsp;Breadth First Search   <br>
    2) &nbsp;Depth First Search  <br>
  </p>
  <p id="Head">1. Breadth First Search (BFS) Algorithm</p>
  <p class="info">
    Breadth first search is a graph traversal algorithm that starts traversing the graph from root node and explores all the neighbouring nodes. Then, it selects the nearest node and explore all the unexplored nodes. The algorithm follows the same process for each of the nearest node until it finds the goal.  <br>
    The algorithm of breadth first search is given below. The algorithm starts with examining the node A and all of its neighbours. In the next step, the neighbours of the nearest node of A are explored and process continues in the further steps. The algorithm explores all neighbours of all the nodes and ensures that each node is visited exactly once and no node is visited twice. <br>
    <span style="color: green;">Algorithm</span> <pre>
      Step 1: SET STATUS = 1 (ready state) for each node in G

      Step 2: Enqueue the starting node A and set its STATUS = 2 (waiting state)

      Step 3: Repeat Steps 4 and 5 until QUEUE is empty

      Step 4: Dequeue a node N. Process it and set its STATUS = 3 (processed state).

      Step 5: Enqueue all the neighbours of N that are in the ready state (whose STATUS = 1) and set
      their STATUS = 2 (waiting state)
      [END OF LOOP]

      Step 6: EXIT
    </pre>
  </p>
  <p id="Head">1. Depth First Search (DFS) Algorithm</p>
  <p class="info">
    Depth first search (DFS) algorithm starts with the initial node of the graph G, and then goes to deeper and deeper until we find the goal node or the node which has no children. The algorithm, then backtracks from the dead end towards the most recent node that is yet to be completely unexplored.  <br>
    The data structure which is being used in DFS is stack. The process is similar to BFS algorithm. In DFS, the edges that leads to an unvisited node are called discovery edges while the edges that leads to an already visited node are called block edges. <br>
    <span style="color: green;">Algorithm</span> <pre>
      Step 1: SET STATUS = 1 (ready state) for each node in G

      Step 2: Push the starting node A on the stack and set its STATUS = 2 (waiting state)

      Step 3: Repeat Steps 4 and 5 until STACK is empty

      Step 4: Pop the top node N. Process it and set its STATUS = 3 (processed state)

      Step 5: Push on the stack all the neighbours of N that are in the ready state (whose STATUS = 1) and
      set their STATUS = 2 (waiting state)
      [END OF LOOP]

      Step 6: EXIT
    </pre>
    <br>
  </p>`;
});

Tut_C_32.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Linear Search</p>
  <p class="info">
    Linear search is the simplest search algorithm and often called sequential search. In this type of searching, we simply traverse the list completely and match each element of the list with the item whose location is to be found. If the match found then location of the item is returned otherwise the algorithm return NULL. <br>
    Linear search is mostly used to search an unordered list in which the items are not sorted. The algorithm of linear search is given as follows. <br>
    <span style="color: green;">Algorithm</span><pre>
    <span style="color: green;">LINEAR_SEARCH(A, N, VAL)</span>
  ->&nbsp;Step 1: [INITIALIZE] SET POS = -1
  ->&nbsp;Step 2: [INITIALIZE] SET I = 1
  ->&nbsp;Step 3: Repeat Step 4 while I<=N
  ->&nbsp;Step 4: IF A[I] = VAL
      SET POS = I
      PRINT POS
      Go to Step 6
      [END OF IF]
      SET I = I + 1
      [END OF LOOP]
  ->&nbsp;Step 5: IF POS = -1
      PRINT " VALUE IS NOT PRESENTIN THE ARRAY "
      [END OF IF]
  ->&nbsp;Step 6: EXIT
    </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>Complexity</th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      </tr>
      <tr>
      <td>Time</td>
      <td>O(1)</td>
      <td>O(n)</td>
      <td>O(n)</td>
      </tr>
      <tr>
      <td>Space</td>
      <td></td>
      <td></td>
      <td>O(1)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    void main ()  
    {  
        int a[10] = {10, 23, 40, 1, 2, 0, 14, 13, 50, 9};  
        int item, i,flag;  
        printf("\\nEnter Item which is to be searched\\n");  
        scanf("%d",&item);  
        for (i = 0; i< 10; i++)  
        {  
            if(a[i] == item)   
            {  
                flag = i+1;  
                break;  
            }   
            else   
            flag = 0;  
        }   
        if(flag != 0)  
        {  
            printf("\\nItem found at location %d\\n",flag);  
        }  
        else  
        {  
            printf("\\nItem not found\\n");   
        }  
    }      
  </pre> <pre>
    Output :
    Enter Item which is to be searched
    20
    Item not found
    Enter Item which is to be searched
    23
    Item found at location 2 
  </pre>`;
});

Tut_C_33.addEventListener("click", () => {
    topics.classList.toggle("mediaside");
  change_page[0].innerHTML = `<p id="Head">Binary Search</p>
  <p class="info">
    Binary search is the search technique which works efficiently on the sorted lists. Hence, in order to search an element into some list by using binary search technique, we must ensure that the list is sorted. <br>
    Binary search follows divide and conquer approach in which, the list is divided into two halves and the item is compared with the middle element of the list. If the match is found then, the location of middle element is returned otherwise, we search into either of the halves depending upon the result produced through the match. <br>
    <span style="color: green;">Algorithm</span> <br><pre>
    <span style="color: green;">BINARY_SEARCH(A, lower_bound, upper_bound, VAL)</span>
->&nbsp;Step 1: [INITIALIZE] SET BEG = lower_bound
      END = upper_bound, POS = - 1
->&nbsp;Step 2: Repeat Steps 3 and 4 while BEG <=END
->&nbsp;Step 3: SET MID = (BEG + END)/2
->&nbsp;Step 4: IF A[MID] = VAL
      SET POS = MID
      PRINT POS
      Go to Step 6
      ELSE IF A[MID] > VAL
      SET END = MID - 1
      ELSE
      SET BEG = MID + 1
      [END OF IF]
      [END OF LOOP]
->&nbsp;Step 5: IF POS = -1
      PRINT "VALUE IS NOT PRESENT IN THE ARRAY"
      [END OF IF]
->&nbsp;Step 6: EXIT
    </pre>
    <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
    <table>
      <tr>
      <th>SN</th>
      <th>Performance</th>
      <th>Complexity</th>
      </tr>
      <tr>
      <td>1</td>
      <td>Worst case</td>
      <td>O(log n)</td>
      </tr>
      <tr>
      <td>2</td>
      <td>Best case</td>
      <td>O(1)</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Average Case</td>
      <td>O(log n)</td>
      </tr>
      <tr>
      <td>4</td>
      <td>Worst case space complexity</td>
      <td>O(1)</td>
      </tr>
    </table>
  </p>
  <p id="Head">C Program</p> <pre>
    #include< stdio.h >   
    int binarySearch(int[], int, int, int);  
    void main ()  
    {  
        int arr[10] = {16, 19, 20, 23, 45, 56, 78, 90, 96, 100};  
        int item, location=-1;   
        printf("Enter the item which you want to search ");  
        scanf("%d",&item);  
        location = binarySearch(arr, 0, 9, item);  
        if(location != -1)   
        {  
            printf("Item found at location %d",location);  
        }  
        else  
        {  
            printf("Item not found");  
        }  
    }   
    int binarySearch(int a[], int beg, int end, int item)  
    {  
        int mid;  
        if(end >= beg)   
        {     
            mid = (beg + end)/2;  
            if(a[mid] == item)  
            {  
                return mid+1;  
            }  
            else if(a[mid] < item)   
            {  
                return binarySearch(a,mid+1,end,item);  
            }  
            else   
            {  
                return binarySearch(a,beg,mid-1,item);  
            }  
          
        }  
        return -1;   
    }     
  </pre> <pre>
    Output :
    Enter the item which you want to search 
    19 
    Item found at location 2  </pre>`;
});

Tut_C_34.addEventListener("click", () => {
  topics.classList.toggle("mediaside");
change_page[0].innerHTML = `<p id="Head">Merge sort</p>
<p class="info">
  Merge sort is the algorithm which follows divide and conquer approach. Consider an array A of n number of elements. The algorithm processes the elements in 3 steps. <br><br>
  1) &nbsp;If A Contains 0 or 1 elements then it is already sorted, otherwise, Divide A into two sub-array of equal number of elements. <br><br>
  2) &nbsp;Conquer means sort the two sub-arrays recursively using the merge sort. <br><br>
  3) &nbsp;Combine the sub-arrays to form a single final sorted array maintaining the ordering of the array. <br>
  The main idea behind merge sort is that, the short list takes less time to be sorted<br>
  <img style="margin-left: 10%;" src="/static/mainpage/DS_tut_img/merge-sort-example_django.png" alt=""> <br><br>
  <span style="color: green;">Algorithm</span> <br><pre>
->&nbsp;Step 1: [INITIALIZE] SET I = BEG, J = MID + 1, INDEX = 0
->&nbsp;Step 2: Repeat while (I <= MID) AND (J<=END)
    IF ARR[I] < ARR[J]
    SET TEMP[INDEX] = ARR[I]
    SET I = I + 1
    ELSE
    SET TEMP[INDEX] = ARR[J]
    SET J = J + 1
    [END OF IF]
    SET INDEX = INDEX + 1
    [END OF LOOP]
->&nbsp;Step 3: [Copy the remaining
    elements of right sub-array, if
    any]
    IF I > MID
    Repeat while J <= END
    SET TEMP[INDEX] = ARR[J]
    SET INDEX = INDEX + 1, SET J = J + 1
    [END OF LOOP]
    [Copy the remaining elements of
    left sub-array, if any]
    ELSE
    Repeat while I <= MID
    SET TEMP[INDEX] = ARR[I]
    SET INDEX = INDEX + 1, SET I = I + 1
    [END OF LOOP]
    [END OF IF]
->&nbsp;Step 4: [Copy the contents of TEMP back to ARR] SET K = 0
->&nbsp;Step 5: Repeat while K < INDEX
    SET ARR[K] = TEMP[K]
    SET K = K + 1
    [END OF LOOP]
->&nbsp;Step 6: Exit

  <span style="color: green;">MERGE_SORT(ARR, BEG, END)</span>
->&nbsp;Step 1: IF BEG < END
  SET MID = (BEG + END)/2
  CALL MERGE_SORT (ARR, BEG, MID)
  CALL MERGE_SORT (ARR, MID + 1, END)
  MERGE (ARR, BEG, MID, END)
  [END OF IF]
->&nbsp;Step 2: END </pre>
  <p class="info"><span style="color: green;">Complexity of algorithm</span></p>
  <table>
    <tr>
    <th>Complexity</th>
    <th>Best case</th>
    <th>Average Case</th>
    <th>Worst Case</th>
    </tr>
    <tr>
    <td>Time Complexity</td>
    <td>O(n log n)</td>
    <td>O(n log n)</td>
    <td>O(n log n)</td>
    </tr>
    <tr>
    <td>Space Complexity</td>
    <td></td>
    <td></td>
    <td>O(n)</td>
    </tr>
  </table>
</p>
<p id="Head">C Program</p> <pre>
  #include< stdio.h >   
  void mergeSort(int[],int,int);  
  void merge(int[],int,int,int);  
  void main ()  
  {  
      int a[10]= {10, 9, 7, 101, 23, 44, 12, 78, 34, 23};  
      int i;  
      mergeSort(a,0,9);  
      printf("printing the sorted elements");  
      for(i=0;i < 10;i++)  
      {  
          printf("\\n%d\\n",a[i]);  
      }  
        
  }  
  void mergeSort(int a[], int beg, int end)  
  {  
      int mid;  
      if(beg < end)  
      {  
          mid = (beg+end)/2;  
          mergeSort(a,beg,mid);  
          mergeSort(a,mid+1,end);  
          merge(a,beg,mid,end);  
      }  
  }  
  void merge(int a[], int beg, int mid, int end)  
  {  
      int i=beg,j=mid+1,k,index = beg;  
      int temp[10];  
      while(i<=mid && j<=end)  
      {  
          if(a[i] < a[j])  
          {  
              temp[index] = a[i];  
              i = i+1;  
          }  
          else   
          {  
              temp[index] = a[j];  
              j = j+1;   
          }  
          index++;  
      }  
      if(i>mid)  
      {  
          while(j<=end)  
          {  
              temp[index] = a[j];  
              index++;  
              j++;  
          }  
      }  
      else   
      {  
          while(i<=mid)  
          {  
              temp[index] = a[i];  
              index++;  
              i++;  
          }  
      }  
      k = beg;  
      while(k < index)  
      {  
          a[k]=temp[k];  
          k++;  
      }  
  }   </pre> <pre>
  Output :
  printing the sorted elements 

  7
  9
  10
  12
  23
  23
  34
  44
  78
  101 </pre>`;
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
