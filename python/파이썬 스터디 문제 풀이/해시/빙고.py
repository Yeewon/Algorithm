def solution(board, nums):
    board_dict = {number: (x, y) for x, numbers in enumerate(board, 1) for y, number in enumerate(numbers, 1)}

    N = len(board)
    vertical, horizontal = [0] * (N + 1), [0] * (N + 1)
    diagonal_down, diagonal_up = 0, 0

    for num in nums:
        x, y = board_dict[num]
        vertical[x] += 1
        horizontal[y] += 1

        if x == y:
            diagonal_down += 1
        if x + y == N + 1:
            diagonal_up += 1

    return (vertical + horizontal + [diagonal_down, diagonal_up]).count(N)

