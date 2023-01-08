import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            <tr> {items.map(item => (
                <td key={item.id}>TransactionItem item = {item}</td>
            ))}
      </tr>
        </tbody>
    </table>
  )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired}
    ))
}
