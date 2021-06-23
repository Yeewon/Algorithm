from collections import deque

def solution(n, m, images):
    visited = [[False]*m for _ in range(n)]
    answer = 0

    for i in range(n):
        for j in range(m):
            if visited[i][j]:
                continue
            visited[i][j] = True
            answer += bfs(i, j, n, m, images, visited)
    return answer

def bfs(x, y, n, m, images, visited):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if visited[nx][ny]:
                continue
            if images[x][y] != images[nx][ny]:
                continue
            visited[nx][ny] = True
            queue.append((nx, ny))
    return True
