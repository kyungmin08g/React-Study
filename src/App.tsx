import Login from "./components/Login";
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/sign' element={ <SignIn /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
