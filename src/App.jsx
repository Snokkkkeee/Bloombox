import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";
import SignIn from "./pages/SignIn";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import backgroundImage from "./assets/body-background.png";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Layout>
          <Content>
            <Routes>
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />
              <Route path="/" element={<Navigate to="/SignIn" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
