import { websiteName, contactInfo } from "../utils/siteInfo";
import { about } from "../utils/aboutData";
import FooterDecorations from "./footer/FooterDecorations";
import LogoSection from "./footer/LogoSection";
import NavigationLinks from "./footer/NavigationLinks";
import ContactInfo from "./footer/ContactInfo";
import SocialLinks from "./footer/SocialLinks";
import Copyright from "./footer/Copyright";

export default function Footer() {
  const { name } = websiteName;
  const { email, phone, address, time } = contactInfo;

  return (
    <footer className="w-screen mx-auto bg-gray-900 text-gray-400 relative overflow-hidden">
      {/* Decorative elements */}
      <FooterDecorations />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <LogoSection name={name} />

          {/* Navigation links and Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <NavigationLinks />
            <ContactInfo
              email={email}
              phone={phone}
              address={address}
              time={time}
            />
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="mt-10 pt-5 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <Copyright name={about.name} />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
