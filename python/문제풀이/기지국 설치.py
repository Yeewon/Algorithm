import math

def solution(n, stations, w):
    answer = 0
    #전파가 안통하는 구간 (start, end) 저장하는 리스트
    segments = []

    if stations[0]-w-1 >=1:
        segments.append([1,stations[0]-w-1])

    for i in range(len(stations)-1):
        start = stations[i] +w+1
        end = stations[i+1] -w-1

        if start <= end:
            segments.append([start, end])

    if stations[-1] + w + 1 <= n:
        segments.append([stations[-1]+w+1, n])

    for segment in segments:
        length = segment[1] - segment[0] + 1

        #한대가 커버할 수 있는 너비 : w*2+1
        if length <= w*2+1:
            answer += 1
        else:
            answer += math.ceil(length/(w*2+1))
    return answer

n = 11
stations = [4, 11]
w = 1

print(solution(n, stations, w))