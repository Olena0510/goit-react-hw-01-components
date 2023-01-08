import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
    text-align: center;
margin: auto;
border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 256, 0.5);
  max-width: 300px;
  margin-top: 30px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: #5d5858;
    font-weight: 600;
    font-size: 20px;
    padding: 30px;
`;

export const List = styled.ul`
display: flex;
    justify-content: space-around;
`;

export const Item = styled.li`
display: flex;
    flex-direction: column;
     gap: 5px;
     justify-content: center;
      border: 1px #c5c5f5 solid;
     width: 100%;
     height: 70px;
     text-align: center;
`;

export const Label = styled.span`
 color: #5d5858;
    font-weight: 500;
    font-size: 14px;
`;

export const Percentage = styled.span`
color: #5d5858;
    font-weight: 500;
    font-size: 20px;
`;