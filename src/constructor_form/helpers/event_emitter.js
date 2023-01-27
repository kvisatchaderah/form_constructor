// export
export default class {
  // constructor
  constructor() {
    this.emits = {}
  }

  // on
  on(type, callback) {
    if (!this.emits[type]) this.emits[type] = []

    this.emits[type].push(callback)
  }

  // emit
  emit(type, ...args) {
    if (!this.emits[type]) return
    this.emits[type].forEach((callback) => callback(...args))
  }
}
