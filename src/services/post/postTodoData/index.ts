import { TodoType } from 'global/types/TodoType'
import { api } from 'services/api'

export const postTodoData = async (data: TodoType) => {
  const response = await api.post('todo/', data)
  return response
}
