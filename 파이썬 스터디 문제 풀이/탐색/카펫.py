import math
def solution(brown, red):
    # 빨간 부분의 가로, 세로를 구한다.
    for width in range(1, int(math.sqrt(red))+1):
        if red % width != 0:
            continue
        height = red // width
        if brown + red == (width + 2) * (height + 2):
            return [height + 2, width + 2]