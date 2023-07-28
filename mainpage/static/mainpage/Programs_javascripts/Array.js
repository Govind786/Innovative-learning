var next = '0';
var My_code = document.getElementById('My-code');
var page = document.getElementsByClassName('questions');
var codingKiya2 = document.getElementsByClassName('codingKiya2');
var pre = document.getElementsByTagName('pre');
var sol = document.getElementById('solution');
var Array_1 = document.getElementById('Array-1');
var Array_2 = document.getElementById('Array-2');
var Array_3 = document.getElementById('Array-3');
var Array_4 = document.getElementById('Array-4');
var Array_5 = document.getElementById('Array-5');
var Array_6 = document.getElementById('Array-6');
var Array_7 = document.getElementById('Array-7');
var Array_8 = document.getElementById('Array-8');
var Array_9 = document.getElementById('Array-9');
var Array_10 = document.getElementById('Array-10');
var Array_11 = document.getElementById('Array-11');
var Array_12 = document.getElementById('Array-12');
var Array_13 = document.getElementById('Array-13');
var Array_14 = document.getElementById('Array-14');
var Array_15 = document.getElementById('Array-15');
var Array_16 = document.getElementById('Array-16');
var Array_17 = document.getElementById('Array-17');
var Array_18 = document.getElementById('Array-18');
var Array_19 = document.getElementById('Array-19');
var Array_20 = document.getElementById('Array-20');
var Array_21 = document.getElementById('Array-21');
var Array_22 = document.getElementById('Array-22');
var Array_23 = document.getElementById('Array-23');
var Array_24 = document.getElementById('Array-24');
var Array_25 = document.getElementById('Array-25');
var Array_26 = document.getElementById('Array-26');
var Array_27 = document.getElementById('Array-27');
var Array_28 = document.getElementById('Array-28');
var Array_29 = document.getElementById('Array-29');
var Array_30 = document.getElementById('Array-30');
var Array_31 = document.getElementById('Array-31');
var Array_32 = document.getElementById('Array-32');
var Array_33 = document.getElementById('Array-33');
var Array_34 = document.getElementById('Array-34');
var Array_35 = document.getElementById('Array-35');
var Array_36 = document.getElementById('Array-36');
var Array_37 = document.getElementById('Array-37');
var Array_38 = document.getElementById('Array-38');
var Array_39 = document.getElementById('Array-39');
var Array_40 = document.getElementById('Array-40');
var Array_41 = document.getElementById('Array-41');
var Array_42 = document.getElementById('Array-42');
var Array_43 = document.getElementById('Array-43');

pre[1].style.display = 'none';

Array_1.addEventListener('click', () => {
    var data = Array_1.innerHTML;
    page[0].style.display = 'none';
    next = '2';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,sum=0;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Array Elements Are : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
            sum += arr[i];
        }
        printf("\\n\\nSum of All Elements of Array is : %d",sum);
        printf("\\nAverage of All Elements of Array is : %f\\n",sum/(float)(n));
        return 0;
    }

    `;
});

Array_2.addEventListener('click', () => {
    next = '3';
    var data = Array_2.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int Sum(int* arr,int *len)
    {
        int sum=0,i;
        printf("Array Elements Are : ");
        for(i = 0;i < *len;i++){
            printf("%d ",arr[i]);
            sum += arr[i];
        }
        return sum;
    }
    
    float Average(int *sum,int *len)
    {
        return *sum/(float)(*len);
    }
    
    int main()
    {
        int n,i,sum;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        sum = Sum(arr,&n);
        printf("\\n\\nSum of All Elements of Array is : %d",sum);
        printf("\\nAverage of All Elements of Array is : %f\\n",Average(&sum,&n));
        return 0;
    }
    `;
});

Array_3.addEventListener('click', () => {
    next = '4';
    var data = Array_3.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int Sum(int* arr,int *len)
    {
        int sum=0,i;
        printf("Array Elements Are : ");
        for(i = 0;i < *len;i++){
            printf("%d ",arr[i]);
            sum += arr[i];
        }
        return sum;
    }

    int main()
    {
        int n,i,sum;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        sum = Sum(arr,&n);
        printf("\\n\\nSum of All Elements of Array is : %d",sum);
        return 0;
    }
    
    `;
});

Array_4.addEventListener('click', () => {
    next = '5';
    var data = Array_4.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int Sum(int* arr,int *len)
    {
        int sum=0,i;
        printf("Array Elements Are : ");
        for(i = 0;i < *len;i++){
            printf("%d ",arr[i]);
            sum += arr[i];
        }
        return sum;
    }
    
    int main()
    {
        int n,i;
        int *arr,*arr1,*arr2;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        arr = (int *) malloc (n * sizeof(int));
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Enter the Element of Second Array : \\n");
        arr1 = (int *) malloc (n * sizeof(int));
        arr2 = (int *) malloc (n * sizeof(int));
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr1[i]);
            *(arr2 + i) = *(arr + i) + *(arr1 + i);
        }
        printf("\\nThe Sum of the Elements of Both the Array is :");
        for(i =0; i < n; i++){
            printf(" %d",arr2[i]);
        }
        return 0;
    }
     
    `;
});

