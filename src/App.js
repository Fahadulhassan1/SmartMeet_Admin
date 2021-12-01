import Routes from "./routes/routes";
import Drawer from "./components/Drawer";
import Reports from "./pages/reports";
import Grid from "@material-ui/core/Grid";
import Footer from "./components/footer";
import Settings from "./components/Settings/changePassword";
function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Routes />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
