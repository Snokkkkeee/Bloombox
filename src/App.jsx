import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/Analytics";
import Servers from "./pages/Servers";
import Databases from "./pages/Databases";
import Systems from "./pages/Systems";
import Networks from "./pages/Networks";
import MyAccount from "./pages/MyAccount";
import MyNotifications from "./pages/MyNotifications";
import Messages from "./pages/Messages";
import Security from "./pages/Security";
import backgroundImage from "./assets/body-background.png";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const { Content, Sider } = Layout;

const AppContent = () => {
  const location = useLocation();
  
  const shouldShowSidebarAndNavbar = () => {
    const { pathname } = location;
    return !['/SignIn', '/SignUp', '/'].includes(pathname);
  };

  return (
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Layout>
        {shouldShowSidebarAndNavbar() && <Navbar />}
        <Layout>
          {shouldShowSidebarAndNavbar() && (
            <Sider width={200}>
              <Sidebar />
            </Sider>
          )}
        <Content>
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/overview/analytics" element={<Analytics />} />
            <Route path="/monitor/servers" element={<Servers />} />
            <Route path="/monitor/databases" element={<Databases />} />
            <Route path="/monitor/systems" element={<Systems />} />
            <Route path="/monitor/networks" element={<Networks />} />
            <Route path="/settings/myaccount" element={<MyAccount />} />
            <Route path="/settings/mynotifications" element={<MyNotifications />} />
            <Route path="/settings/messages" element={<Messages />} />
            <Route path="/settings/security" element={<Security />} />
            <Route path="/" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
      </Layout>
      </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
