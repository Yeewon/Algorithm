import heapq
from collections import deque

def solution(healths, items):
    item_indexes = []
    appliable_items = []
    heapq.heapify(appliable_items)

    healths.sort()
    items = [(buff, debuff, index) for index, (buff, debuff) in enumerate(items, 1)]
    BUFF, DEBUFF, INDEX = 0, 1, 2
    items.sort(key=lambda item: item[DEBUFF])
    items = deque(items)

    for health in healths:
        while items and health - items[0][DEBUFF] >= 100:
            item = items.popleft()
            heapq.heappush(appliable_items, (-item[BUFF], item[INDEX]))
        if appliable_items:
            _, index = heapq.heappop(appliable_items)
            item_indexes.append(index)
    item_indexes.sort()
    return item_indexes