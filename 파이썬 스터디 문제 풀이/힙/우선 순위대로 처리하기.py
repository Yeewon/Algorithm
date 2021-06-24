import heapq
from collections import deque


def solution(reqs):
    answer = []
    waiting = []
    current_time = 0
    server_available_at = 0

    reqs = [(-priority, sec, index) for index, [priority, sec] in enumerate(reqs, 1)]
    reqs = deque(reqs)

    while reqs or waiting:
        if reqs and current_time % 3 == 0:
            heapq.heappush(waiting, reqs.popleft())

        if waiting and server_available_at <= current_time:
            _, sec, index = heapq.heappop(waiting)
            server_available_at = current_time + sec
            answer.append(index)
        current_time += 1
    return answer