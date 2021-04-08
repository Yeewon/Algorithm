def solution(board, moves):
    result = 0
    basket = [0]
    n = len(board)

    for m in moves:
        for i in range(n):
            if board[i][m-1] != 0:
                if board[i][m-1] == basket[-1]:
                    basket.pop()
                    result += 2
                else:
                    basket.append(board[i][m-1])
                board[i][m-1] = 0
                break
    return result


board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]
print(solution(board, moves))