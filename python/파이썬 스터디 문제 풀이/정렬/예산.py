# 오름차순 정렬해서 하나씩 뺀다.
def solution(departments, budget):
    departments.sort()
    count = 0

    for department in departments:
        if budget - department < 0:
            return count
        budget -= department
        count += 1
    return count