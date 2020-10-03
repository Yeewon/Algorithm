import sys
from collections import deque

tc = int(sys.stdin.readline())

for i in range(tc):
    n, m = map(int, sys.stdin.readline().split())
    queue = deque([])
    idx = deque([k for k in range(n)]) #위치 저장 리스트
    cnt = 0

    queue.extend(list(map(int,sys.stdin.readline().split())))

    while True:
        if max(queue) == queue[0]: #맨앞의 중요도가 제일 크면
            queue.popleft() #인쇄
            cnt += 1
            if idx[0] == m: #찾던 문서이면
                print(cnt)
                break
            else: #찾던문서가 아니면
                idx.popleft() #idx도 pop

        else: #뒤에 더 큰 중요도가 있으면
            queue.rotate(-1) #가장 뒤에 재배치
            idx.rotate(-1)
            continue




