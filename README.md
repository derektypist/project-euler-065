# Project Euler 065 - Convergents of e

The square root of 2 can be written as an infinite continued fraction.

&radic;(2) = 1 + 1/(2 + 1 / (2 + 1 / (2 + 1 / (2 + ...))))

The infinite continued fraction can be written &radic;(2) = [1;(2)], (2) indicates
that 2 repeats ad infinitum.  In a similar way, &radic;(23) = [4;(1,3,1,8)].

It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations.  Let us consider the convergents for &radic;(2).

1 + 1/2 = 3/2, 1 + 1 + (2+1/2) = 7/5, 1 + 1 + (2 + 1 /(2+1/2)) = 17/12, 1 + 1 + (2+1/(2+1/(2+1/2))) = 41/29

Hence the sequence for the first ten convergents of &radic;2 are:
1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...

What is most surprising is that the important mathematical constant
e = [2;1,2,1,1,4,1,1,6,1,...,1,2k,1,...].

The first ten terms in the convergents of e are:
2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...

The sum of digits in the numerator of the 10th convergent is 1 + 4 + 5 + 7 = 17.

Find the sum of the digits in the numerator of the nth convergent of the continued fraction for e.

Information at [Project Euler 065](https://projecteuler.net/problem=65)

## UX

**User Stories**

As a user, I expect the function `convergentsOfE(10)` to return a number.

As a user, I expect the function `convergentsOfE(10)` to return 17.

As a user, I expect the function `convergentsOfE(30)` to return 53.

As a user, I expect the function `convergentsOfE(50)` to return 91.

As a user, I expect the function `convergentsOfE(70)` to return 169.

As a user, I expect the function `convergentsOfE(100)` to return 272.

User Stories on function `convergentsOfE(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 065](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-65-convergents-of-e)

**Information Architecture**

The function `convergentsOfE(n)` returns a number, where n is a number between 1 and 100.