Array_5.addEventListener('click', () => {
    next = '6';
    var data = Array_5.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,sum=0,j,s=0,e=0,large=0;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        large = arr[0];
        printf("Array Elements Are : ");
        for(i = 0;i < n;i++){
            sum = 0;
            for(j = i;j < n;j++){
                sum += arr[j];
                if(sum > large){
                    s = i;
                    e = j;
                    large = sum;
                }
            }
            printf("%d ",arr[i]);
        }
        printf("\\nThe Largest Contiguous Sub-Array is : ");
        for(i = s;i <= e;i++){
            printf("%d ",arr[i]);
        }
        printf("\\nWith the sum : %d",large);
        return 0;
    }
    
    `;
});

Array_6.addEventListener('click', () => {
    next = '7';
    var data = Array_6.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen;
        scanf("%d",&arrlen);
        int arr[arrlen],larger,larger2,i;
        if (arrlen < 2)
        {
            printf("Only one value to compare second largest :(");
        }
        else
        {
            printf("Enter the values :\\n");
            for (i = 0; i < arrlen; i++)
            {
            printf("Enter Element %d : ",i+1);
                scanf("%d",&arr[i]);
            }
            larger = arr[0];
            larger2 = arr[1];
            for (i = 1; i < arrlen; i++)
            {
                if (larger < arr[i])
                {
                    larger2 = larger;
                    larger = arr[i];
                }
                else if(arr[i]<larger && arr[i]>larger2)
                {
                    larger2 = arr[i];
                }
            }
            printf("Largest Number in Array : %d",larger);
            printf("\\nSecond largest Number in Array : %d",larger2);
        }
        return 0;
    }
       
    `;
});

Array_7.addEventListener('click', () => {
    next = '8';
    var data = Array_7.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen;
        scanf("%d",&arrlen);
        int arr[arrlen],larger,larger2,i,smaller,smaller2;
        if (arrlen < 2)
        {
            printf("Only one value to compare second largest :(");
        }
        else
        {
            printf("Enter the values :\\n");
            for (i = 0; i < arrlen; i++)
            {
            printf("Enter Element %d : ",i+1);
                scanf("%d",&arr[i]);
            }
            larger = arr[0];
            smaller = arr[0];
            larger2 = arr[1];
            smaller2 = arr[1];
            for (i = 1; i < arrlen; i++)
            {
                if(smaller > arr[i]){
                    smaller2 = smaller;
                    smaller = arr[i];
                }
                else if(arr[i]>smaller && arr[i]<larger2)
                {
                    smaller2 = arr[i];
                }
                if (larger < arr[i])
                {
                    larger2 = larger;
                    larger = arr[i];
                }
                else if(arr[i]<larger && arr[i]>larger2)
                {
                    larger2 = arr[i];
                }
            }
            printf("Second Smallest Number in Array : %d",smaller2);
            printf("\\nSecond largest Number in Array : %d",larger2);
        }
        return 0;
    }
     
    `;
});

Array_8.addEventListener('click', () => {
    next = '9';
    var data = Array_8.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen;
        scanf("%d",&arrlen);
        int arr[arrlen],larger,i;
        if (arrlen < 2)
        {
            printf("Only one value to compare largest :(");
        }
        else
        {
            printf("Enter the values :\\n");
            for (i = 0; i < arrlen; i++)
            {
            printf("Enter Element %d : ",i+1);
                scanf("%d",&arr[i]);
            }
            larger = arr[0];
            for (i = 1; i < arrlen; i++)
            {
                if (larger < arr[i])
                {
                    larger = arr[i];
                }
            }
            printf("Largest Number in Array : %d",larger);
        }
        return 0;
    }
       
    `;
});

