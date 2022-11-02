import { createContext, Dispatch, SetStateAction } from 'react'
import { Stack } from '@mui/material'

import { StackContainer } from 'components/StackContainer'
import { TitleTemplate } from 'templates/HomeTemplate/TitleTemplate'
import { PostTodos } from 'templates/HomeTemplate/PostTodos'
import { TodosList } from 'templates/HomeTemplate/TodosList'

import { useHome } from 'hooks/useHome'

export const SetRefreshDataContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {})

export function HomeTemplate() {
  const { todoData, setTodoData } = useHome()

  return (
    <StackContainer>
      <TitleTemplate />
      <Stack spacing={9}>
        <PostTodos setData={setTodoData} />
        <TodosList setData={setTodoData} items={todoData} />
      </Stack>
    </StackContainer>
  )
}
