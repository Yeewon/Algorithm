# def solution(arr, divisor):
#     answer = sorted([i for i in arr if i%divisor==0])
#     return [-1] if not answer  else answer

def solution(arr, divisor):
    return sorted([n for n in arr if n%divisor == 0]) or [-1]


arr = [5, 9, 7, 10]
divisor = 5
print(solution(arr, divisor))