import Home from "./components/HomeScreen";
import HomePage from "./pages/index";
import EmployeeApproval from "./pages/employee_approval";
import EmployeeDetail from "./pages/employeeDetail";
import Sign_In from "./pages/signin";
import Page from "./pages/index (1)";
import VisitorDetail from "./pages/visitor_detail";
import Watchlist from "./pages/watchlist";
import Routes from "./routes/routes";
import Search from "./components/searchBar/SearchBar"
import EmailForChangePassword from "./components/UserCredentials/emailforChangePassword";
import NewEmailPass from "./components/UserCredentials/NewEmailPass";
import Index from "./components/index"

import Chat from "./components/UserCredentials/chat"
import NewAdmin from "./components/newAdmin/newadmin"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
