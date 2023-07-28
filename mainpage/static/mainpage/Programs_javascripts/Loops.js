var next = '0';
var My_code = document.getElementById('My-code');
var page = document.getElementsByClassName('questions');
var codingKiya2 = document.getElementsByClassName('codingKiya2');
var pre = document.getElementsByTagName('pre');
var sol = document.getElementById('solution');
var Loops_1 = document.getElementById('Loops-1');
var Loops_2 = document.getElementById('Loops-2');
var Loops_3 = document.getElementById('Loops-3');
var Loops_4 = document.getElementById('Loops-4');
var Loops_5 = document.getElementById('Loops-5');
var Loops_6 = document.getElementById('Loops-6');
var Loops_7 = document.getElementById('Loops-7');
var Loops_8 = document.getElementById('Loops-8');
var Loops_9 = document.getElementById('Loops-9');
var Loops_10 = document.getElementById('Loops-10');
var Loops_11 = document.getElementById('Loops-11');
var Loops_12 = document.getElementById('Loops-12');
var Loops_13 = document.getElementById('Loops-13');
var Loops_14 = document.getElementById('Loops-14');
var Loops_15 = document.getElementById('Loops-15');
var Loops_16 = document.getElementById('Loops-16');
var Loops_17 = document.getElementById('Loops-17');
var Loops_18 = document.getElementById('Loops-18');
var Loops_19 = document.getElementById('Loops-19');
var Loops_20 = document.getElementById('Loops-20');
var Loops_21 = document.getElementById('Loops-21');
var Loops_22 = document.getElementById('Loops-22');
var Loops_23 = document.getElementById('Loops-23');
var Loops_24 = document.getElementById('Loops-24');
var Loops_25 = document.getElementById('Loops-25');
var Loops_26 = document.getElementById('Loops-26');
var Loops_27 = document.getElementById('Loops-27');
var Loops_28 = document.getElementById('Loops-28');
var Loops_29 = document.getElementById('Loops-29');
var Loops_30 = document.getElementById('Loops-30');
var Loops_31 = document.getElementById('Loops-31');
var Loops_32 = document.getElementById('Loops-32');
var Loops_33 = document.getElementById('Loops-33');
var Loops_34 = document.getElementById('Loops-34');
var Loops_35 = document.getElementById('Loops-35');
var Loops_36 = document.getElementById('Loops-36');
var Loops_37 = document.getElementById('Loops-37');
var Loops_38 = document.getElementById('Loops-38');
var Loops_39 = document.getElementById('Loops-39');
var Loops_40 = document.getElementById('Loops-40');
var Loops_41 = document.getElementById('Loops-41');
var Loops_42 = document.getElementById('Loops-42');
var Loops_43 = document.getElementById('Loops-43');
var Loops_44 = document.getElementById('Loops-44');
var Loops_45 = document.getElementById('Loops-45');
var Loops_46 = document.getElementById('Loops-46');
var Loops_47 = document.getElementById('Loops-47');
var Loops_48 = document.getElementById('Loops-48');
var Loops_49 = document.getElementById('Loops-49');
var Loops_50 = document.getElementById('Loops-50');
var Loops_51 = document.getElementById('Loops-51');

pre[1].style.display = 'none';

Loops_1.addEventListener('click', () => {
    var data = Loops_1.innerHTML;
    page[0].style.display = 'none';
    next = '2';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, i = 1;
        printf("Enter the Range for Natural 
        Number from 1 to : ");
        scanf("%d", &num);
        printf("Natural Numbers are : ");
        while (i <= num)
        {
            printf("%d ", i);
            i++;
        }
        return 0;
    }

    `;
});

Loops_2.addEventListener('click', () => {
    next = '3';
    var data = Loops_2.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter the Range for Natural 
        Number from to 1 : ");
        scanf("%d", &num);
        printf("Natural Numbers are : ");
        while (num >= 1)
        {
            printf("%d ", num);
            num--;
        }
        return 0;
    }

    `;
});

Loops_3.addEventListener('click', () => {
    next = '4';
    var data = Loops_3.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        char ch = 'a';
        printf("Alphabet from a - z : ");
        while (ch <= 'z')
        {
            printf("%c ", ch);
            ch++;
        }
        return 0;
    } 
    
    `;
});

Loops_4.addEventListener('click', () => {
    next = '5';
    var data = Loops_4.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i = 0;
        printf("\\nTotal even Number from 0 - 100 : 
        51\\nNumbers Are : ");
        while (i <= 100)
        {
            if (i % 2 == 0)
            {
                printf("%d ", i);
                i += 2;
            }
            else{i++;}
        }
        return 0;
    }
     
    `;
});

