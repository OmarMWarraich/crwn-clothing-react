
import './categories.styles.scss';
import Directory from './components/directory/directory.component';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  const Shop = () => (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
