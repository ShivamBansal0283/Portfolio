

// import React, { useEffect, useRef } from "react";
// import "../styles/matrix.css";

// const MatrixRain = () => {
//     const canvasRef = useRef(null);
//     let animationFrameId;

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         const setCanvasSize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         setCanvasSize();
//         window.addEventListener("resize", setCanvasSize);

//         const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*";
//         const fontSize = 25;
//         let columns = Math.floor(canvas.width / fontSize);
//         let drops = Array(columns).fill(0);

//         const speedFactor = 1.2; // Reduce speed (Lower value = Slower fall)

//         const draw = () => {
//             ctx.fillStyle = "rgba(245, 245, 220, 0.3)"; // Beige background with slight transparency
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//             // ctx.fillStyle = "#8B4513"; // Brown text color
//             ctx.fillStyle = "rgb(102, 78, 25)"; // Brown text color
//             ctx.font = `${fontSize}px monospace`;

//             for (let i = 0; i < drops.length; i++) {
//                 const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
//                 const x = i * fontSize;
//                 const y = drops[i] * fontSize;
//                 ctx.fillText(text, x, y);

//                 if (y > canvas.height && Math.random() > 0.98) {
//                     drops[i] = 0;
//                 }
//                 drops[i] += speedFactor; // Slow down the falling speed
//             }

//             animationFrameId = requestAnimationFrame(draw);
//         };

//         draw();

//         return () => {
//             cancelAnimationFrame(animationFrameId);
//             window.removeEventListener("resize", setCanvasSize);
//         };
//     }, []);

//     return <canvas ref={canvasRef} className="matrix-canvas"></canvas>;
// };

// export default MatrixRain;