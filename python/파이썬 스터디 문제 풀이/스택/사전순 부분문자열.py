def solution(string):
    result =[]
    for alpha in string:
        while result and alpha > result[-1]:
            result.pop()
        result.append(alpha)
    return ''.join(result)