"use client"
import React, { useState } from 'react'
import { useAddTransaction } from '../hooks/useAddTransaction'
import { useGetUserInfo } from '../hooks/useGetUserInfo'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useRouter } from 'next/navigation'
import { useGetTransaction } from '../hooks/useGetTransaction'

export default function ExpenceCalc() {
    const {addTransaction}=useAddTransaction()
    const {name,profilePhoto}=useGetUserInfo()

    const [description,setDescription]=useState("")
    const [transactionAmount,setTransactionAmount]=useState("")
    const [transactionType,setTransactionType]=useState("expense")
    const {transactionTotals}=useGetTransaction()
    const {balance,income,expenses}=transactionTotals

    const router =useRouter()

    const handleSubmit=(e)=>{
        e.preventDefault()
        addTransaction({
            description,
            transactionType,
            transactionAmount,
        })
        setDescription("");
        setTransactionAmount("")
    }

    const handleSignOut = async()=>{
       try {
          await signOut(auth)
          const ISSERVER =typeof window ==="undefined"
        if(!ISSERVER){
            localStorage.clear()
        }
          
          router.push("/")
          
       } catch (error) {
            console.error(error)
       }
        
    }
  return (
    <>
    <div className='flex   justify-center w-full p-10 bg-blue-800'>
        <div className='text-center'>
        <h1 className='text-sm lg:text-3xl text-white font-serif font-extrabold bg-blue-300 rounded-3xl '> {name} Expense Tracker</h1>
        <div className='flex flex-col gap-2 m-5 border rounded-xl '>
        <div>
            <h3 className='font-serif font-extrabold text-white bg-black rounded-xl'>Your Balance</h3>
            {balance >=0 ?(
                <h2 className=' font-extrabold text-white'>₹{balance}</h2>
            ):(
                <h2 className=' font-extrabold text-white'>-₹{balance*-1}</h2>
            )}
           
        </div>
        <div>
            <div>
                <h4 className='font-serif font-extrabold text-white  bg-black rounded-xl'>Income</h4>
                <p className=' font-extrabold text-white'>₹{income}</p>
            </div>
            <div>
                <h4 className='font-serif font-extrabold text-white  bg-black rounded-xl'> Expence</h4>
                <p className=' font-extrabold text-white'>₹{expenses}</p>
            </div>
        </div>
        </div>
        <form action="" onSubmit={handleSubmit} className='flex-col flex gap-2 shadow-xl rounded-sm'>
            <div>
            <input type="text" placeholder='description' required 
             onChange={(e)=>setDescription(e.target.value)}
             value={description}
             className='input border border-black m-2'
            />
            <input type="number" placeholder='Amount' required 
            onChange={(e)=>setTransactionAmount(e.target.value)}
            value={transactionAmount}
            className='input border border-black '
            />
            </div>
            <div>
            <input type="radio" id='expense' value='expense' 
            checked={transactionType ==="expense"}
            onChange={(e)=>setTransactionType(e.target.value)}
            className='radio radio-error'
            />
            <label htmlFor="expense" className='text-white'>Expense</label>
            <input type="radio" id='income' value='income'
            checked={transactionType ==="income"}
             onChange={(e)=>setTransactionType(e.target.value)}
             className='radio radio-success'
            />
            <label htmlFor="income" className='text-white'>Income</label>
            </div>

            <button className='btn' type='submit'>Add transaction</button>

        </form>
        </div>
        <div>
            <Image  className='rounded-full' src={profilePhoto} alt='profilrPhoto' width={100} height={100} />
            <button onClick={handleSignOut} 
            className='btn lg:btn-sm btn-xs   mt-2'
            >Sign-Out</button>
        </div>
    </div>
    </>
  )
}