Loops_5.addEventListener('click', () => {
    next = '6';
    var data = Loops_5.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i = 0;
        printf("\\nTotal even Number from 0 - 100 : 
        50\\nNumbers Are : ");
        while (i <= 100)
        {
            if (i % 2 == 1)
            {
                printf("%d ", i);
                i += 2;
            }
            else{i++;}
        }
        return 0;
    }
    
    `;
});

Loops_6.addEventListener('click', () => {
    next = '7';
    var data = Loops_6.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, i = 1, sum = 0;
        printf("Enter the Range for Natural 
        Number from 1 to : ");
        scanf("%d", &num);
        while (i <= num)
        {
            sum += i;
            i++;
        }
        printf("The sum of natural number 
        from 1 - %d : %d", num, sum);
        return 0;
    }
       
    `;
});

Loops_7.addEventListener('click', () => {
    next = '8';
    var data = Loops_7.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, i, sum = 0;
        printf("Enter the Range for Even 
        Number from 1 to : ");
        scanf("%d", &num);
        for(i=0;i <= num;i+=2){
            sum += 2;
        }
        printf("The sum of Even number 
        from 1 - %d : %d", num, sum);
        return 0;
    }
     
    `;
});

Loops_8.addEventListener('click', () => {
    next = '9';
    var data = Loops_8.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, i, sum = 0;
        printf("Enter the Range for Odd 
        Number from 1 to : ");
        scanf("%d", &num);
        for(i=1;i <= num;i+=2){
            sum += 2;
        }
        printf("The sum of Odd number 
        from 1 - %d : %d", num, sum);
        return 0;
    }
       
    `;
});

Loops_9.addEventListener('click', () => {
    next = '10';
    var data = Loops_9.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, i = 1;
        printf("Enter a number for Multiplication Table : ");
        scanf("%d", &num);
        printf("Multiplication Table of %d :\\n", num);
        while (i <= 10)
        {
            printf("%d X %d = %d\\n", num, i, (num * i));
            i++;
        }
        return 0;
    }
    
    `;
});

Loops_10.addEventListener('click', () => {
    next = '11';
    var data = Loops_10.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        long long int num, count = 0;
        printf("Enter a Number : ");
        scanf("%lld", &num);
        while (num != 0)
        {
            num = num / 10;
            count++;
        }
        printf("The number contain %d digit.", count);
        return 0;
    }    
       
    `;
});

Loops_11.addEventListener('click', () => {
    next = '12';
    var data = Loops_11.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter a Number : ");
        scanf("%d", &num);
        int l_digit = num % 10;
        while (num >= 10)
        {
            num = num / 10;
        }
        printf("The first Digit of Number is : %d\\n", num);
        printf("The Last Digit of Number is : %d", l_digit);
        return 0;
    }
      
    `;
});

Loops_12.addEventListener('click', () => {
    next = '51';
    var data = Loops_12.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        long int num,rev;
        int count=0,first,last;
        printf("Enter the Number : ");
        scanf("%d",&num);
        rev = num;
        last = num % 10;
        printf("After Swapping First and Last number 
        of %d the Number is : ",num);
        while(num > 0)
        {
            first= num % 10;
            num /= 10;
            count++;
        }
        num = first;
        while(count > 1)
        {
            first *= 10;
            last *= 10;
            count--;
        }
        rev = rev - first;
        last = last + ((rev/10) * 10 + num);
        printf("%d.",last);
        return 0;
    }
    
    `;
});

Loops_13.addEventListener('click', () => {
    next = '14';
    var data = Loops_13.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, sum = 0;
        printf("Enter a Number : ");
        scanf("%d", &num);
        while (num != 0)
        {
            sum += num % 10;
            num /= 10;
        }
        printf("The sum of the digits in 
        number is : %d", sum);
        return 0;
    }
    
    `;
});

Loops_14.addEventListener('click', () => {
    next = '15';
    var data = Loops_14.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, product = 1;
        printf("Enter a Number : ");
        scanf("%d", &num);
        while (num != 0)
        {
            product *= num % 10;
            num /= 10;
        }
        printf("The product of digits in 
        number is : %d", product);
        return 0;
    }
    
    `;
});

Loops_51.addEventListener('click', () => {
    next = '13';
    var data = Loops_51.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter a Number : ");
        scanf("%d", &num);
        printf("The sum of First and last digit of 
        number %d is : ",num);
        int l_digit = num % 10;
        while (num >= 10)
        {
            num = num / 10;
        }
        printf("%d", (num + l_digit));
        return 0;
    }
    
    `;
});

Loops_15.addEventListener('click', () => {
    next = '16';
    var data = Loops_15.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, rev = 0, rem;
        printf("Enter a Number : ");
        scanf("%d", &num);
        while (num > 0)
        {
            rem = num % 10;
            rev = (rev * 10) + rem;
            num /= 10;
        }
        printf("The Reverse of number is : %d ", rev);
        return 0;
    }
    
    `;
});

