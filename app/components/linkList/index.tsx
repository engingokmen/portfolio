import { pathName } from "@/app/utilities";
import Link from "next/link";
import styles from "./styles.module.css";

interface ListItemsProps {
  list: string[];
}

export const ListItems = ({ list }: ListItemsProps) =>
  list.map((i) => (
    <Link key={i} href={pathName(i)} className={styles.item}>
      {i}
    </Link>
  ));
