def solution(number, k):
    stack = [number[0]]
    for num in number[1:]:
				#pop할 수 있고, pop될 값이 새로운 값보다 작고, 뺄 값이 남아있다면
        while len(stack) > 0 and stack[-1] < num and k > 0:
            k -= 1
            stack.pop()
        stack.append(num)
    if k != 0:
        stack = stack[:-k]
    return ''.join(stack)


number = "4177252841"
k = 4
print(solution(number, k))