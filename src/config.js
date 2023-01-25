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
  },

  // special
  special: {
    // no_style
    no_style: false,

    // identeficators
    widget_ids: 'widget_ids',
    widget_classes: 'widget_classes',
    widget_class__active: 'widget_class__active',

    form_ids: 'form_ids',
    form_classes: 'form_classes',
    form_class__active: 'form_class__active',

    widget_button_ids: 'widget_button_ids',
    widget_button_classes: 'widget_button_classes',
    widget_button_class__active: 'widget_button_class__active',

    window_ids: 'window_ids',
    window_classes: 'window_classes',
    window_class__active: 'window_class__active',
  },

  // views
  views: {
    // mode
    mode: 'standart', // ---- off ----

    // windows
    windows: [
      // ---- off ----
      [
        {
          name: 'Имя',
          type: 'text',
          required: false,
        },
        {
          name: 'Телефон',
          type: 'tel',
          required: true,
        },
      ],
    ],
  },
}
