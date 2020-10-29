import heapq
INF = int(1e9)

road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]
n = 5
k = 3

def dijkstra(graph,start, distance):
    q = []
    heapq.heappush(q, (0, start))
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

def solution(n, road, k):

    m = len(road)
    start = 1

    graph = [[] for i in range(n + 1)]
    distance = [INF] * (n + 1)

    for data in road:
        a, b, c = data
        graph[a].append((b, c))
        graph[b].append((a, c))

    dijkstra(graph, start, distance)

    # 모든 노드로 가기 위한 최단 거리를 출력
    cnt = 0
    for i in range(1, n + 1):
        if distance[i] <= k:
            cnt += 1
    return cnt

print(solution(n, road, k))
