export function checkIds(
  id: string,
  favs: [string] = [""],
  custom: [{}] = [{}]
) {
  let bool = true;
  if (favs[0] != "") {
    favs.forEach((x) => {
      if (x === id) bool = false;
    });
  }
  // if (Object.keys(custom[0]).length != 0){

  // }
  return bool;
}
