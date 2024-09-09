import { settings } from "@/app/settings";
import { Heading } from "../title/title";
import { TitleType } from "../title/types";

const { title } = settings;

export const Header = () => {
  return (
    <>
      <Heading type={TitleType.h4}>{title}</Heading>
    </>
  );
};
