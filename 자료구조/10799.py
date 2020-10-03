import sys

In = list(sys.stdin.readline().strip())
stack = []
answer = 0
prev = None #이전 state 저장

for i in range(len(In)):
    if In[i] == '(':
        stack.append(In[i])
    elif prev == '(' and In[i] == ')': #레이저가 있으면
        stack.pop()
        answer += len(stack)
    elif prev == ')' and In[i] == ')':
        answer += 1
        stack.pop()
    prev = In[i]
print(answer)