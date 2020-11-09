'''
import sys;ins=sys.stdin.readline
N = int(ins())
nums = list(map(int, ins().split()))
a,b,c,d = map(int,ins().split())
ans = []

#계산한 값, depth, +, -, *, /
def step(cur,i,a,b,c,d):
    if i==N: ans.append(cur);return # haha....
    n = nums[i]
    if a!=0: step(cur+n,i+1,a-1,b,c,d)
    if b!=0: step(cur-n,i+1,a,b-1,c,d)
    if c!=0: step(cur*n,i+1,a,b,c-1,d)
    if d!=0: step(int(cur/n),i+1,a,b,c,d-1)

step(nums[0],1,a,b,c,d)
print(max(ans),min(ans))
'''
n = int(input())
data = list(map(int,input().split()))
add, sub, mul, div = map(int, input().split())

min_value = 1e9
max_value = -1e9

def dfs(i, now):
    global min_value, max_value, add, sub, mul, div

    #모든 연산자 사용한 경우
    if i == n:
        min_value = min(min_value, now)
        max_value = max(max_value, now)

    else:
        if add>0:
            add -= 1
            dfs(i+1, now+data[i])
            add += 1

        if sub>0:
            sub -= 1
            dfs(i+1, now-data[i])
            sub += 1
        if mul>0:
            mul -= 1
            dfs(i+1, now*data[i])
            mul += 1

        if div >0:
            div -= 1
            dfs(i+1, int(now/data[i]))
            div += 1



dfs(1, data[0])
print(max_value)
print(min_value)






