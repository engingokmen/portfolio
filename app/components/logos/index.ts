import ReactLogo from "./ReactLogo.svg";
import TypescriptLogo from "./TypescriptLogo.svg";
import WebpackLogo from "./WebpackLogo.svg";
import ReactRouterDomLogo from "./ReactRouterDom.svg";
import LitLogo from "./LitLogo.svg";
import RollupLogo from "./RollupLogo.svg";
import ReduxLogo from "./ReduxLogo.svg";
import GithubLogo from "./GithubLogo.svg";
import NodejsLogo from "./nodejs.svg";

const logos = {
  react: ReactLogo,
  typescript: TypescriptLogo,
  webpack: WebpackLogo,
  reactrouterdom: ReactRouterDomLogo,
  lit: LitLogo,
  rollup: RollupLogo,
  redux: ReduxLogo,
  github: GithubLogo,
  nodejs: NodejsLogo,
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
  github = "github",
  nodejs = "nodejs",
}
