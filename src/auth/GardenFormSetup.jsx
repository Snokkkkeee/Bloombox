
import { AntCloudOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons' // Importing ant design icons
import { Form, Input, DatePicker, InputNumber, Tooltip, Button, Upload, Switch, Radio, Slider, Modal, Checkbox, 
  Select, Row, Col } from 'antd';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  CloudOutlined} from '@ant-design/icons';
import { faLeaf,faTint, faCalendarAlt, faSun, faBell, faSms, faThermometerHalf, faPencilAlt, faEnvelope, faDroplet } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react'; // Importing the useState hook from the react library
import { useNavigate } from 'react-router-dom' ;// Importing the useNavigate hook from the react-router-dom library

import { auth } from '../Services/firebase' ;// Importing authentication function
import moment from 'moment' ;// Importing the moment library for date manipulation
import { styled } from 'styled-components';
import { addDoc, collection, Timestamp } from "firebase/firestore"; 
import { db } from "../Services/firebase";


const StyledButton = styled(Button)`
  transform: scale(1.5);
  background: linear-gradient(to right, #667eea, #9F7AEA);
  border: none;
  border-radius: 12px;
    &:hover {
    background: linear-gradient(to right, #9F7AEA, #667eea);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #667eea, #9F7AEA);
  height: 100vh;
  `;

const Card = styled.div`
  background: radial-gradient(circle, #d5ecc2, #98ddca);
  border: 3px solid #98ddca;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.5);
  font-family: 'Arial', sans-serif;
  margin: 20px;
  `;

const StyledForm = styled(Form)`
  label {
    font-weight: 600;
    font-size: 16px;
    color: #333;
      }
  .ant-input, .ant-select-selector, .ant-input-number, .ant-picker {
    border-radius: 5px;
    border: 1px solid #98ddca;
   
  }
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 100px;
color: #333;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  `;







const StyledModal = styled(Modal)`
  .ant-modal-header {
  
      }
`;


  // Inside your createNewGrow function

export default function GardenFormSetup() {
	// Initializing state variables using the useState hook
	const [form] = Form.useForm()
	const navigate = useNavigate()
  const { Option } = Select;
  const { RangePicker } = DatePicker;
 
  const selectSoilRef = useRef(null);
  const selectFertilizerRef = useRef(null);
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const { TextArea } = Input
	const [gardenName, setGardenName] = useState('')
	const [potQuantity, setPotQuantity] = useState(0)
  const [sowingDate, setSowingDate] = useState(null)
  const [fertilizerSchedule, setFertilizerSchedule] = useState(null);

	const [componentDisabled, setComponentDisabled] = useState(false)
	const [autoLightCheckbox, setAutoLightCheckbox] = useState(false)
	
	const [autoWaterCheckbox, setAutoWaterCheckbox] = useState(false)
  const [showOtherSoil, setShowOtherSoil] = useState(false);
  const [showOtherFertilizer, setShowOtherFertilizer] = useState(false);
  const handleSoilTypeChange = (value) => {
    setShowOtherSoil(value === 'Other');
    if (selectSoilRef.current) {
      selectSoilRef.current.blur();
    }
  
    
  };

  const handleFertilizerTypeChange = (value) => {
    setShowOtherFertilizer(value === 'Other');
    if (selectFertilizerRef.current) {
      selectFertilizerRef.current.blur();
    }
  };

 
    const [showOtherGardenType, setShowOtherGardenType] = useState(null);
  
    const handleGardenTypeChange = (value) => {
      setShowOtherGardenType(value === 'Other');
    };
  


	const normFile = e => {
		if (Array.isArray(e)) {
			return e
		}
		return e && e.fileList
	}

	// Function to open the modal
	const showModal = () => {
		setOpen(true)
	}

	// Function to handle date picker change
const handleDatePickerChange = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  setSowingDate(formattedDate);
};


const handleRangePickerChange = (dates, dateStrings) => {
  // dates contains the moment() date objects for the range
  // dateStrings contains the date strings in the format 'YYYY-MM-DD'
  
  // Update the state with the selected date range
  setFertilizerSchedule(dateStrings);

  console.log("Selected Dates:", dates);
  console.log("Formatted Date Strings:", dateStrings);
};

