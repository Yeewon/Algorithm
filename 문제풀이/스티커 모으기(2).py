def solution(sticker):
    length = len(sticker)

    if length == 1:
        return sticker[0]

    #1. 맨 앞 스티커 떼는 경우
    dp = [0]*length
    dp[0] = dp[1] = sticker[0]
    for i in range(2,length-1):
        dp[i] = max(dp[i-1],dp[i-2]+sticker[i])
    pick_1 = dp[length-2]

    #2. 맨 앞 스티커 떼지 않는 경우
    dp = [0]*length
    dp[0] = 0
    dp[1] = sticker[1]

    for i in range(2, length):
        dp[i] = max(dp[i - 1], dp[i - 2] + sticker[i])
    pick_2 = dp[length-1]

    return max(pick_1, pick_2)


sticker = [14, 6, 5, 11, 3, 9, 2, 10]
print(solution(sticker))