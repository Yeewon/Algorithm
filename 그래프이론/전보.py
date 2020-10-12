import heapq
import sys

input = sys.stdin.readline
INF = int(1e9)
n,m,start = map(int, input().split())

graph = [[] for i in range(n+1)]
distance = [INF]*(n+1)

#graph 정보 입력 받는다.
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b,c))
#다익스트라
def dijkstara(start):
    q = []
    heapq.heappush(q,(0,start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))
dijkstara(start)
print(distance)
cnt = 0
max_distance = 0
for d in distance:
    if d != INF:
        cnt += 1
        max_distance = max(max_distance, d)

#시작 노드(0)는 제외해야한다.
print(cnt-1, max_distance)