Loops_16.addEventListener('click', () => {
    next = '17';
    var data = Loops_16.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num, rev = 0, rem;
        printf("Enter a Number : ");
        scanf("%d", &num);
        int num2 = num;
        while (num > 0)
        {
            rem = num % 10;
            rev = (rev * 10) + rem;
            num /= 10;
        }
        if (num2 == rev)
        {
            printf("The Number %d is Palindrome.",num2);
        }
        else
        {
            printf("The Number %d is not 
            Palindrome.",num2);
        }
        return 0;
    }
    
    `;
});

Loops_17.addEventListener('click', () => {
    next = '18';
    var data = Loops_17.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        long long int num, num1, num2;
        int count = 0, rem = 0, i,count1=1,sum=0;
        printf("Enter any Number : ");
        scanf("%d", &num);
        num1 = num;
        num2 = num;
        i = num1 % 10;
        while(num1 > 0 && sum < count1){
            count = 0;
            count1 = 0;
            i = num1 % 10;
            while (num > 0)
            {
                rem = num % 10;
                count1++;
                if (i == rem)
                {
                    count++;
                }
                num /= 10;
            }
            sum += count;
            num = num2;
            printf("\\nThe frequency of %d in 
            Number is : %d", i, count);
            num1 /= 10;
        }
        return 0;
    }
    
    `;
});

Loops_18.addEventListener('click', () => {
    next = '19';
    var data = Loops_18.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void in_words(int n)
    {
        switch(n)
        {
        case 0:
            printf("Zero ");
            break;
        case 1:
            printf("One ");
            break;
        case 2:
            printf("Two ");
            break;
        case 3:
            printf("Three ");
            break;
        case 4:
            printf("Four ");
            break;
        case 5:
            printf("Five ");
            break;
        case 6:
            printf("Six ");
            break;
        case 7:
            printf("Seven ");
            break;
        case 8:
            printf("Eight ");
            break;
        case 9:
            printf("Nine ");
            break;
        }
    }
    int main(){
        long int num,rev=0;
        int rem,count=0;
        printf("Enter the Number : ");
        scanf("%d",&num);
        printf("The Number in words for the 
        number %d is : ",num);
        while(num > 0){
            rem = num % 10;
            rev = rev * 10 + rem;
            num /= 10;
            count++;
        }
        while(rev > 0){
            rem = rev % 10;
            in_words(rem);
            rev /= 10;
            count--;
        }
        while(count > 0){
            in_words(0);
            count--;
        }
        }
        return 0;
    }
     
    `;
});

Loops_19.addEventListener('click', () => {
    next = '20';
    var data = Loops_19.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        unsigned int ch = 0;
        for(ch;ch < 256;ch++){
            printf("ASCII value is : %d \\n
            Character is : %c \\n\\n",ch,ch);
        }
        return 0;
    }
    
    `;
});

