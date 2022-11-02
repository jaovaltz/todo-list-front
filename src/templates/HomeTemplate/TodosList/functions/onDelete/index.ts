import { deleteTodo } from 'services/delete/deleteTodo'
import { getTodoData } from 'services/get/getTodoData'

export async function onDelete(id: number, setData: any) {
  const response = await deleteTodo(id)
  console.log(response.status)
  if (response.status === 204) {
    const responseGet = await getTodoData()
    if (responseGet) {
      setData(responseGet)
    }
  } else {
    console.log('error')
  }
}