const createNewGrow = async (gardenData, userId) => {
  try {
    const userRef = collection(db, 'users', userId, 'gardens');
    const newGardenRef = await addDoc(userRef, {
      ...gardenData,
      createdAt: Timestamp.fromDate(new Date()),
    });
    console.log("New garden added with ID: ", newGardenRef.id);
  } catch (e) {
    console.error("Error adding garden: ", e);
  }
};

	// Function to handle OK button click
	const handleOk = async () => {
  try {
    const values = await form.validateFields();

    // Check if required fields are filled
    if (!values.gardenName || !values.potQuantity || !values.sowingDate || !values.fertilizerSchedule) {
      console.log('Required fields are not filled');
      return;
    }
const user = auth.currentUser; // Get the current authenticated user
    const userId = user.uid; // Extract the user ID

    const gardenData = {
      gardenName: String(values.gardenName),
      gardenType: String(values.gardenType),
      potQuantity: Number(values.potQuantity),
      autoLightCheckbox: Boolean(values.autoLightCheckbox),
      autoWaterCheckbox: Boolean(values.autoWaterCheckbox),
    
     sowingDate: String(values.sowingDate) ,
      soilType: String(values.soilType),
      fertilizerType: String(values.fertilizerType),
      fertilizerSchedule: values.fertilizerSchedule.map(date => moment(date).format('YYYY-MM-DD')).join(' to '), // Assuming this is a string
      upload: values.upload, // Assuming this is an array or object
      gardenNotes: String(values.gardenNotes),
      emailNotifications: Boolean(values.emailNotifications),
      pushNotifications: Boolean(values.pushNotifications),
      smsAlerts: Boolean(values.smsAlerts),
    };

    // Remove undefined fields
    const filteredGardenData = Object.fromEntries(Object.entries(gardenData).filter(([_, v]) => v !== undefined));

    await createNewGrow(filteredGardenData, userId);
    console.log(values);
    navigate('/dashboard');

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  } catch (error) {
    console.error('Could not save Garden to the database.');
  }
};



	// Function to handle cancel button click
	const handleCancel = () => {
		setOpen(false)
	}


  const FormSection = ({ title, children }) => (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );

	return (
    <Wrapper>
    <Title>Start new Garden</Title>
    <Card>
		

		

			<StyledButton
					size="large"
					type="primary"
					icon={<PlusCircleOutlined />}
					onClick={showModal}
					style={{ transform: 'scale(1.5)' }}
				/>
			<StyledModal
					title="Garden Builder"
					open={open}
					onOk={handleOk}
					confirmLoading={confirmLoading}
					onCancel={handleCancel}
				>
				<StyledForm
						form={form}
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 14 }}
						layout="horizontal"
						disabled={componentDisabled}
						style={{ maxWidth: 600 }}
					>  <Row gutter={[16, 16]}>
          <Col span={16}>

  <Form.Item label="Garden Name" name="gardenName" selected={gardenName} onChange={e => setGardenName(e.target.value)}
						>
                <Input prefix={<FontAwesomeIcon icon={faLeaf} />} />
              </Form.Item>
              <Form.Item label="Garden Type" name="gardenType">
        <Select onChange={handleGardenTypeChange} placeholder="Select Garden Type">
          <Option value="fruits">Fruits</Option>
          <Option value="flowers">Flowers</Option>
          <Option value="herbs">Herbs</Option>
          <Option value="vegetables">Vegetables</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
      

          </Col>

        </Row>
        <Row gutter={[16, 16]}>
          <Col span={16}></Col>
        <FormSection title="Garden Setup">
      <Form.Item label="Sowing Date" name="sowingDate">
  <DatePicker onChange={handleDatePickerChange} suffixIcon={<FontAwesomeIcon icon={faCalendarAlt} />} />
</Form.Item>












              
              <Form.Item required label="Pot Quantity" name="potQuantity"  selected={potQuantity} onChange={e => setPotQuantity(e.target.checked)} >
<Select placeholder={<FontAwesomeIcon icon={faLeaf} />} >
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
        </Select>
        </Form.Item>
          <Form.Item label="Soil Type" name="soilType">
        <Select  ref={selectSoilRef}
        
          onChange={handleSoilTypeChange}
         
      placeholder={<span><FontAwesomeIcon icon={faLeaf} /> Select Soil Type</span>}>
          <Option value="Potting Soil">Potting Soil</Option>
          <Option value="Coconut Coir">Coconut Coir</Option>
          <Option value="Perlite">Perlite</Option>
          <Option value="Vermiculite">Vermiculite</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
     
      <Form.Item label="Fertilizer Type" name="fertilizerType">
        <Select ref={selectFertilizerRef} onChange={handleFertilizerTypeChange} placeholder={<span><CloudOutlined/> Select Fertilizer Type</span>}>
          <Option value="Organic">Organic</Option>
          <Option value="Chemical">Chemical</Option>
          <Option value="Slow-release">Slow-release</Option>
          <Option value="Other">Other</Option>
        </Select>
        </Form.Item>
      
      
      <Form.Item label="Fertilizer Schedule" name="fertilizerSchedule">
  <RangePicker suffixIcon={<FontAwesomeIcon icon={faCalendarAlt} />} />
</Form.Item>

      </FormSection>
         
      </Row>
     
       
        
        <FormSection title="Garden Management">
  <Form.Item label="Auto Light" name="autoLightCheckbox" selected={autoLightCheckbox} onChange={e => setAutoLightCheckbox(e.target.values)}  valuePropName="checked">
          <Switch
				checkedChildren={<FontAwesomeIcon icon={faSun} />} />
          </Form.Item>
        

						
        
<Form.Item label="Auto Water" name="autoWaterCheckbox"selected={autoWaterCheckbox} onChange={e => setAutoWaterCheckbox(e.target.values)}  valuePropName="checked">
          <Switch
    checkedChildren={<FontAwesomeIcon icon={faDroplet} />}  />
          </Form.Item>
     
       
      </FormSection>
    
        <FormSection title="Additional Information">
        <Form.Item
         label="Files"
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="Garden Notes" name="gardenNotes">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Email Notifications" name="emailNotifications" valuePropName="checked">
        <Switch checkedChildren={<FontAwesomeIcon icon={faEnvelope} />} />
      </Form.Item>

      <Form.Item label="Push Notifications" name="pushNotifications" valuePropName="checked">
        <Switch checkedChildren={<FontAwesomeIcon icon={faBell} />} />
      </Form.Item>

      <Form.Item label="SMS Alerts" name="smsAlerts" valuePropName="checked">
        <Switch checkedChildren={<FontAwesomeIcon icon={faSms} />} />
      </Form.Item>

        </FormSection>
        
     
					</StyledForm>
				</StyledModal>
   

     </Card>
     </Wrapper>
	)
}
