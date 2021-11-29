import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import Home from "../pages/index";
import EmployeeApproval from "../pages/employee_approval";
import VisitorDetail from "../pages/visitor_detail";
import WatchList from "../pages/watchlist";
import EmployeeDetail from "../pages/employeeDetail";
import SignIn from "../pages/signin";
import EmailForChangePassword from "../components/UserCredentials/emailforChangePassword";
import NewEmailPass from "../components/UserCredentials/NewEmailPass";
import Reports from "../pages/reports"
// import Logs from "../pages/logspage";
// import TP from "../pages/templatepage";
// import UF from "../pages/uploadfilepage";
// import Trends from "../pages/trendspage";
// import Setting from "../pages/settingpage";
// import Dashboard from "../pages/adminpage";
// import DataPage from "../pages/dataskimpage";
// import FP from "../pages/forgotpassword";
// import SettingUser from "../pages/settinguserpage";

import { useSelector } from "react-redux";

export default function Routes() {
  const history = useHistory();
  const login = useSelector((state) => state.states.islogin);
  //const isLogin = useSelector();
  return (
    <Router history={history}>
      {login ? (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/employees_approval">
            <EmployeeApproval />
          </Route>
          <Route exact path="/visitors_detail">
            <VisitorDetail />
          </Route>
          <Route exact path="/watchlist">
            <WatchList />
          </Route>
          <Route exact path="/employee_detail">
            <EmployeeDetail />
          </Route>
          <Route exact path="/reports">
          <Reports/>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/changePassword">
            <EmailForChangePassword />
          </Route>
          <Route exact path="/api/admin/addnewPassword/:token">
            <NewEmailPass />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

// const OtherRoutes = () => {
//   return (
//     <Switch>
//       <Route path="/logs">
//         <Logs />
//       </Route>
//       <Route path="/tempman">
//         <TP />
//       </Route>
//       <Route path="/output">
//         <DataPage />
//       </Route>
//       <Route path="/uploadfile">
//         <UF />
//       </Route>
//       <Route path="/trends">
//         <Trends />
//       </Route>
//       <Route path="/setting">
//         <Setting />
//       </Route>
//       <Route path="/settinguser">
//         <SettingUser />
//       </Route>
//       <Route path="/dashboard">
//         <Dashboard />
//       </Route>
//     </Switch>
//   );
// };
