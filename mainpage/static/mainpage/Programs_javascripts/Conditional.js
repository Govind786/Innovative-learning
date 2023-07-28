var next = '0';
var My_code = document.getElementById('My-code');
var page = document.getElementsByClassName('questions');
var codingKiya2 = document.getElementsByClassName('codingKiya2');
var pre = document.getElementsByTagName('pre');
var sol = document.getElementById('solution');
var Conditional_1 = document.getElementById('Conditional-1');
var Conditional_2 = document.getElementById('Conditional-2');
var Conditional_3 = document.getElementById('Conditional-3');
var Conditional_4 = document.getElementById('Conditional-4');
var Conditional_5 = document.getElementById('Conditional-5');
var Conditional_6 = document.getElementById('Conditional-6');
var Conditional_7 = document.getElementById('Conditional-7');
var Conditional_8 = document.getElementById('Conditional-8');
var Conditional_9 = document.getElementById('Conditional-9');
var Conditional_10 = document.getElementById('Conditional-10');
var Conditional_11 = document.getElementById('Conditional-11');
var Conditional_12 = document.getElementById('Conditional-12');
var Conditional_13 = document.getElementById('Conditional-13');
var Conditional_14 = document.getElementById('Conditional-14');
var Conditional_15 = document.getElementById('Conditional-15');
var Conditional_16 = document.getElementById('Conditional-16');
var Conditional_17 = document.getElementById('Conditional-17');
var Conditional_18 = document.getElementById('Conditional-18');
var Conditional_19 = document.getElementById('Conditional-19');
var Conditional_20 = document.getElementById('Conditional-20');
var Conditional_21 = document.getElementById('Conditional-21');


Conditional_1.addEventListener('click', () => {
    var data = Conditional_1.innerHTML;
    page[0].style.display = 'none';
    next = '2';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num1,num2;
        printf("Enter the First Number : ");
        scanf("%d",&num1);
        printf("Enter the Second Number : ");
        scanf("%d",&num2);
        if(num1 > num2)
        {
            printf("First Number : %d is greater.",num1);
        }
        else if(num1 == num2)
        {
            printf("Both Numbers : %d and %d are Equal.",num1,num2);
        }
        else
        {
            printf("Second Number : %d is greater.",num2);
        }
        return 0;
    }    
    `;
});

Conditional_2.addEventListener('click', () => {
    var data = Conditional_2.innerHTML;
    page[0].style.display = 'none';
    next = '3';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num1,num2,num3;
        printf("Enter the First Number : ");
        scanf("%d",&num1);
        printf("Enter the Second Number : ");
        scanf("%d",&num2);
        printf("Enter the Third Number : ");
        scanf("%d",&num3);
        if(num1 > num2 && num1 > num3)
        {
            printf("First Number : %d is greater.",num1);
        }
        else if(num2 > num3)
        {
            printf("Second Number : %d is greater.",num2);
        }
        else if(num1 == num2 && num2 == num3)
        {
            printf("All Numbers : %d , %d and %d are Equal.",num1,num2,num3);
        }
        else
        {
            printf("Third Number : %d is Greater.",num3);
        }
        return 0;
    }
    
    `;
});

Conditional_3.addEventListener('click', () => {
    var data = Conditional_3.innerHTML;
    page[0].style.display = 'none';
    next = '4';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter the Number : ");
        scanf("%d",&num);
        if(num == 0)
        {
            printf("The number : %d is zero.",num);
        }
        else if(num > 0)
        {
            printf("The number : %d is Positive.",num);
        }
        else
        {
            printf("The number : %d is Negative.",num);
        }
        return 0;
    }
    
    `;
});

Conditional_4.addEventListener('click', () => {
    var data = Conditional_4.innerHTML;
    page[0].style.display = 'none';
    next = '5';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter the Number : ");
        scanf("%d",&num);
        if(num%11 == 0 && num%5 == 0)
        {
            printf("The number : %d is divisible by 5 and 11.",num);
        }
        else
        {
            printf("The number : %d is not divisible by 5 and 11.",num);
        }
        return 0;
    }
        
    `;
});

