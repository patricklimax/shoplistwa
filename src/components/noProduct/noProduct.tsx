import './noProduct.css'
import { IconShoppingCartPlus } from "@tabler/icons-react"

export const NoProduct = () => {
  return (
    <section className="noProduct text-slate-400 text-center shadow-2xl">
      <div className='flex items-center justify-center text-lime-500'>
        <IconShoppingCartPlus size={50} stroke={2} />
      </div>
      <div >
        <p className='my-2'>Você ainda não tem uma lista de compras.</p>
        <p>Crie sua lista e mantenha suas compras organizadas.</p>
      </div>
    </section>
  )
}