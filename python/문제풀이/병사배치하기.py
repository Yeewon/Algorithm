n = int(input())
array = list(map(int, input().split()))
#순서를 뒤집어 '최장 증가 부분 수열' 문제로 변환
array.reverse()

#DP 테이블 초기화
dp = [1]*n

#가장 긴 증가하는 부분 수열(LIS) 알고리즘 수행
for i in range(1,n):
    #처음부터 i이전 까지의 값
    for j in range(0,i):
        if array[j] < array[i]:
            dp[i] = max(dp[i], dp[j]+1)

#열외해야 하는 병사의 최소 수를 출력
print(n-max(dp))