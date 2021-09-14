function solution(lottos, win_nums) {
    const LOTTO = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };
    let correct_count = 0;
    let zero_count = 0;

    lottos.map((lotto) => {
        if (lotto === 0) {
            zero_count += 1;
            console.log(lotto, zero_count);
        } else if (win_nums.includes(lotto)) {
            correct_count += 1;
            console.log(lotto, correct_count);
        }
    });

    console.log(correct_count + zero_count, correct_count);
    const max_rank = LOTTO[correct_count + zero_count];
    const min_rank = LOTTO[correct_count];

    return [max_rank, min_rank];
}
