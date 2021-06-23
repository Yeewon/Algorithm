skill = "CBD"
skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]

def check(result, skill):
    for i in range(len(result)):
        if result[i] == skill[i]:
            continue
        else:
            return False
    return True


def solution(skill, skill_trees):
    answer = 0
    for input in skill_trees:
        result = ""
        for i in input:
            if i in skill:
                result+= i
        #print(result)
        if check(result,skill):
            answer += 1
    return answer

print(solution(skill, skill_trees))



