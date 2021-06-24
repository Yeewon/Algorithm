def solution(orders, candidates):
    order_dict = {skill: index for index, skill in enumerate(orders, 1)}

    orders_set = set(orders)
    filtered = filter(lambda skill: skill in orders_set, candidates)

    index = 1
    for candidate in filtered:
        if order_dict[candidate] != index:
            return False
        index += 1
    return True
