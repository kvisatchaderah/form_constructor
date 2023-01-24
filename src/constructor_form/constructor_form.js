//assets
import { create_element } from './assets/assets'

export default class {
  constructor({ views }) {
    this.views = views

    create_element(
      document.body,
      {
        tag: 'form',
        id: 'form',
      },
      ['first', 'second']
    )
  }
}
