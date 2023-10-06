import './App.css'
import { Header } from './components/header'
import { AppTitle } from './components/appTitle/appTitle'
import { NotificationBox } from './components/appNotification/notificationBox'
import { Notification } from './components/appNotification/notification'
import { NoProduct } from './components/noProduct/noProduct'
import { AppButton } from './components/appButton/appButton'
import { Products } from './data/productData'
import { IconPlus } from '@tabler/icons-react'
// import { IconCheckbox, IconEdit, IconPlus, IconTrashX } from '@tabler/icons-react'
// import { useState } from 'react'
// import { ItemProduct } from './components/produto/itemProduct'
// import { Register } from './components/modalProduct/modalProduct'

function App() {
  const ProductsLength = Products.length
  const ProductsFinish = Products.filter(shop => shop.isCompleted === true).length

  // const [showModalSave, setShowModalSave] = useState(false)
  // const openModalSave = () => {
  //   setShowModalSave(true)
  // }
  // const closeModalSave = () => {
  //   setShowModalSave(false)
  // }

  return (
    <>
      <main className="mainBox">
        <section className='sectionFixed top'>
          <Header />
          <div className='h-[5.25rem]'>
            <AppTitle title={'Lista de'} subtitle={'Compras'} />
            <NotificationBox>
              <Notification title={'Produtos na Lista'}>{ProductsLength}</Notification>
              <Notification title={'No carrinho'}>{ProductsFinish} de {ProductsLength}</Notification>
            </NotificationBox>
          </div>
        </section>

        <section className='sectionMain'>
          {/* <ul className='w-full md:w-3/4 mx-auto flex flex-col gap-2'>
            {Products.map(item =>
              <ItemProduct
                key={item.id}
                id={item.id}
                title={item.title}
                amount={item.amount}
                unit={item.unit}
                category={item.category}
                isCompleted={false}
                check={
                  <AppButton onClick={() => alert('Botão Checked')}>
                    <IconCheckbox stroke={2} size={22} />
                  </AppButton>
                }
                edit={
                  <AppButton onClick={() => alert('Botão Editar')}>
                    <IconEdit stroke={2} size={22} />
                  </AppButton>
                }
                remove={
                  <AppButton onClick={() => alert('Botão Remover')}>
                    <IconTrashX stroke={2} size={22} />
                  </AppButton>
                }
              />
            )}
          </ul> */}
          {/* {ProductsLength < 0 && <NoProduct />} */}
          <NoProduct />
        </section>

        <section className='sectionFixed base'>
          <div className='w-full md:w-3/4 mx-auto flex items-center justify-center'>
            <AppButton onClick={() => alert('Abrindo modal de cadastro')}            >
              <div className='flex gap-1 items-center justify-center'>
                <IconPlus stroke={2} size={22} />
                <span>Novo</span>
              </div>
            </AppButton>
          </div>
        </section>
        {/* {showModalSave == true &&
          <Register salvar={() => alert('Salvando registro')} cancelar={closeModalSave} />
        } */}
      </main>
    </>
  )
}

export default App
