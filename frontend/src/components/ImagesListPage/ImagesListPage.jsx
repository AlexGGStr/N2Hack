import React from 'react'
import {motion} from 'framer-motion'
import './ImagesListPage.css'
import {useRef, useEffect, useState} from 'react'


const ImagesListPage = ({imagesArray}) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <div className='ImagesListPage'>
        <motion.div ref={carousel} className='carousel'>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}}  className='inner-carousel'>
              {
                imagesArray.map((elem, index) => {
                  return(
                    <motion.div className='item'>
                      <img src={`url('${elem.name}')`} alt='' key={index}/>
                    </motion.div>
                  );
                })
              }
            </motion.div>
        </motion.div>
    </div>
  )
}

export default ImagesListPage