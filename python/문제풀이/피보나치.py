def fibo(n):
    if n==1 or n==2:
        return 1
    return fibo(n-1)+fibo(n-2)

def fibo_topdown(n):
    if n==1 or n==2:
        return 1
    if d[n] != 0:
        return d[n]
    d[n] = fibo_topdown(n-1) + fibo_topdown(n-2)
    return d[n]

def fibo_bottomup(n):
    d[1] = 1
    d[2] = 1
    for i in range(3,n+1):
        d[i] = d[i-1] + d[i-2]
    return d[n]

n = int(input())

#print(fibo(n))

d = [0]*100
print(fibo_topdown(n))

d = [0]*100
print(fibo_bottomup(n))