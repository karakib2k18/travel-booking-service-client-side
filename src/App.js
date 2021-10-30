import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/AllPages/Home/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import LogIn from "./components/HooksForm/LogInSignUp/LogIn";
import SignUp from "./components/HooksForm/LogInSignUp/SignUp";
import Blog from "./components/AllPages/Blog/Blog";
import Destinaton from "./components/AllPages/Destinaton/Destinaton";
import Contact from "./components/AllPages/Contact/Contact";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TourDetails from "./components/AllPages/Tour/TourDetails";
import BookingDetails from "./components/HooksForm/BookingDetails/BookingDetails";
import Tour from "./components/AllPages/Tour/Tour";
import AddTourPlace from "./components/AddTourPlace/AddTourPlace";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/destination">
              <Destinaton />
            </Route>
            <Route path="/tour">
              <Tour />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/AddTourPlace">
              <AddTourPlace />
            </PrivateRoute>
            <PrivateRoute path="/tourdetails">
              <TourDetails />
            </PrivateRoute>
            <PrivateRoute path="/bookingdetails">
              <BookingDetails />
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
