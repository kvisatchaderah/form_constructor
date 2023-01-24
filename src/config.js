export default {
  // styles
  styles: {
    color_variants: '#ffffff', // ---- off ----
    color_value: '', // ---- off ----
    font_color_variants: '#ffffff', // ---- off ----
    font_color_value: '', // ---- off ----
    open_method: 'dynamic', // ---- off ----
    open_template: 'standart', // ---- off ----
    font_size_variants: 'middle', // ---- off ----
    font_size_value: '', // ---- off ----
    current_style: 'light', // ---- off ----
    border_radius: 'small', // ---- off ----
    position_x: 'right', // ---- off ----
    position_y: 'middle', // ---- off ----
    labels: true,
  },

  // special
  special: {
    // no_style
    no_style: false, // ---- off ----

    // identeficators
    form_ids: '', // ---- off ----

    on_widget_button_classes: '', // ---- off ----
    active_on_widget_button_class: '', // ---- off ----

    window_classes: '', // ---- off ----
    active_window_class: '', // ---- off ----

    widget_classes: '', // ---- off ----
    open_widget_class: '', // ---- off ----
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
