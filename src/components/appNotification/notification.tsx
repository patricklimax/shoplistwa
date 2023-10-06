import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  title: string
}

export const Notification = ({ title, children }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <span className='text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400'>
        {children}
      </span>
    </div>
  )
}