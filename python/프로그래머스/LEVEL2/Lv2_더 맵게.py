import heapq
def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0

    while True:
        if scoville[0] >= K:
            return answer
        elif len(scoville)<2 and scoville[0] < K:
            return -1
        heapq.heappush(scoville, heapq.heappop(scoville)+heapq.heappop(scoville)*2)
        answer += 1

print(solution([1, 0], 1))