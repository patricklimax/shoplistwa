import './App.css'
import { FormEvent, useEffect, useState } from 'react'
import { Header } from './components/header'
import { AppTitle } from './components/appTitle/appTitle'
import { NotificationBox } from './components/appNotification/notificationBox'
import { Notification } from './components/appNotification/notification'
import { IconCheckbox, IconDeviceFloppy, IconEdit, IconPlus, IconSquare, IconTrashX, IconX } from '@tabler/icons-react'
import { ProductsProps } from './types/product'
import { AppButton } from './components/appButton/appButton'
import { NoProduct } from './components/noProduct/noProduct'

function App() {
  const dataLocalStorage = (JSON.parse(localStorage.getItem('PRODUCTS') || '[]'))
  const [showModalSave, setShowModalSave] = useState(false)

  const [products, setProducts] = useState<ProductsProps[]>(dataLocalStorage);
  const [newProduct, setNewProduct] = useState('');

  const [id, setId] = useState('')
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState('')
  const [category, setCategory] = useState('')

  const productsLength = products.length
  const productsFinish = products.filter(product => product.isChecked === true).length

  const [editButton, setEditButton] = useState(false)

  //abre o modal para salvar um novo produto
  const openModalSave = () => {
    setShowModalSave(true)
    setEditButton(false)
  }

  //fecha o modal
  const closeModalSave = () => {
    setShowModalSave(false)
    clearFields()
  }

  // limpa inputs
  const clearFields = () => {
    setNewProduct('')
    setId('')
    setAmount('')
    setUnit('')
    setCategory('')
    setEditButton(false)
  }

  // adiciona um novo produto
  const addNewProduct = (e: FormEvent) => {
    if (newProduct === '') {
      alert('Obrigatório inserir um item.')
    } else {
      e.preventDefault();
      setProducts([...products,
      {
        id: crypto.randomUUID(),
        title: newProduct,
        isChecked: false,
        amount: amount,
        unit: unit,
        category: category
      }].sort((a: ProductsProps, b: ProductsProps): 1 | -1 => {
        if (a.isChecked < b.isChecked) {
          return -1
        } else {
          return 1
        }
      }))
      clearFields()
      // setShowModalSave(false)
    }
  }

  // adiciona item clicando na tecla Enter
  const onKeyDown = (e: { which: number }) => {
    const ENTER_KEY = 13
    const ESCAPE_KEY = 27
    if (e.which === ENTER_KEY) {
      if (newProduct === '') {
        alert('Obrigatório inserir uma tarefa.')
      } else {
        setProducts([...products,
        {
          id: crypto.randomUUID(),
          title: newProduct,
          isChecked: false,
          amount,
          unit: unit,
          category: category
        }].sort((a: ProductsProps, b: ProductsProps): 1 | -1 => {
          if (a.isChecked < b.isChecked) {
            return -1
          } else {
            return 1
          }
        }))
        clearFields()
        setShowModalSave(false)
      }
    } else if (e.which === ESCAPE_KEY) {
      clearFields()
      setShowModalSave(false)
    }
  }

  // abre o modal para editar produto
  const openModalEdit = (id: string) => {
    setShowModalSave(true)
    const product = products.find(product => product.id === id)
    if (product) {
      setNewProduct(product.title)
      setId(product.id)
      setAmount(product.amount)
      setUnit(product.unit)
      setCategory(product.category)
      setEditButton(true)
    }
  }

  // salva o item editado
  const editProduct = () => {
    const product = products.find(product => product.id === id)
    if (product) {
      product.title = newProduct
      product.amount = amount
      product.unit = unit
      product.category = category
      setEditButton(false)
      setShowModalSave(false)
    }
    setProducts([...products])
    clearFields()
  }

  // marca item como no carrinho
  const productCart = (id: string) => {
    setProducts(products.map(products => (products.id === id
      ? { ...products, isChecked: !products.isChecked }
      : products)).sort((a: ProductsProps, b: ProductsProps): 1 | -1 => {
        if (a.isChecked < b.isChecked) {
          return -1
        } else {
          return 1
        }
      }))
    setShowModalSave(false)
  }

  //remove um produto da lista
  const removeProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    setShowModalSave(false)
  }

  // gerencia alterações no localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('PRODUCTS', JSON.stringify(products))
    }
  }, [products])

  return (
    <>
      <main className="mainBox">
        <section className='sectionFixed top'>
          <Header />
          <div className='h-[5.25rem]'>
            <AppTitle title={'Lista de'} subtitle={'Compras'} />
            <NotificationBox>
              <Notification title={'Produtos na Lista'}>{productsLength}</Notification>
              <Notification title={'No carrinho'}>{productsFinish} de {productsLength}</Notification>
            </NotificationBox>
          </div>
        </section>

        <section className='sectionMain'>
          <ul className='w-full md:w-3/4 mx-auto flex flex-col gap-2'>
            {products.map(product =>
              <li key={product.id} className='flex justify-between gap-2 items-center border border-slate-800 p-1 rounded text-base'>
                <div className='flex items-center gap-2'>
                  {product.isChecked == true ?
                    <AppButton onClick={() => productCart(product.id)}>
                      <span className='p-2 rounded flex gap-1 items-center justify-center bg-slate-800 text-lime-500 transition-all  duration-500 ease-in md:hover:bg-emerald-800 md:hover:text-emerald-200'>
                        <IconCheckbox stroke={2} size={22} />
                      </span>
                    </AppButton>
                    :
                    <AppButton onClick={() => productCart(product.id)}>
                      <span className='p-2 rounded flex gap-1 items-center justify-center bg-slate-800 text-lime-500 transition-all  duration-500 ease-in md:hover:bg-emerald-800 md:hover:text-emerald-200'>
                        <IconSquare stroke={2} size={22} />
                      </span>
                    </AppButton>
                  }
                  <div className='flex flex-col gap-2'>
                    <div className={['productDescription', product.isChecked ? 'inCart' : ''].join(' ')}>
                      {product.title}
                    </div>
                    <div className='text-[12px] text-white leading-3'>
                      {product.amount} - {product.unit}
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='rounded font-semibold text-slate-600'>
                    {product.category}
                  </div>
                  <AppButton onClick={() => openModalEdit(product.id)}>
                    <span className='p-2 rounded flex gap-1 items-center justify-center bg-slate-800 text-lime-500 transition-all  duration-500 ease-in md:hover:bg-cyan-800 md:hover:text-cyan-200'>
                      <IconEdit stroke={2} size={22} />
                    </span>
                  </AppButton>
                  <AppButton onClick={() => removeProduct(product.id)}>
                    <span className='p-2 rounded flex gap-1 items-center justify-center bg-slate-800 text-lime-500 transition-all  duration-500 ease-in md:hover:bg-red-800 md:hover:text-red-200'>
                      <IconTrashX stroke={2} size={22} />
                    </span>
                  </AppButton>
                </div>
              </li>)
            }
          </ul>
          {productsLength <= 0 && <NoProduct />}
        </section>

        <section className='sectionFixed base'>
          <div className='w-full md:w-3/4 mx-auto flex items-center justify-center'>
            <AppButton onClick={openModalSave}>
              <span className='p-2 rounded flex gap-1 items-center justify-center bg-slate-800 text-lime-500 transition-all  duration-500 ease-in md:hover:bg-emerald-800 md:hover:text-emerald-200'>
                <IconPlus stroke={2} size={22} />
                <span>Novo</span>
              </span>
            </AppButton>
          </div>
        </section>

        {showModalSave == true &&
          <div className='modalCadastro'>
            <div className='mb-2 flex items-center justify-between gap-2'>
              <h1 className='bg-[#07090e] p-2 rounded text-lime-500 font-semibold w-full uppercase'>
                {editButton ? 'Editar Produto' : 'Novo Produto'}
              </h1>
              <AppButton onClick={closeModalSave} >
                <span
                  className='p-2 rounded flex gap-1 items-center justify-center bg-red-600 transition-all  duration-500 ease-in md:hover:bg-red-800 md:hover:text-red-200'>
                  <IconX stroke={2} size={22} />
                </span>
              </AppButton>
            </div>
            <div className='flex flex-col gap-2'>
              <input
                className='inputCadastro w-full rounded'
                value={newProduct}
                onChange={e => setNewProduct(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder='O que você deseja comprar?'
                type="text" />
              <div className='flex gap-2'>
                <div className='w-3/5 flex '>
                  <input
                    className='inputCadastro w-2/5 rounded-l'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder='Qde'
                    type="text" />
                  <select
                    className='inputCadastro w-3/5 rounded-r border-l-0'
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                    name='inputUnit'>
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
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    name='category'
                    className='inputCadastro w-full'>
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
            </div>
            <div className='flex gap-5 items-center justify-center mt-5'>
              {editButton ?
                <button onClick={editProduct}>
                  <span
                    className='p-2 rounded flex gap-1 items-center justify-center bg-[#07090e] text-lime-500 transition-all  duration-500 ease-in md:hover:bg-emerald-800 md:hover:text-emerald-200'>
                    <IconDeviceFloppy stroke={2} size={22} />
                    <span>Editar</span>
                  </span>
                </button>
                :
                <button onClick={addNewProduct}>
                  <span
                    className='p-2 rounded flex gap-1 items-center justify-center bg-[#07090e] text-lime-500 transition-all  duration-500 ease-in md:hover:bg-emerald-800 md:hover:text-emerald-200'>
                    <IconDeviceFloppy stroke={2} size={22} />
                    <span>Novo</span>
                  </span>
                </button>
              }
              <AppButton onClick={closeModalSave} >
                <span
                  className='p-2 rounded flex gap-1 items-center justify-center bg-[#07090e] text-lime-500 transition-all  duration-500 ease-in md:hover:bg-red-800 md:hover:text-red-200'>
                  <IconX stroke={2} size={22} />
                  <span className='hidden md:flex'>Cancelar</span>
                </span>
              </AppButton>
            </div>
          </div>
        }
      </main>
    </>
  )
}

export default App
