import { memo } from "react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

export const Login: React.FC = memo(() => {
  return (
    <>
      <ColorModeSwitcher />
      <p>ログインページです</p>
    </>
  )
})
