export default {
  // styles
  styles: {
    background_color: '#ffffff',
    font_color: '#000000',
    border_radius: '4px',
    font_size: '20px',

    open_method: 'dynamic', // TODO ---- off ----
    open_template: 'standart', // 'standart' 'modal' 'sidebar'
    current_style: 'dark', // 'dark' 'light'
    position_x: 'right',
    position_y: 'middle',

    labels: true,
    placeholders: true,
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
    tree_labels: ['1 tree lsbel', '2 tree label'],

    // windows
    windows: [
      [
        {
          name: 'Имя 1',
          type: 'text',
          required: true,
          min: 10,
        },
        {
          name: 'Телефон 1',
          type: 'tel',
          required: true,
          min: 6,
        },
      ],

      [
        {
          name: 'Имя 2',
          type: 'text',
        },
        {
          name: 'Телефон 3',
          type: 'tel',
        },
      ],
    ],
  },
}
