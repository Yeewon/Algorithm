import math
def solution(n):
    num = math.sqrt(n)
    if num == int(num):
        return int(math.pow(num+1,2))
    else:
        return -1


n = 3
print(solution(n))