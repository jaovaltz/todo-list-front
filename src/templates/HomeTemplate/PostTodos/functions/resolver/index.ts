import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  title: yup
    .string()
    .required('O título é obrigatório')
    .max(25, 'O texto deve conter até 25 caracteres')
    .min(3, 'O texto deve conter pelo menos 3 caracteres')
})

export const resolver = yupResolver(schema)
