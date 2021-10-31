import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/AllPages/Home/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import LogIn from "./components/HooksForm/LogInSignUp/LogIn";
import SignUp from "./components/HooksForm/LogInSignUp/SignUp";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddTourPlace from "./components/Dashboard/AddTourPlace/AddTourPlace";
import TrendingTourCardDetails from "./components/AllPages/Home/TrendingTour/TrendingTourCardDetails";
import BookingTour from "./components/HooksForm/BookingTour/BookingTour";
import AllOrders from "./components/Dashboard/AllOrders/AllOrders";
import Destinaton from "./components/AllPages/Destinaton/Destinaton";
import Blogs from "./components/AllPages/Blogs/Blogs";
import BlogDetails from "./components/AllPages/Blogs/BlogDetails/BlogDetails";
import AllTrendingTour from "./components/AllPages/Home/TrendingTour/AllTrendingTour";
import MyOrders from "./components/Dashboard/AddTourPlace/MyOrders/MyOrders";

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
            <Route path="/destination">
              <Destinaton />
            </Route>
            <Route exact path="/tour">
              <AllTrendingTour />
            </Route>
            <PrivateRoute path="/tour/:tourId">
              <TrendingTourCardDetails />
            </PrivateRoute>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <PrivateRoute path="/blogs/:blogsId">
              <BlogDetails />
            </PrivateRoute>
            <PrivateRoute path="/addtourplace">
              <AddTourPlace />
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute path="/bookingtour">
              <BookingTour />
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
