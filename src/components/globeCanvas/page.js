// // components/GlobeCanvas.jsx
// "use client";
// import React, { useRef, useEffect } from "react";
// import createGlobe from "cobe";

// export default function GlobeCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let phi = 0;

//     const onResize = () => {
//       if (canvasRef.current) {
//         canvasRef.current.width =
//           canvasRef.current.offsetWidth * devicePixelRatio;
//         canvasRef.current.height =
//           canvasRef.current.offsetHeight * devicePixelRatio;
//       }
//     };

//     onResize();
//     window.addEventListener("resize", onResize);

//     let globe;
//     if (canvasRef.current) {
//       globe = createGlobe(canvasRef.current, {
//         devicePixelRatio: 2,
//         width: canvasRef.current.offsetWidth * 2,
//         height: canvasRef.current.offsetHeight * 2,
//         phi: 0,
//         theta: 0.3,
//         dark: 1,
//         diffuse: 1.2,
//         mapSamples: 16000,
//         mapBrightness: 10,
//         baseColor: [1, 1, 1], // pure white
//         markerColor: [1, 1, 1], // white markers (if any)
//         glowColor: [1, 1, 1],
//         markers: [],
//         onRender: (state) => {
//           state.phi = phi;
//           phi += 0.01;
//         },
//       });
//     }

//     return () => {
//       window.removeEventListener("resize", onResize);
//       globe?.destroy?.();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none"
//     />
//   );
// }
"use client";
import React, { useRef, useEffect } from "react";
import createGlobe from "cobe";

export default function GlobeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    const onResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width =
          canvasRef.current.offsetWidth * devicePixelRatio;
        canvasRef.current.height =
          canvasRef.current.offsetHeight * devicePixelRatio;
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    let globe;
    if (canvasRef.current) {
      //   globe = createGlobe(canvasRef.current, {
      //     devicePixelRatio: 2,
      //     width: canvasRef.current.offsetWidth * 2,
      //     height: canvasRef.current.offsetHeight * 2,
      //     phi: 0,
      //     theta: 0.3,
      //     dark: 1,
      //     diffuse: 1.2,
      //     mapSamples: 16000,
      //     mapBrightness: 10,
      //     baseColor: [1, 1, 1],
      //     markerColor: [1, 1, 1],
      //     glowColor: [0.5, 0.5, 0.5],
      //     markers: [],
      //     onRender: (state) => {
      //       state.phi = phi;
      //       phi += 0.01;
      //     },
      //   });
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: canvasRef.current.offsetWidth * 2,
        height: canvasRef.current.offsetHeight * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [0.85, 0.7, 0.29], // Approximate between #ECCE68 & #B5902C
        markerColor: [1, 1, 1], // You can tweak this too
        glowColor: [0.9, 0.75, 0.3],
        markers: [],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      window.removeEventListener("resize", onResize);
      globe?.destroy?.();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-100"
        style={{ display: "block" }}
      />
    </div>
  );
}
