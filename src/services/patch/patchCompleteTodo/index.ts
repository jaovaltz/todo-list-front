import { api } from 'services/api'

export const patchCompleteTodo = async (id: number) => {
  const response = await api.patch(`todo/${id}/`, { completed: true })
  return response
}
