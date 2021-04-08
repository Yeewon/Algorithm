def solution(n):
    result = ''

    while n:
        result += str(n%3)
        n //= 3

    return int(result, 3)

n = 45
print(solution(n))