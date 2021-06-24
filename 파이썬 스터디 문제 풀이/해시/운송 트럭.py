def solution(max_weight, specs, names):
    weight_dict = {name: int(weight) for name, weight in specs}

    truck_count = 1
    weight = 0
    for name in names:
        weight += weight_dict[name]
        if weight > max_weight:
            truck_count += 1
            weight = weight_dict[name]
    return truck_count