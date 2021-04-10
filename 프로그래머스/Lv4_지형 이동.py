def solution(land, height):
    n = len(land)
    visited = [[0]*n for _ in range(n)]

    dx = [-1,1,0,0]
    dy = [0,0,-1,1]


    def dfs(x,y):
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if x <= -1 or x >= n or y <= -1 or y >= n:
                continue
            if visited[nx][ny] == 0 and abs(land[nx][ny] - land[x][y]) < height:
                visited[nx][ny] = 1
                dfs(nx,ny)

    visited[0][0] =1
    dfs(0,0)
    return visited



land = [[1, 4, 8, 10],
        [5, 5, 5, 5],
        [10, 10, 10, 10],
        [10, 10, 10, 20]]

height = 3
print(solution(land, height))