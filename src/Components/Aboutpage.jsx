import React from 'react';
import MenuAppBar from './Navbar';
import { Paper } from '@mui/material';
import Footer2 from './Footer2';

const AboutUsPage = () => {
  return (
    <div>
    <div className="about-us" style={{backgroundImage:`url(${"https://st.depositphotos.com/1298561/4807/v/950/depositphotos_48071139-stock-illustration-doodle-baby-pattern-background.jpg"})`,height:"150vh"}}>
      <MenuAppBar></MenuAppBar>;
      <Paper elevation={12} style={{width:"1200px",marginLeft:"130px",marginTop:"70px", height:"800px"}}>
      <section className="hero" style={{margin:"20px"}}>
        <center>
        <h1  style={{fontFamily:"cursive"}}>Welcome to Our Toy Store</h1><br></br>
        <p style={{fontSize:"20px"}}>Your destination for quality toys and endless fun!</p>
        </center>
      </section>
      <hr></hr>

      <section  className="story " style={{margin:"20px"}}>
        <center>

        <h2 style={{fontFamily:"cursive"}}>Our Story</h2>
        <p>
          At <bold style={{fontFamily:"fantasy"}}>KIDDIN' AROUND</bold>, we believe in the magic of play. Our journey began in 2004 with a passion for
          providing children with toys that inspire creativity, imagination, and joy.
        </p>
        <p>
          We carefully curate a diverse collection of toys that cater to the unique interests and developmental
          stages of children. From educational toys that promote learning to the latest trends in play, we have
          something for every child.
        </p>
        </center>
      </section>
      <br></br>
<hr></hr>
      <section  className="missi on">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a world where every child experiences the joy of play. We strive to offer
          exceptional toys that not only entertain but also contribute to the growth and development of young minds.
        </p>
        <p>
          We are committed to providing a seamless shopping experience, exceptional customer service, and a
          dedication to quality that sets us apart as a trusted destination for parents, caregivers, and gift-givers.
        </p>
      </section>

      <section  className="team" >
        <h2>Meet Our Team</h2>
        <p>
        <bold style={{fontFamily:"fantasy"}}>KIDDIN' AROUND</bold> is powered by a team of passionate individuals who share a love for children and a
          commitment to delivering excellence. Our team works tirelessly to bring smiles to the faces of children and
          make every shopping experience memorable.
        </p>
      </section>

      <section  className="value s">
        <h2>Our Values</h2>
        <ul>
          <li>Quality and Safety: We prioritize the safety and quality of our toys.</li>
          <li>Imagination: We celebrate and encourage the power of imagination in every child.</li>
          <li>Community: We believe in building a supportive and engaged community of parents and caregivers.</li>
        </ul>
      </section>
    </Paper>
    </div>
    <Footer2></Footer2>
    </div>
  ); 
};

export default AboutUsPage;