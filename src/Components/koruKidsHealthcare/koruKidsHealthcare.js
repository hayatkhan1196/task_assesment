import React from "react";
import styles from "./koruKidsHealthcare.module.scss";
import imageHeart from "../../assets/images/heart.jpg";
import strong from "../../assets/images/positive.jpg";
import weak from "../../assets/images/regular.jpg";
import regular from "../../assets/images/strong.jpg";

const HealthCheckCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.companyName}>
          Sime Darby Oils Liverpool Refinery Limited
        </span>
        <span className={styles.healthCheck}>Health Check</span>
        <button className={styles.editButton}>EDIT</button>
      </div>
      <p className={styles.description}>
        Pomanda's financial health check has awarded Sime Darby Oils Liverpool
        Refinery Limited a 3 rating. We use a traffic light system to show it
        exceeds the industry average on 4 measures and has 7 areas for
        improvement.&nbsp;
        <a
          // target="_blank"
          // rel="noopener noreferrer"
          // href="/assets/Download/Pomanda_Health_Check_FAQs_2022.pdf"
          className={styles.learnMore}
          >
          Company Health Check FAQs
        </a>
      </p>
      <div className={styles.perfIndTableWrapper}>
        <div className={`${styles.heartSection} ${styles.pr2}`}>
          <picture className={`${styles.py2} ${styles.pySm0}`}>
            <img
              src={imageHeart}
              className={styles.img}
              alt="Health Check Image"
              height="220"
              width="240"
            />
          </picture>
          <div className={styles.textOverHeart}>
            <span className={styles.healthRatingText}>Health Rating</span>
            <span className={styles.rating}>3</span>
            <span className={styles.outOf}>out of 5</span>
          </div>
        </div>
        <div className={styles.tableSection}>
          <div className={styles.perfIndTable}>
            <div
              className={`${styles.scorecardLabelInline} ${styles.perfTableBorderBottom}`}>
              <div className={styles.scoreLabelMain}>
                <img
                  src={strong}
                  className={styles.scoreLabelImg}
                  alt="positive_score"
                />
                <p className={styles.scoreLabelText}>4 Strong</p>
              </div>
              <div className={styles.scoreLabelMain}>
                <img
                  src={regular}
                  className={styles.scoreLabelImg}
                  alt="positive_score"
                />
                <p className={styles.scoreLabelText}>1 Regular</p>
              </div>
              <div className={styles.scoreLabelMain}>
                <img
                  src={weak}
                  className={styles.scoreLabelImg}
                  alt="positive_score"
                />
                <p className={styles.scoreLabelText}>7 Weak</p>
              </div>
            </div>
            <div className={styles.sizeIndicator}>
              <img src={strong} alt="Size Icon" className={styles.icon} />
              <div className={styles.textContent}>
                <p className={styles.heading}>Size</p>
                <p className={styles.descriptio1}>
                  <b>annual sales</b> of £258.9m, make it <b>larger than</b> the
                  average company (£3.8m)
                </p>
              </div>
            </div>
            <div className={styles.gradientOverTable}>
              <button className={styles.yellowBtn}>
                VIEW ALL 12 RATING DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckCard;
