def solution(s, n):
    s = list(s)
    for i, x in enumerate(s):
        if x.islower():
            move = ord(x) + n
            if move > ord('z'):
                s[i] = chr(move-ord('z')+ord('a')-1)
            else:
                s[i] = chr(move)
        elif x.isupper():
            move = ord(x) + n
            if move > ord('Z'):
                s[i] = chr(move-ord('Z')+ord('A')-1)
            else:
                s[i] = chr(move)
        else:
            continue

    return ''.join(s)

s = "a B z"
n = 4
print(solution(s,n))