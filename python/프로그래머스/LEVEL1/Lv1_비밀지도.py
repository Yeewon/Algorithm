def solution(n, arr1, arr2):
    answer = []
    for a,b in zip(arr1, arr2):
        map = str(bin(a|b))[2:].rjust(n)
        map = map.replace('1','#')
        map = map.replace('0',' ')
        answer.append(map)
    return answer

n = 5
arr1 = 	[9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]
print(solution(n, arr1, arr2))