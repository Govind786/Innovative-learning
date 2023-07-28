var next = '0';
var My_code = document.getElementById('My-code');
var page = document.getElementsByClassName('questions');
var codingKiya2 = document.getElementsByClassName('codingKiya2');
var pre = document.getElementsByTagName('pre');
var sol = document.getElementById('solution');
var Pointers_1 = document.getElementById('Pointers-1');
var Pointers_2 = document.getElementById('Pointers-2');
var Pointers_3 = document.getElementById('Pointers-3');
var Pointers_4 = document.getElementById('Pointers-4');
var Pointers_5 = document.getElementById('Pointers-5');
var Pointers_6 = document.getElementById('Pointers-6');
var Pointers_7 = document.getElementById('Pointers-7');
var Pointers_8 = document.getElementById('Pointers-8');
var Pointers_9 = document.getElementById('Pointers-9');
var Pointers_10 = document.getElementById('Pointers-10');
var Pointers_11 = document.getElementById('Pointers-11');
var Pointers_12 = document.getElementById('Pointers-12');
var Pointers_13 = document.getElementById('Pointers-13');
var Pointers_14 = document.getElementById('Pointers-14');
var Pointers_15 = document.getElementById('Pointers-15');
var Pointers_16 = document.getElementById('Pointers-16');
var Pointers_17 = document.getElementById('Pointers-17');
var Pointers_18 = document.getElementById('Pointers-18');
var Pointers_19 = document.getElementById('Pointers-19');
var Pointers_20 = document.getElementById('Pointers-20');
var Pointers_21 = document.getElementById('Pointers-21');
var Pointers_22 = document.getElementById('Pointers-22');
var Pointers_23 = document.getElementById('Pointers-23');
var Pointers_24 = document.getElementById('Pointers-24');
var Pointers_25 = document.getElementById('Pointers-25');
var Pointers_26 = document.getElementById('Pointers-26');
var Pointers_27 = document.getElementById('Pointers-27');
var Pointers_28 = document.getElementById('Pointers-28');
var Pointers_29 = document.getElementById('Pointers-29');
var Pointers_30 = document.getElementById('Pointers-30');
var Pointers_31 = document.getElementById('Pointers-31');
var Pointers_32 = document.getElementById('Pointers-32');
var Pointers_33 = document.getElementById('Pointers-33');
var Pointers_34 = document.getElementById('Pointers-34');
var Pointers_35 = document.getElementById('Pointers-35');
var Pointers_36 = document.getElementById('Pointers-36');
var Pointers_37 = document.getElementById('Pointers-37');
var Pointers_38 = document.getElementById('Pointers-38');
var Pointers_39 = document.getElementById('Pointers-39');
var Pointers_40 = document.getElementById('Pointers-40');
var Pointers_41 = document.getElementById('Pointers-41');
var Pointers_42 = document.getElementById('Pointers-42');
var Pointers_43 = document.getElementById('Pointers-43');

pre[1].style.display = 'none';

Pointers_1.addEventListener('click', () => {
    var data = Pointers_1.innerHTML;
    page[0].style.display = 'none';
    next = '2';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int var;
        int *ptr;
        ptr = &var;
        printf("Enter any Value : ");
        scanf("%d", ptr);
        printf("Value = %d\\nValue using pointer = %d", var, *ptr);
        return 0;
    }

    `;
});

Pointers_2.addEventListener('click', () => {
    next = '3';
    var data = Pointers_2.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int var, var1;
        int *ptr, *ptr1;
        ptr = &var;
        ptr1 = &var1;
        printf("Enter Values : \\nA = ");
        scanf("%d", ptr);
        printf("B = ");
        scanf("%d", ptr1);
        printf("Sum of %d and %d = %d", *ptr, *ptr1, *ptr + *ptr1);
        return 0;
    }

    `;
});

Pointers_3.addEventListener('click', () => {
    next = '4';
    var data = Pointers_3.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int a, b, *ptr, *ptr1;
    
        ptr = &a;
        ptr1 = &b;
    
        printf("Enter the Values\\nA = ");
        scanf("%d", ptr);
        printf("B = ");
        scanf("%d", ptr1);
    
        *ptr ^= (*ptr1 ^= (*ptr = *ptr ^ *ptr1));
    
        printf("After Swapping\\nA = %d\\nB = %d",a,b);
        return 0;
    }
    
    `;
});

Pointers_4.addEventListener('click', () => {
    next = '5';
    var data = Pointers_4.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 5

    int main()
    {
        int arr[size], arr1[size], i;
        int *ptr = arr;
    
        printf("Enter the values of Array : \\n");
        for(i = 0;i < size; i++)
        {
            scanf("%d", (i + ptr));
        }
        for(i = 0;i < size; i++)
        {
            printf("%d ", *(i + ptr));
        }
        return 0;
    }
     
    `;
});

