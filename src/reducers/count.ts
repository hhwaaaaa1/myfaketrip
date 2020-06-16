type CounterState = {
  count: number
}

export const initialState: CounterState = {
  count: 0,
}

export const COUNT_PLUS = 'COUNT_PLUS' as const
export const COUNT_MINUS = 'COUNT_MINUS' as const

interface CountPlusAction {
  type: typeof COUNT_PLUS
}

interface CountMinusAction {
  type: typeof COUNT_MINUS
}

export const countPlusAction = (): CountPlusAction => ({ type: COUNT_PLUS })
export const countMinusAction = (): CountMinusAction => ({ type: COUNT_MINUS })

type CounterAction = ReturnType<typeof countPlusAction> | ReturnType<typeof countMinusAction>

const reducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case COUNT_PLUS:
      return {
        ...state,
        count: state.count + 1,
      }
    case COUNT_MINUS:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default reducer
