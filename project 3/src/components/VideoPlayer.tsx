import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="relative aspect-video">
        {/* This would be a real video player in production */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Play size={64} className="text-white opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Video controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <button className="hover:text-blue-400">
                <Play size={20} />
              </button>
              <div className="text-sm">00:00 / 15:30</div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="hover:text-blue-400">
                <Volume2 size={20} />
              </button>
              <button className="hover:text-blue-400">
                <Settings size={20} />
              </button>
              <button className="hover:text-blue-400">
                <Maximize size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-2 w-full bg-gray-600 rounded-full h-1">
            <div className="bg-blue-500 h-1 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-900 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;