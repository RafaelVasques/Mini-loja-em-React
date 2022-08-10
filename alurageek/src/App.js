// import logo from './logo.svg';
import './Reset.css';
import './App.css';
import './Base.css';

import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';

import ContactUs from './components/Comps-Footer/ContactUs';
import Footer from './components/Comps-Footer/Footer';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <AdminPage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
