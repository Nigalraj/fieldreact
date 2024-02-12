import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Faqs from './Faq';

function Register() {
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    timeZone: '',
    address: '',    
    state: '',          
    country: '',   
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showAdditionalFields) {
      console.log(formData);
    } else {
      setShowAdditionalFields(true);
    }
  };

    return (
      <div >
        <div className="text-center mt-5">
          <div>
            <span className="try">Try FieldGroove Free for 7 Days!</span>
          </div>
        </div>
        <div className=' mt-5'>
          <div className='row mx-md-5 '>
          <div className='form_bg col-12 col-md-5 px-4 px-md-5'>
          <Form onSubmit={handleSubmit} className='text-white py-3'>
            <span className='Account fs-5 fw-bold'> Account Info</span>
            <Form.Group controlId="firstName">
              <Form.Label>First Name*</Form.Label>
                <Form.Control
                 type="text"
                 name="firstName"
                 value={formData.firstName}
                 onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name*</Form.Label>
               <Form.Control
                 type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="companyName">
             <Form.Label>Company Name*</Form.Label>
              <Form.Control
                 type="text" 
                 name="companyName"
                 value={formData.companyName}
                 onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
             <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              </Form.Group>
            <Form.Group controlId="phone">
             <Form.Label>Phone number*</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
             </Form.Group>
             <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
             </Form.Group>
             <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
             </Form.Group>
            <Form.Group controlId="jobTitle">
              <Form.Label>How did you hear about us?*</Form.Label>
                <Form.Control
                    as="select"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                >
                    <option value="" disabled>Please Select</option>
                    <option value="referrel">Central Standard Time</option>
                    <option value="web search">Eastern Standard Time</option>
                    <option value="web search">Mountain Standard Time</option>
                    <option value="web search">Pacific Standard Time</option>
                </Form.Control>
            </Form.Group>
            {showAdditionalFields && (
                <>
                  <Form.Group controlId="address">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="state">
                    <Form.Label>State*</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="country">
                    <Form.Label>Country*</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              )}
              <div className='d-flex justify-content-end mt-4 mb-3'>
                <Button variant="primary" type="submit" className=''>
                    {showAdditionalFields ? 'Submit' : 'Next'}
                </Button>
              </div>
          </Form>
          </div>
          <div className='form_bg_1 col-12 col-md-7 px-4 px-md-4 mt-4 mt-md-0 pt-4 '>
             <div >
                <span className='signup fw-semibold '>SIGN UP NOW TO START YOUR FREE TRAIL</span>
             </div>
             <br/>
             <div>
                <span className='try_1 mt-4 '>
                  FieldGroove empowers you to manage every aspect of your contracting business anytime, anywhere, and from
                  any device. Enjoy a free trial where you can experience everything FieldGroove has to offer,
                </span>
             </div>
              <span className='try_1 '> including;</span>
              <div className='d-flex flex-column my-2  try_2 '>
              <div className='row my-3 '>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
               <div className='col-11'>
                 <span>Managing the entire job cycle from lead crearion to post-job reporting</span>
               </div>
              </div>
              <div className='row mb-3'>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
               <div className='col-11'>
                 <span>Monitoring in pipeline and backlg numbers, in real time</span>
               </div>
              </div>
              <div className='row mb-3'>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
               <div className='col-11'>
                 <span>Building estimates for your prospects to review and accept via email or on the job site</span>
               </div>
              </div>
              <div className='row mb-3'>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
               <div className='col-11'>
                 <span>Keeping close track of your team, equipment, inventory, and jobs</span>
               </div>
              </div>
              <div className='row mb-3'>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
                <div className='col-11'>
                  <span>Automating scheduling and dispatching</span>
                </div>
              </div>
              <div className='row mb-3'>
                <div className='col-1  '>
                 <Icon icon="mdi:tick-decagram" className='mt-1' style={{color:'#E36157',width:'20px'}}/>
                </div>
                <div className='col-11'>
                  <span>Preparing work orders and load tickets with one click</span>
                </div>
              </div>
              </div>
           </div>
          </div>
        </div>
        <div className="text-center mt-5 ">
          <div>
            <span className="try_3">Frequently Asked Questions</span>
          </div>
        </div>
        <Faqs/>
      </div>
    );
  }
  
export default Register;
  