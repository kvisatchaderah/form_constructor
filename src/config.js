export default {
  // TODO write config default

  // TODO rename to modifiers
  // styles
  styles: {
    // js vars
    labels: true,
    labels_overflow: true,
    placeholders: true,
    shadows: true,

    buttons_variant: 'fill', // fill outline
    widget_buttons_close_position: 'top', // left right bottom top
    labels_transform: 'lowercase', // standart uppercase lowercase

    // classes
    open_template: 'modal', // standart modal sidebar
    // TODO ---- off ----
    widget_side: 'right', // top bottom left right
    widget_position: 'middle', // left center right // top middle bottom

    // mode
    mode: 'tree', // standart quiz tree
  },

  // scrypts
  scrypts: {
    open_method: 'dynamic', // TODO ---- off ----
  },

  // vars
  vars: {
    background_color: '#ffffff',
    font_color: '#000000',
    font_size: '20px',
    widget_width: '350px',
    widget_button_icon_size: '30px',
    widget_button_font_size: '22px',

    template_distance: '8px',
    template_border_radius: '4px',

    button_next_color: 'green',
    button_prev_color: 'grey',

    label_size: 2,
    input_size: 3,
  },

  // special
  special: {
    // no_style
    no_style: false,

    //
    // identeficators
    //
    // TODO need?

    //  widget
    widget__ids: '',
    widget__classes: '',
    widget__active_classes: '',

    // widget_form
    widget_form__ids: '',
    widget_form__classes: '',
    widget_form__active_classes: '',

    // window
    window__ids: '',
    window__classes: '',
    window__active_classes: '',

    // submit_button
    submit__ids: '',
    submit__classes: '',
    submit__class_disabled: '',

    // widget_button
    widget_button__ids: '',
    widget_button__classes: '',
    widget_button__active_classes: '',
  },

  // views
  views: {
    // tree
    tree_labels: ['1 tree label', '2 tree label'],

    // TODO change to widget button object

    // widget_label
    widget_button_open_text: 'Открыть',
    widget_button_open_icon: 'message_square',
    widget_button_close_text: 'Close',
    widget_button_close_icon: 'x',

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
