import React from "react";

const dict = {
  facebook: "icon-facebook.svg",
  instagram: "icon-instagram.svg",
  twitter: "icon-twitter.svg",
  youtube: "icon-youtube.svg",
};

type CustomImageProps = {
  platform: string;
};

const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  platform,
}) => {
  if (dict.hasOwnProperty(platform)) {
    return (
      <img src={dict[platform as keyof typeof dict]} alt={`${platform}-logo`} />
    );
  } else {
    // Handle the case where platform is not in dict
    return <div>Logo</div>;
  }
};

export default CustomImage;
