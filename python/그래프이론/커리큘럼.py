'''
5
10 -1
10 1 -1
4 1 -1
4 3 1 -1
3 3 -1
'''
from collections import deque
import copy

v = int(input())
indegree = [0]*(v+1) #진입차수
graph = [[] for i in range(v+1)]
time = [0]*(v+1)

#간선 정보 입력, i번째 진입차수에
for i in range(1, v+1):
    data = list(map(int, input().split()))
    time[i] = data[0]
    for x in data[1:-1]: #-1을 제외
        indegree[i] += 1
        graph[x].append(i)

#위상 정렬 함수
def topology_sort():
    result = copy.deepcopy(time) #수행 결과를 담을 리스트
    q = deque() #큐 기능 사용

    #시작은 진입차수가 0인 노드
    for i in range(1, v+1):
        if indegree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()
        for i in graph[now]:
            result[i] = max(result[i], result[now]+time[i])
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

    for i in range(1, v+1):
        print(result[i])

topology_sort()


