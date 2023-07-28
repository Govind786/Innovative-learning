var next = '0';
var My_code = document.getElementById('My-code');
var page = document.getElementsByClassName('questions');
var codingKiya2 = document.getElementsByClassName('codingKiya2');
var pre = document.getElementsByTagName('pre');
var sol = document.getElementById('solution');
var DS_1 = document.getElementById('DS-1');
var DS_2 = document.getElementById('DS-2');
var DS_3 = document.getElementById('DS-3');
var DS_4 = document.getElementById('DS-4');
var DS_5 = document.getElementById('DS-5');
var DS_6 = document.getElementById('DS-6');
var DS_7 = document.getElementById('DS-7');
var DS_8 = document.getElementById('DS-8');
var DS_9 = document.getElementById('DS-9');
var DS_10 = document.getElementById('DS-10');
var DS_11 = document.getElementById('DS-11');
var DS_12 = document.getElementById('DS-12');
var DS_13 = document.getElementById('DS-13');
var DS_14 = document.getElementById('DS-14');
var DS_15 = document.getElementById('DS-15');
var DS_16 = document.getElementById('DS-16');
var DS_17 = document.getElementById('DS-17');
var DS_18 = document.getElementById('DS-18');
var DS_19 = document.getElementById('DS-19');
var DS_20 = document.getElementById('DS-20');
var DS_21 = document.getElementById('DS-21');
var DS_22 = document.getElementById('DS-22');
var DS_23 = document.getElementById('DS-23');
var DS_24 = document.getElementById('DS-24');
var DS_25 = document.getElementById('DS-25');
var DS_26 = document.getElementById('DS-26');
var DS_27 = document.getElementById('DS-27');
var DS_28 = document.getElementById('DS-28');
var DS_29 = document.getElementById('DS-29');
var DS_30 = document.getElementById('DS-30');
var DS_31 = document.getElementById('DS-31');
var DS_32 = document.getElementById('DS-32');
var DS_33 = document.getElementById('DS-33');
var DS_34 = document.getElementById('DS-34');
var DS_35 = document.getElementById('DS-35');
var DS_36 = document.getElementById('DS-36');
var DS_37 = document.getElementById('DS-37');
var DS_38 = document.getElementById('DS-38');
var DS_39 = document.getElementById('DS-39');
var DS_40 = document.getElementById('DS-40');
var DS_41 = document.getElementById('DS-41');
var DS_42 = document.getElementById('DS-42');
var DS_43 = document.getElementById('DS-43');

pre[1].style.display = 'none';

DS_1.addEventListener('click', () => {
    var data = DS_1.innerHTML;
    page[0].style.display = 'none';
    next = '2';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int a,len,i,flag = 0;
        printf("Enter the length the array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the numbers for the array :\\n");
        for(i=0;i<len;i++){
            scanf("%d",&arr[i]);
        }
        printf("Enter the number you want to search : ");
        scanf("%d",&a);
        for(i = 0;i < len;i++)
        {
            if(a == arr[i])
            {
                flag++;
                if(flag < 2)
                {
                    printf("Your number is present at %dth",i+1);
                }
                else
                {
                    printf(" , %dth",i+1);
                }
            }
        }
        if(flag == 0){
            printf("The number %d is not in the array.",a);
        }
        else{
            printf(" position in the Array.");
        }
        return 0;
    }
    

    `;
});

DS_2.addEventListener('click', () => {
    next = '3';
    var data = DS_2.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = 'Given an Array of integer of size n.Assume 0 as an invalid number and all other as valid numbers. Convert the array in such a way that if next number is a valid number and same as current number, double its value and replace the next number with 0. After the modification, rearrange the array such that all 0s are shifted to the end.';
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i,j,k,len,temp;
        printf("Enter the length of array : ");
        scanf("%d",&len);
        int arr[len];
        temp = 0;
        printf("Enter the Elements in the array : \\n");
        for(i = 0;i < len;i++){
            scanf("%d",&arr[i]);
            if(arr[i] == 0){
                temp++;
            }
        }
        j = 0;
        while(j < len){
            if(arr[j] != 0 && arr[j] == arr[j+1]){
                arr[j] = arr[j] * 2;
                arr[j+1] = 0;
                printf("%d ",arr[j]);
                j++;
                temp++;
            }
            else if(arr[j] != 0){
                printf("%d ",arr[j]);
            }
            j++;
        }
        while(temp > 0){
            arr[temp] = 0;
            printf("%d ",arr[temp]);
            temp--;
        }
        return 0;
    }
    

    `;
});

