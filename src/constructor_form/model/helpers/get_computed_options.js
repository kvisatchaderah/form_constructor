// export
export default (context, option_name, add_option = {}) => {
  // computed
  const computed_id = `
		${context.special[`${option_name}__ids`]}
	`

  const computed_class = `
		${option_name}
		${context.special[`${option_name}__classes`] ?? ''}
		${add_option.class ?? ''}
	`

  const computed_class_active = `
		${context.special[`${option_name}__class_active`] ?? ''} 
		${add_option.class_active ?? ''}
	`

  const computed_class_disabled = `
		${context.special[`${option_name}__class_disabled`] ?? ''} 
		${add_option.class_disabled ?? ''}
		`

  // return
  return {
    ...add_option,
    ...{
      id: computed_id,
      class: computed_class,
      class_active: computed_class_active,
      class_disabled: computed_class_disabled,
    },
  }
}
