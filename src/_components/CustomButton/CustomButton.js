import React from "react";
import styles from "./styles.module.scss";

export const CustomButton = ({ text }) => {
  return <button className={styles.CustomButton}>{text}</button>;
};
