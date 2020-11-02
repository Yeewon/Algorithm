#print(ord('a'))
from collections import deque
def solution(encrypted_text, key, rotation):
    result = ''

    rotation = -(rotation)
    q = deque(encrypted_text)
    q.rotate(rotation)
    text = list(q)
    text.remove('\t')

    #print(text)
    #print(key)
    #['i', 'g', 'o', 'p', 't', 'v', 'f', 'b', 'q', 'y', 'y']
    for i in range(len(key)):
        print(ord(text[i]) - 96,ord(key[i]) - 96)
        if (ord(text[i])-96 - ord(key[i])-96) < 0:
            result += ''
        else:
            result += chr(abs(ord(text[i]) - ord(key[i])) + 96)
    return result


print(solution('qyyigoptvfb	', 'abcdefghijk', 3))