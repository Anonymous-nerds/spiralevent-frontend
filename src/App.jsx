import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waitlist from "./pages/Waitlist/Waitlist";
import WaitlistRef from "./pages/WaitlistRef/WaitlistRef";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <div className="">
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Waitlist />} />
              {/* <Route path="/" element={<Hero />} /> */}
              <Route path="/waitlist/ref/:code" element={<WaitlistRef />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
