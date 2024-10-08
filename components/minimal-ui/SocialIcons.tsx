import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/GunalGupta', color: 'hover:bg-[rgba(0,0,0,0.829)]' },
    { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/gunalgupta05/', color: 'hover:bg-[#E4405F]' },
    { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://www.linkedin.com/in/gunal-gupta/', color: 'hover:bg-[#0077b5]' },
    { name: 'Twitter', icon: faXTwitter, url: 'https://x.com/GunalGupta', color: 'hover:bg-black' },
  ];

  return (
    <div className="social-menu">
      <ul className="flex space-x-4">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-10 h-10 rounded-full bg-white text-black ${link.color} hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-md relative`}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;