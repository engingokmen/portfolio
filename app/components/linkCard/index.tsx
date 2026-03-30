import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { pathName } from "@/app/utilities";
import { getLogo, Logo } from "../logos";

interface LinkCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const LinkCard = ({
  title,
  description,
  technologies,
  link,
}: LinkCardProps) => {
  const href = link ? link : pathName(title);
  const techList = technologies.map((tech) => {
    const logo = getLogo(tech.toLowerCase().replaceAll(" ", "") as Logo);
    const logoSrc = typeof logo === "string" ? logo : logo?.src;

    return (
      <li key={tech} className={styles.li}>
        {logoSrc && (
          <Image
            width={20}
            height={20}
            src={logoSrc}
            alt={tech}
            className={styles.logo}
          />
        )}
        <span className={styles.span}>{tech}</span>
      </li>
    );
  });

  return (
    <Link href={href} className={styles.link}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.ul}>{techList}</ul>
      </div>
    </Link>
  );
};
