import heapq


def solution(scovilles, K):
    heapq.heapify(scovilles)
    answer = 0

    while True:
        if scovilles[0] >= K:
            return answer
        elif len(scovilles) < 2 and scovilles[0] < K:
            return -1

        heapq.heappush(scovilles, heapq.heappop(scovilles) + heapq.heappop(scovilles) * 2)
        answer += 1