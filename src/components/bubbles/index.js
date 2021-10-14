import { Noise } from "noisejs";
import React, { useRef, useEffect, useState } from "react";
import "./main.css";
import { bubbles } from "./bubbles";
import { Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

const CANVAS_WIDTH = 3000;
// The amplitude. The amount the noise affects the movement.
const NOISE_AMOUNT = 200;
// The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_SPEED = 0.001;
// Pixels to move per frame. At 60fps, this would be 18px a sec.
const SCROLL_SPEED = 0.0;

const backgroundPositions = [];

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
  }
}

const noise = new Noise();

const Bubbles = ({ style, name, title1, title2 }) => {
  const animationRef = useRef();
  const bubblesRef = useRef(
    bubbles[name].map((bubble) => ({
      ...bubble,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: bubble.x,
      yWithNoise: bubble.y,
    }))
  );

  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 200);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  });

  function animate() {
    bubblesRef.current = bubblesRef.current.map((bubble, index) => {
      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = bubble.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

      const element = document.getElementById(`${name}-${index}`);

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
      }

      return {
        ...bubble,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      };
    });

    animationRef.current = requestAnimationFrame(animate);
  }

  return (
    <MotionInView variants={varFadeInUp}>
      <div className="bubbles-wrapper" style={{ ...style }}>
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: 100,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: name === "bubbles1" ? "white" : "black",
            }}
          >
            {title1}
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              color: name === "bubbles1" ? "white" : "black",
            }}
          >
            {title2}
          </Typography>
        </div>
        <div className="bubbles">
          {bubbles[name].map((bubble, index) => (
            <div
              className="bubble"
              id={`${name}-${index}`}
              key={`${bubble.x} ${bubble.y}`}
              style={{
                backgroundPosition: backgroundPositions[index],
                opacity: isReady ? 1 : 0,
                transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
              }}
            >
              <img
                src={`/static/bubbles/${name}-0${
                  (index + 1) % (bubbles[name].length + 1)
                }.png`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </MotionInView>
  );
};

export default Bubbles;
