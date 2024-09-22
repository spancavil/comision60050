import { useState, useRef } from 'react';

const VideoExample = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    //Declaramos una nueva variable "nexsIsPlayig" que es lo que había antes en el estado pero negado
    //De esta manera es más facil realizar luego un control de flujos, sobre el estado ya cambiado.
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      //Como accedimos al elemento del DOM directamente tenemos acceso sobre sus métodos
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={()=>console.log("Video is playing!")}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default VideoExample