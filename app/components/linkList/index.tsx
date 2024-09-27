import { LinkCard } from "../linkCard";
import { ListItem } from "@/app/types";

interface ListItemsProps {
  list: ListItem[];
}

export const ListItems = ({ list }: ListItemsProps) =>
  list.map((i) => (
    <LinkCard
      key={i.title}
      title={i.title}
      description={i.description}
      technologies={i.technologies}
    />
  ));
