def solution(commands):
    move_dict = {'U': (1, 0), 'D': (-1, 0), 'R': (0, 1), 'L': (0, -1)}
    x, y = 0, 0
    visited = []

    for dir in commands:
        dx, dy = move_dict[dir]
        nx, ny = x + dx, y + dy
        if nx < -5 or nx > 5 or ny < -5 or ny > 5:
            continue
        if ((x, y), (nx, ny)) not in visited and ((nx, ny), (x, y)) not in visited:
            visited.append(((x, y), (nx, ny)))
        x, y = nx, ny

    return len(visited)