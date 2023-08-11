import Image from 'next/image'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PricingPage from './components/Pricing'

export default function Home() {
  return (
    <>
    <main className="w-[100%] h-auto">
      <br />
      <PricingPage/>
      <br />
      <Login/>
      <br />
      <SignUp/>
    </main>
    </>
  )
}
