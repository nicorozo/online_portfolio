import { useState } from "react";
import DevHeader from "../../utils/DevHeader/DevHeader";
import { FaArrowLeft } from "react-icons/fa";

const DevInfo = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeInfo, setActiveInfo] = useState("");
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

  const modal = (
    <div className="dev_info-interactive-modal">
      <button onClick={closeModal} className="dev_info-modal-arrow">
        <FaArrowLeft className="dev_info-modal-arrow-icon" />
      </button>
      <h4>{activeInfo == buttonA ? buttonA : buttonB}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        possimus ad illo voluptatem esse magnam at? Mollitia consequuntur
        molestiae doloribus porro ratione itaque a minus ullam provident. Optio,
        excepturi quod?
      </p>
    </div>
  );

  return (
    <section className="dev_info-section">
      <DevHeader>ABOUT ME</DevHeader>
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
            {isDisabled ? modal : "Information"}
          </div>

          <button
            id={buttonB}
            className={`dev_info-interactive-option ${
              isDisabled ? "disabled" : ""
            }`}
            onClick={(e) => interactive(e)}
          >
            Non-Technical Info
          </button>

          {/* modal */}
        </div>
      </div>
    </section>
  );
};

export default DevInfo;
