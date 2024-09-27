"use client";
import { settings } from "@/app/settings";
import styles from "./styles.module.css";
import { pathName } from "@/app/utilities";
import { LinkNav } from "../linkNav";

const { title } = settings;

export const Header = () => {
  const links = settings.projectList.map((project) => (
    <LinkNav href={`/${pathName(project.title)}`}>{project.title}</LinkNav>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <LinkNav href="/">{title}</LinkNav>
        {links}
      </nav>
    </header>
  );
};
