import math, sys
n,m = map(int, sys.stdin.readline().strip().split())
#공식사용
up = math.factorial(n)
down = math.factorial(n-m)*math.factorial(m)
print(up//down)