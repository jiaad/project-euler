#include <stdio.h>
#include <unistd.h>
void ft_putchar(char c)
{
	write(1, &c, 1);
}

int primen(unsigned long int num)
{
	unsigned long  int i;
	int res = 1;
	unsigned long int great = 1;
 	i = 2;
	while(great < num)
	{
		if((num % i == 0))
		{
			printf("current iiii == %ld \n", i);
			printf("great  == %ld \n", great *= i);
		}
		i++;
	}
	printf("i is == %ld\n", i - 1);
	if (res == 1)
	printf("it's a prim");
	return (res);
}

void fizz(int nb)
{
	int i;
	i = 0;
	while (i <= 20)
	{
	if (i < 10)
	{
		ft_putchar(i + 48 );
        ft_putchar('\n');
	}else
	{
		ft_putchar(i / 10 + 48);
		ft_putchar(i % 10 + 48);
        ft_putchar('\n');
	}
	i++;
	}
	
}


int ft_square_sum_natural(int n)
{
    int i;
    int res1 = 0;
    i = 0;
    while(i <= n)
    {
        res1 = res1 + i;
    //    printf("res == %d \n", res1);
        i++;
    }
    return res1 * res1;
}
int ft_sum_square(int n)
{
    int i, res;
    i = 0;
    res = 0;
    while(i <= n)
    {
        res+= (i * i);
    //  printf("res is ::: %d \n", res);
        i++;
    }
    return res;
}
int ft_sum_square_diff(int n, int n2)
{
    return (n - n2);
}
int smallest_helper(int i)
 {
    int n = 2;
    while (n <= 20)
    {
        if (i % n == 0)
            return (1);
        ++n;
    }

    /* if(i % 1 == 0 && i % 2 == 0 && i % 3 == 0 && i % 4 == 0 && i % 5 == 0 
            && i % 6 == 0 && i % 7 == 0 && i % 7 == 0 && i % 8 == 0 && i % 9 == 0 && i % 10 == 0 
            && i % 11 == 0 && i % 12 == 0 && i % 13 == 0 && i % 14 == 0 && i % 15 == 0 
            && i % 16 == 0   && i % 17 == 0  && i % 18 == 0 && i % 19 == 0 && i % 20 == 0)
        return(1);*/
    return (0);
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

int main()
{
    //fizz(20);
	//printf("is :: %d \n", ft_square_sum_natural(100));
   // printf("sum square is :::: %d\n", ft_sum_square(100));
    //printf("the real num is :: %d\n", ft_sum_square_diff(ft_square_sum_natural(100), ft_sum_square(100)));
    smallest_multiple();
}









