import { Outlet } from 'react-router-dom'
import BackgroundImg from '../../assets/Background.png'
import LogoImg from '../../assets/Logo.svg'

export function AuthLayout() {
  return (
    <div className="bg-shape-background">
      <div className='max-w-screen-[1920px] mx-auto grid min-h-screen grid-cols-2 antialiased'>
        <div className="flex h-full flex-col p-10">
          <img src={LogoImg} alt="logo" className='w-[267px]' />
          <img src={BackgroundImg} alt="background" className='mt-14' />
        </div>

        <div className="relative flex flex-col items-center justify-center p-6">
          <Outlet />
        </div>
      </div>
    </div >
  )
}
