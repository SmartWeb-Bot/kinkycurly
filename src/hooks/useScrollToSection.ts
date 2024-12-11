import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // First navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return scrollToSection;
};