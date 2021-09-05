import heapq

def heapsort(iterable):
    h = []
    result = []

    for value in iterable:
        heapq.heappush(h, value)

    #heapq는 데이터를 꺼낼 때 우선 순위가 높은 데이터부터 차례로 나온다.
    for i in range(len(h)):
        result.append(heapq.heappop(h))
    return result

result = heapsort([1,3,5,7,9,2,4,6,8,0])
print(result)
