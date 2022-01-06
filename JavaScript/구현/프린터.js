function solution(priorities, location) {
  const requests = priorities.map((priority, index) => {
    return { index: index, priority: priority };
  });

  let order = 0;
  while (requests.length) {
    const firstPriority = requests.shift();
    const hasHigherPriority = requests.some(
      ({ _, priority }) => priority > firstPriority.priority
    );
    if (hasHigherPriority) {
      requests.push(firstPriority);
    } else {
      order++;
      if (firstPriority.index === location) {
        return order;
      }
    }
  }
}
