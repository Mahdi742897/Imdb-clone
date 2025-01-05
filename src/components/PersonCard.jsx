import Image from "next/image";
import React from "react";
import { FaRankingStar } from "react-icons/fa6";

const PersonCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
        width={100}
        height={100}
        alt={data.name}
        className=" object-cover size-[200px]  rounded-full"
      />
      <div className="flex items-center gap-1">
        <FaRankingStar />
        <p>{data.popularity}</p>
      </div>
      <p>{data.name}</p>
    </div>
  );
};

export default PersonCard;
