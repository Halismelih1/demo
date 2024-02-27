import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import mockData from './data/mock';

const SelectLesson = () => {
  const { id } = useParams();
  const [dersler, setDersler] = useState([]);
  const [img, setImg] = useState([]);
  const [sınıf, setSınıf] = useState();

  const handleClick = (lesson) => {
    localStorage.setItem('lesson', lesson )
   }

  useEffect(() => {
    setSınıf(localStorage.getItem("sınıf"))
    const getVeriById = (id) => {
      return mockData.find(item => item.id === id);
    };

    const getResimler = (dersler) => {
      return dersler.map(ders => ders.ders[0].dersImgUrl);
    };

    const data = getVeriById(id);
    if (data) {
      setDersler(data.dersler.map(ders => ders.ders[0]));
      const ımgData = getResimler(data.dersler);
      setImg(ımgData);
    }
  }, [id]);

  return (
    <div>
      <div className='p-4'>
       <h1 className='font-bold'>{sınıf}</h1>
      </div>
      <hr />

      <div className='mt-24'>
        <ul className='flex justify-center mt-4 gap-4'>
          {dersler.map((ders, index) => (
            <li key={index}>
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
