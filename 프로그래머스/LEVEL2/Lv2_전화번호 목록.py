def solution(book):
    for i in range(len(book)-1):
        for j in range(i+1,len(book)):
            if len(book[j]) >= len(book[i]) and book[j].startswith(book[i]):
                return False
            elif len(book[j]) < len(book[i]) and book[i].startswith(book[j]):
                return False
    return True

print(solution(["12","123","1235","567","88"]))


#접두사인 경우만. in을 사용하면 중간에 있는 경우도 포함된다.