#include <stdio.h>
#include <time.h>
int smallest_helper(int i)
 {
    int n = 2;
    while (n <= 20)
    {
        if (i % n != 0)
            return (0);
            n++;
    }
   return (1);
 }

 int smallest_multiple()
 {
     int res = 0;
     int i = 1;
         while(i > 0)
         {
             res = i;
       if(smallest_helper(i) == 1)
           break;
             i++;
         }
     printf("rs == %d \n", res);
     return res;
 }

int main(){

    smallest_multiple();
}
