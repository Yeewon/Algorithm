function solution(s) {
    const NUMBER = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = '';
    let temp = '';

    for (let i = 0; i < s.length; i++) {
        const value = s[i];

        if (!isNaN(value)) {
            answer += value;
            temp = '';
        } else {
            temp += value;
            if (NUMBER.includes(temp)) {
                const index = NUMBER.indexOf(temp);
                answer += index;
                temp = '';
            }
        }
    }
    return Number(answer);
}
