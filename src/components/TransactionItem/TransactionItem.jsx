import PropTypes from 'prop-types';

export const TransactionItem = ({ item: { type, amount, currenty } }) => {
    return (
        
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currenty}</td>
    </tr>
    
    )
}


TransactionItem.propTypes = {
    item: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currenty: PropTypes.string.isRequired,
    })
}