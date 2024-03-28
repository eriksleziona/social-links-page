import { FC, PropsWithChildren } from "react";
import "./Container.scss";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="social-links-container">{children}</div>;
};
export default Container;
