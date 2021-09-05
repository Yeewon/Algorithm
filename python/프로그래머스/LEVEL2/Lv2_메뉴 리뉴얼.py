from itertools import combinations
def solution(orders, course):
    answer = []
    dict = {}
    for order in orders:
        for c in course:
            for set in list(combinations(sorted(order), c)):
                if not set in dict:
                    dict[set] = 1
                else:
                    dict[set] += 1
    print(dict)
    for c in course:
        mem = [ [dict[key], key] for key in dict if len(key) == c and dict[key] > 1]
        if not mem:
            continue
        else:
            max_set = max(mem)
            answer += [''.join(m[1]) for m in mem if m[0] == max_set[0]]

    return sorted(answer)


orders = ["XYZ", "XWY", "WXA"]
course = [2,3,4]
print(solution(orders, course))