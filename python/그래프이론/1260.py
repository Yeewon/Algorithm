import sys
In = sys.stdin.readline

n, m, v = map(int, In().split())
edge = [[] for _ in range(n+1)]

for _ in range(m):
    n1, n2 = map(int, In().split())
    edge[n1].append(n2)
    edge[n2].append(n1)

for i in range(len(edge)):
    edge[i].sort()

visited = [0] * (n + 1)
def dfs(v):
    visited[v] = 1
    dfsRes.append(v)

    for e in edge[v]: #인접한 정점중에서
        if visited[e] == 0 : #방문하지 않았으면
            visited[e] = 1
            dfs(e) #그 정점에서 또 dfs 실행


def bfs(v):
    visited = [0] * (n + 1)
    visited[v] = 1
    bfsRes.append(v)
    queue = [v]

    while queue:
        tmp = queue.pop(0) #맨 처음 pop
        for e in edge[tmp]:
            if visited[e] == 0: #방문하지 않았으면
                bfsRes.append(e)
                queue.append(e)
                visited[e] = 1

dfsRes = []
bfsRes = []

dfs(v)
bfs(v)

print(*dfsRes)
print(*bfsRes)