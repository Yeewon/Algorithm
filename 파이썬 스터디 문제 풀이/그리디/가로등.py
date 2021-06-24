import math


def solution(street_length, lights):
    lights.sort()
    answer = lights[0]
    length = len(lights)

    for i in range(1, length):
        light_range = math.ceil((lights[i] - lights[i - 1]) / 2)
        answer = max(answer, light_range)

    last = street_length - lights[-1]
    return max(answer, last)

