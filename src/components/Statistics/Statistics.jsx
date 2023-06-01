import { Table } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <Table>
            <tbody>
            <tr>
                <td>Good:</td>
                <td>{good}</td>
            </tr>
            <tr>
                <td>Neutral: </td>
                <td>{neutral}</td>
            </tr>
            <tr>
                <td>Bad:</td>
                <td>{bad}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{total}</td>
            </tr>
            <tr>
                <td>Positive feedback:</td>
                <td>{positivePercentage}%</td>
            </tr>
            </tbody>
        </Table>
    );
};