import { Route, Routes } from "react-router-dom";
import Login from "../page/Login/Login";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}
