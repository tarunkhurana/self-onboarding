import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import { Counter } from "./pages/counter/Counter";
import Signin from "./pages/auth/signin/Signin";
import Signup from "./pages/auth/signup/Signup";

const AppRoutes = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="counter" element={<Counter />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
