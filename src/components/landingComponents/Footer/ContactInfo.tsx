import { ContactInfo } from '@/lib/types/footer';
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';


interface ContactInfoProps {
  contactInfo: ContactInfo[];
}

const renderContactIcon = (type: string) => {
  switch (type) {
    case 'phone':
      return <FaPhoneAlt />;
    case 'address':
      return <FaMapMarkerAlt />;
    case 'email':
      return <FaEnvelope />;
    default:
      return null;
  }
};

const ContactInfoSection: React.FC<ContactInfoProps> = ({ contactInfo }) => (
  <div className="footer__col">
    <h4 className="text-lg font-semibold mb-4">Contact</h4>
    <ul className="footer__links space-y-4">
      {contactInfo.map((info, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2">{renderContactIcon(info.type)}</span>
          {info.text}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactInfoSection;
