from itertools import combinations #순서 없다.
import sys
n, m = map(int, sys.stdin.readline().strip().split())
list = [i for i in range(1,n+1)]

cnt = 0

for i in combinations(list, m):
    cnt+= 1
print(cnt)





