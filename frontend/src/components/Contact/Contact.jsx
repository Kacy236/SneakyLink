import React from "react";
import Slider from "react-slick";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

// Data for the contact modes
const contactModes = [
  {
    type: "Call",
    number: "021 123 145 14",
    icon: <MdCall size={25} />,
    button: "Call now",
    animationClass: "fadeInLeft",
  },
  {
    type: "Chat",
    number: "021 123 145 14",
    icon: <BsFillChatDotsFill size={25} />,
    button: "Chat now",
    animationClass: "fadeInRight",
  },
  {
    type: "Video Call",
    number: "021 123 145 14",
    icon: <BsFillChatDotsFill size={25} />,
    button: "Video Call now",
    animationClass: "fadeInLeft",
  },
  {
    type: "Message",
    number: "021 123 145 14",
    icon: <HiChatBubbleBottomCenter size={25} />,
    button: "Message now",
    animationClass: "fadeInRight",
  },
];

const Contact = () => {
  // Settings for the automatic slider
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Get In Touch</span>
          <span className="secondaryText">
            We are always here to help you. Reach out to us through any of these methods.
          </span>
        </div>

        {/* Right Side - Slider */}
        <div className="c-right">
          <Slider {...settings}>
            {contactModes.map((mode, index) => (
              <div key={index} className={`contact-slide ${mode.animationClass}`}>
                <div className="flexCenter icon">{mode.icon}</div>
                <div className="flexColStart contact-details">
                  <span className="primaryText">{mode.type}</span>
                  <span className="secondaryText">{mode.number}</span>
                  <div className="flexCenter button">{mode.button}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Contact;
