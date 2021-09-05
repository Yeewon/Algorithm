def solution(data):
    data = list(data)
    idx = 0
    for i,x in enumerate(data):
        if x == ' ':
            idx = 0
        else:
            if idx%2 == 0:
                data[i] = x.upper()
            else:
                data[i] = x.lower()
            idx += 1
    return ''.join(data)

s = "hello  hello"
print(solution(s))