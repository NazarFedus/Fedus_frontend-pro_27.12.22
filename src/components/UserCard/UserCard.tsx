import React, {FC} from 'react'
import { IUserCard } from './UserCardTypes'

const UserCard: FC<IUserCard> = ({name}) => {
  return (
    <div>
        {name}
    </div>
  )
}

export default UserCard;
