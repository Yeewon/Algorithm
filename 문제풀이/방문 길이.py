def move(x, y, dir):
    # up, down, left, right
    d = ['U','D','L','R']
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]

    idx = d.index(dir)
    x += dx[idx]
    y += dy[idx]

    if x<-5 or x>5 or y<-5 or y>5:
        x -= dx[idx]
        y -= dy[idx]
        point = (x, y)
        return point, True
    point = (x, y)
    return point, False

def solution(dirs):
    lines = []
    x, y = 0, 0
    cnt = 0
    musi = False
    musi_cnt = 0

    for dir in dirs:
        now, musi = move(x, y, dir)
        prev = (x,y)

        x = now[0]
        y = now[1]

        if musi== True:
            musi_cnt+= 1
            continue
        if [prev, now] in lines and musi==False:
            cnt +=1
            continue
        lines.append([prev, now])
        lines.append([now, prev])

    return len(dirs)-cnt-musi_cnt

dirs = 'LULLLLLLU'
print(solution(dirs))