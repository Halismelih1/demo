import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import mockData from './data/mock';

const SelectLesson = () => {
  const { id } = useParams();
  const [dersler, setDersler] = useState([]);
  const [sınıf, setSınıf] = useState();

  const handleClick = (lesson) => {
    localStorage.setItem('lesson', lesson )
  }

  useEffect(() => {
    setSınıf(localStorage.getItem("sınıf"))
    const getVeriById = (id) => {
      return mockData.find(item => item.id === id);
    };


    const data = getVeriById(id);
    if (data) {
      setDersler(data.dersler.map(ders => ders.ders[0]));
      
    }
  }, [id]);

  return (
    <div>
      <div className='p-4'>
        <h1 className='font-bold'>{sınıf}</h1>
      </div>
      <hr />

      <div className='mt-24'>
        <ul className='flex flex-wrap justify-center mt-4 gap-4'>
          {dersler.map((ders, index) => (
            <li key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6">
              <Link to={`/detail/${id}/${ders?.ders_adı}`}>
                <img onClick={()=>handleClick(ders?.ders_adı)} src={ders?.dersImgUrl} alt={ders?.dersImgUrl} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectLesson;
