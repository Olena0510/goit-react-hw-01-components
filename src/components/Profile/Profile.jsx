import PropTypes from 'prop-types';
import { Frame, CardUser, Avatar, UserName, UserInfo, Stats, StatsItem, StatsLabel, StatsInfo } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <Frame>
  <CardUser>
    <Avatar
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <UserInfo>@{tag}</UserInfo>
    <UserInfo>{location}</UserInfo>
  </CardUser>

  <Stats>
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsInfo>{followers}</StatsInfo>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsInfo>{views}</StatsInfo>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsInfo>{likes}</StatsInfo>
    </StatsItem>
  </Stats>
</Frame>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}