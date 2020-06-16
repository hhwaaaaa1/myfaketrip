import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { countPlusAction, countMinusAction } from "src/reducers/count"
import { DefaultRootState } from "src/types/rootState"

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(({ count }: DefaultRootState) => count.count)

  const onClickPlus = useCallback(() => {
    dispatch(countPlusAction())
  }, [])

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction())
  }, [])

  return (
    <div>
      카운트 : {count}
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Counter
