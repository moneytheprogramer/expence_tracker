"use client"
import ExpenceCalc from '../components/ExpenceCalc'
import Footer from '../components/Footer'
import Transactions from '../components/Transactions'

export default function page() {
  return (
    <div className='bg-blue-300'>
      <ExpenceCalc/>
      <Transactions/>
      <Footer/>
    </div>
  )
}
