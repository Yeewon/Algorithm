import sys
from itertools import combinations

l, c = map(int, sys.stdin.readline().strip().split())
alpha = sorted(list(sys.stdin.readline().split()))
mo = set('aeiou') #모음

comb = list(combinations(alpha, l))
comb.sort()

for i in comb:
    if 2 <= len(set(i) - mo) < l:
        print(''.join(i))
        continue