Array_9.addEventListener('click', () => {
    next = '10';
    var data = Array_9.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen,i,j=0,k=0;
        scanf("%d",&arrlen);
        int arr[arrlen],even[arrlen],odd[arrlen];
        for(i = 0;i < arrlen;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            if(arr[i]%2 == 0){
                even[j] = arr[i];
                j++;
            }
            else{
                odd[k] = arr[i];
                k++;
            }
        }
        if(k < arrlen){
            printf("\\nEven Numbers are : ");
            i=0;
            while(i < j){
                printf("%d ",even[i++]);
            }
        }
        if(j < arrlen){
            printf("\\nOdd Numbers are : ");
            i=0;
            while(i < k){
                printf("%d ",odd[i++]);
            }
        }
        return 0;
    }
    
    `;
});

Array_10.addEventListener('click', () => {
    next = '11';
    var data = Array_10.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,pos,elm;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Array Elements Are : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        printf("\\nEnter the position you want to insert Element : ");
        scanf("%d",&pos);pos--;
        printf("Enter the Element : ");
        scanf("%d",&elm);
        for(i = n;i > pos;i--){
            arr[i] = arr[i-1];
        }
        arr[pos] = elm;n++;
        printf("\\nNew Array Elements Are : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    } 
       
    `;
});

Array_11.addEventListener('click', () => {
    next = '12';
    var data = Array_11.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,elm;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Array Elements Are : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        printf("\\nEnter the Element You want to Delete : ");
        scanf("%d",&elm);
        for(i = 0;i < n;i++){
            if(arr[i] == elm){
                if(i == (n-1)){
                    arr[i] = 0;
                }
                while(i < n-1){
                    arr[i] = arr[i+1];
                    i++;
                }
                n--;
                break;
            }
        }
        printf("%d",arr[n]);
        printf("\\nNew Array Elements Are : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
      
    `;
});

Array_12.addEventListener('click', () => {
    next = '13';
    var data = Array_12.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void main ()
    {
 
        int i, n, number[30];
        printf("Enter the value of the n = ");
        scanf("%d", &n);
 
        printf("Enter the numbers\\n");
        for (i = 0; i < n; ++i) 
        {
            scanf("%d", &number[i]);
        }
 
        number[n] = number[0];
        for (i = 0; i < n; ++i)
        {
            number[i] = number[i + 1];
        } 
 
        printf("Cyclically permuted numbers are given below \\n");
        for (i = 0; i < n; ++i)
            printf("%d\\n", number[i]);
 
    }
    
    `;
});

Array_13.addEventListener('click', () => {
    next = '14';
    var data = Array_13.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen,i,j,temp=0;
        scanf("%d",&arrlen);
        int arr[arrlen];
        for(i = 0;i < arrlen;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                j--;
            }
        }
        printf("Array in Ascending Order is : ");
        for(i = 0;i < arrlen;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
    
    `;
});

Array_14.addEventListener('click', () => {
    next = '15';
    var data = Array_14.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        printf("Enter the length of the input : ");
        int arrlen,i,j,temp=0;
        scanf("%d",&arrlen);
        int arr[arrlen];
        for(i = 0;i < arrlen;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] > arr[j-1]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                j--;
            }
        }
        printf("Array in Descending Order is : ");
        for(i = 0;i < arrlen;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
    
    `;
});

Array_15.addEventListener('click', () => {
    next = '16';
    var data = Array_15.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include<string.h>
    int main()
    {
        int i,j,len;
        printf("How Many Names You want to Enter : ");
        scanf("%d",&len);
        char arr[len][15],temp[15];
        for(i = 0;i < len;i++){
            printf("Enter Name %d : ",i+1);
            scanf("%s",arr[i]);
        }
        for(i = 0;i < len-1;i++){
            for(j=i;j < len;j++){
                if(strcmp(arr[i],arr[j]) > 0){
                    strcpy(temp,arr[i]);
                    strcpy(arr[i],arr[j]);
                    strcpy(arr[j],temp);
                }
            }
        }
        printf("\\nShorted Names are : \\n");
        for(i = 0;i < len;i++){
            printf("%d : %s\\n",i+1,arr[i]);
        }
        return 0;
    }
    
    `;
});

Array_16.addEventListener('click', () => {
    next = '17';
    var data = Array_16.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,temp,arr[15],arr1[15],arr2[30],j,n2;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            arr2[i] = arr[i];
            j = i;
            while(j > 0 && arr2[j] < arr2[j-1]){
                temp = arr2[j];
                arr2[j] = arr2[j-1];
                arr2[j-1] = temp;
                j--;
            }
        }
        printf("Enter the Size of Second Array : ");
        scanf("%d",&n2);
        for(i = 0;i < n2;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr1[i]);
            arr2[n+i] = arr1[i];
            j = i+n;
            while(j > 0 && arr2[j] < arr2[j-1]){
                temp = arr2[j];
                arr2[j] = arr2[j-1];
                arr2[j-1] = temp;
                j--;
            }
        }
        printf("\\nMerged and Shorted Array is : ");
        for(i = 0; i < n+n2;i++){
            printf("%d ",arr2[i]);
        }
        return 0;
    }
    
    `;
});

Array_17.addEventListener('click', () => {
    next = '18';
    var data = Array_17.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,temp,arr[15],arr1[15],arr2[30],j,n2,k;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        printf("Enter the Size of Second Array : ");
        scanf("%d",&n2);
        for(i = 0;i < n2;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr1[i]);
            j = i;
            while(j > 0 && arr1[j] < arr1[j-1]){
                temp = arr1[j];
                arr1[j] = arr1[j-1];
                arr1[j-1] = temp;
                j--;
            }
        }
        i = 0;
        j = 0;
        k = 0;
        while(i < n && j < n2){
            if(arr[i] < arr1[j]){
                arr2[k] = arr[i];
                i++;
            }
            else{
                arr2[k] = arr1[j];
                j++;
            }
            k++;
        }
        while(i < n){
            arr2[k] = arr[i];
            i++;k++;
        }
        while(j < n2){
            arr2[k] = arr1[j];
            j++;k++;
        }
        printf("Merged Array is : ");
        for(i = 0;i < k;i++){
            printf("%d ",arr2[i]);
        }
        return 0;
    }
    
    `;
});

Array_18.addEventListener('click', () => {
    next = '19';
    var data = Array_18.innerHTML;
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

Array_19.addEventListener('click', () => {
    next = '20';
    var data = Array_19.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,temp,arr[15],pos,j;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Array is : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        printf("\\nEnter the position from where you want to break the Array : ");
        scanf("%d",&pos);
        for(i = 0;i < pos;i++){
            temp = arr[0];
            for(j = 0;j < n-1;j++){
                arr[j] = arr[j+1];
            }
            arr[j] = temp;
        }
        printf("Split Array is : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
    
    `;
});