Conditional_5.addEventListener('click', () => {
    var data = Conditional_5.innerHTML;
    page[0].style.display = 'none';
    next = '6';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int num;
        printf("Enter the Number : ");
        scanf("%d",&num);
        if(num%2 == 0)
        {
            printf("The number : %d is even.",num);
        }
        else
        {
            printf("The number : %d is odd.",num);
        }
        return 0;
    }
     
    `;
});

Conditional_6.addEventListener('click', () => {
    var data = Conditional_6.innerHTML;
    page[0].style.display = 'none';
    next = '7';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int year;
        printf("Enter the year : ");
        scanf("%d",&year);
        if(year == 1000)
        {
            printf("The Year : %d is Leap Year.",year);
        }
        else if(year%400 == 0)
        {
            printf("The Year : %d is Leap Year.",year);
        }
        else if(year%100 == 0)
        {
            printf("The number : %d not a leap Year.",year);
        }
        else if(year%4 == 0)
        {
            printf("The Year : %d is Leap Year.",year);
        }
        else
        {
            printf("The number : %d not a leap Year.",year);
        }
        return 0;
    }
       
    `;
});

Conditional_7.addEventListener('click', () => {
    var data = Conditional_7.innerHTML;
    page[0].style.display = 'none';
    next = '8';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        char ch;
        printf("Enter the character : ");
        scanf("%c",&ch);
        if((ch >= 'A' && ch <= 'Z') || (ch >= 97 && ch <= 122))
        {
            printf("The Character : %c is an Alphabet.",ch);
        }
        else
        {
            printf("The Character : %c is not an Alphabet.",ch);
        }
        return 0;
    }
        
    `;
});

Conditional_8.addEventListener('click', () => {
    var data = Conditional_8.innerHTML;
    page[0].style.display = 'none';
    next = '9';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        char ch;
        printf("Enter the Albhabet : ");
        scanf("%c",&ch);
        if((ch >= 'A' && ch <= 'Z') || (ch >= 97 && ch <= 122))
        {
            if(ch == 'A' || ch == 'a' || ch == 'E' || ch == 'e' || ch == 'I' || ch == 'i' || ch == 'O' || ch == 'o'
                    || ch == 'U' || ch == 'u')
            {
                printf("The Alphabet : %c is a Vowel.",ch);
            }
            else
            {
                printf("The Alphabet : %c is a Consonent.",ch);
            }
        }
        else
        {
            printf("The Character : %c is not an Alphabet.",ch);
        }
        return 0;
    }
        
    `;
});

Conditional_9.addEventListener('click', () => {
    var data = Conditional_9.innerHTML;
    page[0].style.display = 'none';
    next = '10';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        char ch;
        printf("Enter the character : ");
        scanf("%c",&ch);
        if((ch >= 'A' && ch <= 'Z') || (ch >= 97 && ch <= 122))
        {
            printf("The Character : %c is an Alphabet.",ch);
        }
        else if(ch >= '0' && ch <= '9')
        {
            printf("The Character : %c is a Digit.",ch);
        }
        else
        {
            printf("The Character : %c is a Special Character.",ch);
        }
        return 0;
    }
        
    `;
});

Conditional_10.addEventListener('click', () => {
    var data = Conditional_10.innerHTML;
    page[0].style.display = 'none';
    next = '11';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        char ch;
        printf("Enter the Albhabet : ");
        scanf("%c",&ch);
        if(ch >= 'A' && ch <= 'Z')
        {
            printf("The Alphabet : %c is in Uppercase.",ch);
        }
        else if(ch >= 97 && ch <= 122)
        {
            printf("The Alphabet : %c is in Lowercase.",ch);
        }
        else
        {
            printf("The Character : %c is not an Alphabet.",ch);
        }
        return 0;
    }
       
    `;
});

