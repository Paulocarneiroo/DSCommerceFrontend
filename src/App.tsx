import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import Catalog from './routes/ClientHome/Catalog';
import Login from './routes/ClientHome/Login';
import ProductDetails from './routes/ClientHome/ProductDetails';
import Confirmation from './routes/ClientHome/Confirmation';
import ProductListing from './routes/Admin/AdminHome/ProductListing';
import ProductForm from './routes/Admin/AdminHome/ProductForm';
import { ContextCartCount } from './utils/context-cart';
import { ContextToken } from './utils/context-token';
import { PrivateRoute } from './components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] =
      useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);

    if (authService.isAuthenticated()) {
      setContextTokenPayload(authService.getAccessTokenPayload());
    }
  }, []);

  return (
      <ContextToken.Provider
          value={{ contextTokenPayload, setContextTokenPayload }}
      >
        <ContextCartCount.Provider
            value={{ contextCartCount, setContextCartCount }}
        >
          <BrowserRouter>
            <Routes>

              {/* ===== ROTAS CLIENTE ===== */}
              <Route path="/" element={<ClientHome />}>
                <Route index element={<Catalog />} />
                <Route path="catalog" element={<Catalog />} />
                <Route
                    path="product-details/:productId"
                    element={<ProductDetails />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route
                    path="confirmation/:orderId"
                    element={
                      <PrivateRoute>
                        <Confirmation />
                      </PrivateRoute>
                    }
                />
              </Route>

              {/* ===== ROTAS ADMIN ===== */}
              <Route
                  path="/admin"
                  element={
                    <PrivateRoute roles={['ROLE_ADMIN']}>
                      <Admin />
                    </PrivateRoute>
                  }
              >
                <Route index element={<Navigate to="/admin/home" replace />} />
                <Route path="home" element={<AdminHome />} />
                <Route path="products" element={<ProductListing />} />
                <Route path="products/:productId" element={<ProductForm />} />
              </Route>

              {/* ===== FALLBACK ===== */}
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </BrowserRouter>
        </ContextCartCount.Provider>
      </ContextToken.Provider>
  );
}
