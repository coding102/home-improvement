import React, {Component} from 'react';
import './Contact.css';
import WufooForm from 'react-wufoo-embed';


class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <WufooForm 
          userName="coding101" 
          formHash="z1sorgor1wnnu3z" 
        />
      </div>

      );
    }
  };

export default Contact;


