def solution(n):
    cols = [0] * n
    return dfs(0, n, cols)

def dfs(row, n, cols):
    if row == n:
        return 1
    count = 0
    for col in range(n):
        if is_possible(row, col, cols):
            cols[row] = col
            count += dfs(row + 1, n, cols)
    return count

def is_possible(row, col, cols):
    for i in range(row):
        if col == cols[i] or abs(col-cols[i]) == row - i:
            return False
    return True