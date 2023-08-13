export function removeDuplicateUsers(users) {
  const map = {};
  const res = [];
  for (const user of users) {
    if (map[user.id]) {
      continue;
    } else {
      res.push(user);
      map[user.id] = user;
    }
  }
  return res;
}
