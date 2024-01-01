/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useState } from 'react';

const useVisibility = <Element extends HTMLElement>({
  offset = 0,
  currentElement,
  year,
}: {
  offset: number;
  currentElement: RefObject<Element>;
  year: string
}): [boolean] => {
  // const currentElement = useRef<Element>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentElement.current) {
      onScroll();
    }
  }, []);

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    var bound = currentElement.current.getBoundingClientRect();
    setIsVisible(bound.top - offset < window.innerHeight && bound.top + offset > -bound.height);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible];
};

export default useVisibility;
