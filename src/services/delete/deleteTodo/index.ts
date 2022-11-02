import { api } from 'services/api'

export async function deleteTodo(id: number) {
  const response = await api.delete(`todo/${id}`)
  return response
}
