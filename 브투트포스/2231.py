'''
n = int(input())

for num in range(1,n):
    if n == num+sum(list(map(int,str(num)))):
        print(num)
        exit(0)
print(0)

'''
N = int(input())

for i in range(max(1, N-54), N+1):
    if N == i + sum(list(map(int, str(i)))):
        print(i)
        exit(0)
print(0)
