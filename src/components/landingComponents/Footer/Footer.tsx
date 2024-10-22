import React from 'react';
import ContactInfoSection from './ContactInfo';
import MenuLinks from './MenuLinks';
import SocialLinks from './SocialLinks';
import footerDataJson from '@/lib/mocks/footerData.json';
import { FooterData } from '@/lib/types/footer';


const Footer: React.FC = () => {
  const { contactInfo, menuLinks, socialLinks } = footerDataJson as FooterData;

  return (
    <footer className="bg-gray-900 text-white py-6 px-10" id="news">
      <div className="container mx-auto py-10">
        <div className="grid gap-20 md:grid-cols-3">

          <div className="footer__col">
            <a href="#" className="text-3xl font-bold mb-4 inline-block">
              Produk<span className="text-accent">IoT</span>
            </a>
            <p className="mb-4">
              Kami adalah platform IoT yang menyediakan solusi cerdas untuk mengoptimalkan proses bisnis Anda melalui teknologi terkini.
            </p>
          </div>

          
          <ContactInfoSection contactInfo={contactInfo} />
          
          <MenuLinks menuLinks={menuLinks} />
        </div>
        
        <SocialLinks socialLinks={socialLinks} />
        
        <div className="footer__bar py-4 border-t border-gray-600 text-center text-sm mt-8">
          <div>Copyright © 2024 PT. LSKK. All rights reserved.</div>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
