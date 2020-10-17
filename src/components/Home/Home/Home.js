import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header/Header';
import MediaPartner from '../MediaPartner/MediaPartner';
import Services from '../Services/Services';
import WorksWithCarosal from '../WorksWithCarosal/WorksWithCarosal';
// import ClientFeedback from './ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import ClientFeedback from '../ClientFeedback/ClientFeedback/ClientFeedback';

const Home = () => {
    return (
       <div  className="body">
        <>
            <Header></Header>
            <MediaPartner></MediaPartner>
            <Services></Services>
            <WorksWithCarosal></WorksWithCarosal>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </>
       </div>
    );
};

export default Home;