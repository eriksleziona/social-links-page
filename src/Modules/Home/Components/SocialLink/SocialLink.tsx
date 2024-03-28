import { FC } from "react";
import { SocialLinkProps } from "./SocialLink.type";
import "./SocialLink.scss";
const SocialLink: FC<SocialLinkProps> = ({ title }) => {
  return <div className="social-link">{title}</div>;
};
export default SocialLink;
