#list에서 num개 순서있게 뽑기
def combinations(list, num):
    if num == 0:
        return [[]]
    cases = []
    for i in range(len(list)):
        for case in combinations(list[i+1:], num-1):
            cases.append([list[i]]+case)
    return cases

list = [1,2,3]
print(combinations(list, 2))
