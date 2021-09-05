import sys
n = int(sys.stdin.readline())
make = []

for x in range(0, n//5+1):
    res = n-5*x
    if res%3 != 0: #정확하게 n킬로를 만들 수 없다.
        continue
    else:
        make.append(x+(res//3))

if len(make) == 0:
    print(-1)
else:
    print(min(make))
