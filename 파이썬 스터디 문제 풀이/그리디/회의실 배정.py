def solution(meetings):
    meetings = sorted(meetings, key=lambda x: (x[1], x[0]), reverse=True)
    _, previous_end = meetings.pop()
    count = 1

    while meetings:
        start, end = meetings.pop()
        if previous_end <= start:
            previous_end = end
            count += 1
    return count