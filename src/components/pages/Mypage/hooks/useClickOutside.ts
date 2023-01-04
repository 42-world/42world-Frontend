import { useEffect, createRef, RefObject } from 'react';

const useClickOutside = (onClicKOutside: () => void) => {
  const ref: RefObject<HTMLDivElement> = createRef();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e?.target) return;
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) onClicKOutside();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClicKOutside]);

  return { ref };
};

export default useClickOutside;
