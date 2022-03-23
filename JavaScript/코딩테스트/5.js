const check_proper = (array, sub) => {
  for (const item of array) {
    if (item.includes(sub)) {
      return false;
    }
  }
  return true;
};

const solution = (goods) => {
  let answer = [];

  goods.forEach((aGoods) => {
    let result = [];
    const len = aGoods.length;

    for (let l = 1; l <= len; l++) {
      if (result.length) continue;

      for (let i = 0; i <= len - l; i++) {
        const sub = aGoods.substr(i, l);
        const array = goods.filter((item) => item !== aGoods);
        check_proper(array, sub) && result.push(sub);
      }
    }

    if (!result.length) {
      result = "None";
    } else {
      result = [...new Set(result)].sort();
      result = result.join(" ");
    }
    answer.push(result);
  });
  return answer;
};

const goods = ["pencil", "cilicon", "contrabase", "picturelist"];
console.log(solution(goods));
