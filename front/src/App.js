import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from "./redux/store";  
import { UserContext } from "./context/UserContext";
import { Provider } from "react-redux";
import { useEffect, useMemo, useState } from "react";

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

import ClientGuard from './guards/client.guard';


import { AuthAdmin_layout, AuthClient_layout, Authentified_layout } from '../src/Auth';

function App() {
  
  return (      
    <div>

     

      <Routes>
  {/* //user routes */}
        <Route element={<AuthClient_layout />}>     
          <Route path="/" element={<Main />} />
          <Route path="/viewpro/:productId" element={<Viewpro />} />
          <Route path="/panier" element={<ClientGuard element={<Panier />} />}/>
          <Route path="/compte" element={<ClientGuard element={<Moncompte />} />}/>
          <Route path="/information" element={<ClientGuard element={<Information />} />}/>
          <Route path="/adresse" element={<ClientGuard element={<Adresse />} />}/>
          <Route path="/historique" element={<ClientGuard element={<Historique />} />}/>
          <Route path="/wish" element={<ClientGuard element={<Wishlist />} />}/>
        </Route>
      </Routes>
  {/* //admin routes */}
      <Routes>
        <Route element={<AuthAdmin_layout />}>
          <Route path="/additem" element={<ClientGuard element={<Additem />} />}/> 
          <Route path="/allcommand" element={<ClientGuard element={<AllCommand />} />}/>
          <Route path="/admin" element={<ClientGuard element={<AdminMain />} />}/>
          <Route path="/listItem" element={<ClientGuard element={<ListItem />} />}/>
        </Route>
      </Routes>
  {/* //all routes */}
      <Routes>
        <Route element={<Authentified_layout/>}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/paiement" element={<Paiement />} />
        </Route>
      </Routes>

      </div>
  );
}

export default App;
