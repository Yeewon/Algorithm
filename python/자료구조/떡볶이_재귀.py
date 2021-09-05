def binary_search(array, target, start, end, result):
    mid = (start+end) // 2
    total = 0
    for x in array:
        # 잘랐을 때의 떡볶이 양 계산
        if x > mid:
            total += x - mid
    if total == target:
        return mid
    elif total < target:
        return binary_search(array, target, start, mid-1, result)
    else:
        result = mid
        return binary_search(array, target, mid+1, end, result)

# 떡의 개수(N)와 요청한 떡의 길이(M)을 입력
n, m = list(map(int, input().split(' ')))
# 각 떡의 개별 높이 정보를 입력
array = list(map(int, input().split()))

# 이진 탐색을 위한 시작점과 끝점 설정
start = 0
end = max(array)

result=binary_search(array, m, start, end, 0)
print(result)

