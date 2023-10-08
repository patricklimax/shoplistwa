import { ProductsProps } from '../../types/product'

export const ItemProduct = (
  { id, title, amount, unit, category, check, edit, remove }: ProductsProps) => {
  return (
    <li key={id} className='flex justify-between gap-2 items-center border border-slate-800 p-1 rounded text-base'>
      <div className='flex items-center gap-2'>
        {check}
        <div className='flex flex-col gap-2'>
          <div className='text-base leading-3'>
            {title}
          </div>
          <div className='text-[12px] text-white leading-3'>
            {amount} - {unit}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='rounded font-semibold text-slate-600'>
          {category}
        </div>
        {edit}
        {remove}
      </div>
    </li>
  )
}