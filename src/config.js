export default {
  // styles
  styles: {
    color_variants: '#ffffff',
    color_value: '',
    font_color_variants: '#ffffff',
    font_color_value: '',
    open_method: 'standart',
    open_template: 'dynamic',
    font_size_variants: 'middle',
    font_size_value: '',
    current_style: 'light',
    border_radius: 'small',
    position_x: 'right',
    position_y: 'middle',
  },

  // special
  special: {
    no_style: false,
    ids: '',
  },

  // views
  views: {
    mode: 'standart',

    // windows
    windows: [
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
