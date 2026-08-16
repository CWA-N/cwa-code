import React, { useEffect, useRef } from "react";
import "./Loader.css"; // Loader ki CSS import kar lena

const Loader = ({ isVisible }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isVisible && audioRef.current) {
      // Audio play logic (browser autoplay block ko handle karne ke sath)
      audioRef.current
        .play()
        .catch((e) => console.log("Auto-play blocked by browser", e));
    }
  }, [isVisible]);

  return (
    <div
      id="hacker-loader"
      style={{
        opacity: isVisible ? "1" : "0",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <audio
        ref={audioRef}
        src="/assets/audio/hacker-sound.mp3"
        preload="auto"
      ></audio>

      <div className="terminal-window">
        {/* Terminal Header with Mac-style buttons */}
        <div className="terminal-header">
          <span className="btn-mac red"></span>
          <span className="btn-mac yellow"></span>
          <span className="btn-mac green"></span>
          <div className="terminal-title">system_boot.exe</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          <p className="line-1">
            <span className="prompt">CWA:~$</span>{" "}
            initiating_core_systems...
          </p>
          <p className="line-2">
            <span className="prompt">CWA:~$</span>{" "}
            bypassing_security_protocols...
          </p>
          <p className="line-3">
            <span className="prompt">CWA:~$</span> loading_assets...
          </p>

          {/* Animated Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>

          <p className="line-4">
            ACCESS GRANTED <i className="fa-solid fa-unlock"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