DS_3.addEventListener('click', () => {
    next = '4';
    var data = DS_3.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<ctype.h>
    #define max 5
    
    void push();
    void pop();
    void display();
    
    int top = -1;
    int stack[max];
    int main(){
    
    while(1){
        int choice;
        printf("**MENU**");
        printf("\\n1.PUSH");
        printf("\\n2.POP");
        printf("\\n3.DISPLAY");
        printf("\\n4.EXIT");
        printf("\\nEnter your choice:- ");
        scanf("%d",&choice);
       switch(choice){
       case 1:push();
            break;
       case 2:pop();
           break;
       case 3:display();
           break;
       case 4:exit(0);
           break;
       default:printf("Your choice is wrong");
       }
    }
    return 0;
    }
    
    void push(){
        int item;
      if(top == max-1){
        printf("\\nStack is overflow");
        return;
      }
        else{
        printf("Enter the element:- ");
        scanf("%d",&item);
        top++;
        stack[top]=item;
        }
    }
    void pop(){
        int temp;
        if(top == -1){
        printf("\\nStack is underflow");
        }
        else{
            printf("\\nDeleted element is :- %d",stack[top]);
            top--;
        }
        printf("\\n");
    }
    void display(){
        if(top == -1){
            printf("Stack is empty.");
        }
        printf("\\nStack elements are:- ");
        for(int i=top;i>-1;i--){
            printf("%d ",stack[i]);
        }
        printf("\\n");
    }    
    
    `;
});

DS_4.addEventListener('click', () => {
    next = '5';
    var data = DS_4.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include <string.h>

    void push(char pushvar);
    char pop();
    int top = -1;
    char arr[100],stack[50];
    
    int main()
    {
        int slen,i;
        printf("\\nEnter the string for matching : ");
        scanf("%s",&arr);
        slen = strlen(arr);
        for(i = 0;i < slen; i++)
        {
            push(arr[i]);
        }
        if(slen%2 == 0)
        {
            if(arr[slen/2] == arr[(slen/2)-1])
            {
                slen--;
            }
            else
            {
                printf("\\nThe String %s is not palindrome.\\n",arr);
                slen = 0;
            }
        }
        for(i = 0;i < slen/2;i++){
            if(arr[i] == pop())
            {
                continue;
            }
            else
            {
                printf("\\nThe String %s is not palindrome.",arr);
                slen = 0;
                break;
            }
        }
        if(slen)
        {
            printf("\\nThe string %s is palindrome.",arr);
        }
        return 0;
    }
    void push(char pushvar)
    {
        stack[++top] = pushvar;
    }
    char pop()
    {
        return stack[top--];
    }
    
    `;
});

DS_5.addEventListener('click', () => {
    next = '6';
    var data = DS_5.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include <string.h>

    void push(char pushvar);
    char pop();
    int top = -1;
    char arr[100],stack[100];
    
    int main()
    {
        int slen,i;
        printf("\\nEnter the string for reverse : ");
        scanf("%s",&arr);
        slen = strlen(arr);
        for(i = 0;i < slen; i++)
        {
            push(arr[i]);
        }
        printf("Reversed String is : ");
        for(i = 0;i < slen;i++){
            printf("%c",pop());
        }
        return 0;
    }
    void push(char pushvar)
    {
        stack[++top] = pushvar;
    }
    char pop()
    {
        return stack[top--];
    }
    
    `;
});

DS_6.addEventListener('click', () => {
    next = '7';
    var data = DS_6.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include <string.h>

    void push(char pushvar);
    void push1(char pushvar1);
    char pop1();
    int top = -1,err = 0;
    int top1 = -1;
    char arr[50],stack[50],stack1[30];
    
    int precedence(char elem)
    {
        if (elem == '+' || elem == '-'){
            return 1;
        }
        else if (elem == '*' || elem == '/'){
            return 2;
        }
        else if(elem == '^' || elem == '(' || elem == '$' 
        || elem == '[' || elem == '{'){
            return 4;
        }
        else if (elem == '%'){
            return 3;
        }
    }
    
    char is_operator(char elem1)
    {
        if(elem1 == '+' || elem1 == '-' || elem1 == '*' 
        || elem1 == '/' || elem1 == '%' || elem1 == '$'
        || elem1 == '(' || elem1 == ')' || elem1 == '^' 
        || elem1 == '{' || elem1 == '[' || elem1 == '}' 
        || elem1 == ']')
        {
            return elem1;
        }
        else
            return 'go';
    }
    
    int main()
    {
        int slen,i;
        printf("\\nEnter the string for postfix conversion : ");
        scanf("%s",arr);
        slen = strlen(arr);
        push1('(');
        arr[slen] = ')';
        for(i = 0;i <= slen;i++){
            if(arr[i] != is_operator(arr[i])){
                push(arr[i]);
            }
            else{
                if(arr[i] == ')'){
                    while(stack1[top1] != '('){
                        if(stack1[top1] == '[' || stack1[top1] == '{' 
                        || top1 == -1){
                            err = 1;
                            break;
                        }
                        push(pop1());
                    }
                    pop1();
                }
                else if(arr[i] == ']'){
                    while(stack1[top1] != '['){
                        if(stack1[top1] == '(' || stack1[top1] == '{' 
                        || top1 == -1){
                            err = 1;
                            break;
                        }
                        push(pop1());
                    }
                    pop1();
                }
                else if(arr[i] == '}'){
                    while(stack1[top1] != '{'){
                        if(stack1[top1] == '(' || stack1[top1] == '{' 
                        || top1 == -1){
                            err = 1;
                            break;
                        }
                        push(pop1());
                    }
                    pop1();
                }
                else if( (stack1[top1] != '(' && 
                stack1[top1] != '[' && stack1[top1] != '{') && 
                precedence(arr[i]) <= precedence(stack1[top1])){
                    push(pop1());
                    push1(arr[i]);
                }
                else if(precedence(arr[i]) > precedence(stack1[top1])){
                    push1(arr[i]);
                }
                else if(arr[i] == is_operator(arr[i])){
                    push1(arr[i]);
                }
            }
        }
        if(stack1[top1] == '('){err = 1;}
        if(err == 0){
            printf("Postfix Expression is : %s",stack);
        }
        else{
            printf("Parenthesis don't matched.");
        }
        return 0;
    }

    void push(char pushvar)
    {
        stack[++top] = pushvar;
    }
    
    void push1(char pushvar1)
    {
        stack1[++top1] = pushvar1;
    }
    char pop1()
    {
        return stack1[top1--];
    }
         
    `;
});

