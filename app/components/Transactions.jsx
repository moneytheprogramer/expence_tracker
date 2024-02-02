"use client"

import { useGetTransaction } from '../hooks/useGetTransaction'
import { useDeleteTransactions } from '../hooks/useDeleteTransactions'

export default function Transactions() {
  const {transactions}=useGetTransaction()  
  const {deleteTransactions}=useDeleteTransactions()

  
  
  return (
    <div className='flex flex-col items-center border bg-blue-200    '>
        <h1  className='text-sm lg:text-3xl text-white font-serif font-extrabold bg-blue-800 rounded-3xl ' >Transaction</h1>
        
        <ul className=' border p-16 lg:px-32 lg:py-10 flex  flex-col-reverse'>
          {transactions.map((transactions)=>{
         
            return (
            
              <li className='m-2 border-b-2 border-black' key={transactions.id}>
                <label className='font-extrabold font-serif text-black'>{transactions.description}</label>
                <button className='btn btn-ghost btn-circle btn-xs text-xl font-extrabold ml-4 border border-black text-black' onClick={()=>deleteTransactions(transactions.id)}>X</button>
                <p className='font-extrabold text-xl text-black'>₹{transactions.transactionAmount} . <label className='bg-white rounded-sm  ' style={{
                  color:transactions.transactionType ==="expense"?"red":"green",
                }}>{transactions.transactionType}</label></p> 
                
                </li>
            )
          })}
        </ul>
    </div>
  )
}