Pointers_5.addEventListener('click', () => {
    next = '6';
    var data = Pointers_5.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 5

    int main()
    {
        int arr[size], arr1[size], i;
        int *ptr = arr;
    
        printf("Enter the values of Array : \\n");
        for(i = 0;i < size; i++)
        {
            scanf("%d", (i + ptr));
        }
    
        for(i = 0;i < size; i++)
        {
            arr1[i] = *(i + ptr);
        }
    
        ptr = arr1;
    
        for(i = 0;i < size; i++)
        {
            printf("%d ", *(i + ptr));
        }
        return 0;
    }
    
    `;
});

Pointers_6.addEventListener('click', () => {
    next = '7';
    var data = Pointers_6.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        int arr[size], arr1[size], temp[size], len, len1, i;
        int *ptr, *ptr1, *ptr2;
        ptr = arr;
        ptr1 = arr1;
        ptr2 = temp;
    
        printf("Enter the Number of elements in first array : ");
        scanf("%d", &len);
        printf("Enter Values of First Array : \\n");
        for(i = 0; i < len; i++)
        {
            scanf("%d", (i + ptr));
            *(i + ptr2) = *(i + ptr);
        }
    
        printf("Enter the Number of elements in second array : ");
        scanf("%d", &len1);
        printf("Enter Values of Second Array : \\n");
        for(i = 0; i < len1; i++)
        {
            scanf("%d", (i + ptr1));
            *(i + ptr) = *(i + ptr1);
            *(i + ptr1) = *(i + ptr2);
        }
    
        printf("After Swapping :\\nFirst Array : ");
        for(i = 0; i < len1; i++)
        {
            printf("%d ", *(i + ptr));
        }
    
        printf("\\nSecond Array : ");
        for(i = 0; i < len; i++)
        {
            printf("%d ", *(i + ptr1));
        }
        return 0;
    }
       
    `;
});

Pointers_7.addEventListener('click', () => {
    next = '8';
    var data = Pointers_7.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        int arr[size], len, i, temp;
        int *ptr;
        ptr = arr;
    
        printf("Enter the Number of elements in array : ");
        scanf("%d", &len);
        printf("Enter Values of Array : \\n");
        for(i = 0; i < len; i++)
        {
            scanf("%d", (i + ptr));
        }
    
        printf("\\nOriginal Array : ");
        for(i = 0; i < len; i++)
        {
            printf("%d ", *(i + ptr));
        }
    
        for(i = 0; i < len/2; i++)
        {
            temp = *(i + ptr);
            *(i + ptr) = *(ptr + len - i - 1);
            *(ptr + len - i - 1) = temp;
        }
    
        printf("\\nAfter Reversing Array : ");
        for(i = 0; i < len; i++)
        {
            printf("%d ", *(i + ptr));
        }
        return 0;
    }
     
    `;
});

Pointers_8.addEventListener('click', () => {
    next = '9';
    var data = Pointers_8.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        int arr[size], len, i, key, flag = 0;
        int *ptr;
        ptr = arr;
    
        printf("Enter the Number of elements in array : ");
        scanf("%d", &len);
        printf("Enter Values of Array : \\n");
        for(i = 0; i < len; i++)
        {
            scanf("%d", (i + ptr));
        }
    
        printf("\\nEnter the Element you want to search in Array : ");
        scanf("%d", &key);
    
        for(i = 0; i < len; i++)
        {
            if(*(i + ptr) == key)
            {
                printf("Element %d found at %d position.", key, i+1);
                flag = 1;
            }
        }
    
        if(flag == 0)
        {
            printf("Element not found.");
        }
        return 0;
    }
       
    `;
});

