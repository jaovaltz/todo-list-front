import { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'

type CustomButtonProps = {
  children: ReactNode
} & ButtonProps

export function CustomButton({ children, ...props }: CustomButtonProps) {
  return (
    <Button
      color="primary"
      sx={{ borderRadius: '12px', opacity: 0.8 }}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  )
}
