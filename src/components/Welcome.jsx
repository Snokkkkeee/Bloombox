import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import moment from 'moment';
import "../styles/Welcome.css"
import { Navigate, useNavigate } from "react-router-dom";



const WelcomePage = () => {
   const { user, setUser } = useUser();
const navigate = useNavigate();
   useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        try {
          const db = getFirestore();
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ ...user, ...userData }); // Update the user data with the fetched data
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user, setUser]);

  return (
    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 MuiGrid-grid-xl-5 css-1xoin7r">
      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-rb0gy66">
        <div className="MuiBox-root css-1vhjwv9">
          {user && (
            <div className="MuiBox-root css-7wmvu8">
              <span className="MuiTypography-root MuiTypography-button css-1nwa4id">Welcome back,</span>
              <br />
              <h3 className="MuiTypography-root MuiTypography-h3 css-ttmw0o">{user.username || user.name || ''}</h3>
              <h6 className="MuiTypography-root MuiTypography-h6 css-xjb1v0">
                Glad to see you again!<br /></h6>
                <br />
                
              <h3 style={{color: '#acecee'}}> Your last login was {
    user && user.lastLogin && moment(user.lastLogin, moment.ISO_8601).isValid() 
      ? moment(user.lastLogin).fromNow() 
      : 'N/A'
  }
             </h3> 
              
            </div>
          )}
          <a className="MuiTypography-root MuiTypography-button css-eftj98" href="/gardenshowcase">
            <span className="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-1hvte0f" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
