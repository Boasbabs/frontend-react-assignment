import { Route, Routes } from "react-router-dom";
import { AddTicketsPage, TicketsListPage  } from '../pages';
import ErrorPage from './error-page';

const  RootRouter = () => (
    <>
      <Routes>
        <Route path="/" element={<AddTicketsPage />} />
        <Route path="list" element={<TicketsListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
 
export default RootRouter;