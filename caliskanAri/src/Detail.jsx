import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import mockData from './data/mock';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';


const Detail = () => {

    const { id, dersAdi } = useParams();
    const [sınıf, setSınıf] = useState(null);
    const [dersler, setDersler] = useState([]);
    const [secilenDers, setSecilenDers] = useState(null);
    const [uniteler, setUniteler] = useState([]);
    const [konular, setKonular] = useState([]);
    const [stepperDers, setStepperDers] = useState([]);
    const [stepperSınıf, setStepperSınıf] = useState([]);
    const [showDropdowns, setShowDropdowns] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);


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
            setIsSmallScreen(window.innerWidth < 768); // 768px'den küçükse çalışması için yaptım
        };

        checkScreenSize(); // Başlangıçta ekran boyuttu

        window.addEventListener('resize', checkScreenSize); // Ekran değişimi kontrol ettim

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [id, dersAdi]);

    //sayaç işlemleri
    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning]);

    // sayaçta istediğim formata erişmek için(bu noktada gpt'den yardım aldım)
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const toggleTimer = () => {
        setIsTimerRunning(prevState => !prevState);
    };

    const resetTimer = () => {
        setTimer(0);
        setIsTimerRunning(false);
    };


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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Menü İçeriği(Dersler)

    const getMenuContent = () => {
        return (
            <>
                <h2 className="text-3xl text-left text-black font-bold mb-4">{sınıf} Dersler</h2>
                <div className="p-4 mt-2">
                    <ul>
                        {dersler.map((ders, index) => (
                            <li key={index} className="mb-2">
                                <button
                                    className={`w-full py-2 px-4 text-left rounded-xl font-bold ${secilenDers && secilenDers.ders[0].ders_adı === ders.ders[0].ders_adı ? 'bg-customYellow' : 'bg-customGray-light'}`}
                                    onClick={() => handleDersSecimi(ders)}
                                >
                                    {ders.ders[0].ders_adı}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    // Modal
    const Modal = ({ children, onClose }) => {
        const handleClose = (e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-customGray bg-opacity-80" onClick={handleClose}>
                <div className="bg-white p-12 rounded-md relative">
                    <button className="absolute cursor-pointer top-2 text-red-500 font-bold right-2 bg-transparent border-none text-black" onClick={onClose}>&#10007;</button>
                    <div >{children}</div>

                </div>
            </div>
        );
    };

    return (
        <>
            <div className='p-4 flex justify-between'>
                {/* Stepper */}
                <h1 className='font-bold'>
                    <Link to={"/"}>{stepperSınıf} &#8250; </Link>
                    <Link to={`/lessons/${id}`}>{stepperDers}</Link>
                </h1>
                <div className=''>
                    <img className='w-[50px]' src="./assets/logo.png" />
                </div>

                <div className=" border p-2">
                    {/* Sayaç */}
                    <button className="mr-4" onClick={toggleTimer}>
                        {isTimerRunning ? <FaPause /> : <FaPlay />}
                    </button>
                    <button className="mr-4" onClick={resetTimer}>
                        <FaRedo />
                    </button>

                    <span className="text-xl font-bold ml-4">{formatTime(timer)}</span>
                </div>
            </div>
            <hr />
            <div className='flex flex-col'>
                {/* Küçük ekranlar */}
                {isSmallScreen ? (
                    <div className='w-full p-4'>
                        <button className="bg-customYellow  font-bold py-2 px-4 rounded ml-4" onClick={toggleMenu}>
                            Dersler
                        </button>
                        {isMenuOpen && <Modal onClose={toggleMenu}>{getMenuContent()}</Modal>}
                        <div className="p-4">
                            <h1 className="text-3xl text-left font-bold mb-4">{secilenDers ? secilenDers.ders[0].ders_adı : ''}</h1>
                            <hr />
                            {uniteler.map((unit, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center border rounded-lg p-2 mt-2">
                                        <span>&#9998; {unit.ünite_adı}</span>
                                        <button className="ml-4 px-2 py-1 bg-customYellow  rounded" onClick={() => toggleDropdown(index)}>
                                            {showDropdowns[index] ? '👆' : '👇'}
                                        </button>
                                    </div>
                                    <ul className="list-inside mt-2" style={{ display: showDropdowns[index] ? 'block' : 'none' }}>
                                        {unit.konu_ögeleri.map((konu, konuIndex) => (
                                            <li key={konuIndex} className="mb-2">
                                                <div className="flex border-l border-black w-1/2 justify-between items-center bg-customGray-light rounded-lg p-1 mt-2">
                                                    <Link to={konu.link}>
                                                        <span>&#10163; {konu.konu}</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                ) : (
                    <>
                        <div className='flex w-full'>
                            {/* Büyük ekranlar */}
                            <div className='w-1/2 p-4 border-r '>
                                {getMenuContent()}
                            </div>
                            <div className='w-1/2'>
                                <div className="p-4">
                                    <h1 className="text-3xl text-left font-bold mb-4">{secilenDers ? secilenDers.ders[0].ders_adı : ''}</h1>
                                    <hr />
                                    {uniteler.map((unit, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center border rounded-lg p-2 mt-2">
                                                <span>&#9998; {unit.ünite_adı}</span>
                                                <button className="ml-4 px-2 py-1 bg-customYellow  rounded" onClick={() => toggleDropdown(index)}>
                                                    {showDropdowns[index] ? '👆' : '👇'}
                                                </button>
                                            </div>
                                            <ul className="list-inside  mt-2" style={{ display: showDropdowns[index] ? 'block' : 'none' }}>
                                                {unit.konu_ögeleri.map((konu, konuIndex) => (
                                                    <li key={konuIndex} className="mb-2">
                                                        <div className="flex w-1/2 border-l border-black justify-between items-center bg-customGray-light rounded-lg p-1 mt-2">
                                                            <Link to={konu.link}>
                                                                <span>&#10163; {konu.konu}</span>
                                                            </Link>
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
                )}
            </div>
        </>
    );

};

export default Detail;
