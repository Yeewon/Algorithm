n = int(input())
data = list(map(int, input().split()))
data.sort()

result = 0 #총 그룹의 수
cnt = 0 #현재 그룹에 포함된 모험가의 수

for i in data: #공포도를 낮은 것부터 확인하며
    cnt +=1 #현재 그룹에 해당 모험가를 포함
    if cnt >= i: #현재 그룹에 포함된 모험가의 수 >= 현재 공포도
        result += 1 #그룹결성
        cnt = 0 #현재 그룹에 포함된 모험가의 수 초기화
print(result)
