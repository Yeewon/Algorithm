def solution(cookie):
    answer = 0
    n = len(cookie)

    for i in range(n - 1):
        left_sum, left_idx = cookie[i], i
        right_sum, right_idx = cookie[i + 1], i + 1

        while True:
            if left_sum == right_sum:
                answer = max(answer, left_sum)
                # answer = max(answer, right_sum)

            if left_idx > 0 and left_sum <= right_sum:
                left_idx -= 1
                left_sum += cookie[left_idx]
            elif right_idx < n - 1 and right_sum <= left_sum:
                right_idx += 1
                right_sum += cookie[right_idx]
            else:
                break

    return answer


from itertools import accumulate
def solution2(cookie):
    answer = 0
    for m in range(len(cookie)-1):
        a = set(accumulate(reversed(cookie[:m+1])))
        b = set(accumulate(cookie[m+1:]))
        c = a&b

        if c:
            answer = max(*c, answer)
    return  answer


cookie = [1,1,2,3]
#cookie = [1,2,4,5]
print(solution2(cookie))