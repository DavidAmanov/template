import './App.css';
import Catalog from './components/Catalog/Catalog.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
