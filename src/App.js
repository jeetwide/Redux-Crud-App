import React from "react";

import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/Contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/contacts/add" component={AddContact} />
                <Route path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
