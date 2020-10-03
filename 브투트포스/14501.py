n = int(input())
plan = []
benefit = []

for i in range(n):
    plan.append(tuple(map(int, input().split())))
    benefit.append(-1) #-1로 채우고
benefit.append(0) #마지막은 0으로 채운다.

if plan[n - 1][0] == 1: #마지막 상담이 가능하면
    benefit[n - 1] = plan[n - 1][1] #benefit에 금액을 입력
else: #불가능한 상담이면
    benefit[n - 1] = 0 #금액을 0으로

for i in range(n - 2, -1, -1): #n-2부터 0까지
    benefit[i] = benefit[i + 1]
    if i + plan[i][0] - 1 < n:  # 선택할 수 있는 경우
        t = plan[i][1] + benefit[i + plan[i][0]]
        if benefit[i] < t:
            benefit[i] = t

print(benefit[0])