Array_20.addEventListener('click', () => {
    next = '21';
    var data = Array_20.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void swap_u_ptr(int *ptr,int *ptr2);
    int arr[15];
    
    int main()
    {
        int n,i,temp,pos,pos1;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Array is : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        printf("\\nEnter the positions of Elements You want to swap\\nPosition 1 : ");
        scanf("%d",&pos);
        printf("Position 2 : ");
        scanf("%d",&pos1);
        pos--;
        pos1--;
        swap_u_ptr(&pos,&pos1);
        printf("Array is : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
    
    void swap_u_ptr(int *ptr,int *ptr2)
    {
        int temp = arr[*ptr];
        arr[*ptr] = arr[*ptr2];
        arr[*ptr2] = temp;
    }
    
    `;
});

Array_21.addEventListener('click', () => {
    next = '22';
    var data = Array_21.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,temp,arr[15];
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("\\nEnter the Element You want to Search : ");
        scanf("%d",&temp);
        for(i = 0;i < n;i++){
            if(arr[i] == temp){
                printf("\\nThe Element : %d Found at %d position.\\n",temp,i+1);
                break;
            }
        }
        return 0;
    }
        
    `;
});

Array_22.addEventListener('click', () => {
    next = '23';
    var data = Array_22.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,temp=1,arr[15],j,high,low,mid;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        printf("Please Enter Elements in sorted way \\n");
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
                temp = 0;
            }
        }
        if(temp == 0){
            printf("Please Insert Sorted Elements Next time :[ \\nSorted Array is : ");
            for(i = 0;i < n;i++){
                printf("%d ",arr[i]);
            }
        }
        printf("\\nEnter the Element You want to Search : ");
        scanf("%d",&temp);
        high = n-1;
        low = 0;
        while(low <= high){
            mid = (high+low)/2;
            if(arr[mid] == temp){
                printf("\\nThe Element : %d Found at %d position.\\n",temp,mid+1);
                i = 0;
                break;
            }
            else if(temp > arr[mid]){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        if(i != 0){
            printf("Element %d Not Found :( ",temp);
        }
        return 0;
    }
    
    `;
});

Array_23.addEventListener('click', () => {
    next = '24';
    var data = Array_23.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int find_max(int arr[],int ind,int large);
    int main()
    {
        int n,i,large,arr[15];
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        large = find_max(arr,n-1,arr[0]);
        printf("Largest Element of Array is : %d",large);
        return 0;
    }
    
    int find_max(int arr[],int ind,int large)
    {
        if(ind == 0){
            return large;
        }
        else if(arr[ind] > large){
            large = arr[ind];
        }
        return find_max(arr,ind-1,large);
    }
    
    `;
});
Array_24.addEventListener('click', () => {
    next = '25';
    var data = Array_24.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],even=0,odd=0;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            if(arr[i] % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        printf("Number of Even Numbers : %d\\nNumber of Odd Numbers : %d",even,odd);
        return 0;
    }
      
    `;
});
Array_25.addEventListener('click', () => {
    next = '26';
    var data = Array_25.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],count=0,j;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        for(i = 0;i < n;i++){
            count = 1;
            if(i == 0){
                j = n-1;
                while(j > 0){
                    if(arr[i] == arr[j]){
                        count++;
                    }
                    j--;
                }
                if(count > 1){
                    printf("\\n\The Frequency of %d is  %d in Array.",arr[i],count);
                }
                continue;
            }
            else if(arr[i] == arr[0]){
                continue;
            }
            else{
                j = n-1;
                while(j > i){
                    if(arr[i] == arr[j]){
                        arr[j] = arr[0];
                        count++;
                    }
                    j--;
                }
            }
            if(count > 1){
                printf("\\n\The Frequency of %d is  %d in Array.",arr[i],count);
            }
        }
        return 0;
    }
     
    `;
});
Array_26.addEventListener('click', () => {
    next = '27';
    var data = Array_26.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],pos;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("The the Position of Element : ");
        scanf("%d",&pos);
        if(pos < 0 || pos > n-1){
            printf("No Such position In Array :[ ");
            return 0;
        }
        printf("The Element at Position %d is : %d",pos,arr[pos-1]);
        return 0;
    }
    
    `;
});
Array_27.addEventListener('click', () => {
    next = '28';
    var data = Array_27.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15];
        printf("Enter the Elements of array \\n");
        for(i = 0;i < 15;i++){
            scanf("%d",&arr[i]);
            n++;
        }
        printf("The total Number of Element in Array is : %d",n);
        return 0;
    }
    
    `;
});
Array_28.addEventListener('click', () => {
    next = '29';
    var data = Array_28.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main(void)
    {
 
        int array[5], b, c;
        for (b = 0; b < 10 && (scanf("%d", &c)); b++)
                array[b] = c;
 
        for (b = 0; b < 15; b++)
        	printf("%d ", array[b]);
 
        return 0;
    }
    
    `;
});
Array_29.addEventListener('click', () => {
    next = '30';
    var data = Array_29.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],count=0,count1=0,j;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Alternate Elements of Array is : ");
        for(i = 0;i < n;){
            printf("%d ",arr[i]);
            i += 2;
        }
        return 0;
    }
    
    `;
});
Array_30.addEventListener('click', () => {
    next = '31';
    var data = Array_30.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    void printodd(int array[], int size)
    {
        int xor2 = array[0]; /* Will hold XOR of two odd occurring elements */
        int set;
        int i;
        int n = size - 2;
        int x = 0, y = 0;
     
        /* The xor will basically be xor of two odd occurring elements */
        for (i = 1; i < size; i++)
            xor2 = xor2 ^ array[i]; 
        /* Get one set rightmost bit in the xor2. */
        set = xor2 & ~(xor2 - 1);
        /* Now divide elements in two sets: */
        for (i = 0; i < size; i++)
        {
            /* XOR of first set is finally going to hold one odd occurring number x */
            if (array[i] & set)
            x = x ^ array[i];
            /* XOR of second set is finally going to hold the other odd occurring number y */
            else
            y = y ^ array[i];
        }
        printf("\\n The ODD elements are %d & %d ", x, y);
    }
     
    int main()
    {
        int array[] = {10, 3, 2, 10, 2, 8, 8, 7};
        int arr_size = sizeof(array) / sizeof(array[0]);
        printodd(array, arr_size);
        getchar();
        return 0;
    }
    
    `;
});
Array_31.addEventListener('click', () => {
    next = '32';
    var data = Array_31.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],arr1[15];
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            arr1[i] = ++arr[i];
        }
        printf("Array with Incremented Elements is : ");
        for(i = 0;i < n;i++){
            printf("%d ",arr1[i]);
        }
        return 0;
    }
    
    `;
});
Array_32.addEventListener('click', () => {
    next = '33';
    var data = Array_32.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],count=0,count1=0,j;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        for(i = 0;i < n;i++){
            count = 1;
            if(i == 0){
                j = n-1;
                while(j > 0){
                    if(arr[i] == arr[j]){
                        count++;
                    }
                    j--;
                }
                if(count == 1){
                    count1++;
                }
                continue;
            }
            else if(arr[i] == arr[0]){
                continue;
            }
            else{
                j = n-1;
                while(j > i){
                    if(arr[i] == arr[j]){
                        arr[j] = arr[0];
                        count++;
                    }
                    j--;
                }
            }
            if(count == 1){
                count1++;
            }
        }
        printf("The number of Non-Repeated Elements in Array is : %d",count1);
        return 0;
    }
    
    `;
});
Array_33.addEventListener('click', () => {
    next = '34';
    var data = Array_33.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i,n,j;
        int arr[] = {1,2,3,4,8,9,10};
        n = sizeof(arr)/sizeof(arr[0]);
        for(i=0;i<n-1;i++){
            if((arr[i+1] - arr[i]) > 1){
                printf("The missing Number is : ");
                for(j=arr[i] + 1 ;j < arr[i+1];j++){
                    printf("%d ",j);
                }
            break;
            }
        }
        printf("\\n");
        return 0;
    }
    
    `;
});
Array_34.addEventListener('click', () => {
    next = '35';
    var data = Array_34.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i,arr[10],count = 0,s;
        for(i = 0;i < 10;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            if(arr[i] != 0 && arr[i] != 1){
                printf("You Entered The Number other then 0 and 1 :[");
                return 0;
            }
            else if(arr[i] == 0){
                count++;
            }
        }
        s = sizeof(arr)/sizeof(arr[0]);
        i = 0;
        while(count > 0){
            arr[i] = 0;
            count--;
            i++;
        }
        while(i < s){
            arr[i] = 1;
            i++;
        }
        printf("The Segregated Array is : ");
        for(i = 0;i < s;i++){
            printf("%d ",arr[i]);
        }
        return 0;
    }
    
    `;
});
Array_35.addEventListener('click', () => {
    next = '36';
    var data = Array_35.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int n,i,arr[15],mn=0,mx=0;
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            if(i == 0){
                mn = arr[0];
                mx = arr[0];
            }
            if(arr[i] < mn){
                mn = arr[i];
            }
            if(arr[i] > mx){
                mx = arr[i];
            }
        }
        printf("\\nThe difference Between %d and %d is Largest which is : %d\\n",mn,mx,mx-mn);
        return 0;
    }
    
    `;
});

