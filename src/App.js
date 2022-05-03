import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import AllModels from "./pages/AllModels";
import ModelDetail from "./pages/ModelDetail";
import NewModel from "./pages/NewModel";
import Layout from "./components/layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/" exact>
          <Redirect to="/models" />
        </Route>
        <Route path="/models" exact>
          <AllModels />
        </Route>
        <Route path="/models/:modelId">
          <ModelDetail />
        </Route>
        <Route path="/new-model">
          <NewModel />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;


