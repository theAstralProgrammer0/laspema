import { React, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'


const Slider1 = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    
    const sliderImages = [
        'https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/60336048_2356871081264491_665735882388537344_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFBilCX4RAPmZYCP9N4c_fuktmXEwWdKYyS2ZcTBZ0pjDQ9EUYBntR9tt-Mrr7acfipf2LtSfizFEkuRAzUBzJN&_nc_ohc=cukrNlbQ5R8AX9KEry3&tn=QnUHaL6QVyW6yp0F&_nc_ht=scontent.flos1-1.fna&oh=00_AfAXNPEd1U7KLfo_SmzlQxrMKz-ykolAt75P1CFzOlPDwg&oe=640D47B8',
        'https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/34605210_2113603618924573_2194478278209699840_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGX-RtqtG1HCYX8vSprhM65e1C119-CFbd7ULXX34IVt6EjQalrr8pK3-0DAF9Ac0It4ckKQcDGi7BjMzdcI4ha&_nc_ohc=U_RKqKMmBx8AX987jNo&_nc_ht=scontent.flos1-2.fna&oh=00_AfBmUOt58AhEMwUgkwkEHjIFxG1KDM_OSy6Iu-Z7x23G7w&oe=640D5470',
        'https://scontent.flos1-2.fna.fbcdn.net/v/t1.18169-9/11214705_1654886154796324_7916412316595221422_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEpwjuUpsYZGxzxSjaA_ktLd3LxIfR08at3cvEh9HTxq93q71GcG0atxAsGw5vwN2nzsLntZY_ZqRlLUQK_jxOl&_nc_ohc=ccOSO8dLKnMAX8K5Qon&tn=QnUHaL6QVyW6yp0F&_nc_ht=scontent.flos1-2.fna&oh=00_AfDkM6ny2vLlWBf37r1DSBWj8Td_VfpEs9cDhhsLJE57xA&oe=640D66BE',
        'https://scontent.flos1-2.fna.fbcdn.net/v/t1.18169-9/12063467_1654886324796307_1872057840759260751_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGnFAjt0gKpPngvuK23tlZsnYcgaikKqSudhyBqKQqpK5PjcJ2HJ7spYhQKZcXoK3zJCpVeSfob-8EJwinBbSel&_nc_ohc=_qfI0UdYhDkAX8jredd&_nc_ht=scontent.flos1-2.fna&oh=00_AfDWOWJ9QJKyd-QG626EBL5K5uk4pFl73Q8u4SsSLqJK4w&oe=640D7B09',
      ]

    const handleSlideChange = (direction) => {
        if(direction === 'prev'){
            setCurrentSlide(currentSlide === 0
                                            ? sliderImages.length - 1
                                            : currentSlide - 1)
        }
        else{
            setCurrentSlide(currentSlide === sliderImages.length - 1
                                            ? 0
                                            : currentSlide + 1)
        }
    }


    return(
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                <img className="w-full h-full rounded-xl" src={sliderImages[currentSlide]} alt='slider'/>   
            </div>
            {/* left arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-transparent" onClick={() => handleSlideChange('prev')}>
                <BsChevronCompactLeft size={50}/>
            </div>
            {/* right arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-transparent" onClick={() => handleSlideChange('next')}>
                <BsChevronCompactRight size={50}/>
            </div>
        </div>
    )
}

export default Slider1