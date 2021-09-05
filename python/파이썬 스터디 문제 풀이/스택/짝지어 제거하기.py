def solution(string):
    stack = []
    for item in string:
        if stack and stack[-1] == item:
            stack.pop()
            continue
        stack.append(item)
    return 1 if not stack else 0