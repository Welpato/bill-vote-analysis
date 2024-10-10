import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import getBillsResults from '../utils/getBillsResults';

function BillsList() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        async function fetchBills() {
            const billsResult = await getBillsResults();
            setBills(billsResult);
        }

        fetchBills();
    },[])

    const renderBillsList = () => {
        return bills.map(bill => {
            return (
                <tr key={bill.id}>
                    <td>{bill.id}</td>
                    <td>{bill.title}</td>
                    <td>{bill.primarySponsor}</td>
                    <td>{bill.supportedVotes}</td>
                    <td>{bill.opposedVotes}</td>
                </tr>
            );
        });
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Primary Sponsor ID</th>
                    <th>Supported Votes</th>
                    <th>Opposed Votes</th>
                </tr>
            </thead>
            <tbody>
                {renderBillsList()}
            </tbody>
        </Table>
    );
}

export default BillsList;