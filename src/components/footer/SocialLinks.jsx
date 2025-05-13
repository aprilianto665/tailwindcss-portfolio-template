import { socialMediaLinks } from "../../utils/siteInfo";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  EmailIcon,
} from "./SocialIcons";

// Map icon types to icon components
const getIconComponent = (iconType) => {
  switch (iconType) {
    case "github":
      return <GithubIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "email":
      return <EmailIcon />;
    default:
      return null;
  }
};

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4 sm:mt-0">
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
          aria-label={social.name}
          target="_blank"
        >
          {getIconComponent(social.iconType)}
        </a>
      ))}
    </div>
  );
}
