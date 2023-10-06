import { MenuLeft } from './headerLeft';
import { MenuRight } from './headerRight';
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <MenuLeft />
      <MenuRight />
    </header>
  );
};
