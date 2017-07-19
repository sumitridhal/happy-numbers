# happy-numbers

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

## Pseudo Code
Happy numbers, and other numeric patterns, can be identified programatically with code. You might never have to write code to look for happy numbers, but you might code to look for a pattern of numbers (even numbers versus odd, for example) and do something when you find part of the pattern.

The first step to creating pseudo code to evaluate happy numbers is to remind ourselves how to determine if a number is happy or not. You take any number, break the number into single digits, then multiply each digit by itself and add up the sum of all you multiplications. You repeat this process until either you get the number 1 (the number you started with is happy) or your results match a pattern that indicates an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).

Let's put these steps into a simple set of instructions, or pseudo code, to evaluate whether or not one number is happy or unhappy:

1. First, see if our number has more than one digit.
  ..a. If yes, split the number into single digits and multiply each digit by itself. Then add up the multiplication results into a single sum, or total.
  ..b. If no, multiply the number by itself to get a total.
2. See if the total, from either Step 2 operation, is a number in the list of numbers that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
  ..a. If yes, our initial number is an unhappy number. Stop evaluating.
  ..b. If no, repeat this multi-digit evaluation process in Step 1 until the result is 1.
3. When the result is 1, we confirm it is a happy number.

Notice how we use conditional “if” statements to determine the next step in our process. Conditional statements are very common in software programming.

Let's make this slightly more complicated. Let's imagine we want to process all numbers from 1 to 1000 to find happy and unhappy numbers. As we work through our numbers, automatically with code, we will compile a list of happy numbers and another list of unhappy numbers.

Here's how we could adapt our pseudo code to automate the testing of many numbers to find out which are happy and unhappy. We'll start with a current number set to 1 and evaluate numbers up to 1000:

1. See if the current number is 1.
  a. If yes, we're starting the evaluation process.
  b. If no, the current number is what we set in Step 4 below, the next number to evaluate.
See if our current number has more than one digit.
If yes, split the current number into single digits and multiply each digit by itself. Then add up the multiplication results into a single sum, or total.
If no, multiply the number by itself to get a total.
See if the total, from either Step 2 operation, is a number in the list that indicates it is an unhappy number (4, 16, 37, 58, 89, 145, 42, 20).
If yes, our current number is an unhappy number. Stop evaluating. Add the current number to our list of unhappy numbers.
If no, repeat this multi-digit evaluation process in Step 1 until the result is 1. When the result is 1, we confirm our current number is a happy number. Add the current number to the list of happy numbers.
See if the current number is less than or equal to 1000, the limit and last number to evaluate.
If yes, increase our current number by one. Repeat steps 1, 2, and 3.
If no, display our list of happy numbers and unhappy numbers.
Pseudo code can take many forms, from simple to more complex. The goal of pseudo code is to work through a problem on paper or onscreen before taking time to code. You can find problems earlier which means less buggy code. Plus pseudo code makes more clear the connection between actual coding and math problems like Happy Numbers.
