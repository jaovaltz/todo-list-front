import { Box, Stack, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'

import { TodoType } from 'global/types/TodoType'

type ListItemCustomProps = {
  items?: TodoType[]
  setData: any
  onDelete: (id: number, setData: any) => Promise<void>
  onComplete: (id: number, setData: any) => Promise<void>
}

export function ListItemCustom({
  items,
  setData,
  onDelete,
  onComplete
}: ListItemCustomProps) {
  return (
    <Stack spacing={2}>
      {items?.map((item, idx) => (
        <Box
          key={idx}
          bgcolor={item.completed ? 'success.light' : 'primary.light'}
          padding="20px"
          sx={{ borderRadius: '10px' }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={22}>{item.title}</Typography>
            <Stack direction="row" spacing={2}>
              {!item.completed && (
                <DoneIcon
                  onClick={() => onComplete(item.id, setData)}
                  sx={{ color: '#023020', cursor: 'pointer' }}
                />
              )}

              <DeleteIcon
                onClick={() => onDelete(item.id, setData)}
                color="error"
                sx={{ cursor: 'pointer' }}
              />
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  )
}
