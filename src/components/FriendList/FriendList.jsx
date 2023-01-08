import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendListItem/FriendListItem';
import { ListFriend, ItemFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListFriend>
            {friends.map(friend => (
                <ItemFriend key = {friend.id}>
                    <FriendItem friend={friend} />
                </ItemFriend>
            ))
                
    }

</ListFriend>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}