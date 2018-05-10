
const subscribers = []

const dispatcher = {
  register(fn) {
    subscribers.push(fn)
  },

  dispatch(action) {
    subscribers.forEach(fn => {
      fn(action)
    })
  }
}

export default dispatcher