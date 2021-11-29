
import Routes from "./routes/routes";
import Drawer from "./components/Drawer"
import Reports from "./pages/reports"
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <div className="App">
      <Grid container>
        
        <Grid item xs={12}>
          <Routes />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
