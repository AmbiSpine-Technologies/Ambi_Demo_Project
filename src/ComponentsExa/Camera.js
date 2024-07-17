// import React, { useRef, useEffect } from 'react';

// const Camera = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const constraints = {
//       video: { width: 680, height: 500 }
//     };

//     let isUnmounted = false;
    
//     // Request access to the user's camera
//     navigator.mediaDevices.getUserMedia(constraints)
//       .then((stream) => {
//         if (!isUnmounted && videoRef.current) {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//         }
//       })
//       .catch((err) => {
//         console.error("Error accessing the camera: ", err);
//       });

//     // Clean up function to stop the camera when the component is unmounted
//     return () => {
//       isUnmounted = true;
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div className="camera-container text-center align-center">
//       <video ref={videoRef} className="camera-feed" autoPlay muted playsInline />
//     </div>
//   );
// };

// export default Camera;

import React, { useRef, useEffect, useState } from 'react';

const Camera = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const constraints = {
      video: { width: 680, height: 500 }
    };

    let isUnmounted = false;
    let mediaStream = null;

    // Request access to the user's camera
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (!isUnmounted && videoRef.current) {
          videoRef.current.srcObject = stream;
          mediaStream = stream;
          videoRef.current.play();
          setIsStreaming(true);
        }
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
      });

    // Clean up function to stop the camera when the component is unmounted
    return () => {
      isUnmounted = true;
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL('image/png');
      setCapturedImage(imageUrl);
      setIsCapturing(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current && !isPaused) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (videoRef.current && isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPaused(false);
    }
  };

  const handleResetCapture = () => {
    setCapturedImage(null);
    setIsCapturing(false);
  };

  return (
    <div className="camera-container text-center align-center">
      <video ref={videoRef} className="camera-feed" autoPlay muted playsInline />
      {isStreaming && (
        <div className="camera-controls">
          <button onClick={handleCapture}>Capture Image</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      )}
      {isCapturing && (
        <div>
          <img src={capturedImage} alt="Captured" className="captured-image" />
          <button onClick={handleResetCapture}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Camera;

