import "./App.css";
import HomeComponents from "./Components/Home";
import WhetherDetails from "./Components/WhetherDetails/WhetherDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details" element={<WhetherDetails />}></Route>
        <Route path="/" element={<HomeComponents />}></Route>
      </Routes>
      {/* <HomeComponents /> */}
    </div>
  );
}

export default App;
// Manifest
// Service worker
// https://
// favicon.icon
// maskable icon
// APP name
// install swr
// npx create-react-app my-app --template cra-template-pwa

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
