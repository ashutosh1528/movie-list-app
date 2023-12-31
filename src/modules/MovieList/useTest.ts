import { RefObject, useEffect, useRef, useState } from "react"

const useVisibility = <Element extends HTMLElement>(
  offset = 0,
  isFirst = false
): [boolean, RefObject<Element>] => {
  const [isVisible, setIsVisible] = useState(isFirst);
  const currentElement = useRef<Element>(null);

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    // const top = currentElement.current.getBoundingClientRect().top;
    // setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    var bound = currentElement.current.getBoundingClientRect();
    // console.log(bound.top);
    var html = document.documentElement;
    setIsVisible(
      bound.top < window.innerHeight &&
      bound.top > -bound.height 
  );
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement];
};

export default useVisibility;

