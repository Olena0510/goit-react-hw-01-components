import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => (
                <li key = {friend.id}>
                    <FriendItem friend={friend} />
                </li>
            ))
                
    }

</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}