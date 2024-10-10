import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import LegislatorsList from './components/LegislatorsList';
import { useState } from 'react';
import { PAGES } from './utils/constants';
import Container from 'react-bootstrap/esm/Container';
import BillsList from './components/BillsList';

function App() {
  // I know this is not the best way to handle pagination, but I don't want to spend too much time
  // implementing routing or a more complex pagination system.
  const [currPage, setCurrPage] = useState(PAGES.LEGISLATORS);

  return (
    <div>
      <Menu setCurPage={setCurrPage}/>
      <Container className='mt-3'>
        <h1>{currPage}</h1>
        { currPage === PAGES.BILLS && <BillsList />}
        { currPage === PAGES.LEGISLATORS && <LegislatorsList />}
      </Container>
      
    </div>
  );
}

export default App;
