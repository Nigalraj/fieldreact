import React from 'react';
import { Icon } from '@iconify/react';

function Content_2() {
    
  return (
    <>
      <div className='font'>
      <div className='d-flex justify-content-between mt-2 ms-2 ms-md-0'>
        <div>
            <span>Test</span>
        </div>
        <div className='text-white '>
            <span className='bg-primary p-1 rounded-3'>Close</span>
            <span className='bg-success mx-2 p-1 rounded-3'>Duplicate</span>
            <span className='bg-danger p-1 rounded-3'>Archive</span>
        </div>
      </div>                        
      <hr className='my-2 '/>
      <div className='ms-3 ms-md-0'>
        <span>Opportunity</span>
        <span className='mx-2'> &gt;</span>
        <span>Jobs</span>
        <span className='mx-2'>&gt;</span>
        <span>Test</span>
      </div>
      <hr className='my-2'/>
      <div className='d-flex me-2 '>
        <div className='col-3 bg-sky d-flex flex-column '>
            <span>Estimate Approved</span>
            <span>₹0.00</span>
        </div>
        <div className='mx-1 d-flex bg-ld  col-2 flex-column'>
            <span>Approved</span>
            <span>₹0.00</span>
        </div>
        <div className='d-flex bg-ld col-3 flex-column'>
            <span>Approved Left</span>
            <span>₹0.00</span>
        </div>
        <div className='d-flex ms-1 bg-ld col-4 flex-column'>
            <span>Invoice</span>
            <span>0 Open Invoice</span>
        </div>
      </div>
      <div className='mt-2 border pb-5 font_1 mx-2' >
        <div className='d-flex border scrollmenu '>
            <span className='border border-bottom-0 px-4 py-2'>Overview</span>
            <span className=' text-primary px-4 p-2'>Document</span>
            <span className=' text-primary px-4 p-2'>Photos</span>
            <span className=' text-primary px-4 p-2'>Time log</span>
            <span className=' text-primary px-4 p-2'>Downloads</span>
            <span className=' text-primary px-4 p-2'>Photos</span>
        </div>
        <div className="row ">
        <div className='col-md-6 col-lg-4 col-12'> 
        <table className=' mt-2'>
        <tbody>
            <tr className='border '>
              <td className='border ps-4' style={{ width: '200px' }}>Name</td>
              <td className='d-flex justify-content-between' style={{ width: '200px' }}>
                <span className='ms-3'>Test Project</span>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border'>
              <td className='border ps-4' style={{ width: '200px' }}>Type</td>
              <td className='d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border '>
              <td className='border ps-4' style={{ width: '200px' }}>Sales Person</td>
              <td className=' d-flex justify-content-between' style={{ width: '200px' }}>
                <span className='ms-3'>Depiga Madhan</span>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border'>
              <td className='border ps-4' style={{ width: '200px' }}>Estimate</td>
              <td className=' d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border'>
              <td className='border ps-4' style={{ width: '200px' }}>Project Manager</td>
              <td className=' d-flex justify-content-between' style={{ width: '200px' }}>
                <span className='ms-3'>Test Company</span>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border'>
              <td className='border ps-4' style={{ width: '200px' }}>Contact</td>
              <td className=' d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border'>
              <td className='border ps-4' style={{ width: '200px' }}>Sape division</td>
              <td className=' d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border '>
              <td className='border ps-4' style={{ width: '200px' }}>Plan</td>
              <td className=' d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border '>
              <td className='border ps-4' style={{ width: '200px' }}>Address</td>
              <td className=' d-flex justify-content-end' style={{ width: '200px' }}>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
            <tr className='border '>
              <td className='border ps-4' style={{ width: '200px' }}>Work Oders</td>
              <td className=' d-flex justify-content-between' style={{ width: '200px' }}>
                <span className='ms-3'>None yet</span>
                <span className='me-2'><Icon icon="fa-regular:edit"/></span>
              </td>
            </tr>
        </tbody>
       </table>
        </div>
        <div className='col-md-6 col-12 map col-lg-3    '>
            <div className="">
            </div>
        </div>
        <div className='col-lg-5 px-3'>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Assigned office location</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Summary Private Note</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Work OrderNote</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>onfidence Level</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Action Needed</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Open Task</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Assigned office location</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            <div className="d-flex flex-column ">
            <div className='d-flex justify-content-between'>
               <span>Assigned office location</span>
               <span className='ms-5'><Icon icon="fa-regular:edit"/></span>
            </div>
            <div>
               <span>New York</span>
            </div>
            <hr className='my-0'/>
            </div>
            
        </div>
        </div>
      </div>
      </div>
    </>
   
  );
}

export default Content_2;