import PropTypes from 'prop-types';
import { Status, AvatarFriend, NameFriend } from './FriendListItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        
        <>
            <Status></Status>
  <AvatarFriend  src={avatar} alt={name} width="48" />
            <NameFriend className="name">{name}</NameFriend>
</>
    )
}


FriendItem.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}