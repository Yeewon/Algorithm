from functools import cmp_to_key

def solution(numbers):
    numbers = [str(number) for number in numbers]
    numbers = sorted(numbers, reverse = True, key = cmp_to_key(comparator))
    return str(int(''.join(numbers)))

def comparator(a,b):
    c1 = int(a+b)
    c2 = int(b+a)
    return (c1> c2) - (c2>c1)