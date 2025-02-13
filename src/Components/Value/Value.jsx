import React from "react";
import "./Value.css";
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
import data from "../../utils/accordion"; // Ensure this path is correct

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="image-container">
          <img src="./value.png" alt="Value" />
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {
              data.map((item, i) => {
                return (
                  <AccordionItem className="accordionItem" key={i} uuid={i}>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <div className={`accordionItemInner ${expanded ? 'expanded' : ''}`}>
                          <AccordionItemHeading>
                            <AccordionItemButton className="accordionButton">
                              <div className="flexCenter icon">{item.icon}</div>
                              <span className="primaryText">{item.heading}</span>
                              <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20} />
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                          </AccordionItemPanel>
                        </div>
                      )}
                    </AccordionItemState>
                  </AccordionItem>
                );
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