Array_36.addEventListener('click', () => {
    next = '37';
    var data = Array_36.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    #include< string.h >

    int main()
    {
        char ch[100];
        printf("Enter a String : ");
        scanf("%s",ch);
        int i,s;
        s = strlen(ch);
        int arr[s];
        printf("The ASCII Values with Character is \\nCharacter  :  ASCII\\n");
        for(i = 0;i < s;i++){
            arr[i] = (int)ch[i];
            printf("    %c      :     %d\\n",ch[i],arr[i]);
        }
        return 0;
    }
    
    `;
});
Array_37.addEventListener('click', () => {
    next = '38';
    var data = Array_37.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include < stdio.h >
    int main()
    {
        int i,n,arr[15],arr1[15];
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            arr1[i] = arr[i] * arr[i];
        }
        printf("Number : Square\\n");
        for(i = 0;i < n;i++){
            printf("   %d  :  %d  \\n",arr[i],arr1[i]);
        }
        return 0;
    }
    
    `;
});

Array_38.addEventListener('click', () => {
    next = '39';
    var data = Array_38.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include< stdio.h >
    int main()
    {
        int n,i,sum,j,small,elm,elm1;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        sum = arr[0];
        small = arr[0];
        for(i = 0;i < n-1;i++){
            for(j =i+1;j < n;j++){
                sum = arr[i] + arr[j];
                if(sum < 0){
                    sum = -(sum);
                }
                if(sum < small){
                    small = sum;
                    elm = arr[i];
                    elm1 = arr[j];
                }
            }
        }
        printf("The Sum of %d and %d is Closest to 0(zero).",elm,elm1);
        return 0;
    }`;
});

Array_39.addEventListener('click', () => {
    next = '40';
    var data = Array_39.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include< stdio.h >
    int main()
    {
        int n,i,key,flag;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Enter the Number You want to Search for : ");
        scanf("%d",&key);
        for(i = 0;i < n/2+1;i++){
            if(arr[i] == key){
                if(arr[i+(n/2)] == key){
                    flag = 1;
                    break;
                }
                else{
                    flag = 0;
                    break;
                }
            }
        }
        if(flag){
            printf("The Number %d comes more than N/2 times in the Array.",key);
        }
        else{printf("The Number %d not comes more than N/2 times in the Array.",key);}
        return 0;
    }
    
    `;
});

