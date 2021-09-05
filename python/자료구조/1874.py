import sys

n = int(sys.stdin.readline().strip())

cnt = 0
stack = []
result = []
no_message = True

for i in range(n):
    x = int(sys.stdin.readline())

    #push
    while cnt < x:
        cnt += 1
        stack.append(cnt)
        result.append('+')

    #pop가능한 경우
    if stack[-1] == x:
        stack.pop()
        result.append('-')

    else:
        no_message = False
        break

if no_message == False:
    print('NO')
else:
    print('\n'.join(result))




