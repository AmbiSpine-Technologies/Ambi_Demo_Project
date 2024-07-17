import React, { useState, useCallback } from 'react';

const SearchWithMic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [listening, setListening] = useState(false);
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    setSearchQuery(speechToText);
    setListening(false);
  };

  recognition.onend = () => {
    setListening(false);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error', event.error);
    setListening(false);
  };

  const handleMicClick = useCallback(() => {
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  }, [listening, recognition]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <div>
      <div className="search-box">
        <form className="relative d-flex position-relative" onSubmit={handleSubmit}>
          <span className="search-icon bi bi-search position-absolute"></span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search..."
            className="search-input"
          />
          <span
            onClick={handleMicClick}
            className="bi bi-mic-fill position-absolute text-white bg-primary rounded-circle px-1 mt-2"
            style={{ left: "90%" }}
          ></span>
        </form>
      </div>
    </div>
  );
};

export default SearchWithMic;