Loops_20.addEventListener('click', () => {
    next = '21';
    var data = Loops_20.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,pow;
        long long int res=1;
        printf("Enter the Number : ");
        scanf("%d",&num);
        printf("Enter the Power of Number : ");
        scanf("%d",&pow);
        if(pow < 0){
            printf("\\nResult : %d to the 
            power %d = 1/",num,pow);
            pow = -(pow);
        }
        else{printf("\\nResult : %d to the 
        power %d = ",num,pow);}
        for(pow;pow > 0;pow--){
        res = res * num;
        }
        printf("%lld",res);
        return 0;
    }
    
    `;
});

Loops_21.addEventListener('click', () => {
    next = '22';
    var data = Loops_21.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,i=2;
        printf("Enter the Number : ");
        scanf("%d",&num);
        printf("Factor of %d is : 1 ",num);
        while(i <= num/2){
            if(num % i == 0){
                printf(", %d ",i);
            }
            i++;
        }
        printf("\\n");
        return 0;
    }
        
    `;
});

Loops_22.addEventListener('click', () => {
    next = '23';
    var data = Loops_22.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        long long int fact = 1;
        int num;
        printf("Enter the Number : ");
        scanf("%d",&num);
        printf("Factorial of %d is : ",num);
        while(num > 0){
            fact *= num--;
        }
        printf("%d\\n",fact);
        return 0;
    }
    
    `;
});

Loops_23.addEventListener('click', () => {
    next = '24';
    var data = Loops_23.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,den,num1,a,b;
        printf("Enter the First Number : ");
        scanf("%d",&num);
        printf("Enter the Second Number : ");
        scanf("%d",&num1);
        if(num > num1){
            a = num;
            b = num1;
        }
        else {
            a = num1;
            b = num;
        }
        den = a % b;
        while(den > 0){
            a =b;
            b = den;
            den = a % b;
        }
        printf("HCF of %d and %d is %d\\n",num,num1,b);
        return 0;
    }
    
    `;
});
Loops_24.addEventListener('click', () => {
    next = '25';
    var data = Loops_24.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,den,num1,a,b;
        printf("Enter the First Number : ");
        scanf("%d",&num);
        printf("Enter the Second Number : ");
        scanf("%d",&num1);
        if(num > num1){
            a = num;
            b = num1;
        }
        else {
            a = num1;
            b = num;
        }
        den = a % b;
        while(den > 0){
            a =b;
            b = den;
            den = a % b;
        }
        printf("LCM of %d and %d is %d\\n"
        ,num,num1,(num1*num)/b);
        return 0;
    }
      
    `;
});
Loops_25.addEventListener('click', () => {
    next = '26';
    var data = Loops_25.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include< math.h >

    int main(){
        int num,i,flag=0;
        printf("Enter the Number : ");
        scanf("%d",&num);
        if(num == 1){
            printf("The Number %d is not a 
            Prime Number.",num);
            return 0;
        }
        for(i = 2;i <= sqrt(num);i++){
            if(num % i == 0){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            printf("The Number %d is a 
            Prime Number.",num);
        }
        else{
            printf("The Number %d is not a 
            Prime Number.",num);
        }
        return 0;
    }
     
    `;
});
Loops_26.addEventListener('click', () => {
    next = '27';
    var data = Loops_26.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<math.h>

    int main(){
        int num,num1,i,flag=0;
        printf("Enter the Range to find Prime 
        Numbers between \\n");
        printf("Enter the Starting Number : ");
        scanf("%d",&num);
        printf("Enter the Ending Number : ");
        scanf("%d",&num1);
        if(num > num1){
            num = num + num1;
            num1 = num - num1;
            num = num - num1;
        }
        for(num;num <= num1;num++){
            flag = 0;
            if(num == 1){
                continue;
            }
            for(i = 2;i <= sqrt(num);i++){
                if(num % i == 0){
                    flag = 1;
                    break;
                }
            }
            if(flag == 0){
                printf("\\nThe Number %d is a 
                Prime Number.",num);
            }
        }
        return 0;
    }
    
    `;
});
Loops_27.addEventListener('click', () => {
    next = '28';
    var data = Loops_27.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<math.h>

    int main(){
        int num,num1,i,flag=0,sum=0;
        printf("Enter the Range to find 
        Prime Numbers between \\n");
        printf("Enter the Starting Number : ");
        scanf("%d",&num);
        printf("Enter the Ending Number : ");
        scanf("%d",&num1);
        if(num > num1){
            num = num + num1;
            num1 = num - num1;
            num = num - num1;
        }
        printf("The Sum of All Prime Numbers 
        Between %d and %d is : ",num,num1);
        for(num;num <= num1;num++){
            flag = 0;
            if(num == 1){
                continue;
            }
            for(i = 2;i <= sqrt(num);i++){
                if(num % i == 0){
                    flag = 1;
                    break;
                }
            }
            if(flag == 0){
                sum += num;
            }
        }
        printf("%d.\\n",sum);
        return 0;
    }
    
    `;
});
Loops_28.addEventListener('click', () => {
    next = '29';
    var data = Loops_28.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        short m = 0;
        int num,i;
        printf("Enter the Number : ");
        scanf("%d",&num);
        printf("The Prime Factorization of %d is : ",num);
        for(i = 2;i <= num/2;i++){
            if(num % i == 0){
                if(m++ == 0){
                    printf("%d",i);
                }
                else{
                    printf(" , %d",i);
                }
            }
        }
        if(m == 0){
            printf("%d",num);
        }
        return 0;
    }
    
    `;
});
Loops_29.addEventListener('click', () => {
    next = '30';
    var data = Loops_29.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,rem,temp,sum=0;
        printf("Enter the Number : ");
        scanf("%d",&num);
        temp = num;
        while(temp > 0){
            rem = temp % 10;
            sum += rem * rem * rem;
            temp /= 10;
        }
        if(sum == num){
            printf("The Number %d is an 
            ArmStrong Number.",num);
        }
        else{
            printf("The Number %d is not an 
            ArmStrong Number.",num);
        }
        return 0;
    }
    
    `;
});
Loops_30.addEventListener('click', () => {
    next = '31';
    var data = Loops_30.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,num1,rem,temp,sum=0;
        printf("Enter the Range to find 
        ArmStrong Numbers between \\n");
        printf("Enter the Starting Number : ");
        scanf("%d",&num);
        printf("Enter the Ending Number : ");
        scanf("%d",&num1);
        if(num > num1){
            num = num + num1;
            num1 = num - num1;
            num = num - num1;
        }
        for(num;num <= num1;num++){
            temp = num;
            sum = 0;
            while(temp > 0){
                rem = temp % 10;
                sum += rem * rem * rem;
                temp /= 10;
            }
            if(sum == num){
                printf("\\nThe Number %d is an 
                ArmStrong Number.",num);
            }
        }
        return 0;
    }
    
    `;
});
Loops_31.addEventListener('click', () => {
    next = '32';
    var data = Loops_31.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,rem,sum=0;
        printf("Enter the Number : ");
        scanf("%d",&num);
        for(rem = 1;rem <= num/2;rem++){
            if(num % rem == 0){
                sum += rem;
            }
        }
        if(sum == num){
            printf("The Number %d is a 
            Perfect Number.",num);
        }
        else{
            printf("The Number %d is not a 
            Perfect Number.",num);
        }
        return 0;
    }
    
    `;
});
Loops_32.addEventListener('click', () => {
    next = '33';
    var data = Loops_32.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,num1,rem,sum=0;
        printf("Enter the Range to find 
        Perfect Numbers between \\n");
        printf("Enter the Starting Number : ");
        scanf("%d",&num);
        printf("Enter the Ending Number : ");
        scanf("%d",&num1);
        if(num > num1){
            num = num + num1;
            num1 = num - num1;
            num = num - num1;
        }
        for(num;num <= num1;num++){
            sum = 0;
            for(rem = 1;rem <= num/2;rem++){
                if(num % rem == 0){
                    sum += rem;
                }
            }
            if(sum == num){
                printf("\\nThe Number %d is a 
                Perfect number.",num);
            }
        }
        return 0;
    }
    
    `;
});
Loops_33.addEventListener('click', () => {
    next = '34';
    var data = Loops_33.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,rem,temp,fact,sum=0;
        printf("Enter the Number : ");
        scanf("%d",&num);
        temp = num;
        while(temp > 0){
            rem = temp % 10;
            fact = 1;
            while(rem > 0){
                fact *= rem--;
            }
            sum += fact;
            temp /= 10;
        }
        if(sum == num){
            printf("The Number %d is a 
            Strong Number.",num);
        }
        else{
            printf("The Number %d is not a 
            Strong Number.",num);
        }
        return 0;
    }
    
    `;
});
Loops_34.addEventListener('click', () => {
    next = '35';
    var data = Loops_34.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(){
        int num,num1,rem,temp,fact,sum=0;
        printf("Enter the Range to find 
        Strong Numbers between \\n");
        printf("Enter the Starting Number : ");
        scanf("%d",&num);
        printf("Enter the Ending Number : ");
        scanf("%d",&num1);
        if(num > num1){
            num = num + num1;
            num1 = num - num1;
            num = num - num1;
        }
        for(num;num <= num1;num++){
            sum = 0;
            temp = num;
            while(temp > 0){
                rem = temp % 10;
                fact = 1;
                while(rem > 0){
                    fact *= rem--;
                }
                sum += fact;
                temp /= 10;
            }
            if(sum == num){
                printf("\\nThe Number %d is a 
                Strong Number.",num);
            }
        }
        return 0;
    }
    
    `;
});
Loops_35.addEventListener('click', () => {
    next = '36';
    var data = Loops_35.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<math.h>

    int main(){
        int num=1,num1,sum=0,pre=0;
        printf("Enter the Number of Turns to 
        print Fibonacci Series : ");
        scanf("%d",&num1);
        printf(" %d ",pre);
        for(int i=1;i < num1;i++){
            pre = num;
            num = sum;
            sum = pre + num;
            printf("%d ",sum);
        }
        return 0;
    }
    
    `;
});
Loops_36.addEventListener('click', () => {
    next = '37';
    var data = Loops_36.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<string.h>

    int main()
    {
        char bin[32];
        printf("Enter the Binary Number : ");
        scanf("%s",bin);
        printf("\\nOne's Compliment of %s is : ",bin);
        for(int i = 0;i < strlen(bin);i++){
            if(bin[i] == '0'){
                bin[i] = '1';
            }
            else if(bin[i] == '1'){
                bin[i] = '0';
            }
            else if(bin[i] != '0' || bin[i] != '1'){
                printf("Not a Binary Number :( ");
                return -1;
            }
        }
        printf("%s\\n",bin);
        return 0;
    }
    
    `;
});
Loops_37.addEventListener('click', () => {
    next = '38';
    var data = Loops_37.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<string.h>

    int main()
    {
        char bin[32];
        int i;
        printf("Enter the Binary Number : ");
        scanf("%s",bin);
        printf("\\nTwo's Compliment of %s is : ",bin);
        for(i = 0;i < strlen(bin);i++){
            if(bin[i] == '0'){
                bin[i] = '1';
            }
            else if(bin[i] == '1'){
                bin[i] = '0';
            }
            else if(bin[i] != '0' || bin[i] != '1'){
                printf("Not a Binary Number :( ");
                return -1;
            }
        }
        i = strlen(bin)-1;
        while(bin[i] != '0'){
            bin[i] = '0';
            i--;
        }
        bin[i] = '1';
        printf("%s\\n",bin);
        return 0;
    }
    
    `;
});
Loops_38.addEventListener('click', () => {
    next = '39';
    var data = Loops_38.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});
// #include < stdio.h >
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any Binary Number : ");
//     scanf("%s",a);
//     e = a[0] - '0';
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 1){
//             d = 1;
//         }
//         e = e * 2 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
// 	return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 8;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         dec /= 8;
//     }
//     printf("\\n\\nBinary Number is : %s",a);
//     printf("\\nHexaDecimal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }

Loops_39.addEventListener('click', () => {
    next = '40';
    var data = Loops_39.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// int main(){
//     int e , b , c ,d;
//     char a[32];
//     d = 0;
//     printf("Enter any Binary Number : ");
//     scanf("%s",a);
//     if(a[0] >= '0' && a[0] <= '1'){
//         e = a[0] - '0';
//     }
//     else {printf(" Not valid input :( !");return -1;}
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 1){
//             d = 1;
// 	    break;
//         }
//         e = e * 2 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//     }
//     else{
//     printf("\\n\\nBinary Number is : %s",a);
//     printf("\\nDecimal Number is : %d\\n",e);
//     }
//     return 0;
// }

Loops_40.addEventListener('click', () => {
    next = '41';
    var data = Loops_40.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any Binary Number : ");
//     scanf("%s",a);
//     e = a[0] - '0';
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 1){
//             d = 1;
//         }
//         e = e * 2 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
// 	return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 16;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         else if(rem == 8){push('8');}
//         else if(rem == 9){push('9');}
//         else if(rem == 10){push('A');}
//         else if(rem == 11){push('B');}
//         else if(rem == 12){push('C');}
//         else if(rem == 13){push('D');}
//         else if(rem == 14){push('E');}
//         else if(rem == 15){push('F');}
//         dec /= 16;
//     }
//     printf("\\n\\nBinary Number is : %s",a);
//     printf("\\nHexaDecimal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }


Loops_41.addEventListener('click', () => {
    next = '42';
    var data = Loops_41.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any Octal Number : ");
//     scanf("%s",a);
//     e = a[0] - '0';
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 7){
//             d = 1;
//         }
//         e = e * 8 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//         return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 2;
//         if(rem == 0){push('0');}
//         else{push('1');}
//         dec /= 2;
//     }
//     printf("\\n\\nOctal Number is : %s",a);
//     printf("\\nHexaDecimal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }



Loops_42.addEventListener('click', () => {
    next = '43';
    var data = Loops_42.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// int main(){
//     int e , b , c ,d;
//     char a[32];
//     d = 0;
//     printf("Enter any Octal Number : ");
//     scanf("%s",a);
//     if(a[0] >= '0' && a[0] <= '7'){
//         e = a[0] - '0';
//     }
//     else {printf(" Not valid input :( !");return -1;}
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 7){
//             d = 1;
// 	    break;
//         }
//         e = e * 8 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//     }
//     else{
//     printf("\\n\\nOctal Number is : %s",a);
//     printf("\\nDecimal Number is : %d\\n",e);
//     }
//     return 0;
// }

Loops_43.addEventListener('click', () => {
    next = '44';
    var data = Loops_43.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any Octal Number : ");
//     scanf("%s",a);
//     e = a[0] - '0';
//     for (b = 1; b < strlen(a); b++){
//         c = a[b] - '0';
//         if(a[b] - '0' < 0 || a[b] - '0' > 7){
//             d = 1;
//         }
//         e = e * 8 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//         return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 16;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         else if(rem == 8){push('8');}
//         else if(rem == 9){push('9');}
//         else if(rem == 10){push('A');}
//         else if(rem == 11){push('B');}
//         else if(rem == 12){push('C');}
//         else if(rem == 13){push('D');}
//         else if(rem == 14){push('E');}
//         else if(rem == 15){push('F');}
//         dec /= 16;
//     }
//     printf("\\n\\nOctal Number is : %s",a);
//     printf("\\nHexaDecimal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }


Loops_44.addEventListener('click', () => {
    next = '45';
    var data = Loops_44.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c;
//     printf("Enter a Decimal Number : ");
//     scanf("%d",&dec);
//     c = dec;
//     while(dec > 0){
//         rem = dec % 2;
//         if(rem == 0){push('0');}
//         else{push('1');}
//         dec /= 2;
//     }
//     printf("\\n\\nDecimal Number is : %d",c);
//     printf("\\nBinary Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }


Loops_45.addEventListener('click', () => {
    next = '46';
    var data = Loops_45.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c;
//     printf("Enter a Decimal Number : ");
//     scanf("%d",&dec);
//     c = dec;
//     while(dec > 0){
//         rem = dec % 8;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         dec /= 8;
//     }
//     printf("\\n\\nDecimal Number is : %d",c);
//     printf("\\nOctal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }


Loops_46.addEventListener('click', () => {
    next = '47';
    var data = Loops_46.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c;
//     printf("Enter a Decimal Number : ");
//     scanf("%d",&dec);
//     c = dec;
//     while(dec > 0){
//         rem = dec % 16;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         else if(rem == 8){push('8');}
//         else if(rem == 9){push('9');}
//         else if(rem == 10){push('A');}
//         else if(rem == 11){push('B');}
//         else if(rem == 12){push('C');}
//         else if(rem == 13){push('D');}
//         else if(rem == 14){push('E');}
//         else if(rem == 15){push('F');}
//         dec /= 16;
//     }
//     printf("\\n\\nDecimal Number is : %d",c);
//     printf("\\nHexaDecimal Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }

Loops_47.addEventListener('click', () => {
    next = '48';
    var data = Loops_47.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any HexaDecimal Number : ");
//     scanf("%s",a);
//     if(a[0] == 'a' || a[0] == 'A'){
//         e = 10;
//     }
//     else if(a[0] == 'b' || a[0] == 'B'){
//         e = 11;
//     }
//     else if(a[0] == 'c' || a[0] == 'C'){
//         e = 12;
//     }
//     else if(a[0] == 'd' || a[0] == 'D'){
//         e = 13;
//     }
//     else if(a[0] == 'e' || a[0] == 'E'){
//         e = 14;
//     }
//     else if(a[0] == 'f' || a[0] == 'F'){
//         e = 15;
//     }
//     else if(a[0] >= '0' && a[0] <= '9'){
//         e = a[0] - '0';
//     }
//     else {printf(" Not valid input :( !");return -1;}
//     for (b = 1; b < strlen(a); b++){
//         if(a[b] == 'a' || a[b] == 'A'){
//             c = 10;
//         }
//         else if(a[b] == 'b' || a[b] == 'B'){
//             c = 11;
//         }
//         else if(a[b] == 'c' || a[b] == 'C'){
//             c = 12;
//         }
//         else if(a[b] == 'd' || a[b] == 'D'){
//             c = 13;
//         }
//         else if(a[b] == 'e' || a[b] == 'E'){
//             c = 14;
//         }
//         else if(a[b] == 'f' || a[b] == 'F'){
//             c = 15;
//         }
//         else if(a[0] >= '0' && a[0] <= '9'){
//             c = a[b] - '0';
//         }
//         else{
//             d = 1;
// 	    break;
//         }
//         e = e * 16 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//         return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 2;
//         if(rem == 0){push('0');}
//         else{push('1');}
//         dec /= 2;
//     }
//     printf("\\n\\nHexaDecimal Number is : %s",a);
//     printf("\\nBinary Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }

Loops_48.addEventListener('click', () => {
    next = '49';
    var data = Loops_48.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// char stack[32];
// int top = -1;

// void push(char ch)
// {
//     stack[++top] = ch;
// }

// char pop()
// {
//     return stack[top--];
// }

// int main(){
//     int dec , rem , c ,b ,e, d;
//     char a[32];
//     printf("Enter any HexaDecimal Number : ");
//     scanf("%s",a);
//     if(a[0] == 'a' || a[0] == 'A'){
//         e = 10;
//     }
//     else if(a[0] == 'b' || a[0] == 'B'){
//         e = 11;
//     }
//     else if(a[0] == 'c' || a[0] == 'C'){
//         e = 12;
//     }
//     else if(a[0] == 'd' || a[0] == 'D'){
//         e = 13;
//     }
//     else if(a[0] == 'e' || a[0] == 'E'){
//         e = 14;
//     }
//     else if(a[0] == 'f' || a[0] == 'F'){
//         e = 15;
//     }
//     else if(a[0] >= '0' && a[0] <= '9'){
//         e = a[0] - '0';
//     }
//     else {printf(" Not valid input :( !");return -1;}
//     for (b = 1; b < strlen(a); b++){
//         if(a[b] == 'a' || a[b] == 'A'){
//             c = 10;
//         }
//         else if(a[b] == 'b' || a[b] == 'B'){
//             c = 11;
//         }
//         else if(a[b] == 'c' || a[b] == 'C'){
//             c = 12;
//         }
//         else if(a[b] == 'd' || a[b] == 'D'){
//             c = 13;
//         }
//         else if(a[b] == 'e' || a[b] == 'E'){
//             c = 14;
//         }
//         else if(a[b] == 'f' || a[b] == 'F'){
//             c = 15;
//         }
//         else if(a[0] >= '0' && a[0] <= '9'){
//             c = a[b] - '0';
//         }
//         else{
//             d = 1;
// 	    break;
//         }
//         e = e * 16 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//         return -1;
//     }

//     dec = e;
//     while(dec > 0){
//         rem = dec % 8;
//         if(rem == 0){push('0');}
//         else if(rem == 1){push('1');}
//         else if(rem == 2){push('2');}
//         else if(rem == 3){push('3');}
//         else if(rem == 4){push('4');}
//         else if(rem == 5){push('5');}
//         else if(rem == 6){push('6');}
//         else if(rem == 7){push('7');}
//         dec /= 8;
//     }
//     printf("\\n\\nHexaDecimal Number is : %s",a);
//     printf("\\nBinary Number is : ");
//     while(top >= 0){
//         printf("%c",pop());
//     }
//     return 0;
// }

Loops_49.addEventListener('click', () => {
    next = '50';
    var data = Loops_49.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include < stdio.h >
// #include<stdlib.h>
// #include <string.h>

// int main(){
//     int e , b , c ,d;
//     char a[32];
//     d = 0;
//     printf("Enter any HexaDecimal Number : ");
//     scanf("%s",a);
//     if(a[0] == 'a' || a[0] == 'A'){
//         e = 10;
//     }
//     else if(a[0] == 'b' || a[0] == 'B'){
//         e = 11;
//     }
//     else if(a[0] == 'c' || a[0] == 'C'){
//         e = 12;
//     }
//     else if(a[0] == 'd' || a[0] == 'D'){
//         e = 13;
//     }
//     else if(a[0] == 'e' || a[0] == 'E'){
//         e = 14;
//     }
//     else if(a[0] == 'f' || a[0] == 'F'){
//         e = 15;
//     }
//     else if(a[0] >= '0' && a[0] <= '9'){
//         e = a[0] - '0';
//     }
//     else {printf(" Not valid input :( !");return -1;}
//     for (b = 1; b < strlen(a); b++){
//         if(a[b] == 'a' || a[b] == 'A'){
//             c = 10;
//         }
//         else if(a[b] == 'b' || a[b] == 'B'){
//             c = 11;
//         }
//         else if(a[b] == 'c' || a[b] == 'C'){
//             c = 12;
//         }
//         else if(a[b] == 'd' || a[b] == 'D'){
//             c = 13;
//         }
//         else if(a[b] == 'e' || a[b] == 'E'){
//             c = 14;
//         }
//         else if(a[b] == 'f' || a[b] == 'F'){
//             c = 15;
//         }
//         else if(a[0] >= '0' && a[0] <= '9'){
//             c = a[b] - '0';
//         }
//         else{
//             d = 1;
// 	    break;
//         }
//         e = e * 16 + c;
//     }
//     if (d == 1){
//         printf(" Not valid input :( !");
//     }
//     else{
//     printf("\\n\\nHexaDecimal Number is : %s",a);
//     printf("\\nDecimal Number is : %d\\n",e);
//     }
//     return 0;
// }

Loops_50.addEventListener('click', () => {
    next = '1';
    var data = Loops_50.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;
    codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `Please submit Code if you Have`;
});

// #include<stdio.h>

// int main()
// {
//     int i, j, k, l, rows,coef=1;

//     printf("Enter number of rows: ");
//     scanf("%d",&rows);

//     for(i=0; i<=rows-1; ++i)
//     {
//         for(k=rows;k>i;k--)
//             printf("-");

//         for(j=0;j<=i;j++)
//         {
//             if (j==0 || i==0)
//                 coef = 1;
//             else
//                 coef = coef*(i-j+1)/j;

//             printf("%d ", coef);

//         }
//         printf("\\n");
//     }
//     return 0;
// }

var previous = document.getElementsByClassName('previous');

previous[0].addEventListener('click', () => {
    if(next == '14'){
        next = '53';
    }
    else if(next == '1'){
        next = '51';
    }
    else if(next == '51'){
        next = '13';
    }
    else if(next == '2'){
        next = '52';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Loops-' + next).click();
});

previous[1].addEventListener('click', () => {
    if(next == '14'){
        next = '53';
    }
    else if(next == '1'){
        next = '51';
    }
    else if(next == '51'){
        next = '13';
    }
    else if(next == '2'){
        next == '52';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Loops-' + next).click();
});

function code_change()
{
   document.getElementById('Loops-' + next).click();
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
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Loops-Practice/";
});

home[1].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Loops-Practice/";
});