Pointers_9.addEventListener('click', () => {
    next = '10';
    var data = Pointers_9.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 30

    int main()
    {
        int arr[size][size], rows, cols, i, j;
        int (*ptr)[size];
        ptr = arr;
    
        printf("Enter the Number of rows in array : ");
        scanf("%d", &rows);
        printf("Enter the Number of columns in array : ");
        scanf("%d", &cols);
    
        printf("Enter Values of Array : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                scanf("%d", (*(ptr + i) + j));
            }
        }
    
        printf("\\nArray : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr + i) + j));
    
            }
            printf("\\n");
        }
        return 0;
    }
    
    `;
});

Pointers_10.addEventListener('click', () => {
    next = '11';
    var data = Pointers_10.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 30

    int main()
    {
        int arr[size][size], arr1[size][size], rows, cols, i, j;
        int (*ptr)[size], (*ptr1)[size];
        ptr = arr;
        ptr1 = arr1;
    
        printf("Enter the Number of rows in Matrix : ");
        scanf("%d", &rows);
        printf("Enter the Number of columns in Matrix : ");
        scanf("%d", &cols);
    
        if(rows != cols)
        {
            printf("Number of rows should be equal to number of columns for matrix multiplication.");
            return 0;
        }
    
        printf("Enter Values of First Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                scanf("%d", (*(ptr + i) + j));
            }
        }
    
        printf("Enter Values of Second Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                scanf("%d", (*(ptr1 + i) + j));
            }
        }
    
        printf("\\nFirst Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr + i) + j));
            }
            printf("\\n");
        }
    
        printf("Second Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr1 + i) + j));
            }
            printf("\\n");
        }
    
        printf("\\nSum of both Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr + i) + j) + *(*(ptr1 + i) + j));
            }
            printf("\\n");
        }
        return 0;
    }
       
    `;
});

Pointers_11.addEventListener('click', () => {
    next = '12';
    var data = Pointers_11.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 30

    int main()
    {
        int arr[size][size], arr1[size][size], arr2[size][size], rows, cols, i, j, k;
        int (*ptr)[size], (*ptr1)[size];
        ptr = arr;
        ptr1 = arr1;
    
        printf("Enter the Number of rows in Matrix : ");
        scanf("%d", &rows);
        printf("Enter the Number of columns in Matrix : ");
        scanf("%d", &cols);
    
        if(rows != cols)
        {
            printf("Number of rows should be equal to number of columns for matrix multiplication.");
            return 0;
        }
    
        printf("Enter Values of First Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                scanf("%d", (*(ptr + i) + j));
            }
        }
    
        printf("Enter Values of Second Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                scanf("%d", (*(ptr1 + i) + j));
            }
        }
    
        printf("\\nFirst Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr + i) + j));
            }
            printf("\\n");
        }
    
        printf("Second Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                printf("%d ", *(*(ptr1 + i) + j));
            }
            printf("\\n");
        }
    
        printf("\\nMultiplication of both Matrix : \\n");
        for(i = 0; i < rows; i++)
        {
            for(j = 0; j < cols; j++)
            {
                *(*(arr2 + i) + j) = 0;
                for(k = 0; k < cols; k++)
                {
                    *(*(arr2 + i) + j) += *(*(ptr + i) + k) * *(*(ptr1 + k) + j);
                }
                printf("%d ", *(*(arr2 + i) + j));
            }
            printf("\\n");
        }
        return 0;
    }
      
    `;
});

Pointers_12.addEventListener('click', () => {
    next = '13';
    var data = Pointers_12.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        char str[size];
        int count = 0;
        char *ptr;
    
        ptr = str;
    
        printf("Enter any String : ");
        scanf("%s", str);
    
        while(*ptr != '\0')
        {
            count++;
            ptr++;
        }
    
        printf("String : %s", str);
        printf("\\nLength : %d", count);
        return 0;
    }
    
    `;
});

