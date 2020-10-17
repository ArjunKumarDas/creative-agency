
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NavbarTop from '../../SharedPart/NavbarTop/NavbarTop';
import Sidebar from '../../Sidebar/Sidebar';

const ReviewPage = () => {
    const {  handleSubmit } = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/addReview', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
  
    }
    return (
        <div>
            <><NavbarTop></NavbarTop></>
            <Row>
                <Col className="col-md-2 sidebar-bg">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-8 right-bg">
                    <form className="customer-from" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" placeholder="Your Name / Your Company's Name" />
                        
                        <input name="text" placeholder="Destination" />
                       

                        <input name="project" as="textarea" rows="3" placeholder="Project Detailes" />
                        

                        <Button className="pl-5 pr-5 mt-3 mb-3" variant="dark" type="submit">send</Button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default ReviewPage;

















// import React, { useContext, useState } from 'react';
// import { Button, Col, Form, Row } from 'react-bootstrap';
// import { UserContext } from '../../../App';
// import NavbarTop from '../../SharedPart/NavbarTop/NavbarTop';
// import Sidebar from '../../Sidebar/Sidebar';

// const ReviewPage = () => {
//     const [ review, setReview ] = useState({});
//     const handleBlur = e => {
//         const newReview = { ...review };
//         newReview[e.target.value]= e.target.value;
//         setReview(newReview)
//     }
// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const handleReview = () => {
//          const addReview = { ...loggedInUser }
//          fetch('http://localhost:5000/addReview', {
//              method: 'POST',
//              headers: {'Content-Type': 'application/json'},
//              body: JSON.stringify(addReview)
//          })
//          .then(res => res.json())
//          .then(data => {
//              console.log(data);
//          })
//     }


//     return (
//         <div>
//             <><NavbarTop></NavbarTop></>
//             <Row>
//                 <Col className="col-md-2 sidebar-bg">
//                     <Sidebar></Sidebar>
//                 </Col>
//                 <Col className="col-md-8 right-bg">
//                     <Form onSubmit={handleReview}>
//                         <div class="form-group">
//                             <input onBlur={handleBlur} type="name" class="form-control" id="name" placeholder="Your Name" />
//                         </div>
//                         <div class="form-group">
//                             <input onBlur={handleBlur} type="name" class="form-control" id="name" placeholder="Company name, Desnation" />
//                         </div>
//                         <div class="form-group">
//                             <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
//                         </div>
//                         <Button type="submit" className="btn bg-dark pl-5 pr-5">submit</Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default ReviewPage;