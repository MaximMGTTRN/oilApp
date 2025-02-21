import React, { createContext, useContext, useEffect, useState } from 'react';

interface MediaContextType {
  mediaLoaded: boolean;
  images: { [key: string]: string };
  backgroundGif: string;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const useMediaContext = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMediaContext must be used within a MediaProvider');
  }
  return context;
};

export const MediaProvider: React.FC<any> = ({ children }) => {
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [backgroundGif, setBackgroundGif] = useState('');

  useEffect(() => {
    const loadMedia = async () => {
      const cachedImages = localStorage.getItem('images');
      const cachedVideo = localStorage.getItem('backgroundGif');
  
      if (cachedImages && cachedVideo) {
        setImages(JSON.parse(cachedImages));
        setBackgroundGif(cachedVideo);
        setMediaLoaded(true);
        return;
      }
  
      const loadedImages: { [key: string]: string } = {
        newLogo: 'newLogo.png',
        newLogoNoText: 'newLogoNoText.png',
      };
      const backgroundGifPath = 'backgroundVideoNew.mp4';
  
      localStorage.setItem('images', JSON.stringify(loadedImages));
      localStorage.setItem('backgroundGif', backgroundGifPath);
  
      setImages(loadedImages);
      setBackgroundGif(backgroundGifPath);
      setMediaLoaded(true);
    };
  
    loadMedia();
  }, []);

  return (
    <MediaContext.Provider value={{ mediaLoaded, images, backgroundGif }}>
      {children}
    </MediaContext.Provider>
  );
};
