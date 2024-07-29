
import { Route, Routes } from 'react-router-dom';
import Apps from './Apps';
import LoginComponent from './LoginComponent';

function App() {
  return (
    <>
      <h1 className=" bg-slate-500 w-full h-10 text-center">Welcome To Edge_reach Tech</h1>
      <LoginComponent/>
     
      <Routes>
      <Route path='Apps' Component={Apps}/>
      </Routes>
    </>
  );
}

export default App;
