d = [2,2,3,3]
budget = 10

def solution(d, budget):
    d.sort()
    cnt = 0
    for i in d:
        if budget-i >=0:
            budget -= i
            cnt +=1
        else:
            return cnt
    return cnt

print(solution(d, budget))