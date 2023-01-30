export default {
  // required
  required: {
    is_method: (val) => {
      return val
    },
    error_text: () => {
      return 'Поле обязательно для заполнения'
    },
  },

  // min
  min: {
    is_method: (val, param) => {
      return val.length > param
    },
    error_text: (param) => {
      return 'Должно быть больше ' + param + ' символов'
    },
  },
}
