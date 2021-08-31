import axios from 'axios';

export const aspiSaveExpense = expense => {
    return axios.post('/api/v1/expense',expense);
    
}