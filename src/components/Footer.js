import React from 'react';
import logoImage from '../Asset/logo.png';
import { Icon } from '@iconify/react';
import logo from '../Asset/logo-footer.jpg';

function Footer() {


  return (
    <div className='pb-5 px-3 px-lg-0 form_bg'>
      <div className='container text-grey text-center text-lg-start '>
      <div className='d-lg-flex justify-content-between mt-4 pt-5'>
      <div className=''>
      <div className=''>
        <img
            src={logo}
            alt="Your Logo"
            width="250"
            height="55"
            className=""
        />
      </div>
      <div className='py-3 py-lg-2'>
        <span>Copyright Ⓒ FieldGroove, LLC 2019, All Rights Reserved.</span>
      </div>
      <div>
        <span>716 Newman Springs Road, suite 307 Lincroft, NJ 07738</span>
      </div>
      <div className='pt-3 pt-lg-2'>
        <span className='policy '>Privacy Policy</span>
      </div>
      </div>
      <div className='d-flex flex-column py-5 '>
        <span className='py-1'>We would love to show you the power of FieldGroove. To setup</span> 
        <span className='py-1'>a demo or get an account setup, please contact us at</span> 
        <span><span className='policy'>sales@fieldgroove.com</span> or by phone at <span className='policy'>212-537-0218</span></span>
      </div>
      </div> 
    </div>
    </div>
  );
}

export default Footer;
