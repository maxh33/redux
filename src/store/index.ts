import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  //rootReducer
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
