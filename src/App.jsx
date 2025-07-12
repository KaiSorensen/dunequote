import './App.css'
import VideoBackground from './videoBG'
import Quote from './Quote';
import quotes from './quotes.json';

function App() {
  const videos = [
    { id: '8g18jFHCLXk', duration: 207, aspectRatio: 'cinematic' }, // 3:27
    { id: '_YUzQa_1RCE', duration: 183, aspectRatio: 'standard' }  // 3:03
  ];

  const selectedVideo = videos[Math.floor(Math.random() * videos.length)];
  const randomStart = Math.floor(Math.random() * selectedVideo.duration);

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <VideoBackground
        videoId={selectedVideo.id}
        startSeconds={randomStart}
        aspectRatio={selectedVideo.aspectRatio}
      />
      <Quote quote={randomQuote.quote} credit={randomQuote.credit} />
    </>
  )
}

export default App
