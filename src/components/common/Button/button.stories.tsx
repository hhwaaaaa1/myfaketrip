import React from 'react'
import Button from './Button'

export default { title: 'Buttons', Component: 'Button' }

// export const withText: React.FC = () => <Button>Hello Button</Button>

// export const withEmoji: React.FC = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// )

export const buttons: React.FC = () => (
  <div>
    <Button onClick={() => ({})} label={'파트너등록하기'} type={''}></Button>

    <Button onClick={() => ({})} label={'로그인'} type={''}></Button>

    <Button onClick={() => ({})} label={'회원가입'} customClass={`outline`} type={'link'}></Button>
  </div>
)
