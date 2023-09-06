import React from "react";
import Logo1 from "../assets/2019-EB-Austin-Diagnostic-Clinic-FC.png";
import Logo2 from "../assets/CareNowUrgentCare.png";
import Logo3 from "../assets/VetHospital.png";
import Logo4 from "../assets/AWCWomens.webp";

function LogoBanner() {
  return (
    <div className="py-14" id="LogoBanner">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <h3 className="font-semibold text-sm text-white text-center">
          TRUSTED BY HOSPITALS AND CLINICS AROUND AMERICA
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {/* LOGO 1 */}
            <li className="h-40 w-40">
              <img src={Logo1} alt="logo" />
            </li>

            {/* LOGO 2 */}
            <li className="h-40 w-40">
              <img src={Logo2} alt="logo" />
            </li>

            {/* LOGO 3 */}
            <li className="h-40 w-40">
              <img src={Logo3} alt="logo" />
            </li>

            {/* LOGO 4 */}
            <li className="h-40 w-40">
              <img src={Logo4} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LogoBanner;
