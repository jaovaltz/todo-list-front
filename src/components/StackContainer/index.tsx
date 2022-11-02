import { ReactNode } from 'react'

import { Stack, StackProps } from '@mui/material'

type StackContainerProps = {
  children: ReactNode
} & StackProps

export function StackContainer({ children, ...props }: StackContainerProps) {
  return (
    <Stack alignItems="center" sx={{ height: '100vh' }} {...props}>
      <Stack spacing={4} padding="60px">
        {children}
      </Stack>
    </Stack>
  )
}
