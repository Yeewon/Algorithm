def solution(s):
    l = len(s)
    return True if (l==4 or l==6) and s.isdigit() else False


s = "a234"
print(solution(s))