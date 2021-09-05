import math
def solution(dartResult):
    answer = 0
    i = 0
    n = len(dartResult)
    bonus = {'S': 1, 'D':2,'T':3}
    score = []
    while i < n:
        x = dartResult[i]
        if x.isdigit():
            if dartResult[i+1].isdigit():
                score.append(int(math.pow(10, bonus[dartResult[i+2]])))
                i += 2
            else:
                score.append(int(math.pow(int(x), bonus[dartResult[i+1]])))
                i += 1

        elif x == '*':
            score[-1] *= 2
            if len(score) > 1:
                score[-2] *= 2

        else: # 아차상(#)
            score[-1] *= -1
        i+=1
    return sum(score)


dartResult = '1D2S3T*'
print(solution(dartResult))