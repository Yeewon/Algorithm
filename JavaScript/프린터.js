function solution(priorities, location) {
    const requests = priorities.map((priority, index) => {
        return {
            index: index,
            priority: priority,
        }
    })

    let order = 0

    while (requests.length) {
        const firstRequest = requests.shift()
        const hasHighPriority = requests.some((request) => request.priority > firstRequest.priority)
        if (hasHighPriority) requests.push(firstRequest)
        else {
            order++
            if (firstRequest.index === location) {
                return order
            }
        }
    }
}
