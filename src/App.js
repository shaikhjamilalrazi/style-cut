import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import LoginAndSignUp from "./components/LoginAndSignUp/LoginAndSignUp";
import NoMatch from "./components/NoMatch/NoMatch";
import { createContext, useState } from "react";
import DashBoard from "./components/DashBoard/DashBoardMain/Dashboard";
import Book from "./components/Book/Book";
import Review from "./components/Review/Review";
import BookList from "./components/BookList/BookList";
import OrderList from "./components/OrderList/OrderList";
import AddService from "./components/AddService/AddService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import ManageService from "./components/ManageService/ManageService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <PrivateRoute path="/ManageService">
                        <ManageService />
                    </PrivateRoute>
                    <PrivateRoute path="/MakeAdmin">
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path="/AddService">
                        <AddService />
                    </PrivateRoute>
                    <PrivateRoute path="/OrderList">
                        <OrderList />
                    </PrivateRoute>
                    <PrivateRoute path="/Review">
                        <Review />
                    </PrivateRoute>
                    <PrivateRoute path="/BookList">
                        <BookList />
                    </PrivateRoute>
                    <PrivateRoute path="/Book/:id">
                        <Book />
                    </PrivateRoute>
                    <PrivateRoute path="/Book">
                        <Book />
                    </PrivateRoute>
                    <PrivateRoute path="/Dashboard">
                        <DashBoard />
                    </PrivateRoute>
                    <Route path="/LoginAndSignUp">
                        <LoginAndSignUp />
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
