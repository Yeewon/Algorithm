def solution(n):
    answer = ''
    while n:
        n,m = divmod(n, 3)
        answer = '412'[m] + answer
        if not m:
            n -= 1

    return answer


print(solution(10))
#513 -> 124224