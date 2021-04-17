import React from "react";
import { CustomButton } from "../CustomButton";
import styles from "./styles.module.scss";
import dispatchRider from "../../assets/delivery-man.png";

export const PageContent = () => {
  return (
    <div className={styles.pageContent}>
      <img
        src={dispatchRider}
        className={styles.dispatchRiderImg}
        alt="dispatch rider"
      />
      <h3>Lets help you manage your riders and delivery systems.</h3>
      <p>
        Every logistics company whether it’s a multi-national branding
        corporation or a regular local deserves the basic standard necessities
        in achieving a high service delivery
      </p>
      <CustomButton text="Get Started" />
    </div>
  );
};
