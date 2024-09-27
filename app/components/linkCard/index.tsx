import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { pathName } from "@/app/utilities";
import { getLogo, Logo } from "../logos";

interface LinkCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export const LinkCard = ({
  title,
  description,
  technologies,
}: LinkCardProps) => {
  const techList = technologies.map((tech) => {
    const logo: any = getLogo(tech.toLowerCase() as Logo);

    return (
      <li key={tech} className={styles.li}>
        {logo && (
          <img width={20} src={logo.src} alt={tech} className={styles.logo} />
        )}
        <span className={styles.span}>{tech}</span>
      </li>
    );
  });

  return (
    <Link href={pathName(title)} className={styles.link}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.ul}>{techList}</ul>
      </div>
    </Link>
  );
};
