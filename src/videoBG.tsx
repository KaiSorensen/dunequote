import React from 'react';

interface VideoBackgroundProps {
  videoId: string;
  startSeconds: number;
  aspectRatio: 'standard' | 'cinematic';
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoId, startSeconds, aspectRatio }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&start=${startSeconds}&vq=hd720`;

  const containerClass = `video-background aspect-${aspectRatio}`;

  return (
    <div className={containerClass}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default VideoBackground;
