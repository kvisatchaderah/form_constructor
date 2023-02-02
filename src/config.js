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
    button_variant: 'standart', // standart

    // classes
    open_template: 'standart', // standart modal sidebar
    side: 'side_right', // side_top side_bottom side_left side_right
    position: 'bottom', // left center right // top middle bottom

    // vars
    vars: {
      background_color: '#ffffff',
      font_color: '#000000',
      font_size: '20px',
      widget_width: '500px',

      template_distance: '8px',
      template_border_radius: '4px',
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

    mode: 'quiz', // standart quiz tree

    // tree
    tree_labels: ['1 tree label', '2 tree label'],

    // windows
    windows: [
      [
        {
          name: 'texgfdgdfgdfgfdgfdgdft 1',
          type: 'text',
          required: true,
          min: 8,
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
