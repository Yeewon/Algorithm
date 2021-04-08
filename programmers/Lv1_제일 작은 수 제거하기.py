def solution(n):
    if len(n) == 1:
        return [-1]
    else:
        n.remove(min(n))
        return n
n = [4,3,2,1]
print(solution(n))