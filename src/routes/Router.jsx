import { Route, Routes } from "react-router-dom";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}
