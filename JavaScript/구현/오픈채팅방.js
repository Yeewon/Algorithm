function solution(records) {
  const messages = [];
  const change = {};

  records.forEach((record) => {
    const [status, userId, userName] = record.split(" ");

    if (status === "Enter") {
      messages.push([status, userId]);
      change[userId] = userName;
    } else if (status === "Leave") {
      messages.push([status, userId]);
    } else {
      change[userId] = userName;
    }
  });

  const answer = messages.map(([status, userId]) =>
    status === "Enter"
      ? `${change[userId]}님이 들어왔습니다.`
      : `${change[userId]}님이 나갔습니다.`
  );

  return answer;
}

const records = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
  "Change uid4567 Lion",
];

console.log(solution(records));
