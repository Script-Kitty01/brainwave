import React from "react";
import Heading from "./Heading";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { service1, service2, service3, check, brainwave } from "../assets";
import Generating from "./Generating";
import Section from "./Section";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators "
          text="brainwave unlocks the potential of AI-powered applications "
        />
      </div>
      <div className="relative">
        <div className="relative z-1 flex items-center mb-5 p-8 border border-n-1/1- rounded-3xl overflow-hidden lg:p-20 xl:h-[48rem] h-[39rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              className="w-full h-full object-cover md:object-right"
              width={800}
              alt="smartest ai"
              height={730}
              src={service1}
            />
          </div>
          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="h4 mb-4">smartest ai</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Brainwave unlcoks the potential of Ai-powered applications{" "}
            </p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li
                  className="flex items-start py-4 border-t border-n-6"
                  key={index}
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
        </div>
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10"></div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
