def solution(people, limit):
    answer = 0
    result = []
    #근삿값 찾기
    i = 0
    people.sort()
    while people:
        i2 = 0
        for x in people[i:]:
            if people[i] + people[]
    for x in sorted(people):
        for y in sorted(people, reverse=True):
            if x+y <= limit:
                result.append(x+y)
    print(result)
    return answer


print(solution([70, 50, 80, 50], 100))