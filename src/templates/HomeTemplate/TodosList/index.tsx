import { ListItemCustom } from 'components/ListItemCustom'
import { TodoType } from 'global/types/TodoType'

import { onComplete } from './functions/onComplete'
import { onDelete } from './functions/onDelete'

type TodosListProps = {
  items?: TodoType[]
  setData: any
}

export function TodosList({ items, setData }: TodosListProps) {
  return (
    <ListItemCustom
      onComplete={onComplete}
      onDelete={onDelete}
      setData={setData}
      items={items}
    />
  )
}
