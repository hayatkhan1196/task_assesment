import React from "react";
import styles from "./koruKidsOverview.module.scss";
import ReportIcon from "@mui/icons-material/Assessment";
import CreditCheckIcon from "@mui/icons-material/CreditScore";
import BusinessPlanIcon from "@mui/icons-material/BusinessCenter";
import Button from "@mui/material/Button";

const KoruKidsCard = () => {
  return (
    <div className={styles.companyOverviewMain}>
      <div className={styles.leftSection}>
        <h2 className={`${styles.profileCardHeading} my-0`}>
          <span className={styles.boldText}>Koru Kids Ltd</span>{" "}
          <span className={styles.dimText}>Overview</span>
        </h2>
        <p className={styles.companyOverviewInfo}>
          Sime Darby Oils Liverpool Refinery Limited is a live company located
          in
          <span> merseyside</span>, L20 8DY with a Companies House number of
          06627939. It operates in the other business support service activities
          n.e.c. sector, SIC Code 82990. Founded in June 2008, its largest
          shareholder is
          <span> sime darby oils international limited</span>
          with a 100% stake. Sime Darby Oils Liverpool Refinery Limited is an
          established, mega-sized company. Pomanda has estimated its turnover at
          £258.9m with healthy growth in recent years.
        </p>
        <div className={styles.main}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonWrapper}>
              <button className={styles.companyOverviewBtn}>
                <p className="my-0">Get Credit Check</p>
                <picture className={styles.overviewCompanyIcon}>
                  <CreditCheckIcon />
                </picture>
              </button>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.companyOverviewBtn}>
                <p className="my-0">Buy Company Report</p>
                <picture>
                  <ReportIcon />
                </picture>
              </button>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.companyOverviewBtn}>
                <p className="my-0">AI Business Plan</p>
                <BusinessPlanIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div>
            <span>Upgrade for </span>
            <a href="#" className={styles.link}>
              unlimited
            </a>
            <span> company reports & a </span>
            <a href="#" className={styles.link}>
              free
            </a>
            <span> credit check</span>
          </div>
          <Button variant="contained" className={styles.button}>
            POMANDA PLUS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KoruKidsCard;
