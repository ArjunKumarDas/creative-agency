import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import NavbarTop from '../../SharedPart/NavbarTop/NavbarTop';
import Sidebar from '../../Sidebar/Sidebar';

const AdminAddService = () => {
       const [ info, setInfo ] = useState({});
       const [file, setFile] = useState(null);
       const handleBlur = e => {
           const newInfo = { ...info };
           newInfo[e.target.value]= e.target.value;
           setInfo(newInfo)
       }
       const handleFileChange = (e) => {
           const newFile = e.target.files[0];
           setFile(newFile);
       }
       const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('about', info.about);

        fetch('https://stormy-brook-77965.herokuapp.com/addService', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          }) 
       }
 
    return (
        <div>
            <><NavbarTop></NavbarTop></>
            <Row>
                <Col className="col-md-2 sidebar-bg">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-8 right-bg">
                    <Form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="name">Service Tittle</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="name" placeholder="Enter Tittle" />
                        </div>
                        <div class="form-group">
                        <label for="about">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="about" placeholder="Enter description" />
                        </div>
                        <div class="form-group">
                        <label for="icon">Icon</label>
                           <input onChange={handleFileChange} type="file" class="form-control-file" id="icon"/>
                        </div>
                       <Button type="submit" className="btn bg-dark pl-5 pr-5">Submi</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default AdminAddService;