Conditional_11.addEventListener('click', () => {
    var data = Conditional_11.innerHTML;
    page[0].style.display = 'none';
    next = '12';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int week;
        printf("Enter the Week Number : ");
        scanf("%d",&week);
        printf("I assumed Start of the week as Monday... :) \\n");
        if(week <= 0)
        {
            printf("Not valid input.:( ");
        }
        else if(week == 1)
        {
            printf("The Week Day for the Week Number : %d is Monday.",week);
        }
        else if(week == 2)
        {
            printf("The Week Day for the Week Number : %d is Tueasday.",week);
        }
        else if(week == 3)
        {
            printf("The Week Day for the Week Number : %d is Wednesday.",week);
        }
        else if(week == 4)
        {
            printf("The Week Day for the Week Number : %d is Thursday.",week);
        }
        else if(week == 5)
        {
            printf("The Week Day for the Week Number : %d is Friday.",week);
        }
        else if(week == 6)
        {
            printf("The Week Day for the Week Number : %d is Saturday.",week);
        }
        else if(week == 7)
        {
            printf("The Week Day for the Week Number : %d is Sunday.",week);
        }
        else
        {
            printf("Not valid input.:( ");
        }
        return 0;
    }
        
    `;
});

Conditional_12.addEventListener('click', () => {
    var data = Conditional_12.innerHTML;
    page[0].style.display = 'none';
    next = '13';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int mon;
        printf("Press 1 for January.");
        printf("\\nPress 2 for February.");
        printf("\\nPress 3 for March.");
        printf("\\nPress 4 for April.");
        printf("\\nPress 5 for May.");
        printf("\\nPress 6 for June.");
        printf("\\nPress 7 for July.");
        printf("\\nPress 8 for August.");
        printf("\\nPress 9 for September.");
        printf("\\nPress 10 for October.");
        printf("\\nPress 11 for November.");
        printf("\\nPress 12 for December.");
        printf("\\nEnter the Month Number : ");
        scanf("%d",&mon);
        if(mon <= 0)
        {
            printf("Not valid input.:( ");
        }
        else if(mon == 2)
        {
            printf("The Days in the Month Number : %d is 28 (except 29 in leap year).",mon);
        }
        else if(mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon ==
                12)
        {
            printf("The Days in the Month Number : %d is 31.",mon);
        }
        else if(mon == 4 || mon == 6 || mon == 9 || mon == 11)
        {
            printf("The Days in the Month Number : %d is 30.",mon);
        }
        else
        {
            printf("Not valid input.:( ");
        }
        return 0;
    }
       
    `;
});

Conditional_13.addEventListener('click', () => {
    var data = Conditional_13.innerHTML;
    page[0].style.display = 'none';
    next = '14';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int money,notes;
        printf("Enter the amount you have in rupee: ");
        scanf("%d",&money);
        if(money <= 0)
        {
            printf("Not valid input.:( ");
        }
        else
        {
            if(money >= 2000)
            {
                notes = money / 2000;
                money %= 2000;
                printf("You have %d notes of 2000",notes);
            }
            if(money >= 500)
            {
                notes = money / 500;
                money %= 500;
                printf("\\nYou have %d notes of 500",notes);
            }
            if(money >= 200)
            {
                notes = money / 200;
                money %= 200;
                printf("\\nYou have %d notes of 200",notes);
            }
            if(money >= 100)
            {
                notes = money / 100;
                money %= 100;
                printf("\\nYou have %d notes of 100",notes);
            }
            if(money >= 50)
            {
                notes = money / 50;
                money %= 50;
                printf("\\nYou have %d notes of 50",notes);
            }
            if(money >= 20)
            {
                notes = money / 20;
                money %= 20;
                printf("\\nYou have %d notes of 20",notes);
            }
            if(money >= 10)
            {
                notes = money / 10;
                money %= 10;
                printf("\\nYou have %d notes of 10",notes);
            }
            if(money >= 5)
            {
                notes = money / 5;
                money %= 5;
                printf("\\nYou have %d notes of 5",notes);
            }
            if(money >= 2)
            {
                notes = money / 2;
                money %= 2;
                printf("\\nYou have %d notes of 2",notes);
            }
            if(money >= 1)
            {
                notes = money / 1;
                money %= 1;
                printf("\\nYou have %d notes of 1",notes);
            }
        }
        return 0;
    }
        
    `;
});

Conditional_14.addEventListener('click', () => {
    var data = Conditional_14.innerHTML;
    page[0].style.display = 'none';
    next = '15';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int s1,s2,s3;
        printf("Enter the first Side : ");
        scanf("%d",&s1);
        printf("Enter the second Side : ");
        scanf("%d",&s2);
        printf("Enter the third Side : ");
        scanf("%d",&s3);
        if((s1+s2>s3) && (s2+s3>s1) && (s3+s1>s2))
        {
            printf("The triangle is Valid Triangle.");
        }
        else
        {
            printf("The triangle is not a valid Triangle.");
        }
        return 0;
    }
        
    `;
});

