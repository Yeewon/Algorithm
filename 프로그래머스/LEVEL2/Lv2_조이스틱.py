def solution(name):
    m = [ min(ord(c) - ord('A'), ord('Z')-ord(c)+1) for c in name]

    answer = 0
    idx = 0

    while True:
        answer += m[idx]
        m[idx] = 0

        if sum(m) == 0:
            break

        left, right = (1,1)

        while m[idx - left] <= 0:
            left += 1
        while m[idx + right] <= 0:
            right += 1

        if left < right:
            answer += left
            idx  += -left
        else:
            answer += right
            idx += right

    return answer


name = "JAZ"
print(solution(name))