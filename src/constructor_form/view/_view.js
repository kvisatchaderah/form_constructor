// modules
import CSSVars from './css_vars'
import NodeClass from './node'

// export
export default class {
  constructor() {
    // modules
    this.css_vars = new CSSVars()
    this.node = new NodeClass(this)
  }
}
