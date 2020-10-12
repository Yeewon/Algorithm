n, m = map(int, input().split())
parent = [i for i in range(n+1)] #부모 테이블 0~n+1로 초기화

#특정 원소가 속한 집합 찾기
def find_parent(parent, x):
    #루트 노드가 아니면, 루트 노드 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

#두 원소가 속한 집합을 합치기
def union_parent(parent, a , b):
    a = find_parent(parent,a)
    b = find_parent(parent,b)

    if a < b:
        parent[b] = a
    else:
        parent[a] = b

for _ in range(m):
    oper, a, b = map(int, input().split())
    if oper == 0:
        union_parent(parent, a, b)
    elif oper == 1:
        if find_parent(parent,a) == find_parent(parent,b):
            print('YES')
        else:
            print('NO')
    else:
        print('입력형식에 맞지 않습니다.')