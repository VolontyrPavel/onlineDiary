import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./page/Layout";
const Home = lazy(() => import('./page/Home/Home'));
const Register = lazy(() => import('./page/Register/Register'));
const Login = lazy(() => import('./page/Login/Login'));
const Profile = lazy(() => import('./page/Profile/Profile'));
const Classes = lazy(() => import('./page/Classes/Classes'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="classes" element={<Classes />}></Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
