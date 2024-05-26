import React from 'react'

const SongItem = ({name, image, desc, id}) => {
  return (
    <div className="min-w-[150px] padding-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-small">{desc}</p>
    </div>
  )
}

export default SongItem
