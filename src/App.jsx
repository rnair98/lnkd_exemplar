import "./App.css";
import { React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { selectUser,login,logout } from "./slices/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);


  return (
  user ? (
    <div className="App" role="main">
      <Header />
      <div className="app__body">
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  ): (
    <Login />
  ));
}

export default App;
