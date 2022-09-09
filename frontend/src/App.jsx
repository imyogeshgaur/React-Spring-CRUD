import { Routes,Route } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Delete from "./Components/Delete";
import Home from "./Components/Home";
import Post from "./Components/Post";
import Put from "./Components/Put";

function App() {
  return (
    <>
    <NavBar />
        <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/post" element={<Post/>}/>
              <Route exact path="/put" element={<Put />}/>
              <Route exact path="/delete" element={<Delete />}/>
      </Routes>
    </>
  );
}

export default App;
