import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubscribeForm from './pages/SubscribeForm';
import Success from './pages/Success';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <BrowserRouter basename={'/frontend-mentor-newsletter/'}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<SubscribeForm />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
