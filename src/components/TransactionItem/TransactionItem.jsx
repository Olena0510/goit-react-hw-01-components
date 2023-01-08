import PropTypes from 'prop-types';

export const TransactionItem = ({ transactions: { type, amount, currenty } }) => {
    return (
        
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currenty}</td>
    </tr>
    
    )
}


TransactionItem.propTypes = {
    transactions: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currenty: PropTypes.string.isRequired,
    })
}