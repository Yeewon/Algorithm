def solution(orders, course):
    answer = []
    dict = {}
    for order in orders:
        for menu in order:
            if not menu in dict:
                dict[menu] = 1
            else:
                dict[menu] +=1

    dict = list(zip(dict.keys(), dict.values()))
    # dict.sort(key=lambda  x:x[1])
    print(dict)


    cnt = {}
    for d in dict:
        if not d[1] in cnt:
            cnt[d[1]] = [d[0]]
        else:
            cnt[d[1]].append(d[0])
    print(cnt)

    keys = cnt.keys()
    print(keys)
    setmenu = []
    for c in course:
        for k in keys:
            if k >= 2:
                setmenu += cnt[k]
        print(setmenu)
    return answer


orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2,3,4]
print(solution(orders, course))