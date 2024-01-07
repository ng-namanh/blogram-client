import { RouterProvider } from 'react-router-dom'
import { route } from './RouterProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore, persistedStore } from '@/app/appStore'

export function Provider() {
  return (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={route} />
      </PersistGate>
    </ReduxProvider>
  )
}
