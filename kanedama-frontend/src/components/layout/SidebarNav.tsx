import { Navigation, NavLink } from '../nav';
import { FiTarget } from 'react-icons/fi';

const SidebarNav: React.FC = () => {
  return (
    <Navigation>
      <NavLink title='Overview' Icon={<FiTarget />} route='' isActive />
      <NavLink title='Accounts' Icon={<FiTarget />} route='' isActive />
    </Navigation>
  );
};

export default SidebarNav;
