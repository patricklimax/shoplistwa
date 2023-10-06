import { IconShoppingCartCode } from '@tabler/icons-react'

type Props = {
  title: string,
  subtitle: string
}

export const AppTitle = ({ title, subtitle }: Props) => {
  return (
    <h1 className='text-2xl sm:text-4xl flex items-center justify-center gap-1 uppercase font-semibold my-2 mt-3'>
      <span>{title}</span>
      <span className='text-lime-500'>{subtitle}</span>
      <span className='-mt-2 -ml-2 -rotate-12'>
        <IconShoppingCartCode stroke={2} size={40} />
      </span>
    </h1>
  )
}