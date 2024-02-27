import React, { useEffect } from 'react'
import mockData from './data/mock';
import { Link } from "react-router-dom";


const Home = () => {
   const handleClick = (sınıf) => {
    localStorage.setItem('sınıf', sınıf )
   }


    return (
        <div className=''>
            <div className='flex justify-center text-center'>
                <img src="./assets/title.PNG" alt="" />
            </div>
            <hr />

            <div className='flex p-4 gap-14 justify-center mt-4'>

                {
                    mockData.map(item => (
                        <div key={item.id}>

                            <div>
                                <Link to={`/lessons/${item.id}`}>
                                    <img onClick={()=>handleClick(item.sınıf)} src={item.imgUrl} alt="" />
                                    {/* {item.sınıf} */}
                                </Link>
                            </div>

                        </div>

                    ))

                }
            </div>

        </div>
    )
}


export default Home