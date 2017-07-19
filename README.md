# happy-numbers

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

## Pseudo Code

The first step to creating pseudo code to evaluate happy numbers is to remind ourselves how to determine if a number is happy or not. You take any number, break the number into single digits, then multiply each digit by itself and add up the sum of all you multiplications. You repeat this process until either you get the number 1 (the number you started with is happy) or your results match a pattern that indicates an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).

Let's put these steps into a simple set of instructions, or pseudo code, to evaluate whether or not one number is happy or unhappy:

1. First, see if our number has more than one digit.
    1. If yes, split the number into single digits and multiply each digit by itself. Then add up the multiplication results into a single sum, or total.
    2. If no, multiply the number by itself to get a total.
2. See if the total, from either Step 2 operation, is a number in the list of numbers that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
    1. If yes, our initial number is an unhappy number. Stop evaluating.
    2. If no, repeat this multi-digit evaluation process in Step 1 until the result is 1.
3. When the result is 1, we confirm it is a happy number.

## Python Code

```
#!/usr/bin/env python

#  _  _   _   ___ _____   __
# | || | /_\ | _ \ _ \ \ / /
# | __ |/ _ \|  _/  _/\ V / 
# |_||_/_/ \_\_| |_|   |_|  
#                           
# a program to find all the happy numbers less than N
# inspired by a challenge on programming praxis
#

import sys

def sum_digits_squared(n):
    s = 0
    while n > 0:
	n, m = n // 10, n % 10
	s = s + m * m
    return s

def is_happy(n):
    n0, n1 = n, n
    while True:
	n0 = sum_digits_squared(n0)
	if n0 == 1:
	    return True
	n1 = sum_digits_squared(n1)
	n1 = sum_digits_squared(n1)
	if n0 == n1:
	    return False

happy =  filter(lambda x : is_happy(x), range(int(sys.argv[1])))

for h in happy:
	print h
```

## Haskell 

```
isHappy :: (Read a, Integral a) => a -> Bool
isHappy = f [] where
    f _  1 = True
    f xs n = notElem n xs && f (n:xs) (sum . map (^ 2) $ digits n)
    digits = map (read . return) . show

happyUpto :: (Read a, Integral a) => a -> [a]
happyUpto n = filter isHappy [1..n - 1]
```

# Java

```
public class HappyNumber {
    public boolean isHappy(int n) {
        while (true) {
            int next = 0;

            while (n > 0) {
                next += (n % 10) * (n % 10);
                n /= 10;
            }

            if (next < 10) {
                if (next == 1 || next == 7) return true;
                else return false;
            }
            n = next;
        }
    }
}
```

# C

```
#include<stdio.h>
#include<conio.h>
int num,sum[500],prevsum,i,j,digit,res,orig,sums;
int square(int n);
main()
{
    clrscr();
    printf("Please enter a number: ");
    scanf("%i",&orig);
    num=orig;
    for(i=1;i<=500;i++)
    {
        while(num>0)
        {
            digit=num%10;
            num=num/10;
            sums=sums+(digit*digit);
        }
        sum[i]=sums;
        prevsum=sum[i];
        num=sum[i];
        if((prevsum==1)||(prevsum==4))
        break;
    }
    for(i=1;sum[i]>0;i++)
    {
        printf("%i--",sum[j]);
    }
    if(prevsum==1)
    printf("%i is Happy number.",orig);
    else if(prevsum==4)
    printf("%i belongs to the unhappy numbers.",orig);
    getche();
    return 0;
}
```

# Javascript

```
function happy(number) {
  var m, digit;
  var cycle = [];

  while (number != 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += digit * digit;
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number == 1);
}

var cnt = 8;
var number = 1;
let res = []
while (cnt-- > 0) {
  while (!happy(number))
    number++;
  res.push(number)
  number++;
}

  var cnt = 8;
  var number = 1;
  let res = []
  while (cnt-- > 0) {
    while (!happy(number))
      number++;
    res.push(number)
    number++;
  }

  console.log(`Happy Numbers: ${res}.`)
  
 ```
