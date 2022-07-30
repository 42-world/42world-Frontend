import { useEffect, useRef } from 'react';

const useClickOutside = onClicKOutside => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = () => {
      if (ref.current && !ref.current.contains(event.target)) onClicKOutside();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClicKOutside]);

  return { ref };
};

export default useClickOutside;
