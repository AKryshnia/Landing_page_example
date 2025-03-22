import React from 'react';
import { FaTelegram } from "react-icons/fa";

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="py-4 px-6 border-t border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Текст в центре на больших экранах, слева на маленьких */}
      <p className="text-left md:text-center w-full">
        © 2025 [Ваша компания]. Все права защищены.
      </p>

      <div className="flex items-center gap-2 text-gray-200 mt-2 md:mt-0">
        <span>Разработка:</span>
        <a
          href="https://t.me/[username]"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-200 hover:text-gray-300"
        >
          <FaTelegram className="text-2xl" />
          [Команда разработки]
        </a>
      </div>
    </footer>
  );
});

export default Footer;
