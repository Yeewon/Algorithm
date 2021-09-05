from collections import deque
# N, M을 공백을 기준으로 구분하여 입력 받기
n, m = map(int, input().split())

# 2차원 리스트의 맵 정보 입력 받기
graph = []
for i in range(n):
    graph.append(list(map(int, input())))
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    queue = deque()
    queue.append((x,y))
    while deque:
        x, y = queue.popleft()
        for i in range(4):
            nx = x+ dx[i]
            ny = y+ dy[i]
            if nx < 0 or nx >=n or ny <0 or ny >= m:
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y]+1
                queue.apend((nx, ny))

print(bfs(0,0))
