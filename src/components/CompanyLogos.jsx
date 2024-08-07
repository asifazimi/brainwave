import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h4 className="tagline mb-6 text-center text-n-1/50 ">
        Helping people create beautiful content at
      </h4>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justiy-content flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
