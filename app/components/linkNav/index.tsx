import React from "react";
import Link, { LinkProps } from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

interface LinkNavProps extends LinkProps {
  children: React.ReactNode;
}

export const LinkNav = ({ children, ...props }: LinkNavProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  console.log("props.href", props.href, pathname);

  return (
    <Link className={`${styles.link} ${isActive && styles.active}`} {...props}>
      {children}
    </Link>
  );
};
