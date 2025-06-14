import Login from "./page/Login";
import SignIn from './page/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/sign/:id/:page' element={ <SignIn /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
