export type EnvironmentStep = 'type' | 'online' | 'physical'

export interface State {
  currentStep: EnvironmentStep
}

export const initialState: State = {
  currentStep: 'type'
}

export type ActionType = {
  type: 'setStep'
  payload: EnvironmentStep
}

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'setStep':
      return {
        ...state,
        currentStep: action.payload
      }
    default:
      return state
  }
}
