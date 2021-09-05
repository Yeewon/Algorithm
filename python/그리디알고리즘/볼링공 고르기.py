#서로 무게가 다른 볼링공
n,m = map(int, input().split())
data = list(map(int, input().split()))

array = [0]*11 #1~10까지 무게 담는 리스트
for x in data:
    array[x] +=1

result = 0
for i in range(n+1):
    n -= array[i]
    result += array[i]*n
print(result)