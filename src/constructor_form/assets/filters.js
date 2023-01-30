export default {
  // required
  required: (val) => {
    return val
  },

  // min
  min: (val) => {
    return val.length > 3
  },
}
