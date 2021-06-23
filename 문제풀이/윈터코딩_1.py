def solution(n, delivery):
    result = ['?']*(n+1)
    nosend = []
    for data in delivery:
        first, second, send = data
        #보내진 값은 모두 o으로
        if send == 1:
            result[first] = result[second] = 'O'
        #못보낸 값은 nosend 리스트에 넣는다.
        else:
            nosend.append({first,second})

    for data in nosend:
        first, second = data
        if result[first] == 'O':
            result[second] = 'X'
            continue
        if result[second] == 'O':
            result[first] = 'X'
            continue

    answer = ''.join(result[1:])
    return answer



n = 6
delivery = [[1,3,1],[3,5,0],[5,4,0],[2,5,0]]
print(solution(n, delivery))