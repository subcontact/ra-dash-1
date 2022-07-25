export function getUser(id) {
  return new Promise(resolve => {
    resolve({
      id: "uid:jdoe",
      name: "John Doe"
    });
  });
}
