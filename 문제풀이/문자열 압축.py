
def solution(s):
    answer = len(s) #최악의 경우
    for step in range(1, len(s)//2+1):
        result = ""
        prev = s[0:step]
        count = 1

        for j in range(step, len(s), step):
            if prev == s[j:j+step]:
                count += 1
            else:
                result += str(count)+prev if count>= 2 else prev
                prev = s[j:j+step]
                count = 1
        result += str(count)+prev if count>= 2 else prev
        answer = min(answer, len(result))
    return answer

s = input()
print(solution(s))

