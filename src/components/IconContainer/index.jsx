import IconBackground from "/icon-background.png";
import styles from "./IconContainer.module.css";

//dynamic imports are slow
import Bundle from "/bundle.png";
import Transcribe from "/transcribe.png";

const IconMap = {
  bundle: Bundle,
  transcribe: Transcribe,
};

const IconContainer = ({ Icon, link }) => {
  return (
    <div onClick={() => window.open(link)} className={styles.container}>
      <img
        src={IconBackground}
        alt="background"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <img
        src={IconMap[Icon]}
        alt={Icon}
        className={styles.icon}
        loading="lazy"
      />
    </div>
  );
};
export default IconContainer;
