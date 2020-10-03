import sys
N = int(sys.stdin.readline().strip())

if N<= 99:
    print(N)
else:
    cnt = 99
    for num in range(100, N+1):
        num = str(num)
        if int(num[0]) - int(num[1]) == int(num[1]) - int(num[2]):
            cnt += 1
    print(cnt)

'''
a=int(input())
if a<100:print(a)
else:
 u=99
 for i in range(100,a+1):
  if i//100-i%100//10==i%100//10-i%10:u+=1
 print(u)
 '''