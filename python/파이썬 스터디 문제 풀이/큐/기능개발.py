import math

def solution(progresses, speeds):
    result = []
    pre_day = math.ceil((100 - progresses[0]) / speeds[0])
    cnt = 1

    for i in range(1, len(progresses)):
        deployment_day = math.ceil((100 - progresses[i]) / speeds[i])
        if deployment_day <= pre_day:
            cnt += 1
        else:
            result.append(cnt)
            pre_day = deployment_day
            cnt = 1
    result.append(cnt)
    return result
