import { SocialLink } from '@/lib/types/footer';
import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiWebhookLine } from 'react-icons/ri';


interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const renderSocialIcon = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return <RiFacebookFill />;
    case 'webhook':
      return <RiWebhookLine />;
    case 'instagram':
      return <RiInstagramFill />;
    case 'youtube':
      return <RiYoutubeFill />;
    default:
      return null;
  }
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => (
  <div className="flex justify-center space-x-4 mt-6">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className="text-accent hover:text-yellow-600 transition"
        aria-label={social.ariaLabel}
      >
        {renderSocialIcon(social.platform)}
      </a>
    ))}
  </div>
);

export default SocialLinks;
