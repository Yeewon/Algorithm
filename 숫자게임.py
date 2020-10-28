#1. 정렬한 후 큰수중에 제일 작은 수를 짝지어 준다. :x
#2. 값이 큰 경우 반복문을 끝내는 것 매우 중요 -> break

def solution(A, B):
    answer = 0
    A.sort()  # A를 오름차순으로 정렬
    B.sort()  # B를 오름차순으로 정렬
    for i in A:  # A 안에 수들을 순회하며
        for j in B:  # B 안에 수들을 순회하며
            if i < j:  # B의 값이 더 크면
                answer += 1  # point 를 1 증가시키고
                B.remove(j)  # 그 값을 B에서 지워준 후
                break  # 반복문을 끝낸다.
    return answer


A = [5,1,3,7]
B = [2,2,6,8]

print(solution(A,B))