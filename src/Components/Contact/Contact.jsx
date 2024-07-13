import React from "react";
import "./Contact.css";
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter innerWidth c-conatiner">
        {/* left side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Easy To Contact</span>
          <span className="primaryText">Our Contacts</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services and believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart " style={{gap:'1rem'}}>
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span><br />
                    <span className="secondaryText">779 8939 9839</span>
                  </div>
                </div>
                <div className="flexCenter button" style={{color:'white'}}>Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart " style={{gap:'1rem'}}>
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">779 8939 9839</span>
                  </div>
                </div>
                <div className="flexCenter button" style={{color:'white'}}>Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
                {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart " style={{gap:'1rem'}}>
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">779 8939 9839</span>
                  </div>
                </div>
                <div className="flexCenter button" style={{color:'white'}}>Video Call Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart " style={{gap:'1rem'}}>
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">779 8939 9839</span>
                  </div>
                </div>
                <div className="flexCenter button" style={{color:'white'}}>Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
