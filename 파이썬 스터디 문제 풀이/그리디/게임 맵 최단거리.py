from collections import deque
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    return bfs(n, m, maps)

def bfs(n, m, maps):
    DELTAS = ((0, 1), (0, -1), (1, 0), (-1, 0))
    queue = deque([(0, 0)])
    NOT_ARRIVED = 1

    while queue:
        x, y = queue.popleft()
        for dx, dy in DELTAS:
            nx = x + dx
            ny = y + dy
            if nx < 0 or nx >= n or ny < 0 or ny >= m or not maps[nx][ny]:
                continue

            if maps[nx][ny] == NOT_ARRIVED:
                maps[nx][ny] = maps[x][y] + NOT_ARRIVED
                queue.append((nx, ny))

    return -1 if maps[-1][-1] == 1 else maps[-1][-1]