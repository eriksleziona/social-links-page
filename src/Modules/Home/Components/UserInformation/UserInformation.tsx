import { FC } from "react";
import { UserProps } from "./UserInformation.types";
import "./UserInfomation.scss";
const UserInformation: FC<UserProps> = ({ name, city, country, jobTitle }) => {
  return (
    <div className="user-information-container">
      <h1>{name}</h1>
      <div>
        {city}, {country}
      </div>
      <div>{jobTitle}</div>
    </div>
  );
};
export default UserInformation;
