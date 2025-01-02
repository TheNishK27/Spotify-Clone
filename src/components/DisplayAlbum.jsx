import React, { useContext } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <NavBar />

      {/* Album Header */}
      <div className="mt-10 flex flex-col items-center gap-8 px-4 md:flex-row md:items-end md:gap-12">
        <img
          className="w-48 rounded shadow-lg md:w-64"
          src={albumData.image}
          alt={`${albumData.name} album cover`}
        />
        <div className="flex flex-col text-center md:text-left">
          <p className="uppercase text-sm tracking-wider text-[#a7a7a7]">Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4 className="text-[#a7a7a7]">{albumData.desc}</h4>
          <p className="mt-1 flex items-center justify-center gap-2 text-[#a7a7a7] md:justify-start">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="Spotify logo" />
            <span>Spotify</span> • 1,293,154 likes • <b>50 songs, </b> about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Song List Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] uppercase text-sm">
        <p className="mr-4">
          <b>#</b> Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock icon" />
      </div>
      <hr className="border-[#ffffff2b]" />

      {/* Song List */}
      {songsData.map((item, index) => (
        <div
          key={item.id}
          onClick={() => playWithId(item.id)}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer transition-all duration-150 ease-in-out"
        >
          {/* Song Title */}
          <div className="flex items-center gap-4">
            <b className="text-[#a7a7a7]">{index + 1}</b>
            <img
              className="w-10 rounded object-cover"
              src={item.image}
              alt={`${item.name} cover`}
            />
            <p className="text-white text-ellipsis overflow-hidden whitespace-nowrap">{item.name}</p> 
          </div>

          {/* Album Name */}
          <p className="text-[15px] text-ellipsis overflow-hidden whitespace-nowrap">{albumData.name}</p>

          {/* Date Added */}
          <p className="hidden sm:block text-[15px] text-[#a7a7a7]">5 days ago</p>

          {/* Duration */}
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default React.memo(DisplayAlbum);
