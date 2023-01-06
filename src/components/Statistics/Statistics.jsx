import PropTypes from 'prop-types';
import { StatisticsSection, Title, List, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection> 
            {title && <Title> { title } </Title>}

            <List className="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <Item key={id} className="item">
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
        ))}        
  </List>
</StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};