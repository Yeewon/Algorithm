function solution(lottos, win_nums) {
  const RANK = [6, 6, 5, 4, 3, 2, 1];
  let min_rank = 0;
  let zero_cnt = 0;

  for (const lotto of lottos) {
    lotto === 0 && zero_cnt++;
    win_nums.indexOf(lotto) && min_rank++;
  }

  return [RANK[min_rank], RANK[min_rank + zero_cnt]];
}

// lottos = [44, 1, 0, 0, 31, 25]
// win_nums = [31, 10, 45, 1, 6, 19]

// 알아볼 수 없는 번호 = 0

// 1. min_rank 를 계산. : 1, 31 -> 2개
// 2. max_rank 0이 모두 당첨. -> min_rank + 0의 개수
