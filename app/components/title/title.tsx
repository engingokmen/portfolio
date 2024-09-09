import { TitleType } from "./types";
import { createElement, ReactNode } from "react";
import styles from "./styles.module.css";

interface IHeading {
  type: TitleType;
  children?: ReactNode;
}

export const Heading = ({ type, children }: IHeading) => {
  return createElement(type, { className: styles.heading }, children);
};
