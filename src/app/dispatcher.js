
const subscribers = []

const dispatcher = {
  register(fn) {
    fn.registryId = Date.now()
    subscribers.push(fn)
    return fn.registryId
  },

  dispatch(action) {
    subscribers.forEach(fn => {
      fn(action)
    })
  },

  unregister(id){
    const index = subscribers.findIndex(s => s.registryId === id)
    if (index >= 0) {
      subscribers.splice(index, 1)
    } 
  }
}

export default dispatcher