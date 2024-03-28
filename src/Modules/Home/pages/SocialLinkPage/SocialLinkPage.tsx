import { FC } from "react";
import "./SocialLinkPage.scss";
import Logo from "../../Components/Logo/Logo";
import UserInformation from "../../Components/UserInformation/UserInformation";

const SocialLinkPage: FC = () => {
  return (
    <div className="page-container">
      <Logo />
      <UserInformation
        name="Jessica Randall"
        city="London"
        country="United Kingdom"
        jobTitle="Front-end developer and avid reader."
      />
    </div>
  );
};
export default SocialLinkPage;
