global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

global.localStorage = {
  setItem: () => {},
  getItem: () => { return "{}"}
}
