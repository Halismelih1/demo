import React, { useEffect } from 'react';
import mockData from './data/mock';
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (sınıf) => {
    localStorage.setItem('sınıf', sınıf )
  };

  return (
    <div className=''>
      <div className='flex justify-center text-center'>
        <img src="./assets/title.PNG" alt="" />
      </div>
      <hr />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 items-center  '>
        {mockData.map((item) => (
          <div key={item.id}>
            <div>
              <Link to={`/lessons/${item.id}`}>
                <img onClick={() => handleClick(item.sınıf)} src={item.imgUrl} alt="" />
                {/* {item.sınıf} */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
