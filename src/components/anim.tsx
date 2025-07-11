import { useSpring } from '@react-spring/web';

export const useHoverCard = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 120, friction: 10 },
    });

export const useSlide = ( x: number ) => 
    useSpring({
        from: { opacity: 0, translateX: `${x}px` },
        to: { opacity: 1, translateX: '0px' },
        config: { tension: 120, friction: 10 },
});
