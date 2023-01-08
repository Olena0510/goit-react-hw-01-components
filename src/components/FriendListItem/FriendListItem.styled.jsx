import styled from '@emotion/styled';

export const Status = styled.span`
border-radius: 50%;
margin-left: 15px;
width: 20px;
height: 20px;


background-color: ${props => {
    return props.isOnline ? '#06d539' : '#cb0d0d';
  }};

/* background-color: ${props => {
    switch (props.isOnline) {
        case 'true':
            return '#06d539';
        case 'false':
            return '#cb0d0d';
        default:
            return '#000';
    }
}
} */

`;

export const AvatarFriend = styled.img`
width: 75px;
background-color: #dbddf6;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
border-radius: 10px;
`;

export const NameFriend = styled.p`
color: #1d1b1b;
    font-weight: 500;
    font-size: 24px;
`;