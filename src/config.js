export default {
  // styles
  styles: {
    // js script
    open_method: 'dynamic', // TODO ---- off ----

    // js vars
    labels: true,
    label_overflow: true,
    placeholders: true,
    shadow: true,

    // classes

    // 'standart' 'modal' 'sidebar'
    open_template: 'standart',
    // side_top side_bottom side_left side_right
    side: 'side_right',

    // left center right
    // top middle bottom
    position: 'bottom',

    // vars

    vars: {
      background_color: '#ffffff',
      font_color: '#000000',
      border_radius: '4px',
      font_size: '20px',
      card_padding: '12px',
      elements_padding: '8px',
      // TODO добавлять варсы для позишин в значениях и тд
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

    // 'standart' 'quiz' 'tree'
    mode: 'quiz',

    // tree
    tree_labels: ['1 tree label', '2 tree label'],

    // windows
    windows: [
      [
        {
          name: 'texgfdgdfgdfgfdgfdgdft 1',
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
          name: 'texgfddgfdfdgdft 2',
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