Array_40.addEventListener('click', () => {
    next = '41';
    var data = Array_40.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include< stdio.h >
    int main()
    {
        int n,i,temp,arr[15],arr1[15],arr2[30],j,n2,k;
        float m;
        printf("Please Enter Sorted Array :) \\n");
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j = i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        printf("Enter the Size of Second Array : ");
        scanf("%d",&n2);
        if(n != n2){
            printf("Both Array's Size is Unequal.");
            return 0;
        }
        for(i = 0;i < n2;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr1[i]);
            j = i;
            while(j > 0 && arr1[j] < arr1[j-1]){
                temp = arr1[j];
                arr1[j] = arr1[j-1];
                arr1[j-1] = temp;
                j--;
            }
        }
        i = 0;
        j = 0;
        k = 0;
        while(i < n && j < n2){
            if(arr[i] < arr1[j]){
                arr2[k] = arr[i];
                i++;
            }
            else{
                arr2[k] = arr1[j];
                j++;
            }
            k++;
        }
        while(i < n){
            arr2[k] = arr[i];
            i++;k++;
        }
        while(j < n2){
            arr2[k] = arr1[j];
            j++;k++;
        }
        m = (arr2[k/2] + arr2[k/2+1])/(float)2;
        printf("Median of Both the Array is : %f",m);
        return 0;
    }
    `;
});

Array_41.addEventListener('click', () => {
    next = '42';
    var data = Array_41.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include< stdio.h >
    int main()
    {
        int n,i,arr[15],arr1[15],un[30],intr[15]={NULL},n2,j,k=0,k1=0,flag = 0;
        printf("Please Enter Sorted Array :) \\n");
        printf("Enter the Size of First Array : ");
        scanf("%d",&n);
        for(i = 0;i < n;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
        }
        printf("Enter the Size of Second Array : ");
        scanf("%d",&n2);
        for(i = 0;i < n2;i++){
        printf("Enter Element %d : ",i+1);
            scanf("%d",&arr1[i]);
        }
        printf("\\nElements of First Array are : { %d ",arr[0]);
        un[k1++] = arr[0];
        for(i = 1;i < n;i++){
            printf(", %d ",arr[i]);
            un[k1] = arr[i];
            k1++;
        }
        printf("}\\nElements of Second Array are : { %d ",arr1[0]);
        for(i = 1;i < n2;i++){
            printf(", %d ",arr1[i]);
        }
        printf("}\\n\\n");
        for(i = 0;i < n;i++){
            for(j = 0;j < n2;j++){
                if(i == 0){
                    if(arr[i] == arr1[j]){
                        intr[k] = arr[i];
                        k++;
                        continue;
                    }
                }
                else if(arr[i] == arr[0]){
                    continue;
                }
                else{
                    if(arr[i] == arr1[j]){
                        intr[k] = arr[i];
                        arr1[j] = arr[0];
                        k++;
                    }
                }
            }
        }
        for(i = 0;i < n2;i++){
            flag = 0;
            for(j = 0;j < k;j++){
                if(arr1[i] == intr[j]){
                    flag = 1;
                }
            }
            if(flag == 0){
                un[k1] = arr1[i];
                k1++;
            }
        }
        if(intr[0] == NULL){
            printf("The Intersection of The Both Array is : { NULL ");
        }
        else{
            printf("The Intersection of The Both Array is : { %d ",intr[0]);
        }
        for(i = 1;i < k;i++){
            printf(", %d ",intr[i]);
        }
        printf("}\\nUnion of Both the Array is : { %d ",un[0]);
        for(i = 1;i < k1;i++){
            printf(", %d ",un[i]);
        }
        printf("}\\n\\n");
        return 0;
    }
    `;
});

