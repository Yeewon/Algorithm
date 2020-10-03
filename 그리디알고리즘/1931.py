import sys
In = sys.stdin.readline

def greedy(meeting):
    cnt = 0
    start = 0
    for s,e  in meeting:
        if s >= start:
            start = e
            cnt += 1
    return cnt

n = int(In())
meeting = [(*map(int, In().split()),) for _ in range(n)]
meeting =sorted(meeting, key=lambda item:item[0]) #시작 시간 기준 정렬
meeting =sorted(meeting, key=lambda item:item[1]) #끝나는 시간 기준 정렬
print(meeting)

print(greedy(meeting))