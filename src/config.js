export default {
  // styles
  styles: {
    background_color: '#ffffff',
    font_color: '#000000',
    border_radius: '4px',
    font_size: '20px',

    open_method: 'dynamic', // ---- off ----
    open_template: 'standart', // ---- off ----
    current_style: 'light', // ---- off ----
    position_x: 'right', // ---- off ----
    position_y: 'middle', // ---- off ----

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
    widget__ids: 'widget_ids',
    widget__classes: 'gfdgfg',

    // widget_form
    widget_form__ids: 'form_ids',
    widget_form__classes: 'form_classes',
    widget_form__class_active: 'form_class__active',

    // window
    window__ids: 'window_ids',
    window__classes: 'window_classes',
    window__class_active: 'window_class__active',

    // submit_button
    submit__ids: 'submit_ids',
    submit__classes: 'submit_classes',
    submit__class_disabled: 'submit_class__active', // включается когда кнопка дизейблед

    // widget_button
    widget_button__ids: 'widget_button_ids',
    widget_button__classes: 'widget_button_classes',
    widget_button__class_active: 'widget_button_class__active',
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
          required: false,
        },
        {
          name: 'Телефон 1',
          type: 'tel',
          required: true,
        },
      ],

      [
        {
          name: 'Имя 2',
          type: 'text',
          required: false,
        },
        {
          name: 'Телефон 3',
          type: 'tel',
          required: true,
        },
      ],
    ],
  },
}
