import { useEffect, useRef } from 'react';

const useClickOutside = onClicKOutside => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    if (ref.current && !ref.current.contains(event.target)) onClicKOutside();
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { ref };
};

export default useClickOutside;
