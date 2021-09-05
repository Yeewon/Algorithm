from itertools import product
def solution(monster, S1, S2, S3):
    meet = 0
    START = 1
    DICE1 = range(1, S1+1)
    DICE2 = range(1, S2+1)
    DICE3 = range(1, S3+1)

    for number1, number2, number3  in product(DICE1, DICE2, DICE3):
        moved = number1 + number2 + number3 + START
        if moved > max(monster):
            break
        if moved in monster:
            meet += 1
    total = S1 * S2 * S3
    return int((total - meet) / total * 1000)