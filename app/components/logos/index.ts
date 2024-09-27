import ReactLogo from "./ReactLogo.svg";
import TypescriptLogo from "./TypescriptLogo.svg";

const logos = {
  react: ReactLogo,
  typescript: TypescriptLogo,
};

export const getLogo = (logo: Logo) => logos[logo];

export enum Logo {
  react = "react",
  typescript = "typescript",
}
