"use client"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase"

export const useDeleteTransactions=()=>{

        const deleteTransactions = async(id)=>{
            const transactionDoc =doc(db,"transactions",id)
           await deleteDoc(transactionDoc)
        }

    return {deleteTransactions}
}