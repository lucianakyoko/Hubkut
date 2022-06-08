import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContextProvider } from './context';
import { Home } from './pages/Home';
import { User } from './pages/User';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='user' element={<User/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
