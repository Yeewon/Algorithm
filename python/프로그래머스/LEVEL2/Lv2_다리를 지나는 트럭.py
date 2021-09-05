
def solution(bridge_length, weight, truck):
    bridge = [0]*bridge_length
    time = 0

    while truck:
        if truck[0]+sum(bridge)-bridge[0] <= weight:
            bridge.append(truck.pop(0))
        else:
            bridge.append(0)
        bridge.pop(0)
        time += 1
    return time + bridge_length


bridge_length = 100
weight = 100
truck_weights = [10,10,10,10,10,10,10,10,10,10]

print(solution(bridge_length, weight, truck_weights))