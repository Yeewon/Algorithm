function solution(money, costs) {
  let result = 0;
  const UNIT = [1, 5, 10, 50, 100, 500];
  const aUnits = costs.map((cost, i) => [UNIT[i], cost, cost / UNIT[i]]);

  aUnits.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < 6; i++) {
    if (money === 0) break;
    const [unit, cost] = aUnits[i];
    const unitCount = parseInt(money / unit);

    result += unitCount * cost;
    money -= unit * unitCount;
  }
  return result;
}

const money = 1999; // 생산해야 하는 금액
const costs = [2, 11, 20, 100, 200, 600]; // [1,5,10,50,100,500] 생산 단가
console.log(solution(money, costs));