DS_7.addEventListener('click', () => {
    next = '8';
    var data = DS_7.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include <ctype.h>
    #define max 100

    int stack[max],top = -1;
    void push(int);
    int pop();
    void evaluate(char postfix[max]);
    int power(int,int);

    int main()
    {
        char postfix[max];
        int i;
        printf("\\nEnter the postfix expression for evaluate 
            \\nPlease separate your equation using space");
        printf(" and add ) at last of expression : ");
        for(i=0;i<max;i++){
            scanf("%c",&postfix[i]);
            if(postfix[i] == ')'){
                break;
            }
            else if(postfix[i] == '\\n'){
                printf("Please do not press enter before ) ");
                return 0;
            }
        }
        evaluate(postfix);
        return 0;
    }

    void evaluate(char postfix[max])
    {
        int i,A,B,val,setup;
        char ch;
        for(i=0;postfix[i] != ')';i++){
            ch = postfix[i];
            if(isdigit(ch)){
                if(postfix[i+1] == ' '){
                i++;
                push(ch - '0');
                continue;
                }
                else{
                    setup = (postfix[i] - '0');
                    make:
                        setup = (setup * 10) + ((postfix[++i]) - '0');
                        if(postfix[(i+1)] != ' '){
                            goto make;
                        }
                        else if(postfix[(i+1)] == ' '){
                            push(setup);
                            continue;
                        }
                }
            }
            else if(ch == '+' || ch == '-' || ch == '*' || 
                    ch == '/' || ch == '%' || ch == '^')
                {
                A = pop();
                B = pop();
                switch(ch)
                {
                case '+':
                    val = B + A;
                    break;
                case '-':
                    val = B - A;
                    break;
                case '*':
                    val = B * A;
                    break;
                case '/':
                    val = B / A;
                    break;
                case '%':
                    val = B % A;
                    break;
                case '^':
                    val = power(B,A);
                }
                push(val);
            }
        }
        printf("\\nResult of expression evaluation : %d \\n",pop());
    }

    int power(int B,int A)
    {
        A--;
        int val = B;
        while(A){
            val = val * B;
            A--;
        }
        return val;
    }

    void push(int item)
    {
        stack[++top] = item;
    }
    int pop()
    {
        return stack[top--];
    }

    `;
});

DS_8.addEventListener('click', () => {
    next = '9';
    var data = DS_8.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define max 100

    int queue[max],front=-1,rear=-1;
    void insert_q();
    void delete_q();
    void display_q();
    void main(){
        int choice;
        while(1){
        printf("***MENU***");
        printf("\\n1.Insertion");
        printf("\\n2.Deletion");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("\\nEnter your Choice: ");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:insert_q();
                break;
            case 2:delete_q();
                break;
            case 3:display_q();
                break;
            case 4:exit(0);
            default:
                printf("\\nYou have Entered the Wrong Choice");
        }
      }
    }
    void insert_q(){
        int item;
        if(rear==max-1)
        {
            printf("\\nQueue is already full");
        }
        else
        {
            printf("\\nEnter the item to be inserted : ");
            scanf("%d",&item);
            if(front==-1){
                front=0;
                rear=0;
                queue[rear]=item;
            }
            else
            {
            rear++;
             queue[rear]=item;
            }
        }
    }
    void delete_q(){
        if(front==-1){
            printf("Queue is Empty");
        }
        else
        {
            if(front==rear){
                printf("\\nDeleted item is :%d",queue[front]);
                front=-1;
                rear=-1;
            }
            else
            {
               printf("\\nDeleted item is : %d",queue[front]);
               front++;
            }
        }
        printf("\\n");
    }
    void display_q(){
        int i;
        if(front==-1){
             printf("\\nQueue is empty");
        }
        else
        {
            printf("\\nQueue elements are: ");
            for(i=front;i<=rear;i++){
                 printf("%d ",queue[i]);
            }
        }
        printf("\\n");
    }
    
    `;
});

DS_9.addEventListener('click', () => {
    next = '10';
    var data = DS_9.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<string.h>
    #define max 100
    
    int front = -1,rear = -1,len_q=0;
    char queue[max];
    
    int main()
    {
        int i,len;
        char inp[max];
        printf("Enter the String to reverse : ");
        scanf("%s",inp);
        len = strlen(inp);
        for(i=0;i<len;i++){
            insert_q(inp[i]);
        }
        len_q = i;
        reverse_q();
        return 0;
    }
    
    void insert_q(char item){
        if(front == -1)
        {
            front=0;
            queue[++rear]=item;
        }
        else
        {
            queue[++rear]=item;
        }
    }
    
    void reverse_q()
    {
        int i,j;
        i = front;
        j = rear;
        char ch;
        while(i != j && i < (len_q/2)){
            ch = queue[i];
            queue[i] = queue[j];
            queue[j] = ch;
            i++;
            j--;
        }
        display_q();
    }
    
    void display_q(){
        int i;
        if(front==-1)
        {
             printf("\\nQueue is empty");
        }
        else
        {
            printf("Reversed String is : ");
            for(i = front;i <= rear;i++){
                printf("%c",queue[i]);
            }
        }
    }    
    
    `;
});

DS_10.addEventListener('click', () => {
    next = '11';
    var data = DS_10.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define max 10

    int queue[max],front=-1,rear=-1;
    void insert_q();
    void delete_q();
    void display_q();
    void main(){
        int choice;
        while(1){
        printf("********MENU********");
        printf("\\n1.Insertion");
        printf("\\n2.Deletion");
        printf("\\n3.Display");
        printf("\\n4.Exit");
        printf("Enter your Choice: ");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:insert_q();
                break;
            case 2:delete_q();
                break;
            case 3:display_q();
                break;
            case 4:exit(0);
            default:
                printf("\\nYou have Entered the Wrong Choice");
        }
      }
    }
    void insert_q(){
        int item;
        if(front == ((rear + 1) % max))
        {
            printf("\\nQueue is already full");
        }
        else
        {
            printf("\\nEnter the item to be inserted : ");
            scanf("%d",&item);
            if(front == -1)
            {
                front=0;
                queue[++rear]=item;
            }
            else
            {
                rear = (rear + 1) % max;
                queue[rear]=item;
            }
        }
        printf("\\n");
    }
    void delete_q(){
        if(front==-1)
        {
            printf("Queue is Empty");
        }
        else
        {
            if(front==rear)
            {
                printf("\\nDeleted item is : %d",queue[front]);
                front=-1;
                rear=-1;
            }
            else
            {
               printf("\\nDeleted item is : %d",queue[front]);
               front++;
               if(front == max){
                front = 0;
               }
            }
        }
        printf("\\n");
    }
    void display_q(){
        int i,temp=1;
        if(front==-1)
        {
             printf("\\nQueue is empty");
        }
        else
        {
            printf("\\nQueue elements are: ");
            for(i=front;temp;){
                 printf("%d ",queue[i]);
                 temp = (i != rear);
                 i = (i+1) % max;
            }
        }
        printf("\\n");
    }
    
    `;
});

DS_11.addEventListener('click', () => {
    next = '12';
    var data = DS_11.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *next;
    };
    
    struct node *head;
    
    void create()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            p->next = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->next = NULL;
        }
        return;
    }
    
    void display()
    {
        struct node *ptr = head;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->next;
        }
        printf("NULL\\n");
        return;
    }
    
    int menu()
    {
        int choice;
    
        printf("\\n 1. To Create Linked list \\n 
        2. To Insert Data at First Position\\n 
        3. To Exit\\n");
        printf("\\n Enter your Choice : ");
        scanf("%d",&choice);
        return choice;
    }
    
    int main()
    {
        head = NULL;
        while(1)
        {
            int choice = menu();
            switch(choice)
            {
            case 1:
                create();
                break;
            case 2:
                display();
                break;
            case 3:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_12.addEventListener('click', () => {
    next = '13';
    var data = DS_12.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *next;
    };
    
    struct node *head;
    
    void create()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            p->next = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->next = NULL;
        }
        return;
    }
    
    void display()
    {
        struct node *ptr = head;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->next;
        }
        printf("NULL\\n");
        return;
    }
    
    void revLlist()
    {
        if(head == NULL){
            printf(" There is no Element to Reverse Linked List.");
            return;
        }
        else if(head->next == NULL){
            printf(" There is only One Element in the Linked List
            \\n Reversed Linked List is : %d",head->item);
            return;
        }
        struct node *ptr = head;
        struct node *ptr2 , *pre = NULL , *curr;
        while(curr != NULL){
            curr = ptr->next;
            ptr->next = pre;
            pre = ptr;
            ptr = curr;
        }
        head = pre;
        printf(" Linked list Reversed Successfully.");
        return;
    }
    
    int menu()
    {
        int choice;
    
        printf("\\n 1. To Create Linked list \\n 
        2. To Display Linked List\\n 3. To Reverse Linked List\\n 
        4. To Exit\\n");
        printf("\\n Enter your Choice : ");
        scanf("%d",&choice);
        return choice;
    }
    
    int main()
    {
        head = NULL;
        while(1)
        {
            int choice = menu();
            switch(choice)
            {
            case 1:
                create();
                break;
            case 2:
                display();
                break;
            case 3:
                revLlist();
                break;
            case 4:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_13.addEventListener('click', () => {
    next = '14';
    var data = DS_13.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *next;
    };
    
    struct node *head;
    
    void create()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            p->next = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->next = NULL;
        }
        return;
    }
    
    void display()
    {
        struct node *ptr = head;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->next;
        }
        printf("NULL\\n");
        return;
    }
    
    void ins_last()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            p->next = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->next = NULL;
        }
        return;
    }
    
    int menu()
    {
        int choice;
    
        printf(" 1. To Create Linked list \\n 
        2. To Display Linked List\\n 3. To Insert Data at 
            Last Position\\n 4. To Exit\\n");
        printf("\\n Enter your Choice : ");
        scanf("%d",&choice);
        return choice;
    }
    
    int main()
    {
        head = NULL;
        while(1)
        {
            int choice = menu();
            switch(choice)
            {
            case 1:
                create();
                break;
            case 2:
                display();
                break;
            case 3:
                ins_last();
                break;
            case 4:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_14.addEventListener('click', () => {
    next = '15';
    var data = DS_14.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *next;
        struct node *prev;
    };
    
    struct node *head;
    struct node *head2;
    
    void create()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            head2 = p;
            p->next = NULL;
            p->prev = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->prev = ptr;
            p->next = NULL;
            head2 = p;
        }
        return;
    }
    
    void display()
    {
        struct node *ptr = head;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->next;
        }
        printf("NULL\\n");
        return;
    }
    
    void display2()
    {
        printf("\\nLinked List representation of doubly 
        Linked List : \\n");
        struct node *ptr = head2;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->prev;
        }
        printf("NULL\\n");
        return;
    }
    
    int menu()
    {
        int choice;
    
        printf(" 1. To Create Doubly Linked list \\n 
        2. To Display Doubly Linked List\\n 3. To Exit\\n");
        printf("\\n Enter your Choice : ");
        scanf("%d",&choice);
        return choice;
    }
    
    int main()
    {
        head = NULL;
        head2 = NULL;
        while(1)
        {
            int choice = menu();
            switch(choice)
            {
            case 1:
                create();
                break;
            case 2:
                display();
                display2();
                break;
            case 3:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_15.addEventListener('click', () => {
    next = '16';
    var data = DS_15.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void create();
    void display();
    void searching();
    
    struct node
    {
        int item;
        struct node *next;
        struct node *prev;
    };
    
    struct node *head;
    struct node *head2;
    
    int menu()
    {
        int choice;
    
        printf(" 1. To Create Doubly Linked list \\n 
        2. To Display Data \\n 3. To Search Data \\n");
        printf(" 4. To Exit\\n Enter your Choice : ");
        scanf("%d",&choice);
        return choice;
    }
    
    int main()
    {
        int choice;
        head = NULL;
        head2 = NULL;
        while(1)
        {
            choice = menu();
            switch(choice)
            {
            case 1:
              create();
              break;
            case 2:
              display();
              printf("\\n");
              break;
            case 3:
              searching();
              printf("\\n");
              break;
            case 4:
              exit(0);
            }
        }
    }
    void create()
    {
        struct node *p;
        p = (struct node*) malloc (sizeof(struct node));
        struct node *ptr = head;
        printf(" Enter the Element to be inserted : ");
        scanf("%d",&p->item);
        if(head == NULL){
            head = p;
            head2 = p;
            p->next = NULL;
            p->prev = NULL;
        }
        else{
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next = p;
            p->prev = ptr;
            p->next = NULL;
            head2 = p;
        }
        return;
    }
    
    void display()
    {
        struct node *ptr = head;
        if(ptr == NULL){
            printf(" There is no data to show.\\n");
            return;
        }
        while(ptr != NULL){
            printf(" %d -->",ptr->item);
            ptr = ptr->next;
        }
        printf("NULL\\n");
        return;
    }
    
    void searching()
    {
        struct node *ptr = head;
        int pos=1,srch;
        printf(" Enter the Number for Search : ");
        scanf("%d",&srch);
        while(ptr->item != srch && ptr->next != NULL){
            ptr = ptr->next;
            pos++;
        }
        if(ptr->item == srch){
            printf(" Number %d found at %d position in 
            Linked List.",srch,pos);
        }
        else{
            printf(" Number %d not found.",srch);
        }
        return;
    }
    
    `;
});

DS_16.addEventListener('click', () => {
    next = '17';
    var data = DS_16.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void display(int len,int* arr);
    void bubble(int len,int* arr);
    
    int main()
    {
        int len,i = 0;
        printf("Enter the Length of Array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the Elements of Array : \\n");
        while(i != len){
            printf("Element %d : ",i+1);
            scanf("%d",&arr[i]);
            i++;
        }
        bubble(len,arr);
        display(len,arr);
        return 0;
    }
    
    void display(int len,int arr[])
    {
        int i;
        printf("Shorted Array : ");
        for(i = 0;i < len;i++){
            printf("%d ",arr[i]);
        }
        printf("\\n");
    }
    
    //Code for Bubble sort.
    void bubble(int len,int arr[])
    {
        int i,j;
        for(i = 0;i < len-1;i++){
            for(j = 0;j < (len-1-i);j++){
                if(arr[j] > arr[j+1]){
                    arr[j] = arr[j] + arr[j+1];
                    arr[j+1] = arr[j] - arr[j+1];
                    arr[j] = arr[j] - arr[j+1];
                }
            }
        }
    }
    
    `;
});

DS_17.addEventListener('click', () => {
    next = '18';
    var data = DS_17.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void display(int len,int arr[]);
    void insertion(int len,int arr[]);
    
    int main()
    {
        int len,i,j,j1,temp;
        printf("Enter the Length of Array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the Elements of Array : \\n");
        for(i = 0;i < len;i++){
            printf("Element %d : ",i+1);
            printf("Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        display(len,arr);
        return 0;
    }
    
    void display(int len,int arr[])
    {
        int i;
        printf("Shorted Array : ");
        for(i = 0;i < len;i++){
            printf("%d ",arr[i]);
        }
        printf("\\n");
    }
    
    `;
});

DS_18.addEventListener('click', () => {
    next = '19';
    var data = DS_18.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void SelectionSort(int arr[],int len);
    void display(int arr[],int len);
    
    int main()
    {
        int len,i;
        printf("Enter the Length of Array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the Elements of Array : \\n");
        for(i = 0;i < len;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        SelectionSort(arr,len);
        display(arr,len);
        return 0;
    }
    
    void SelectionSort(int arr[],int len)
    {
        int i,low,j,temp;
        for(i = 0;i < len-1;i++){
            low = i;
            for(j = i+1;j < len;j++){
                if(arr[j] < arr[low]){
                    low = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[low];
            arr[low] = temp;
        }
    }
    
    void display(int arr[],int len)
    {
        int i;
        printf("Elements of Array are : ");
        for(i = 0;i < len;i++){
            printf("%d ",arr[i]);
        }
    }
    
    `;
});

DS_19.addEventListener('click', () => {
    next = '20';
    var data = DS_19.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void display(int len,int arr[]);
    void Mergesort(int low,int len,int arr[]);
    void DivnCon(int arr[],int low,int len,int mid);
    
    int main()
    {
        int len,i = 0;
        printf("Enter the Length of Array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the Elements of Array : \\n");
        while(i < len){
            printf("Element %d : ",i+1);
            scanf("%d",&arr[i]);
            i++;
        }
        Mergesort(0,len-1,arr);
        display(len,arr);
        return 0;
    }
    
    void display(int len,int arr[])
    {
        int i;
        printf("Shorted Array : ");
        for(i = 0;i < len;i++){
            printf("%d ",arr[i]);
        }
        printf("\\n");
    }
    
    //Code for Merge sort.
    void Mergesort(int low,int len,int arr[])
    {
        int mid = (low+len)/2;
        if(low < len){
            Mergesort(low,mid,arr);
            Mergesort(mid+1,len,arr);
            DivnCon(arr,low,len,mid);
        }
    }
    
    void DivnCon(int arr[],int low,int len,int mid)
    {
        int arr1[100];
        int i=low,j=mid+1,k=low;
        while(i <= mid && j <= len){
            if(arr[i] <= arr[j]){
                arr1[k] = arr[i];
                i++;
            }
            else{
                arr1[k] = arr[j];
                j++;
            }
            k++;
        }
        while(i <= mid){
            arr1[k] = arr[i];
            i++;
            k++;
        }
        while(j <= len){
            arr1[k] = arr[j];
            j++;
            k++;
        }
        for(i = low;i <= len;i++){
            arr[i] = arr1[i];
        }
    }
    
    `;
});

DS_20.addEventListener('click', () => {
    next = '21';
    var data = DS_20.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void display(int len,int arr[]);
    void Quicksort(int low,int len,int arr[]);
    int DivnCon(int arr[],int low,int len);
    
    int main()
    {
        int len,i = 0;
        printf("Enter the Length of Array : ");
        scanf("%d",&len);
        int arr[len];
        printf("Enter the Elements of Array : \\n");
        while(i < len){
            printf("Element %d : ",i+1);
            scanf("%d",&arr[i]);
            i++;
        }
        Quicksort(0,len-1,arr);
        display(len,arr);
        return 0;
    }
    
    void display(int len,int arr[])
    {
        int i;
        printf("Shorted Array : ");
        for(i = 0;i < len;i++){
            printf("%d ",arr[i]);
        }
        printf("\\n");
    }
    
    //Code for Quick sort.
    Quicksort(int low,int len,int arr[])
    {
        int pindex;
        if(low < len){
            pindex = DivnCon(arr,low,len);
            Quicksort(low,pindex-1,arr);
            Quicksort(pindex+1,len,arr);
        }
    }
    
    DivnCon(int arr[],int low,int len)
    {
        int pivot = arr[low];
        int i = low+1;
        int j = len,temp;
        do
        {
            while(arr[i] <= pivot){
                i++;
            }
            while(arr[j] > pivot){
                j--;
            }
            if(i < j){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }while(i < j);
        temp = arr[low];
        arr[low] = arr[j];
        arr[j] = temp;
        return j;
    }
    
    `;
});

DS_21.addEventListener('click', () => {
    next = '22';
    var data = DS_21.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *left;
        struct node *right;
    };
    
    struct node *root;
    
    struct node *create(int *data)
    {
        struct node *p;
        p = (struct node *)malloc(sizeof(struct node));
        p->item = *data;
        p->left = NULL;
        p->right = NULL;
        return p;
    };
    
    void inorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        inorder(r->left);
        printf(" %d ", r->item);
        inorder(r->right);
    }
    
    void preorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        printf(" %d ", r->item);
        preorder(r->left);
        preorder(r->right);
    }
    
    void postorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        postorder(r->left);
        postorder(r->right);
        printf(" %d ", r->item);
    }
    struct node *Insert(struct node *r, int *data)
    {
        int temp = *data;
        if (r == NULL)
        {
            r = create(&temp);
            return r;
        }
        else if (temp > r->item)
        {
            r->right = Insert(r->right, &temp);
        }
        else if (temp < r->item)
        {
            r->left = Insert(r->left, &temp);
        }
    }
    int main()
    {
        root = NULL;
        int choice, item;
        while (1)
        {
            printf(" 1. To Insert data into Binary Search Tree\\n 
            2. To Print Elements in In-order");
            printf("\\n 3. To Print Elements in Pre-order\\n 
            4. To Print Elements in Post-order \\n");
            printf(" 5. To Exit\\n Enter Your Choice : ");
            scanf("%d", &choice);
            switch (choice)
            {
            case 1:
                printf(" Enter the Element To be Inserted : ");
                scanf("%d", &item);
                root = Insert(root, &item);
                break;
            case 2:
                printf(" Elements are : ");
                inorder(root);
                printf("\\n\\n");
                break;
            case 3:
                printf(" Elements are : ");
                preorder(root);
                printf("\\n\\n");
                break;
            case 4:
                printf(" Elements are : ");
                postorder(root);
                printf("\\n\\n");
                break;
            case 5:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_22.addEventListener('click', () => {
    next = '23';
    var data = DS_22.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *left;
        struct node *right;
    };
    
    struct node *root;
    
    struct node *create(int *data)
    {
        struct node *p;
        p = (struct node *)malloc(sizeof(struct node));
        p->item = *data;
        p->left = NULL;
        p->right = NULL;
        return p;
    };
    
    void inorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        inorder(r->left);
        printf(" %d ", r->item);
        inorder(r->right);
    }
    
    void preorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        printf(" %d ", r->item);
        preorder(r->left);
        preorder(r->right);
    }
    
    void postorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        postorder(r->left);
        postorder(r->right);
        printf(" %d ", r->item);
    }
    
    struct node *Insert(struct node *r, int *data)
    {
        int temp = *data;
        if (r == NULL)
        {
            r = create(&temp);
            return r;
        }
        else if (temp > r->item)
        {
            r->right = Insert(r->right, &temp);
        }
        else if (temp < r->item)
        {
            r->left = Insert(r->left, &temp);
        }
    }
    
    void searching(struct node *r, int data)
    {
        if (root == NULL)
        {
            printf(" There is no Element in BST.");
            return;
        }
        if (r == NULL)
        {
            printf(" %d Not Found :( ",data);
            return;
        }
        else if (r->item == data)
        {
            printf(" %d Found :) ",data);
        }
        else if (data > r->item)
        {
            searching(r->right, data);
        }
        else if (data < r->item)
        {
            searching(r->left, data);
            return;
        }
    }
    
    void smallest(struct node *r)
    {
        if (r == NULL)
        {
            printf(" There is no Element in BST.");
            return;
        }
        while (r->left != NULL)
        {
            r = r->left;
        }
        printf(" Smallest Element in BST is : %d", r->item);
    }
    
    void largest(struct node *r)
    {
        if (r == NULL)
        {
            printf(" There is no Element in BST.");
            return;
        }
        while (r->right != NULL)
        {
            r = r->right;
        }
        printf(" Largest Element in BST is : %d", r->item);
    }
    
    int main()
    {
        root = NULL;
        int choice, item;
        while (1)
        {
            printf(" 1. To Insert data into Binary Search Tree\\n 
            2. To Print Elements in In-order");
            printf("\\n 3. To Print Elements in Pre-order\\n 
            4. To Print Elements in Post-order \\n 
            5. To Search any Element in BST\\n");
            printf(" 6. To Find Smallest Element in BST\\n 
            7. To Find Largest Element in BST\\n");
            printf(" 8. To Exit\\n Enter Your Choice : ");
            scanf("%d", &choice);
            switch (choice)
            {
            case 1:
                printf(" Enter the Element To be Inserted : ");
                scanf("%d", &item);
                root = Insert(root, &item);
                break;
            case 2:
                printf(" Elements are : ");
                inorder(root);
                printf("\\n\\n");
                break;
            case 3:
                printf(" Elements are : ");
                preorder(root);
                printf("\\n\\n");
                break;
            case 4:
                printf(" Elements are : ");
                postorder(root);
                printf("\\n\\n");
                break;
            case 5:
                printf(" Enter Element for Searching : ");
                int elem;
                scanf("%d", &elem);
                searching(root, elem);
                printf("\\n\\n");
                break;
            case 6:
                smallest(root);
                printf("\\n\\n");
                break;
            case 7:
                largest(root);
                printf("\\n\\n");
                break;
            case 8:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

DS_23.addEventListener('click', () => {
    next = '1';
    var data = DS_23.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    struct node
    {
        int item;
        struct node *left;
        struct node *right;
    };
    
    struct node *root;
    
    struct node *create(int *data)
    {
        struct node *p;
        p = (struct node *)malloc(sizeof(struct node));
        p->item = *data;
        p->left = NULL;
        p->right = NULL;
        return p;
    };
    void inorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        inorder(r->left);
        printf(" %d ", r->item);
        inorder(r->right);
    }
    void preorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        printf(" %d ", r->item);
        preorder(r->left);
        preorder(r->right);
    }
    void postorder(struct node *r)
    {
        if (r == NULL)
        {
            return;
        }
        postorder(r->left);
        postorder(r->right);
        printf(" %d ", r->item);
    }
    struct node *Insert(struct node *r, int *data)
    {
        int temp = *data;
        if (r == NULL)
        {
            r = create(&temp);
            return r;
        }
        else if (temp > r->item)
        {
            r->right = Insert(r->right, &temp);
        }
        else if (temp < r->item)
        {
            r->left = Insert(r->left, &temp);
        }
    }
    
    void smallest(struct node *r)
    {
        if (r == NULL)
        {
            printf(" There is no Element in BST.");
            return;
        }
        while (r->left != NULL)
        {
            r = r->left;
        }
        printf(" Smallest Element in BST is : %d", r->item);
    }
    
    void largest(struct node *r)
    {
        if (r == NULL)
        {
            printf(" There is no Element in BST.");
            return;
        }
        while (r->right != NULL)
        {
            r = r->right;
        }
        printf(" Largest Element in BST is : %d", r->item);
    }
    int main()
    {
        root = NULL;
        int choice, item;
        while (1)
        {
            printf(" 1. To Insert data into Binary Search Tree\\n 
            2. To Print Elements in In-order");
            printf("\\n 
            3. To Print Elements in Pre-order\\n 
            4. To Print Elements in Post-order \\n ");
            printf(" 5. To Find Smallest Element in BST\\n 
            6. To Find Largest Element in BST\\n");
            printf(" 7. To Exit\\n Enter Your Choice : ");
            scanf("%d", &choice);
            switch (choice)
            {
            case 1:
                printf(" Enter the Element To be Inserted : ");
                scanf("%d", &item);
                root = Insert(root, &item);
                break;
            case 2:
                printf(" Elements are : ");
                inorder(root);
                printf("\\n\\n");
                break;
            case 3:
                printf(" Elements are : ");
                preorder(root);
                printf("\\n\\n");
                break;
            case 4:
                printf(" Elements are : ");
                postorder(root);
                printf("\\n\\n");
                break;
            case 5:
                smallest(root);
                printf("\\n\\n");
                break;
            case 6:
                largest(root);
                printf("\\n\\n");
                break;
            case 7:
                exit(0);
            }
        }
        return 0;
    }
    
    `;
});

var previous = document.getElementsByClassName('previous');

previous[0].addEventListener('click', () => {
    if(next == '2'){
        next = '25';
    }
    else if(next == '1'){
        next = '24';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('DS-' + next).click();
});

previous[1].addEventListener('click', () => {
    if(next == '2'){
        next = '25';
    }
    else if(next == '1'){
        next = '24';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('DS-' + next).click();
});

function code_change()
{
   document.getElementById('DS-' + next).click();
   console.log("hello");
}

var next = document.getElementsByClassName('next');

next[0].addEventListener('click', () => {
    code_change();
});

next[1].addEventListener('click', () => {
    code_change();
});

var home = document.getElementsByClassName('home');

home[0].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/DS-Practice/";
});

home[1].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/DS-Practice/";
});