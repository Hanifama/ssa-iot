import { MenuLink } from '@/lib/types/footer';
import React from 'react';

interface MenuLinksProps {
  menuLinks: MenuLink[];
}

const MenuLinks: React.FC<MenuLinksProps> = ({ menuLinks }) => (
  <div className="footer__col">
    <h4 className="text-lg font-semibold mb-4">Menu</h4>
    <ul className="footer__links space-y-2">
      {menuLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-blue-500 transition">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuLinks;