Conditional_15.addEventListener('click', () => {
    var data = Conditional_15.innerHTML;
    page[0].style.display = 'none';
    next = '16';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int a1,a2,a3;
        printf("Enter the first Angle : ");
        scanf("%d",&a1);
        printf("Enter the second Angle : ");
        scanf("%d",&a2);
        printf("Enter the third Angle : ");
        scanf("%d",&a3);
        if(a1+a2+a3 == 180)
        {
            printf("The triangle is Valid Triangle.");
        }
        else
        {
            printf("The triangle is not a valid Triangle.");
        }
        return 0;
    }
       
    `;
});

Conditional_16.addEventListener('click', () => {
    var data = Conditional_16.innerHTML;
    page[0].style.display = 'none';
    next = '17';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int s1,s2,s3;
        printf("Enter the first Side : ");
        scanf("%d",&s1);
        printf("Enter the second Side : ");
        scanf("%d",&s2);
        printf("Enter the third Side : ");
        scanf("%d",&s3);
        if((s1+s2>s3) && (s2+s3>s1) && (s3+s1>s2))
        {
            if(s1 == s2 && s2 == s3)
            {
                printf("The triangle is Equilateral Triangle.");
            }
            else if(s1 == s2 || s2 == s3 || s3 == s1)
            {
                printf("The triangle is Isosceles Triangle.");
            }
            else
            {
                printf("The triangle is Scalene Triangle.");
            }
        }
        else
        {
            printf("The triangle is not a valid Triangle.");
        }
        return 0;
    }
       
    `;
});

Conditional_17.addEventListener('click', () => {
    var data = Conditional_17.innerHTML;
    page[0].style.display = 'none';
    next = '18';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include< math.h >
    int main()
    {
        float a,b,c,d;
        printf("Please put a,b,c according to ax2 + bx + c = 0\\n");
        printf("Enter a= ");
        scanf("%f",&a);
        printf("Enter b= ");
        scanf("%f",&b);
        printf("Enter c= ");
        scanf("%f",&c);
        d = (b*b)-(4*a*c);
        if (d>0)
        {
            printf("\\nRoots are real and different:\\n");
            printf("First Root is X1: %f",(-b+sqrt(d))/(2*a));
            printf("\\nSecond Root is X2: %f",(-b-sqrt(d))/(2*a));
        }
        else if(d<0)
        {
            printf("Roots are imaginary:\\n");
            printf("First Root is X1: %f + i%f",-b/(2*a),sqrt(-d)/(2*a));
            printf("\\nFirst Root is X2: %f - i%f",-b/(2*a),sqrt(-d)/(2*a));
        }
        else
        {
            printf("\\nRoots are real and equal:\\n");
            printf("First Root is X1: %f",(-b+sqrt(d))/(2*a));
            printf("\\nSecond Root is X2: %f",(-b-sqrt(d))/(2*a));
        }
        return 0;
    }
        
    `;
});

Conditional_18.addEventListener('click', () => {
    var data = Conditional_18.innerHTML;
    page[0].style.display = 'none';
    next = '19';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        float cp,sp;
        printf("Enter Cost Price in rupee of the Item : ");
        scanf("%f",&cp);
        printf("Enter Selling Price in rupee of the Item : ");
        scanf("%f",&sp);
        if (cp > sp)
        {
            printf("You get Loss of %.2f rupee",cp - sp);
            float lper;
            lper = ((cp-sp)*100)/cp;
            printf("\\nYour Loss Percent is : %.2f percent",lper);
        }
        else if (cp < sp)
        {
            printf("You get Profit of %.2f rupee",sp - cp);
            float pper;
            pper = ((sp-cp)*100)/cp;
            printf("\\nYour Profit Percent is : %.2f percent",pper);
        }
        else
        {
            printf("\\nYou sold your item at same price as bought.");
        }
        return 0;
    }
        
    `;
});

