import React, { useContext } from 'react';
import './CustomerFrom.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';

const CustomerFrom = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/addWork', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(result => result.json())

  }

  return (

    <form className="customer-from" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register({ required: true })} placeholder="Your Name / Your Company's Name" />
      {errors.name && <span className="error">This field is required</span>}

      <input name="email" ref={register({ required: true })} placeholder="Your Email Address" />
      {errors.email && <span className="error">This field is required</span>}

      <input name="course" ref={register({ required: true })} placeholder="Graphic Design" />
      {errors.course && <span className="error">This field is required</span>}

      <input name="project" as="textarea" rows="3" ref={register({ required: true })} placeholder="Project Detailes" />
      {errors.project && <span className="error">This field is required</span>}

      <input name="price" ref={register({ required: true })} placeholder="Price" />
      {errors.price && <span className="error">This field is required</span>}


     <Button className="pl-5 pr-5 mt-3 mb-3" variant="dark" type="submit">send</Button>
    </form>


  );
};

export default CustomerFrom;
