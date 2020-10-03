import sys
N,M=map(int,input().split())
List=list(reversed(sorted(map(int,sys.stdin.readline().split()))))
result=set()
for i in range(N-2):
   for j in range(i+1,N-1):
      for k in range(j+1,N):
          sum = List[i]+List[j]+List[k]
          if sum==M:
              print(M)
              sys.exit()
          else:
              if sum<M:
                  result.add(sum)
                  break
print(max(result))