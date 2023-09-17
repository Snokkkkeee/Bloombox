import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Modal, Form, Select, Spin, DatePicker, Switch, Upload, Input, Row, Col, message } from 'antd';
import { PlusOutlined, PlusCircleOutlined, CloudOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faCalendarAlt, faSun, faDroplet, faEnvelope, faBell, faSms } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { db } from "../Services/firebase";
import { streamGardens } from '../Services/streamGardens';
import styled from 'styled-components';


const StyledButton = styled(Button)`
  transform: scale(1.5);
  background: linear-gradient(to right, #667eea, #9F7AEA);
  border: none;
  border-radius: 12px;
    &:hover {
    background: linear-gradient(to right, #9F7AEA, #667eea);
  }
`;

const StyledCard = styled(Card)`
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

const Title = styled('h1')`
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
// Importing Firebase config from your Services folder

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input

const UserGardens = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGarden, setSelectedGarden] = useState(null);
  const [gardens, setGardens] = useState([]);
  const [loading, setLoading] = useState(true);

    const [form] = Form.useForm();
    const [searchTerm, setSearchTerm] = useState('');

    const handleDatePickerChange = (date) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  setSowingDate(formattedDate);
    };
 
 
  const selectSoilRef = useRef(null);
  const selectFertilizerRef = useRef(null);
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

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


const handleRangePickerChange = (dates, dateStrings) => {
  // dates contains the moment() date objects for the range
  // dateStrings contains the date strings in the format 'YYYY-MM-DD'
  
  // Update the state with the selected date range
  setFertilizerSchedule(dateStrings);

  console.log("Selected Dates:", dates);
  console.log("Formatted Date Strings:", dateStrings);
};

  // Fetch gardens from Firebase
   useEffect(() => {
  const unsubscribe = streamGardens(
    (querySnapshot) => {
      const updatedGardens = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGardens(updatedGardens);
      setLoading(false);
    },
    (error) => {
      console.error("Error fetching gardens: ", error);
      setLoading(false);
    }
  );

  return () => {
    unsubscribe();
  };
}, []);


  const showModal = (garden = {}) => {
    form.setFieldsValue(garden);
    setIsModalVisible(true);
    setSelectedGarden(garden.id || null);
  };


  const handleOk = async () => {
   const values = await form.validateFields();

    // Check if required fields are filled
    if (!values.gardenName || !values.potQuantity || !values.sowingDate || !values.fertilizerSchedule) {
      console.log('Required fields are not filled');
      return;
    }
   const gardenData = {
      // Your garden data mapping here
      gardenName: String(values.gardenName),
      gardenType: String(values.gardenType),
      potQuantity: Number(values.potQuantity),
      autoLightCheckbox: Boolean(values.autoLightCheckbox),
      autoWaterCheckbox: Boolean(values.autoWaterCheckbox),
      sowingDate: moment(values.sowingDate).format('YYYY-MM-DD'),
      soilType: String(values.soilType),
      fertilizerType: String(values.fertilizerType),
      fertilizerSchedule: values.fertilizerSchedule.map(date => moment(date).format('YYYY-MM-DD')).join(' to '),
      upload: values.upload,
      gardenNotes: String(values.gardenNotes),
      emailNotifications: Boolean(values.emailNotifications),
      pushNotifications: Boolean(values.pushNotifications),
      smsAlerts: Boolean(values.smsAlerts),
   };
      
     try {
  await db.collection('gardens').add({
    ...gardenData,
    createdAt: new Date(),
  });
  message.success('Garden added successfully!');
} catch (error) {
  console.error("Error adding document: ", error);
  message.error('Failed to add garden.');
}




   

    setIsModalVisible(false);
    form.resetFields();
    message.success('Garden added successfully!');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    
      const handleDelete = async (gardenId) => {
    const gardenRef = doc(db, 'gardens', gardenId);
    await deleteDoc(gardenRef);
    message.success('Garden deleted successfully!');
      };
    
     const handleEdit = async (gardenId, updatedData) => {
    const gardenRef = doc(db, 'gardens', gardenId);
    await updateDoc(gardenRef, updatedData);
    message.success('Garden updated successfully!');
     };
    
    const handleSearch = async () => {
    const q = query(collection(db, 'gardens'), where('gardenName', '==', searchTerm));
    const querySnapshot = await getDocs(q);
    const searchedGardens = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setGardens(searchedGardens);
  };

  const FormSection = ({ title, children }) => (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );

    
      if (loading) <Spin tip="Loading..."></Spin>;
    
  return (
  <div>
            
         
      
<Card title="Your Gardens" style={{ width: '100%' }}>
      <Input.Search
        placeholder="Search by Garden Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
        enterButton={<SearchOutlined />}
      />

  

      <Title level={3}>List of Gardens</Title>

      {gardens.map(garden => (
        <Card key={garden.id} style={{ marginBottom: '15px' }}>
  <h3>{garden.gardenName}</h3>
  <p>Type: {garden.gardenType}</p>
  <p>Soil: {garden.soilType}</p>
  <p>Fertilizer: {garden.fertilizerType}</p>
  <p>Sowing Date: {garden.sowingDate}</p>
  <p>Fertilizer Schedule: {garden.fertilizerSchedule}</p>
  <p>Auto Light: {garden.autoLightCheckbox ? 'Enabled' : 'Disabled'}</p>
  <p>Auto Water: {garden.autoWaterCheckbox ? 'Enabled' : 'Disabled'}</p>
  <p>Pot Quantity: {garden.potQuantity}</p>
  <p>Uploaded Files: {garden.upload ? garden.upload.length : 0}</p>
  <p>Garden Notes: {garden.gardenNotes}</p>
  <p>Email Notifications: {garden.emailNotifications ? 'Enabled' : 'Disabled'}</p>
  <p>Push Notifications: {garden.pushNotifications ? 'Enabled' : 'Disabled'}</p>
  <p>SMS Alerts: {garden.smsAlerts ? 'Enabled' : 'Disabled'}</p>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(garden.id, {/* updatedData */})}>Edit</Button>
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(garden.id)}>Delete</Button>
        </Card>
      ))}
          </Card>
          <Card>
     <StyledButton
					size="large"
					type="primary"
					icon={<PlusCircleOutlined />}
					onClick={showModal}
					style={{ transform: 'scale(1.5)' }}>
        Add New Garden
      </StyledButton>
      <StyledModal title="Add New Garden" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        		<StyledForm
						form={form}
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 14 }}
						layout="horizontal"
						disabled={componentDisabled}
						style={{ maxWidth: 600 }} >
                <Row gutter={[16, 16]}>
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
          </div>
  );
};

export default UserGardens;



