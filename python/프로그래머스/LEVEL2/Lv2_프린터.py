
def solution(priorities, location):
    pairs = [(i,x) for i,x in enumerate(priorities)]
    answer = 1 #몇번째인지

    while pairs:
        pair = pairs.pop(0)
        if any(pair[1] < x[1] for x in pairs):
            pairs.append(pair)
        else:
            if pair[0] == location:
                return answer
            answer += 1

priorities = [1, 1, 9, 1, 1, 1]
location = 0
print(solution(priorities, location))