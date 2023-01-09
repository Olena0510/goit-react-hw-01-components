import PropTypes from 'prop-types';
import { TableRow, TableCell } from './TransactionItem.styled';


export const TransactionItem = ({ item: { type, amount, currency } }) => {
    return (
        
    <TableRow>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>
    
    )
}


TransactionItem.propTypes = {
    item: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currenty: PropTypes.string.isRequired,
    })
}