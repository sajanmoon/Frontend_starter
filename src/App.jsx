import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Here we will create main body component  */}
          <Route path="/" element={<Body />}>
            {/* Here we will write all  children component  */}
            {/* Now the childer will not directly load  */}
            {/* For that in a body component we will use OUTLET method  */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
