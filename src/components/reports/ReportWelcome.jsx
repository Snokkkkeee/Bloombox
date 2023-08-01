import React from 'react';
import { Card, Typography, } from 'antd';
import '/Users/jwsnooke/Desktop/Bloombox Layout/src/components/reports/ReportWelcome.jsx';

const { Title, Text } = Typography;

const ReportWelcome = () => {
  return (
    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 MuiGrid-grid-xl-5 css-1xoin7r">
      <Card className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-rb0gy6666">
        <div className="MuiBox-root css-1vhjwv9">
          <div className="MuiBox-root css-7wmvu8">
            <Text className="MuiTypography-root MuiTypography-button css-1nwa4id">Welcome back,</Text>
            <Title level={3} className="MuiTypography-root MuiTypography-h3 css-ttmw0o">Reports</Title>
            <Title level={6} className="MuiTypography-root MuiTypography-h6 css-xjb1v0">Glad to see you again!</Title>
          </div>
          <a className="MuiTypography-root MuiTypography-button css-eftj98" href="/#">
           
          </a>
        </div>
      </Card>
    </div>
  );
};

export default ReportWelcome;
