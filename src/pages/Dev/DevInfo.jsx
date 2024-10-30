import { useEffect, useState } from "react";
import DevHeader from "../../utils/DevHeader/DevHeader";
import { FaArrowLeft } from "react-icons/fa";
import AboutMeTech from "./AboutMe/AboutMeTech";
import AboutMeOther from "./AboutMe/AboutMeOther";

const DevInfo = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeInfo, setActiveInfo] = useState("");
  const [modal, setModal] = useState();
  const buttonA = "dev_info-A";
  const buttonB = "dev_info-B";

  function interactive(e) {
    e.preventDefault();

    setActiveInfo(e.target.id);
    setIsDisabled(true);
  }
  function closeModal() {
    setIsDisabled(false);
  }

  useEffect(() => {
    setModal(() => {
      if (activeInfo == buttonA) {
        return (
          <AboutMeTech>
            <button onClick={closeModal} className="dev_info-modal-arrow">
              <FaArrowLeft className="dev_info-modal-arrow-icon" />
            </button>
          </AboutMeTech>
        );
      }
      if (activeInfo == buttonB) {
        return (
          <AboutMeOther>
            <button onClick={closeModal} className="dev_info-modal-arrow">
              <FaArrowLeft className="dev_info-modal-arrow-icon" />
            </button>
          </AboutMeOther>
        );
      } /* else {
        console.error("activeInfo: ", activeInfo);
      } */
    });
  }, [activeInfo]);

  return (
    <section className="dev_info-section">
      <div className="dev_info-container">
        <div className="dev_info-interactive-container">
          <button
            id={buttonA}
            className={`dev_info-interactive-option ${
              isDisabled ? "disabled" : ""
            }`}
            onClick={(e) => interactive(e)}
          >
            Technical Info
          </button>
          <div className="dev_info-interactive-movable">
            {isDisabled ? (
              modal
            ) : (
              <DevHeader>LET&apos;S WORK TOGETHER</DevHeader>
            )}
          </div>

          <button
            id={buttonB}
            className={`dev_info-interactive-option ${
              isDisabled ? "disabled" : ""
            }`}
            onClick={(e) => interactive(e)}
          >
            More about me
          </button>

          {/* modal */}
        </div>
      </div>
    </section>
  );
};

export default DevInfo;
