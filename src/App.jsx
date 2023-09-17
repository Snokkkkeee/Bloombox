import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";


import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import DashboardPage from "./layout/DashboardPage";
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
import backgroundImage from "./assets/body-background2.png";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import GardenFormSetup from "./auth/GardenFormSetup"; 
import CreateProfile from "./auth/CreateProfile"; 
import UserGardens from "./components/UserGardens";  


const { Content, Sider } = Layout;

const AppContent = () => {
  const location = useLocation();
  
  const shouldShowSidebarAndNavbar = () => {
    const { pathname } = location;
return !['/SignIn', '/SignUp', '/', '/CreateProfile', '/GardenFormSetup'].includes(pathname);
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
            <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/gardenformsetup" element={<GardenFormSetup />} />
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
              <Route path="/gardens" element={<UserGardens />} /> 
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
