def solution(answers):
    one = [1,2,3,4,5] #5
    two = [2,1,2,3,2,4,2,5] #8
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] #10

    score = [0,0,0]

    for i, answer in enumerate(answers):
        if one[i%5] == answer: score[0] +=1
        if two[i%8] == answer: score[1] +=1
        if three[i%10] == answer: score[2] +=1

    result = [i+1 for i in range(3) if score[i] == max(score)]

    return result

answers = [1,2,3,4,5]
print(solution(answers))