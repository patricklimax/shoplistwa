import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const NotificationBox = ({ children }: Props) => {
  return (
    <div className='flex justify-between text-sm font-medium w-full md:w-3/4 mx-auto'>
      {children}
    </div>
  )
}