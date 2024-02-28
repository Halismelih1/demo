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
    const [showDropdowns, setShowDropdowns] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setStepperDers(localStorage.getItem("lesson"));
        setStepperSınıf(localStorage.getItem("sınıf"));
        const getData = (id) => {
            const data = mockData.find(item => item.id === id);
            if (data) {
                setSınıf(data.sınıf);
                setDersler(data.dersler);
                const secilenDers = data.dersler.find(ders => ders.ders[0].ders_adı.toLowerCase() === dersAdi.toLowerCase());
                if (secilenDers) {
                    setSecilenDers(secilenDers);
                    setUniteler(secilenDers.ders[0].üniteler);
                    const tumKonular = secilenDers.ders[0].üniteler.reduce((acc, unit) => [...acc, ...unit.konu_ögeleri], []);
                    setKonular(tumKonular);
                    // Dropdown 
                    const initialDropdownState = {};
                    secilenDers.ders[0].üniteler.forEach((unit, index) => {
                        initialDropdownState[index] = false;
                    });
                    setShowDropdowns(initialDropdownState);
                }
            }
        };

        getData(id);

        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768); // 768px'den küçükse çalışması için
        };

        checkScreenSize(); // Başlangıçta ekran boyutu

        window.addEventListener('resize', checkScreenSize); // Ekran değişimi kontrrol

        return () => {
            window.removeEventListener('resize', checkScreenSize); 
        };
    }, [id, dersAdi]);

    const handleDersSecimi = (ders) => {
        setSecilenDers(ders);
        setUniteler(ders.ders[0].üniteler);
        const tumKonular = ders.ders[0].üniteler.reduce((acc, unit) => [...acc, ...unit.konu_ögeleri], []);
        setKonular(tumKonular);
        // Dropdown 
        const initialDropdownState = {};
        ders.ders[0].üniteler.forEach((unit, index) => {
            initialDropdownState[index] = false;
        });
        setShowDropdowns(initialDropdownState);
    };

    const toggleDropdown = (index) => {
        setShowDropdowns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <>
            <div className='p-4'>
                <h1 className='font-bold'>{stepperSınıf} | {stepperDers}</h1>
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', marginTop: "24px" }}>
                <div style={{ flex: '1', borderRight: !isSmallScreen && '1px solid #ccc', padding: '2px' }}>
                    <div className="p-4 mt-2">
                        <h1 className="text-3xl text-left text-black font-bold mb-4">{sınıf} Dersler</h1>
                        <hr />
                        {dersler.map((ders, index) => (
                            <div className="flex justify-start" key={index}>
                                <div className="p-2" style={{ width: '100%' }} >
                                    <button
                                        className={`w-full py-2 px-4 text-left rounded-xl ${secilenDers && secilenDers.ders[0].ders_adı === ders.ders[0].ders_adı ? 'bg-customYellow' : 'bg-customGray-light'}`}
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
                        {uniteler.map((unit, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center bg-customGray-dark rounded-lg p-2 mt-2">
                                    <span>{unit.ünite_adı}</span>
                                    <button className="ml-4 px-2 py-1 bg-customYellow text-black rounded" onClick={() => toggleDropdown(index)}>Konular</button>
                                </div>
                                {/* Dropdown */}
                                <ul className="list-inside text-gray-800 mt-2" style={{ display: showDropdowns[index] ? 'block' : 'none' }}>
                                    {unit.konu_ögeleri.map((konu, konuIndex) => (
                                        <li key={konuIndex} className="mb-2">
                                            <div className="flex justify-between items-center bg-customGray-light rounded-lg p-1 mt-2">
                                                <span>{konu}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
