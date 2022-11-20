import * as yup from 'yup'

export const schema = yup.object().shape({
  city: yup.string().required(),

  state: yup.string().required(),

  street: yup.string().required(),

  number: yup.string().required(),

  zipCode: yup.string().required(),

  neighborhood: yup.string().required(),

  isMain: yup.boolean().default(false),
})
