'''
1. 빈 문자열 -> 빈 문자열
2.
'''

#slicing balance string
def slice_balance(s):
    for i in range(1,len(s),2):
        if s[:i+1].count('(') == s[:i+1].count(')'):
            u = s[:i+1]
            v = s[i+1:]
            return u,v
#check right string.
def check_right(s):
    cnt = 0
    for c in s:
        if c == '(':
            cnt +=1
        else:
            if cnt == 0:
                return False
            cnt -= 1
    return True

def change(s):
    result = ''
    for c in s:
        if c =='(':
            result += ')'
        else:
            result += '('
    return result

def solution(p):
    answer = ''

    if p == '':
        return answer
    # 균형잡힌 괄호 문자열 u,v로 분리
    u, v = slice_balance(p)

    #u가 올바르면
    if check_right(u):
        answer = u + solution(v)
    # u가 올바르지 않으면
    else:
        answer = '('
        answer += solution(v)
        answer += ')'

        u = u[1:len(u)-1]
        #괄호 방향 뒤집는다.
        answer += change(u)

    return answer

#p = "(()())()"
#p = ')('
p = '()))((()'
print(solution(p))
