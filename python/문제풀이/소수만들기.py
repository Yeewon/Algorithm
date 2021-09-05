from itertools import combinations
import math

def check_sosu(num):
    for i in range(2, int(math.sqrt(num)+1)):
        if num%i == 0:
            return False
        else:
            continue
    return True

def solution(nums):
    cnt = 0
    comb = list(combinations(sorted(nums),3))
    for data in comb:
        if check_sosu(sum(data)):
            cnt+=1
    return cnt

nums = [1,2,7,6,4]
print(solution(nums))