Pointers_13.addEventListener('click', () => {
    next = '14';
    var data = Pointers_13.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        char str[size], str1[size];
        char *ptr, *ptr1;
    
        ptr = str;
        ptr1 = str1;
    
        printf("Enter any String : ");
        scanf("%s", str);
    
        while(*ptr != '\0')
        {
            *ptr1 = *ptr;
            ptr++;
            ptr1++;
        }
    
        printf("Original String : %s", str);
        printf("\\nCopied string : %s", str1);
        return 0;
    }
    
    `;
});

Pointers_14.addEventListener('click', () => {
    next = '15';
    var data = Pointers_14.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        char str[size], str1[size], conc[size+size];
        char *ptr, *ptr1, *ptr2;
    
        ptr = str;
        ptr1 = str1;
        ptr2 = conc;
    
        printf("Enter First String : ");
        scanf("%s", str);
    
        printf("Enter Second String : ");
        scanf("%s", str1);
    
        printf("First String : %s", str);
        printf("\\nSecond String : %s", str1);
    
        while(*ptr != '\0')
        {
            *ptr2 = *ptr;
            ptr++;
            ptr2++;
        }
        while(*ptr1 != '\0')
        {
            *ptr2 = *ptr1;
            ptr1++;
            ptr2++;
        }
    
        printf("\\nConcatenated String : %s", conc);
        return 0;
    }
    
    `;
});

Pointers_15.addEventListener('click', () => {
    next = '16';
    var data = Pointers_15.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        char str[size], str1[size];
        char *ptr, *ptr1;
        int flag = 0;
    
        ptr = str;
        ptr1 = str1;
    
        printf("Enter First String : ");
        scanf("%s", str);
    
        printf("Enter Second String : ");
        scanf("%s", str1);
    
        while(*ptr != '\0' || *ptr1 != '\0')
        {
            if(*ptr != *ptr1)
                flag = 1;
            ptr++;
            ptr1++;
        }
        if(*ptr != '\0' && *ptr1 != '\0')
            flag = 1;
    
        if(flag == 0)
            printf("Both Strings are same.");
        else
            printf("Both Strings are different.");
    
        return 0;
    }
    
    `;
});

Pointers_16.addEventListener('click', () => {
    next = '17';
    var data = Pointers_16.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        char str[size], rev[size];
        char *ptr, *ptr1;
        int count = 0;
    
        ptr = str;
        ptr1 = rev;
    
        printf("Enter the String : ");
        scanf("%s", str);
    
        while(*ptr != '\0')
        {
            count++;
            ptr++;
        }
    
        *(ptr1 + count) = '\0';
        while(count >= 0)
        {
            *(ptr1)++ = *(--ptr);
            count--;
        }
    
        printf("Reversed String : %s", rev);
        return 0;
    }
    
    `;
});

Pointers_17.addEventListener('click', () => {
    next = '18';
    var data = Pointers_17.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #define size 100

    int main()
    {
        int arr[size], len, i, j, temp;
        int *ptr;
    
        printf("Enter the number of elements of Array : ");
        scanf("%d", &len);
    
        ptr = arr;
    
        for(i = 0; i < len; i++)
        {
            j = i;
            scanf("%d", (ptr + i));
            while(j > 0 && *(ptr + j) < *(ptr + j - 1))
            {
                temp = *(ptr + j);
                *(ptr + j) = *(ptr + j - 1);
                *(ptr + j - 1) = temp;
                j--;
            }
        }
    
        printf("Sorted Array :\\n");
        for(i = 0; i < len; i++)
        {
            printf("%d ", *(ptr + i));
        }
        return 0;
    }
    
    `;
});

Pointers_18.addEventListener('click', () => {
    next = '1';
    var data = Pointers_18.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    func(int *a, float *b, char *c);

    int main()
    {
        int a;
        float b;
        char c;
    
        printf("Enter any Integer value : ");
        scanf("%d", &a);
        printf("Enter any Character value : ");
        scanf(" %c", &c);
        printf("Enter any Float value : ");
        scanf("%f", &b);
    
        func(&a, &b, &c);
    
        printf("\\nReturned Integer value : %d", a);
        printf("\\nReturned Character value : %c", c);
        printf("\\nReturned Float value : %.3f", b);
    
        return 0;
    }
    
    func(int *a, float *b, char *c)
    {
        *a += 10;
        *b += 10.0f;
        *c += 2;
    }
     
    `;
});

var previous = document.getElementsByClassName('previous');

previous[0].addEventListener('click', () => {
    if(next == '2'){
        next = '20';
    }
    else if(next == '1'){
        next = '19';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Pointers-' + next).click();
});

previous[1].addEventListener('click', () => {
    if(next == '2'){
        next = '20';
    }
    else if(next == '1'){
        next = '19';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Pointers-' + next).click();
});

function code_change()
{
   document.getElementById('Pointers-' + next).click();
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
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Pointers-Practice/";
});

home[1].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Pointers-Practice/";
});