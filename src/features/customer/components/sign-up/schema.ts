import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required(),

  email: yup.string().email().required(),

  gender: yup.string().required(),

  password: yup.string().required(),

  phoneNumber: yup.string().required(),

  documentNumber: yup.string().required(),

  birthDate: yup.date().required(),
})
