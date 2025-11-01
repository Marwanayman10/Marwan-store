import { Route, Routes } from "react-router-dom"
import Bottomheader from "./components/header/Bottomheader"
import Topheader from "./components/header/Topheader"
import Home from "./page/home/Home"
import ProductDetails from "./page/ProductDetails/ProductDetails.jsx";
import Cart from "./page/cart/Cart.jsx";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/CategoryPage/CategoryPage.jsx";
import SearchResults from "./page/SearchResults.jsx";
import Favorites from "./page/favorites/Favorites.jsx";


function App() {

  return (
    <>
    <header>
      <Topheader/>
      <Bottomheader/>
    </header>

    <Toaster  position="bottom-right" toastOptions={{
      style:{
        background: '#e9e9e9' ,
        borderRadius: '5px',
        padding : '14px'

      }
      
    }}/>


    <ScrollToTop />

    <AnimatePresence mode="wait">
      
    <Routes>
        <Route path="/"element={ <Home/>}/>
        <Route path="/cart"element={ <Cart/>}/>
        <Route path="/search"element={ <SearchResults/>}/>
        <Route path="/favorites"element={ <Favorites/>}/>
        <Route path="/products/:id"element={ <ProductDetails/>}/>
        <Route path="/category/:category"element={ <CategoryPage/>}/>
    </Routes>
    </AnimatePresence>
    </>
  );
}

export default App
