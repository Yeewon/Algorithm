v, e = map(int, input().split()) #노드, union 연산의 수

#부모 테이블을 0으로 초기화한 후 ,  자기 자신으로 초기화
parent = [0]*(v+1)
for i in range(1,v+1):
    parent[i] = i

#특정 원소가 속한 집합 찾기
def find_parent(parent, x):
    if parent[x] != x:
        return find_parent(parent, parent[x])
    return x

#두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a<b:
        parent[b] = a
    else:
        parent[a] = b


#Union 연산을 각각 수행
for i in range(e):
    a,b = map(int,input().split())
    union_parent(parent, a, b)

#각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end=' ')
for i in range(1, v+1):
    print(find_parent(parent,i),end=' ')

print()

#부모 테이블 내용 출력
print('부모테이블: ',end=' ')
for i in range(1, v+1):
    print(parent[i],end=' ')

