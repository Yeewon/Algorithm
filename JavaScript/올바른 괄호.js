function solution_stack(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]
        if (bracket === '(') {
            stack.push('(')
        } else {
            if (stack.length > 0) stack.pop()
            else return false
        }
    }
    return stack.length ? false : true
}

function solution_count(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]
        if (bracket === '(') {
            count++
        } else {
            if (count > 0) count--
            else return false
        }
    }
    return count ? false : true
}
