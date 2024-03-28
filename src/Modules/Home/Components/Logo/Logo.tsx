import { FC } from "react";
import avatar_logo from "../../../../assets/images/avatar-jessica.jpeg";
import "./Logo.scss";
const Logo: FC = () => {
  return (
    <div className="logo-container">
      <img src={avatar_logo} alt="" />
    </div>
  );
};
export default Logo;
