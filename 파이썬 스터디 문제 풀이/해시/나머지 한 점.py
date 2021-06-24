from collections import defaultdict

def get_last_point(counter_dict):
    return sorted(counter_dict.items(), key=lambda x: x[1])[0][0]


def solution(points):
    counter_x = defaultdict(int)
    counter_y = defaultdict(int)

    for x, y in points:
        counter_x[x] += 1
        counter_y[y] += 1

    return [get_last_point(counter_x), get_last_point(counter_y)]