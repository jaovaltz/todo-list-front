import { TextField, TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

type TextFieldCustomProps = {
  name: string
  control: any
} & TextFieldProps

export function TextFieldCustom({
  name,
  control,
  ...props
}: TextFieldCustomProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={!!error}
          helperText={error?.message}
          {...field}
          {...props}
        />
      )}
    />
  )
}
