type CounterState = {
  count: number
}

type CounterAction =
  | ReturnType<typeof countPlusAction>
  | ReturnType<typeof countMinusAction>

export const initialState: CounterState = {
  count: 0,
}

export const COUNT_PLUS = "COUNT_PLUS" as const
export const COUNT_MINUS = "COUNT_MINUS" as const

export const countPlusAction = () => ({ type: COUNT_PLUS })
export const countMinusAction = () => ({ type: COUNT_MINUS })

const reducer = (state: CounterState = initialState, action: CounterAction) => {
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
