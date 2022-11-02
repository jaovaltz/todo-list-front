import { TodoType } from 'global/types/TodoType'

import { getTodoData } from 'services/get/getTodoData'
import { postTodoData } from 'services/post/postTodoData'

export async function onSubmit(data: TodoType, setData: any, reset: any) {
  const response = await postTodoData(data)
  if (response.status === 201) {
    const responseGet = await getTodoData()
    if (responseGet) {
      await setData(responseGet)
      reset()
    }
  }
}
