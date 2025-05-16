"use client";
import { settings } from "@/app/settings";
import styles from "./styles.module.css";
import styleLink from "../linkNav/styles.module.css";
import { pathName } from "@/app/utilities";
import { LinkNav } from "../linkNav";
import Image from "next/image";
import { getLogo, Logo } from "../logos";
import Link from "next/link";

const { title, githubHomepageLink } = settings;

export const Header = () => {
  const links = settings.projectList.map((project) => {
    const href = project.link ? project.link : pathName(project.title);

    if (project.link) {
      return (
        <Link target="_blank" href={`${href}`} className={styleLink.link}>
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
    <>
      <div className={styles.githubLinkWrapper}>
        <Link
          target="_blank"
          href={`${githubHomepageLink}`}
          className={styles.link}
        >
          <Image
            width={20}
            height={20}
            src={getLogo(Logo.github).src}
            alt="github"
          />{" "}
        </Link>
      </div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <LinkNav href="/">{title}</LinkNav>
          {links}
        </nav>
      </header>
    </>
  );
};
