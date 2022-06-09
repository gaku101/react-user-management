import { Wrap, WrapItem } from "@chakra-ui/react"
import { memo } from "react"
import { UserCard } from "../organisms/user/UserCard"

export const UserManagement: React.FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl='https:source.unsplash.com/random'
          userName='じゃけえ'
          fullName='Takumi Okada'
        />
      </WrapItem>
    </Wrap>
  )
})
