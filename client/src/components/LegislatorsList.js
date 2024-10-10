import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function LegislatorsList() {
    const [legislators, setLegislators] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/legislators/votes')
        .then(response => response.json())
        .then(data => setLegislators(data));
    },[])

    const renderLegislatorsList = () => {
        return legislators.map(legislator => {
            return (
                <tr key={legislator.id}>
                    <td>{legislator.id}</td>
                    <td>{legislator.legislator}</td>
                    <td>{legislator.supportedBills}</td>
                    <td>{legislator.opposedBills}</td>
                </tr>
            );
        });
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Legislator</th>
                    <th>Supported bills</th>
                    <th>Opposed bills</th>
                </tr>
            </thead>
            <tbody>
                {renderLegislatorsList()}
            </tbody>
        </Table>
    );
}

export default LegislatorsList;