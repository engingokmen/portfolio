"use client";
import { settings } from "@/app/settings";
import styles from "./styles.module.css";
import styleLink from "../linkNav/styles.module.css";
import { pathName } from "@/app/utilities";
import { LinkNav } from "../linkNav";
import Link from "next/link";

const { title } = settings;

export const Header = () => {
  const links = settings.projectList.map((project) => {
    const href = project.link ? project.link : pathName(project.title);

    if (project.link) {
      return (
        <Link
          key={project.title}
          target="_blank"
          href={`${href}`}
          className={styleLink.link}
        >
          {project.title}
        </Link>
      );
    }

    return (
      <LinkNav key={project.title} href={`/${href}`}>
        {project.title}
      </LinkNav>
    );
  });

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <LinkNav href="/">{title}</LinkNav>
          {links}
        </nav>
      </header>
  );
};
