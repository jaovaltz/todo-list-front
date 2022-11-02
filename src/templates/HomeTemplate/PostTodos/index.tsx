import { useForm } from 'react-hook-form'
import { Box, FormControl } from '@mui/material'

import { TextFieldCustom } from 'components/TextFieldCustom'
import { CustomButton } from 'components/CustomButton'

import { TodoType } from 'global/types/TodoType'

import { onSubmit } from './functions/onSubmit'
import { defaultValues } from './functions/defaultValues'
import { resolver } from './functions/resolver'

type PostTodosProps = {
  setData: any
}

export function PostTodos({ setData }: PostTodosProps) {
  const { control, handleSubmit, reset } = useForm<TodoType>({
    defaultValues,
    resolver
  })

  return (
    <Box
      justifyContent="center"
      component="form"
      display="flex"
      onSubmit={handleSubmit((data) => onSubmit(data, setData, reset))}
    >
      <FormControl>
        <TextFieldCustom
          name="title"
          label="Nova tarefa"
          control={control}
          InputProps={{
            endAdornment: <CustomButton type="submit">Submit</CustomButton>
          }}
        />
      </FormControl>
    </Box>
  )
}
