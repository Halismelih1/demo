import React, { useEffect } from 'react';
import mockData from './data/mock';
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (sınıf) => {
    localStorage.setItem('sınıf', sınıf)
  };

  return (
    <div className=''>
      <div className='flex justify-center text-center'>
        <img src="./assets/title.PNG" alt="" />
      </div>
      <hr />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 justify-center items-center xl:justify-center'>
        {mockData.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <Link to={`/lessons/${item.id}`}>
              <img onClick={() => handleClick(item.sınıf)} src={item.imgUrl} alt="" className="object-contain" />
              {/* {item.sınıf} */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
