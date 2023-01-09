import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { Table, Caption, CaptionTitle } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Caption>
                <tr>
                    <CaptionTitle>Type</CaptionTitle>
                    <CaptionTitle>Amount</CaptionTitle>
                    <CaptionTitle>Currency</CaptionTitle>
                </tr>
            </Caption>

            <tbody>
                {items.map(item => (
                    <TransactionItem key={item.id} item={item} />
                ))}
            </tbody>
        </Table>
    );
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
    )).isRequired
}
