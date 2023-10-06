import './menuRight.css';
import { IconPointerPlus } from '@tabler/icons-react';

export const MenuRight = () => {
  return (
    <nav>
      <ul className="navRight">
        <li>
          <a href="https://patricklima.vercel.app/" target='_blank'>
            <IconPointerPlus stroke={2} size={22} color='#84cc16' />
            <p className='font-medium'>Mais APP</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
