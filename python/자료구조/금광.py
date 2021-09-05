tc = int(input())
for _ in range(tc):
    n,m = map(int, input().split())
    array = list(map(int, input().split()))

    dp = []
    index = 0

    for i in range(n):
        dp.append(array[index: index+m])
        index += m
    print(dp)