Conditional_19.addEventListener('click', () => {
    next = '20';
    var data = Conditional_19.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = 'Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following';
    sol.style.display = 'block';
    codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int ph,chem,bio,math,com;
        printf("Enter your marks in Physics : ");
        scanf("%d",&ph);
        printf("Enter your marks in Chemistry : ");
        scanf("%d",&chem);
        printf("Enter your marks in Biology : ");
        scanf("%d",&bio);
        printf("Enter your marks in Mathematics : ");
        scanf("%d",&math);
        printf("Enter your marks in Computer : ");
        scanf("%d",&com);
        if((ph+chem+bio+math+com)/5 >= 90)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - A\\nYou got %.2f percent.",per);
        }
        else if((ph+chem+bio+math+com)/5 >= 80)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - B\\nYou got %.2f percent.",per);
        }
        else if((ph+chem+bio+math+com)/5 >= 70)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - C\\nYou got %.2f percent.",per);
        }
        else if((ph+chem+bio+math+com)/5 >= 60)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - D\\nYou got %.2f percent.",per);
        }
        else if((ph+chem+bio+math+com)/5 >= 40)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - E\\nYou got %.2f percent.",per);
        }
        else if((ph+chem+bio+math+com)/5 < 40)
        {
            float per = (ph+chem+bio+math+com)/5;
            printf("Grade - F\\nYou got %.2f percent.",per);
        }
        return 0;
    }
       
    `;
});

Conditional_20.addEventListener('click', () => {
    next = '21';
    var data = Conditional_20.innerHTML;
    page[0].style.display = 'none';
    codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    My_code.innerHTML = 'Write a C program to input basic salary of an employee and calculate its Gross salary according to following';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        float basic, gross;
        printf("Enter basic salary of an employee: ");
        scanf("%f", &basic);
        if(basic <= 0)
        {
            printf("Not valid input.:( ");
        }
        else if(basic <= 10000)
        {
            gross = basic + basic * 0.8 + basic * 0.2;
        }
        else if(basic <= 20000)
        {
            gross = basic + basic * 0.9 + basic * 0.25;
        }
        else
        {
            gross = basic + basic * 0.95 + basic * 0.3;
        }
        printf("Gross Slalary of Employee = %.2f", gross);
        return 0;
    }
    
    `;
});

Conditional_21.addEventListener('click', () => {
    next = '1';
    var data = Conditional_21.innerHTML;
    page[0].style.display = 'none';
    codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    My_code.innerHTML = 'Write a C program to input electricity unit charges and calculate total electricity bill according to the given condition';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int units;
        float money;
        printf("Enter Units : ");
        scanf("%d", &units);
        if(units <= 50)
        {
            money = units * .5;
        }
        else if(units <= 150)
        {
            money = units * .75;
        }
        else if(units <= 250)
        {
            money = units * 1.2;
        }
        else
        {
            money = units * 1.5;
        }
        money += money * .2;
        printf("The total Money for %d units is : %.2f", units,money);
        return 0;
    }
        
    `;
});

var previous = document.getElementsByClassName('previous');

previous[0].addEventListener('click', () => {
    if(next == '2'){
        next = '23';
    }
    else if(next == '1'){
        next = '22';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Conditional-' + next).click();
});

previous[1].addEventListener('click', () => {
    if(next == '2'){
        next = '23';
    }
    else if(next == '1'){
        next = '22';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Conditional-' + next).click();
});

function code_change()
{
   document.getElementById('Conditional-' + next).click();
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
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Conditional-Practice/";
});

home[1].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Conditional-Practice/";
});