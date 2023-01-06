import PropTypes from 'prop-types';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        
        <>
            <span className="status">{isOnline }</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
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