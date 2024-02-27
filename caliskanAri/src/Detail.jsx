import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mockData from './data/mock';

const Detail = () => {
    const location = useLocation();
    const pathnameParts = location.pathname.split('/');
    const id = pathnameParts[2];
    const dersAdiEncoded = pathnameParts[3];

    const dersAdi = decodeURIComponent(dersAdiEncoded);

    const [sınıf, setSınıf] = useState(null);
    const [dersler, setDersler] = useState([]);
    const [secilenDers, setSecilenDers] = useState(null);
    const [uniteler, setUniteler] = useState([]);
    const [konular, setKonular] = useState([]);
    const [stepperDers, setStepperDers] = useState([]);
    const [stepperSınıf, setStepperSınıf] = useState([]);

    useEffect(() => {
        setStepperDers(localStorage.getItem("lesson"))
        setStepperSınıf(localStorage.getItem("sınıf"))
        const getData = (id) => {
            const data = mockData.find(item => item.id === id);
            if (data) {
                setSınıf(data.sınıf);
                setDersler(data.dersler);
                const secilenDers = data.dersler.find(ders => ders.ders[0].ders_adı === dersAdi);
                if (secilenDers) {
                    setSecilenDers(secilenDers);
                    setUniteler(secilenDers.üniteler);
                    const tumKonular = secilenDers.üniteler.reduce((acc, unit) => [...acc, ...unit.konu_ögeleri], []);
                    setKonular(tumKonular);
                }
            }
        };

        getData(id);
    }, [id, dersAdi]);

    const handleDersSecimi = (ders) => {
        setSecilenDers(ders);
        setUniteler(ders.üniteler);
        const tumKonular = ders.üniteler.reduce((acc, unit) => [...acc, ...unit.konu_ögeleri], []);
        setKonular(tumKonular);
    };

    return (
        <>
        <div className='p-4'>
       <h1 className='font-bold'>{stepperSınıf} | {stepperDers}</h1>
      </div>
      <hr />
        <div style={{ display: 'flex', marginTop:"24px" }}>
            <div style={{ flex: '1', borderRight: '1px solid #ccc', padding: '2px' }}>
                <div className="p-4 mt-2">
                    <h1 className="text-3xl text-left text-black font-bold mb-4">{sınıf} Dersler</h1>
                    <hr />
                    {dersler.map((ders, index) => (
                        <div className="flex justify-start" key={index}>
                            <div className="p-2" style={{ width: '100%' }} >
                                <button
                                    className={`w-full py-2 px-4 text-left rounded-xl ${secilenDers && secilenDers.ders[0].ders_adı === ders.ders[0].ders_adı ? 'bg-yellow-500' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={() => handleDersSecimi(ders)}
                                >
                                    {ders.ders[0].ders_adı}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ flex: '3', padding: '10px' }}>
                <div className=" p-4">
                    <h1 className="text-3xl text-left text-black font-bold mb-4">{secilenDers ? secilenDers.ders[0].ders_adı : ''}</h1>
                    <hr />
                    <ul className="list-inside text-gray-800">
                        {uniteler.map((unit, index) => (
                            <li key={index} className="mb-2">
                                <div className="flex justify-between items-center bg-gray-300 rounded-lg p-2 mt-2">
                                    <span>{unit.ünite_adı}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>

    );
};

export default Detail;
