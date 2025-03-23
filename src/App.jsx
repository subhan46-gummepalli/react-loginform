import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcomepage from "./Welcomepage";
import Signinpage from "./Signinpage";
import CreateAccount from "./CreateAccount";
import AccountDetails from "./AccountDetails";

function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-details" element={<AccountDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
