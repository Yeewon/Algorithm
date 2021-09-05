import sys
n = int(sys.stdin.readline())
p = list(map(int, sys.stdin.readline().strip().split()))
p.sort()

total = 0
cur = 0

for i in p:
    cur += i
    total += cur

print(total)