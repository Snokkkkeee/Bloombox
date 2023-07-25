import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import DashboardPage from './pages/DashboardPage';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Analytics from './pages/Analytics';
import MyAccount from './pages/MyAccount';
import MyNotifications from './pages/MyNotifications';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Summary from './pages/Summary';
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import Drafts from './pages/Drafts';
import Archive from './pages/Archive';
import UserList from './pages/UserList';
import Friends from './pages/Friends';
import Admins from './pages/Admins';
import UserRoles from './pages/UserRoles';
import Servers from './pages/Servers';
import Databases from './pages/Databases';
import Systems from './pages/Systems';
import Networks from './pages/Networks';
import Preferences from './pages/Preferences';
import Security from './pages/Security';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FooterComponent from './components/FooterComponent';
import backgroundImage from './assets/body-background.png';


const { Header, Sider, Content, Footer } = Layout;

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
              <Route path="/dashboard/*" element={<DashboardPage />} />
              <Route path="/overview/main" element={<Main />} />
              <Route path="/overview/analytics" element={<Analytics />} />
              <Route path="/overview/main" element={<Overview />} />
              <Route path="/overview/reports" element={<Reports />} />
              <Route path="/overview/summary" element={<Summary />} />
              <Route path="/messages/inbox" element={<Inbox />} />
              <Route path="/messages/sent" element={<Sent />} />
              <Route path="/messages/drafts" element={<Drafts />} />
              <Route path="/messages/archive" element={<Archive />} />
              <Route path="/users/list" element={<UserList />} />
              <Route path="/users/friends" element={<Friends />} />
              <Route path="/users/admins" element={<Admins />} />
              <Route path="/users/roles" element={<UserRoles />} />
              <Route path="/monitor/servers" element={<Servers />} />
              <Route path="/monitor/databases" element={<Databases />} />
              <Route path="/monitor/systems" element={<Systems />} />
              <Route path="/monitor/networks" element={<Networks />} />
              <Route path="/settings/myaccount" element={<MyAccount />} />
              <Route path="/settings/mynotifications" element={<MyNotifications />} />
              <Route path="/settings/preferences" element={<Preferences />} />
              <Route path="/settings/security" element={<Security />} />
              <Route path="/authentication/signin" element={<SignIn />} />
              <Route path="/authentication/signup" element={<SignUp />} />
              <Route path="/authentication/forgotpassword" element={<ForgotPassword />} />
              <Route path="/authentication/resetpassword" element={<ResetPassword />} />
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
