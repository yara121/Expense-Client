import { EXPENSE_SAVED } from "./types";

import {aspiSaveExpense} from '../api/expense'
export const saveExpense = expense =>{
    return async dispatch => {
        try {
  await aspiSaveExpense(expense);
   dispatch({type:EXPENSE_SAVED})

        }catch(e){
            console.error(e)
        }
    }
}