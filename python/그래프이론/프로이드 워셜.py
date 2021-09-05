INF = int(1e9)
n = int(input()) #노드
m = int(input()) #간선

graph = [[INF]*(n+1) for _ in range(n+1)]

for a in range(1,n+1):
    graph[a][a] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a][b] = c

#점화식에 따라 프로이드 워셜 알고리즘 수행
for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])
#수행 결과를 출력
for a in range(1, n+1):
    for b in range(1, n+1):
        #도달할 수 없는 경우 INFINITY 출력
        if graph[a][b] == INF:
            print('INFINITY', end=' ')
        else:
            print(graph[a][b], end=' ')
    print()