import React from "react";
import { Spin } from "antd";
import styles from "./loader.module.css";

const loader = () => {
  return (
    <div className={styles["loader-wrapper"]}>
      <div className={styles["loader-content"]}>
        <Spin tip="Load Data.." />
      </div>
    </div>
  );
};

export default loader;
