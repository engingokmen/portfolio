"use client";
import { MagicQuadrant as MagicQuadrantLibrary } from "@engingokmen/library";
import styles from "./styles.module.css";

export default function MagicQuadrant() {
  return (
    <div className={styles.container}>
      <MagicQuadrantLibrary />
    </div>
  );
}
