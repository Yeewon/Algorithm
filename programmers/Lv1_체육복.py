def solution(n, lost, reserve):
    student = [i for i in range(1, n+1)]

    # data 정제
    dlost = list(set(lost) - set(reserve))
    dreserve = list(set(reserve) - set(lost))

    #현재 체육복이 있는 학생
    student = list(set(student) - set(dlost))

    for num in dlost:
        if num-1 in dreserve:
            student.append(num)
            dreserve.remove(num-1)
            continue
        elif num+1 in dreserve:
            student.append(num)
            dreserve.remove(num+1)
            continue

    return len(student)

n = 5
lost = [2,4]
reserve = [3]
print(solution(n, lost,reserve))

#2, [1], [2] -> 2
#5 [2, 3, 4] [1, 2, 3] 4
#5 [1, 2, 3] [2, 3, 4] 4