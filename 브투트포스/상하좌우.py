import time
n = int(input())
data = list(map(str, input().split()))
s = time.time()
#LRUD
dir = ['L','R','U','D']
dx = [0,0,-1,1]
dy = [-1,1,0,0]

x, y = 1, 1

for i in data:
    idx = dir.index(i)
    x += dx[idx]
    y += dy[idx]

    if x<1 or x>n or y<1 or y>n:
        x -= dx[idx]
        y -= dy[idx]

print(x,y)
e = time.time()
print(s-e)