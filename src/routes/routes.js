import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import Home from "../pages/index";
import Employee_approval from "../pages/employee_approval"
import Visitor_Detail from "../pages/visitor_detail";
import WatchList from "../pages/watchlist";
import EmployeeDetail from "../pages/employeeDetail";

// import Logs from "../pages/logspage";
// import TP from "../pages/templatepage";
// import UF from "../pages/uploadfilepage";
// import Trends from "../pages/trendspage";
// import Setting from "../pages/settingpage";
// import Dashboard from "../pages/adminpage";
// import DataPage from "../pages/dataskimpage";
// import FP from "../pages/forgotpassword";
// import SettingUser from "../pages/settinguserpage";

// import { useSelector } from "react-redux";

export default function Routes() {
  const history = useHistory();
  //const isLogin = useSelector();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/employees_approval">
          <Employee_approval />
        </Route>
        <Route exact path="/visitors_detail">
          <Visitor_Detail />
        </Route>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>

        <Route exact path="/employee_detail">
          <EmployeeDetail />
        </Route>
      </Switch>
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
