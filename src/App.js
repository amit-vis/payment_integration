
import './App.css';
import { SignIn } from './component/formsection/signin';
import {Route, Routes} from "react-router-dom"
import { Signup } from './component/formsection/sigup';
import { AuthProvider } from './backend/context/authcontext';
import { APIProvider } from './backend/context/APIContext';
import { Payments } from './component/payments/payment';
import { SuccessPage } from './component/payments/Success';
import { CancelPage } from './component/payments/Cancel';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <APIProvider>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/payment' element={<Payments/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
          <Route path='/cancel' element={<CancelPage/>}/>
        </Routes>
        </APIProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
