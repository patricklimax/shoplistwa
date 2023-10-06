import { IconPlus } from '@tabler/icons-react'
import { AppButton } from '../appButton/appButton'

type Props = {
  salvar: () => void
  cancelar: () => void
}
export const Register = ({ salvar, cancelar }: Props) => {
  return (
    <div className='w-full md:w-2/3 p-5 rounded bg-slate-800 fixed bottom-0 left-1/2 -translate-x-1/2 z-[99]'>
        <h1 className='text-center text-lime-500 bg-[#07090e] w-full py-1 rounded px-2 mb-2'>
          {/* {saveButton ? 'Editar Produto' : 'Novo Produto'} */}
          Novo Produto
        </h1>
        <div className='flex flex-col  gap-2 justify-center items-center rounded'>
          <div className='w-full flex gap-2'>
            <div className='w-full'>
              <input
                className='w-full h-10 bg-transparent border border-[#07090e] rounded px-2 outline-none focus:border-lime-500 text-slate-400 placeholder:text-slate-400 text-base font-medium'
                type='text'
                placeholder='O que você deseja comprar?'
                // value={newShop}
                // onChange={e => setNewShop(e.target.value)}
              // onKeyDown={onKeyDown}
              />
            </div>
          </div>
          <div className='w-full flex gap-2'>
            <div className='w-3/5 flex'>
              <input
                placeholder='Qde'
                // value={amount}
                // onChange={e => setAmount(e.target.value)}
                type='text'
                className='w-2/5 h-10 bg-transparent rounded-l text-center outline-none focus:border-lime-500 text-slate-400 placeholder:text-slate-400 text-base font-medium border border-[#07090e]' />
              <select
                // value={unit}
                name='unit'
                // onChange={e => setUnit(e.target.value)}
                className='w-3/5 h-10 bg-transparent border border-[#07090e] border-l-0 rounded-r px-2 outline-none focus:border focus:border-lime-500 text-sm text-slate-400 placeholder:text-slate-400 font-medium'>
                <option value='...' label='Selecione'>Selecione</option>
                <option value='un' label='Unidade'>un</option>
                <option value='Caixa' label='Caixa'>Caixa</option>
                <option value='dz' label='Dúzia'>dz</option>
                <option value='Galão' label='Galão'>Galão</option>
                <option value='Garrafa' label='Garrafa'>Garrafa</option>
                <option value='g' label='Grama'>g</option>
                <option value='kg' label='Kg'>Kg</option>
                <option value='Lata' label='Lata'>Lata</option>
                <option value='Litro' label='Litro'>Litro</option>
                <option value='Pacote' label='Pacote'>Pacote</option>
                <option value='Pote' label='Pote'>Pote</option>
              </select>
            </div>
            <div className='w-2/5'>
              <select
                // value={category}
                // onChange={e => setCategory(e.target.value)}
                name='category'
                className='w-full h-10 bg-transparent border border-[#07090e] rounded px-2 outline-none focus:border-lime-500 text-slate-400 placeholder:text-slate-400 text-sm font-medium'>
                <option value='⚠️' label=''>Sem categoria</option>
                <option value='🧿' label='Bazar'>Bazar</option>
                <option value='🧃' label='Bebidas'>Bebidas</option>
                <option value='💆' label='Beleza'>Beleza</option>
                <option value='🥩' label='Carnes'>Carnes</option>
                <option value='❄️' label='Congelados'>Congelados</option>
                <option value='🍉' label='Frutas'>Frutas</option>
                <option value='🛁' label='Higiene'>Higiene</option>
                <option value='👽' label='Importados'>Importados</option>
                <option value='🥬' label='Legumes'>Legumes</option>
                <option value='🧹' label='Limpeza'>Limpeza</option>
                <option value='🍲' label='Mercearia'>Mercearia</option>
                <option value='🍞' label='Padaria'>Padaria</option>
                <option value='🐶' label='Pet'>Pet</option>
                <option value='💚' label='Saúde'>Saúde</option>
              </select>
            </div>
          </div>
          <div className='w-full flex justify-center gap-4 py-2'>
            <AppButton onClick={salvar}>
              <div className='flex gap-1 items-center justify-center'>
                <IconPlus stroke={2} size={22} />
                <span>Salvar</span>
              </div>
            </AppButton>
            <AppButton onClick={cancelar}>
              <div className='flex gap-1 items-center justify-center'>
                <IconPlus stroke={2} size={22} />
                <span>Cancelar</span>
              </div>
            </AppButton>            
          </div>
        </div>
      
      
    </div>
  )
}