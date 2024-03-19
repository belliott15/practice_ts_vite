import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import File from "./components/Body/File";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path="file" element={<File />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
