import ContactForm from "../Form/ContactForm";
import "../../styles/ContactUs.css";
import Customer from "../../assets/customer_bg.png";
const ContactSection = () => {
  return (
    <div className="contact-background">
      <div className="customer-section">
        <h1>Feel free to get in touch</h1>
        <p className="contact-line">
          we can deliver great results for your online business <br></br>without
          additional costs or commitments.
        </p>
        <div className="contact-section">
          <div className="contactus-form">
            <ContactForm />
          </div>
          <div className="contact-info">
            <h3>DON'T HESITATE TO CONTACT US</h3>

            <div className="info-box">
              <span className="label office">OFFICE</span>
              <p>
                1/2, Ramasamy Gounder Layout, 60 Feet Road,
                <br />
                Perichipalayam South, Tirupur - 641 604.
              </p>
            </div>

            <div className="info-box">
              <span className="label hours">WORK HOURS</span>
              <p>Everyday : Monday - Saturday</p>
            </div>

            <div className="info-box">
              <span className="label phone">PHONE</span>
              <p>+91 82485 88257</p>
            </div>

            <div className="info-box">
              <span className="label email">E-MAIL</span>
              <p>support@ponvelexim.com</p>
            </div>
          </div>
        </div>
      </div>
      <img src={Customer} className="customer-image"></img>
    </div>
  );
};

export default ContactSection;
