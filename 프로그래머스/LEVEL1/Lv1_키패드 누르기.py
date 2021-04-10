def find(phone, num):
    for i in range(4):
        for j in range(3):
            if phone[i][j] == num:
                return (i,j)

def solution(numbers, hand):
    phone = [[1,2,3],
             [4,5,6],
             [7,8,9],
             [-1,0,-2]]
    answer = ''
    left = -1
    right = -2
    for num in numbers:
        if num in [1,4,7]:
            answer += 'L'
            left = num
        elif num in [3,6,9]:
            answer += 'R'
            right = num
        else:
            x, y = find(phone,num)
            lx, ly = find(phone, left)
            rx, ry = find(phone, right)

            l_length = abs(lx-x) + abs(ly-y)
            r_length = abs(rx-x) + abs(ry-y)

            if l_length > r_length :
                answer += 'R'
                right = num
            elif l_length < r_length :
                answer += 'L'
                left = num
            else:
                if hand=="right":
                    answer += 'R'
                    right = num
                else:
                    answer += 'L'
                    left = num

    return answer


numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
hand = "right"
print(solution(numbers, hand))