import heapq

def dijkstra(n, graph, start):
    INF = int(1e9)
    q = []
    distance = [INF]*(n+1)

    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue

        for i in graph[now]: #i = (노드, 거리)
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q,(cost, i[0]))

    return distance

def solution(n, road, k):
    graph = [[] for i in range(n+1)]
    for data in road:
        a,b,c = data
        graph[a].append((b,c))
        graph[b].append((a,c))

    distance = dijkstra(n, graph, 1)
    cnt = 0
    for i in distance:
        if i <= k:
            cnt += 1
    return cnt



n = 5
k = 3
road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]]
print(solution(n, road, k))
