import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const NotificationBox = ({ children }: Props) => {
  return (
    <div className='flex justify-between text-sm font-medium'>
      {children}
    </div>
  )
}