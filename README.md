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
