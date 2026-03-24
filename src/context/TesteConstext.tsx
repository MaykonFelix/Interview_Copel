'use client'

import { createContext, useContext, useReducer } from 'react'
import { type ActionType, type EnvironmentStep, reducer } from './reducer'

interface CreateEnvironmentContext {
  currentStep: EnvironmentStep
  dispatch: React.Dispatch<ActionType>
}

const Provider = createContext<CreateEnvironmentContext | null>(null)

interface ProviderTesteProps {
  children: React.ReactNode
  initialStep?: EnvironmentStep
}

export const ProviderTeste = ({
  children,
  initialStep = 'type'
}: ProviderTesteProps) => {
  const [state, dispatch] = useReducer(reducer, { currentStep: initialStep })

  return (
    <Provider.Provider
      value={{
        currentStep: state.currentStep,
        dispatch
      }}
    >
      {children}
    </Provider.Provider>
  )
}

export const useNewContext = () => {
  const context = useContext(Provider)
  if (!context) {
    throw new Error('useNewContext must be used within CreateProvider')
  }
  return context
}