Array_42.addEventListener('click', () => {
    next = '43';
    var data = Array_42.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `include< stdio.h >
    int main()
    {
        int n,i,j,temp,key,cng,flr;
        printf("Enter the Size of Array : ");
        scanf("%d",&n);
        int arr[n];
        printf("Enter the Elements of Array in Sorted Form : \\n");
        for(i=0;i<n;i++){
            printf("Enter Element %d : ",i+1);
            scanf("%d",&arr[i]);
            j=i;
            while(j > 0 && arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        printf("\\nEnter the Number for which You want to know Ceiling and Floor : ");
        scanf("%d",&key);
        if(key <= arr[0]){
            printf("\\nCeiling : %d \\nFloor : No Floor.\\n",arr[0]);
        }
        else if(key >= arr[n-1]){
            printf("\\nCeiling : No Ceiling.\\nFloor : %d",arr[n-1]);
        }
        else{
            i = 0;
            while(i < n-1){
                if(arr[i] > key){
                    break;
                }
                i++;
            }
            printf("\\nCeiling : %d\\nFloor : %d",arr[i],arr[i-1]);
        }
        return 0;
    }

`;
});

Array_43.addEventListener('click', () => {
    next = '1';
    var data = Array_43.innerHTML;
    page[0].style.display = 'none';
    My_code.innerHTML = data;codingKiya2[0].style.display = 'grid';
    pre[1].style.display = 'none';
    sol.style.display = 'block';
    sol.innerHTML = data;
    pre[0].style.display = 'block';
    pre[0].innerHTML = `#include< stdio.h >
    #include < stdlib.h >
 
    struct btnode
    {
        int value;
        struct btnode *r,*l;
    }*root = NULL, *temp = NULL;
     
    void create();
    void insert();
    void add(struct btnode *t);
    void computesum(struct btnode *t);
    void display();
     
    int count = 0, sum[100] = {0}, max = 0;
     
    void main()
    {
        int ch;
     
        printf("\\n OPERATIONS ---");
        printf("\\n 1] Insert an element into tree");
        printf("\\n 2] Display the sum of the elements at the same level");
        printf("\\n 3] Exit ");    
        while (1)
        {                        
            printf("\\nEnter your choice : ");
            scanf("%d", &ch);
            switch (ch)
            {
            case 1:    
                insert();
                break;
            case 2: 
                count = 0;
                max = 0;
                computesum(root);
                display();
                break;
            case 3: 
                exit(0);
            default :     
                printf("Wrong choice, Please enter correct choice  ");
                break;    
            }
        }
    }
     
    /* To create a new node with the data from the user */
    void create()
    {
        int data;
     
        printf("Enter the data of node : ");
        scanf("%d", &data);
        temp = (struct btnode* ) malloc(1*(sizeof(struct btnode)));
        temp->value = data;
        temp->l = temp->r = NULL;
    }
     
    /* To check for root node and then create it */
    void insert()
    {
        create();
     
        if (root == NULL)
            root = temp;
        else
            add(root);
    }
     
    /* Search for the appropriate position to insert the new node */
    void add(struct btnode *t)
    {
        if ((temp->value > t->value) && (t->r != NULL))        /* value more than root node value insert at right */
            add(t->r);
        else if ((temp->value > t->value) && (t->r == NULL))        
            t->r = temp;
        else if ((temp->value < t->value) && (t->l != NULL))        /* value less than root node value insert at left */
            add(t->l);
        else if ((temp->value < t->value) && (t->l==NULL))
            t->l = temp;
    }
     
    /* Function to find the sum of nodes at same distance */
    void computesum(struct btnode *t)
    {
        if (root == NULL)
        {    
            printf("Tree is empty ");
            return;
        }
        if (t->l != NULL)
        {
            count++;    
            computesum(t->l);
        }
        sum[count] = sum[count] + t->value;  /* addition of elelment by row wise */
        if (max < count)
            max = count;
        if (t->r != NULL)
        {
            count++;        
            computesum(t->r);
        }
        count--;
    }
     
    /* To display the sum of the nodes at the same distance */
    void display()
    {
        int i;
     
        printf("Sum of nodes : \\n Level \t Sum ");
        for (i = 0; i <= max; i++)
           printf("\\n %d \t: %d ", i, sum[i]);
    }
    `;
});

var previous = document.getElementsByClassName('previous');

previous[0].addEventListener('click', () => {
    if(next == '2'){
        next = '45';
    }
    else if(next == '1'){
        next = '44';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Array-' + next).click();
});

previous[1].addEventListener('click', () => {
    if(next == '2'){
        next = '45';
    }
    else if(next == '1'){
        next = '44';
    }
    next = String(parseInt(next) - 2);
    document.getElementById('Array-' + next).click();
});

function code_change()
{
   document.getElementById('Array-' + next).click();
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
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Array-Practice/";
});

home[1].addEventListener('click', () => {
    window.location = "http://127.0.0.1:8000/Innovative-Learning/Array-Practice/";
});