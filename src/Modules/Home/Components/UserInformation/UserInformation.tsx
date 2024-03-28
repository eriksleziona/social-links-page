import { FC } from "react";
import { UserProps } from "./UserInformation.types";
import "./UserInfomation.scss";
const UserInformation: FC<UserProps> = ({ name, city, country, jobTitle }) => {
  return (
    <div className="user-information-container">
      <h1 className="user-information-container__name">{name}</h1>
      <p className="user-information-container__country">
        {city}, {country}
      </p>
      <p className="user-information-container__jobTitle">"{jobTitle}"</p>
    </div>
  );
};
export default UserInformation;
