// import React from 'react';

// function App() {
//   return (
//     <h1>Hello react</h1>
//   );
// }
// export default App;

import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { RestaurantsPage } from './pages/Restaurants/Restaurants';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Menu } from './components/Menu/Menu';
import { Reviews } from './components/Reviews/Reviews';
import { ThemeContextProvider } from './components/ThemeContextProvider/ThemeContextProvider';
import { DishPage } from './pages/Dish/DishPage';
import { DishesPage } from './pages/Dishes/DishesPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="restaurants" element={<RestaurantsPage />}>
                <Route index element={<span>choose restaurant</span>} />
                <Route path=":restaurantId" element={<Restaurant />}>
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="reviews" element={<Reviews />} />
                </Route>
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="dish/:dishId" element={<DishPage />} />
              <Route path="dishes" element={<DishesPage />} />
              <Route
                path="closed-page"
                element={<Navigate to="/restaurants" replace />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  );
};
