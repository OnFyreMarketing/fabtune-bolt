import React, { useEffect, useRef } from 'react';
    import WaveSurfer from 'wavesurfer.js';

    function AudioPlayer({ audioUrl }) {
      const waveformRef = useRef(null);
      const waveSurfer = useRef(null);

      useEffect(() => {
        if (waveformRef.current) {
          waveSurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#ddd',
            progressColor: '#ff5500',
            height: 80
          });

          waveSurfer.current.load(audioUrl);
        }

        return () => {
          if (waveSurfer.current) {
            waveSurfer.current.destroy();
          }
        };
      }, [audioUrl]);

      return <div ref={waveformRef} />;
    }

    export default AudioPlayer;
