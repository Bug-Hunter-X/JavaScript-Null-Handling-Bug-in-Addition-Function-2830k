# JavaScript Null Handling Bug

This repository demonstrates a subtle bug in a JavaScript function that handles null values during addition. The original code incorrectly returns 0 if either argument is null, regardless of the type of the other argument.

## Bug Description

The `foo` function is designed to add two numbers.  However, it fails to correctly handle the case where one input is null and the other is a non-numeric value.  This leads to unexpected results, such as adding null and a string resulting in a string concatenation instead of the intended 0 return value. 

## Solution

The solution checks if both inputs are numbers before performing the addition. If either input is not a number or is null, it defaults to 0, ensuring the correct outcome.