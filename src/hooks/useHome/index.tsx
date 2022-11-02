import { useCallback, useEffect, useState } from 'react'

import { TodoType } from 'global/types/TodoType'
import { getTodoData } from 'services/get/getTodoData'

export function useHome() {
  const [todoData, setTodoData] = useState<TodoType[]>()

  const getDataFromApi = useCallback(() => {
    getTodoData().then((data) => setTodoData(data))
  }, [])

  useEffect(() => {
    getDataFromApi()
  }, [getDataFromApi])

  return {
    todoData,
    setTodoData
  }
}
