export default {
  // styles
  styles: {
    // js script
    open_method: 'dynamic', // TODO ---- off ----

    // js vars
    labels: false,
    placeholders: true,

    // classes
    open_template: 'standart', // 'standart' 'modal' 'sidebar'
    position_x: 'right',
    position_y: 'middle',

    // vars
    vars: {
      background_color: '#ffffff',
      font_color: '#000000',
      border_radius: '4px',
      font_size: '20px',
      card_padding: '12px',
      elements_padding: '8px',
    },
  },

  // special
  special: {
    // no_style
    no_style: false,

    //
    // identeficators
    //

    //  widget
    widget__ids: '',
    widget__classes: '',
    widget__class_active: '',

    // widget_form
    widget_form__ids: '',
    widget_form__classes: '',
    widget_form__class_active: '',

    // window
    window__ids: '',
    window__classes: '',
    window__class_active: '',

    // submit_button
    submit__ids: '',
    submit__classes: '',
    submit__class_disabled: '',

    // widget_button
    widget_button__ids: '',
    widget_button__classes: '',
    widget_button__class_active: '',
  },

  // views
  views: {
    // mode
    mode: 'quiz', // 'standart' 'quiz' 'tree'

    // tree
    tree_labels: ['1 tree label', '2 tree label'],

    // windows
    windows: [
      [
        {
          name: 'text 1',
          type: 'text',
          required: true,
        },
        {
          name: 'tel 1',
          type: 'tel',
          min: 8,
        },
      ],

      [
        {
          name: 'text 2',
          type: 'text',
          min: 6,
        },
        {
          name: 'tel 2',
          type: 'tel',
        },
      ],
    ],
  },
}
