import React from 'react';
import './patientStories.css';

const PatientStories = () => {
  const whyMedantaImages = [
    {
      src: 'https://www.medanta.org/storage/why-medanta/November2023//RiFFmKKV7w52DXMwiXaXaVglrMwOPt-metaVHJ1c3QsIENvbXBhc3Npb25hdGUucG5n-.png',
      alt: 'Trust-based compassionate care',
      heading: 'Trust-based compassionate care',
      link: 'https://www.medanta.org/why-medanta#compassionate-section',
    },
    
  ];

  return (
    <section className="why-medanta py-75 pb-0">
      <div className="why-wrapper">
        <h2 className="text-center heading pb-40">Patient Stories</h2>
        <div className="why-details">
          <div className='left-1-container'>
            
          <div className="why-block blocking-hover">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTPjHOG0LBJKLlx35kYcK4hpx5xRdGNQ4tQ&s"
                  alt="storie"
                  className="center-image "
                  width="450"
                  height="750"
                />
              </div>
            
          </div>
          <div className='left-2-container'>
           
              <div className="why-block blocking-hover">
                <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTPjHOG0LBJKLlx35kYcK4hpx5xRdGNQ4tQ&s"
                  alt="stories"
                  className="center-image "
                  width="450"
                  height="750"
                />
              </div>
            
          </div>
          <div className="why-list">
            {whyMedantaImages.map((image, index) => (
              <div className="why-block blocking-hover" key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="center-image"
                  width="450"
                  height="450"
                />
              </div>
            ))}
          </div>  
          <div className='right-1-container'> 
           
          <div className="why-block blocking-hover">
                <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTPjHOG0LBJKLlx35kYcK4hpx5xRdGNQ4tQ&s"
                  alt="storie"
                  className="center-image "
                  width="450"
                  height="750"
                />
              </div>
            
          </div>
          <div className='right-2-container'> 
           
          <div className="why-block blocking-hover">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTPjHOG0LBJKLlx35kYcK4hpx5xRdGNQ4tQ&s"
                  alt="storie"
                  className="center-image "
                  width="450"
                  height="750"
                />
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
