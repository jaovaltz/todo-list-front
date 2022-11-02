import { TodoType } from 'global/types/TodoType'
import { api } from 'services/api'

export const getTodoData = async () => {
  try {
    const response = await api.get('todo')
    return response.data as TodoType[]
  } catch (error) {
    console.log(error)
  }
}
