import React from "react";
import Slider from "react-slick";
import "./Team.css";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

// Team member data
const teamMembers = [
  {
    name: "Kelechi Ndubuisi",
    role: "CEO & Co Founder",
    img: "./T1.png",
    description: "Leader with a passion for innovation and growth.",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    img: "./T1.png",
    description: "Expert in tech with a vision for the future.",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Michael Brown",
    role: "COO",
    img: "./T1.png",
    description: "Operations and efficiency specialist.",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Emily Davis",
    role: "CFO",
    img: "./T1.png",
    description: "Financial strategist and investment expert.",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
];

const Team = () => {
  // Slider settings with autoplay and autoplaySpeed
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 5000,     // Change slides every 5 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="team" className="team-section">
      <div className="innerWidth paddings">
        <h2 className="section-title">Meet Our Team</h2>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-inner">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
                <div className="team-socials">
                  <a href={member.twitter} className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href={member.linkedin} className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href={member.facebook} className="social-icon">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
