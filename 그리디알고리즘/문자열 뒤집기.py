string = list(map(int, input()))

cnt = [0,0] #0집합, 1집합의 수 저장

now = string[0]
cnt[string[0]] = 1

for i in range(1,len(string)):
    if string[i] != now:
        now = string[i]
        cnt[now] += 1
print(min(cnt[0],cnt[1]))