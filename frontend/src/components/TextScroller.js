import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-50%,0)" },
    config: { duration: 19000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key} style={{ width: '99vw', overflow: 'hidden' }}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>)
}

export default TextScroller;
