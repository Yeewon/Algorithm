const solution = (n, results) => {
    // 각 결과를 2차원 배열에 표기
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(false));
    results.map((result) => {
        const [win, lose] = result;
        graph[win][lose] = 1;
        graph[lose][win] = -1;
        graph[win][win] = 0;
        graph[lose][lose] = 0;
    });

    // [1,2,3,4,5]
    const rangeN = [...Array(n).keys()].map((e) => e + 1);

    for (const mid of rangeN) {
        for (const a of rangeN) {
            for (const b of rangeN) {
                // a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
                if (graph[a][mid] === 1 && graph[mid][b] === 1) {
                    graph[a][b] = 1;
                }
                if (graph[a][mid] === -1 && graph[mid][b] === -1) {
                    graph[a][b] = -1;
                }
            }
        }
    }

    // 경기결과를 추측할 수 없는 경우는 false
    // 각 선수에 대해 false가 전혀 없으면 ans + 1
    let ans = 0;
    for (const self of rangeN) {
        let hasFalse = false;
        for (const other of rangeN) {
            if (graph[self][other] === false) {
                hasFalse = true;
                break;
            }
        }
        ans += hasFalse ? 0 : 1;
    }

    return ans;
};
