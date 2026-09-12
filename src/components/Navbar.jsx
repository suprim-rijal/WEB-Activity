import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <>
      <PageLinks parentClass="nav-links" itemClass="nav-link" />
      <SocialLinks parentClass="nav-icons" itemClass="nav-icon"/>
    </>
  );
};

export default Navbar;
