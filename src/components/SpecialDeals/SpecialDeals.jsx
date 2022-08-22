import React from "react";
import {
  SpeacilDealsContainer,
  SpeacilDealsBox,
  TimerBox,
  Timer,
} from "./styles";
const SpeacilDeals = ({ children }) => {
  return (
    <>
      <SpeacilDealsContainer>
        <SpeacilDealsBox>
          <TimerBox>
            <h2>{children}</h2>
            <h3>24시간 한정 특가</h3>
            <Timer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="36"
                height="36"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath>
                    <rect width="36" height="36" x="0" y="0"></rect>
                  </clipPath>
                </defs>
              </svg>
            </Timer>
          </TimerBox>
        </SpeacilDealsBox>
      </SpeacilDealsContainer>
    </>
  );
};

export default SpeacilDeals;
