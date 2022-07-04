import { useRef ,useCallback , useEffect } from 'react';

export default function useScrollFadeIn(){
    const dom = useRef();
    
    const handleScroll = useCallback(([entry]) => {
        const { current } = dom;
          
          if(entry.isIntersecting) {
          // 원하는 이벤트를 추가 할 것
        }
      }, []);
    
    useEffect(() => {
      let observer;
      const { current } = dom;
      
      if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
        observer.observe(current);
        
        return () => observer && observer.disconnect();
      };
    }, [handleScroll]);
    
      return {
      ref: dom,
    };
  }