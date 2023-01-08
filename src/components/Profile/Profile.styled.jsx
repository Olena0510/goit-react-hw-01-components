import styled from '@emotion/styled';

export const Frame = styled.div`
text-align: center;
margin: auto;
border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 256, 0.5);
  max-width: 300px;
  margin-top: 30px;
`;

export const CardUser = styled.div`
  margin-bottom: 15px;
  padding: 10px;
`;

export const Avatar = styled.img`
     margin: auto;
  width: 130px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-weight: 650;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const UserInfo = styled.p`
    color: grey;
    margin-bottom: 10px;
     font-size: 16px;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
     gap: 5px;
     justify-content: center;
      background: #e7e7f5;
      border: 1px #c5c5f5 solid;
     width: 100%;
     height: 100px;
     text-align: center;
`;

export const StatsLabel = styled.span`
    color: grey;
     font-size: 16px;
`;

export const StatsInfo = styled.span`
    font-weight: 650;
  font-size: 16px;
`;