import "../../styles/Contact.css";
import background from "../../assets/Contact_Bg.png";
import ContactForm from "../Form/ContactForm";
const Contact = () => {
  return (
    <div className="form-contain">
      <div className="form-left">
        <h1>GET IN TOUCH</h1>
        <h2>We Are Glad To Know Your Needs!!!</h2>
        <ContactForm />
      </div>
      <div
        className="form-right"
        style={{ backgroundImage: `url(${background})` }}></div>
    </div>
  );
};
export default Contact;
