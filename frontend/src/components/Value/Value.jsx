import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      {/* Just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) => {
                          setClassName(expanded ? "expanded" : "collapsed");
                          return (
                            <>
                              <div className="flexCenter icon">{item.icon}</div>
                              <span className="primaryText">{item.heading}</span>
                              <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20} />
                              </div>
                            </>
                          );
                        }}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Testimonials Section */}
          <div className="testimonials">
            <h3 className="testimonialsTitle">What Our Clients Say</h3>
            <p className="testimonialText">
              "This service transformed my life. I found my dream home quickly!"
              <br />
              - Jane D.
            </p>
            <p className="testimonialText">
              "Exceptional service and support throughout the entire process!"
              <br />
              - John S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
