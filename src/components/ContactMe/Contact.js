import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  function sendEmail(e) {
    // e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_ocuym52",
    //     "template_joii25r",
    //     e.target,
    //     "user_Ok12WTP0cvyrzSFOEutop"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("rs", result.text);
    //     },
    //     (error) => {
    //       console.log("er", error.text);
    //     }
    //   );
    // e.target.reset();
    e.preventDefault();
    if (firstName === ""){
      alert("Enter your firstname.")
    }
    if (email === ""){
      alert("Enter your email.")
    }
    if (email !== "" && firstName !== "") {
    var templateParams = {
      to_name: "Kajal",
      firstName: firstName,
      lastName: lastName,
      email: email,
      message : "Hi"
  };
  console.log("template", templateParams)
  // emailjs.send('service_ocuym52', 'template_t05bdt9', templateParams, 'gIj01GsrfmzbU0yJK')
  //     .then(function(response) {
  //         console.log('Email sent:', response);
  //         alert('Email sent successfully!');
  //     }, function(error) {
  //         console.error('Error sending email:', error);
  //         alert('Error sending email:');
  //     });
  
}

  }
  console.log(firstName, lastName, email)
  return (
    <div className="ContactMe" id="contact">
      <h1 className="about-header" style={{ textAlign: "center" }}>
        Contact Me
      </h1>
      <hr
        className="divider"
        style={{
          margin: "auto"
        }}
      />
      <Container>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                  <img
                    src="images/mail.svg"
                    alt="email-icon"
                    height="50"
                    width="50"
                  />
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Email</Row>
                  <Row className="contact-value">Kajalkajal1406@gmail.com</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                  <img
                    src="images/phone.svg"
                    alt="email-icon"
                    height="50"
                    width="50"
                  />
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Phone</Row>
                  <Row className="contact-value">8859832258</Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="form-group">
            <form onSubmit={sendEmail}>
            <h2 className="get-in-touch-heading">Get In Touch With Me</h2>
              <div class="row">
                <div class="form-group name1 col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="name"
                    onChange={(e)=>{ setFirstName(e.target.value)}}
                    placeholder="Enter your name"
                    name="name"
                  />
                </div>

                <div class="form-group name1 col-md-6 mb-4">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="email"
                    onChange={(e)=>{ setLastName(e.target.value)}}
                    placeholder="Your email address"
                    name="email"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control form-control-md"
                id="discussion-title"
                onChange={(e)=>{ setEmail(e.target.value)}}
                placeholder="Enter the discussion title"
                name="subject"
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                id="message"
                style={{ height: 100 }}
                placeholder="Write your message"
              ></textarea>
              <br />
              <button type="submit" className="contact-button">
                Send Message Now
              </button>
            </form>
          </div>
        </Col>
      </Container>
      
    </div>
  );
}
