import { FC } from "react";
import "./SocialLinkPage.scss";
import Logo from "../../Components/Logo/Logo";
import UserInformation from "../../Components/UserInformation/UserInformation";
import Container from "../../Components/Container/Container";
import SocialLink from "../../Components/SocialLink/SocialLink";

const linksArr = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

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
      <Container>
        {linksArr.map((item) => (
          <SocialLink title={item} />
        ))}
      </Container>
    </div>
  );
};
export default SocialLinkPage;
