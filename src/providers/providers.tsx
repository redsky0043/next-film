'use client';

import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

interface IProps {
  children: ReactNode,
}

export const Providers: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
