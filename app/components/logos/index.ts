import ReactLogo from "./ReactLogo.svg";
import TypescriptLogo from "./TypescriptLogo.svg";
import WebpackLogo from "./WebpackLogo.svg";
import ReactRouterDomLogo from "./ReactRouterDom.svg";
import LitLogo from "./LitLogo.svg";
import RollupLogo from "./RollupLogo.svg";
import ReduxLogo from "./ReduxLogo.svg";

const logos = {
  react: ReactLogo,
  typescript: TypescriptLogo,
  webpack: WebpackLogo,
  reactrouterdom: ReactRouterDomLogo,
  lit: LitLogo,
  rollup: RollupLogo,
  redux: ReduxLogo,
};

export const getLogo = (logo: Logo) => logos[logo];

export enum Logo {
  react = "react",
  typescript = "typescript",
  webpack = "webpack",
  reactRouterDom = "reactrouterdom",
  lit = "lit",
  rollup = "rollup",
  redux = "redux",
}
