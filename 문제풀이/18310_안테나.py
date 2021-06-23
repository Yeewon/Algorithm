n = int(input())
data = list(map(int, input().split()))

data.sort()
'''
min = 1e9
index = 1e9
for i in data:
    sum = 0
    for j in data:
        sum += abs(i-j)
    if sum < min:
       min = sum
       index = i

print(index)
'''
print(data[(n-1)//2])