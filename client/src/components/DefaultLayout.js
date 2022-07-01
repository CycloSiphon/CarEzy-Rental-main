import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom';
import { IoCarSportSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import {FaUser } from 'react-icons/fa';


function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      {/* <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item> */}
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      {/* <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>SheyCars</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
      <hr />

           <p>Desinged and Developed By</p>

           

           <p>SHEY</p>
          
      </div> */}
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-600 ">
        <IoCarSportSharp /><span class="ml-3 text-xl">CarEzy</span>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <AiFillHome className="mr-2" /><a class="mr-5 hover:text-gray-900 text-gray-600 text-black" href="/">Home</a>
      <a class="mr-5 hover:text-gray-900 text-gray-600 text-black" href="/userbookings">Bookings</a>
      <FaUser/><button class="mr-5 hover:text-gray-900 text-gray-600 text-black" >{user.username}</button>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black" onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    
  </div>


  <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
