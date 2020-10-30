n = int(input()) #n x n 배열
k = int(input()) #사과의 수
board = [[0]*(n+1) for _ in range(n+1)] #0으로 초기화
rotate = [] #방향 회전 정보

for _ in range(k):
    a, b = map(int, input().split())
    board[a][b] = 1#사과 있는 곳 1로 표시

l = int(input())
for _ in range(l):
    x, c = input().split()
    rotate.append((int(x), c))

#이동하는 방향 : 오른쪽(default), 아래, 왼쪽, 위쪽
dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

def turn(direction, c):
    if c == 'L':
        direction = (direction-1)%4
    else:
        direction = (direction+1) % 4
    return direction

def simulate():
    x, y = 1, 1 #뱀의 머리
    board[x][y] = 2 #뱀이 존재하는 위치는 2로 표시
    direction = 0
    time = 0
    index = 0 #다음에 회전할 정보
    q =[(x,y)] #뱀이 차지하고 있는 위치 정보(꼬리가 앞쪽)

    while True:
        nx = x + dx[direction]
        ny = y + dy[direction]

        if 1<= nx <=n and 1<= ny <= n and board[nx][ny] != 2:
            #사과가 없다면 이동 후에 꼬리 제거
            if board[nx][ny] == 0:
                board[nx][ny] = 2
                q.append((nx, ny))
                #꼬리제거
                px, py = q.pop(0)
                board[px][py] = 0

            #사과가 있다면 이동 후에 꼬리 그대로 두기
            if board[nx][ny] == 1:
                board[nx][ny] = 2
                q.append((nx, ny))

        #벽이나 뱀의 몸통과 부딪혔다면
        else:
            time += 1
            break
        x, y = nx, ny
        time += 1
        if index < 1 and time == rotate[index][0]:
            direction = turn(direction, rotate[index][1])
            index += 1
    return time

print(simulate())