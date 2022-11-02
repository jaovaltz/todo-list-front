import { getTodoData } from 'services/get/getTodoData'
import { patchCompleteTodo } from 'services/patch/patchCompleteTodo'

export async function onComplete(id: number, setData: any) {
  const response = await patchCompleteTodo(id)
  console.log(response.status)

  if (response.status === 200) {
    const responseGet = await getTodoData()

    if (responseGet) {
      setData(responseGet)
    }
  } else {
    console.log('error')
  }
}
