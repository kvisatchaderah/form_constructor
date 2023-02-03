export default {
  // TODO write config default

  // styles
  styles: {
    // js script
    open_method: 'dynamic', // TODO ---- off ----

    // js vars
    labels: true,
    label_overflow: true,
    placeholders: true,
    shadow: true,

    button_variant: 'fill', // fill outline

    // classes
    open_template: 'standart', // standart modal sidebar // TODO ---- off ----
    side: 'side_bottom', // side_top side_bottom side_left side_right
    position: 'left', // left center right // top middle bottom
  },

  // vars
  vars: {
    background_color: '#ffffff',
    font_color: '#000000',
    font_size: '20px',
    widget_width: '350px',

    template_distance: '8px',
    template_border_radius: '4px',

    button_next_color: 'green',
    button_prev_color: 'grey',

    label_size: 1,
    input_size: 3,
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
    widget_label: 'Нажми меня',

    // windows
    windows: [
      [
        {
          name: 'text 1',
          type: 'text',
          required: true,
          min: 4,
        },
        {
          name: 'tel 1',
          type: 'tel',
        },
      ],

      [
        {
          name: 'text 2',
          type: 'text',
          min: 8,
        },
        {
          name: 'tel 2',
          type: 'tel',
          required: true,
        },
      ],
    ],
  },
}
