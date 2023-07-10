import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from "./redux/store";  
import { Provider } from "react-redux";

import Main from './pages/User/Main';
import Viewpro from './pages/User/Viewpro';
import Panier from './pages/User/Panier';
import Moncompte from './pages/User/Moncompte';
import Information from './pages/User/Information';
import Historique from './pages/User/Historique';
import Wishlist from './pages/User/Wishlist';

import Additem from './pages/Admin/Additem';
import AllCommand from './pages/Admin/AllCommand';
import AdminMain from './pages/Admin/AdminMain';
import ListItem from './pages/Admin/ListItem';

import Auth from './pages/Auth/Auth';
import Signup from './pages/Auth/Signup';
import Livraison from './pages/All/Livraison';
import Conditions from './pages/All/Conditions';
import Mentions from './pages/All/Mentions';
import Paiement from './pages/All/Paiement';
import Adresse from './pages/All/Adresse';

function App() {
  return (      
    <Provider store={store}>

      <Router>
        <Routes>
  {/* //user routes */}
          <Route path="/" element={<Main />} />
          <Route path="/viewpro/:productId" element={<Viewpro />} />
          <Route path="/panier" element={<Panier />} /> 
          <Route path="/compte" element={<Moncompte />} />
          <Route path="/information" element={<Information />} />
          <Route path="/adresse" element={<Adresse />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/wish" element={<Wishlist />} />
  {/* //admin routes */}
          <Route path="/additem" element={<Additem />} />
          <Route path="/allcommand" element={<AllCommand />} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/listItem" element={<ListItem />} />
  {/* //all routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/paiement" element={<Paiement />} />
      </Routes>
      </Router>

    </Provider>
  );
}

export default App;
