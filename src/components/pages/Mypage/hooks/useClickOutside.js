import { useEffect } from 'react';

const useClickOutside = (ref, onClicKOutside) => {
  const handleClickOutside = () => {
    if (ref.current && !ref.current.contains(event.target)) onClicKOutside();
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
