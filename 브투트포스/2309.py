#정답이 여러개이면 아무거나 출력
import sys
from itertools import combinations
input = sys.stdin.readline

man = [int(input()) for i in range(9)]
man = sorted(man)
for c in combinations(man, 7):
    sum = 0
    for nan in c:
        sum += nan
    if sum == 100:
        for item in c:
            print(item)
        break

