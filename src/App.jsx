// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import DashboardPage from './pages/DashboardPage';
import NotFound from './pages/NotFound';

import Analytics from './pages/Analytics';
import MyAccount from './pages/MyAccount';
import MyNotifications from './pages/MyNotifications';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Overview from './pages/Overview';


import Servers from './pages/Servers';
import Databases from './pages/Databases';
import Systems from './pages/Systems';
import Networks from './pages/Networks';
import Messages from './pages/Messages';
import Security from './pages/Security';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FooterComponent from './components/FooterComponent';
import backgroundImage from './assets/body-background.png';


const { Sider, Content,  } = Layout;

function App() {
  return (
    <Router>
     <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Navbar />
    
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            <Routes>
            <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />

              <Route path="/overview/analytics" element={<Analytics />} />
              <Route path="/overview/main" element={<Overview />} />
      
          
            
              <Route path="/monitor/servers" element={<Servers />} />
              <Route path="/monitor/databases" element={<Databases />} />
              <Route path="/monitor/systems" element={<Systems />} />
              <Route path="/monitor/networks" element={<Networks />} />
              <Route path="/settings/myaccount" element={<MyAccount />} />
              <Route path="/settings/mynotifications" element={<MyNotifications />} />
              <Route path="/settings/messages" element={<Messages />} />
              <Route path="/settings/security" element={<Security />} />
              <Route path="/authentication/signin" element={<SignIn />} />
              <Route path="/authentication/signup" element={<SignUp />} />
              <Route path="/authentication/forgotpassword" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
      
          <FooterComponent />
    
      </Layout>
    </Router>
  );
}

export default App;
