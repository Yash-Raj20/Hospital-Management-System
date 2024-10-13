import React from 'react';
import './serviceSlider.css'; // Import your CSS file for styles

const serviceSlider = () => {
  const updatesData = [
    {
      title: 'Elder Care Program',
      description: "Medanta’s Elder Care Programme gives your loved ones an empowering plan for their golden years.",
      imageSrc: 'https://www.medanta.org/storage/posts/October2023//6xUlBEaEpVCjRNz79LJEsU9tutYyoz-metaRWxkZXIgY2FyZSBwcm9ncmFtbWUucG5n-.png',
      link: 'https://www.medanta.org/elder-care-program',
    },
    {
      title: 'e-ICU',
      description: 'Bringing expert intervention to critically unwell patients even in the remotest parts of India',
      imageSrc: 'https://www.medanta.org/storage/updates/October2023//95MPR1hQ5KBRTVKwxgGZnfyq7JI48l-metaZUlDVS5wbmc=-.png',
      link: 'https://www.medanta.org/eicu',
    },
    {
      title: 'Triple Swap Liver Transplant',
      description: 'Behind Closed Doors is a window seat view of surgical miracles performed by our experts.',
      imageSrc: 'https://www.medanta.org/storage/posts/October2023//s4E81O623FTCYLxVATM9rA1r4xgCbW-metabGl2ZXIgKDMpLnBuZw==-.png',
      link: 'https://www.medanta.org/updates/triple-swap-liver-transplant',
    },
  ];

  return (
    <section className="home-update updates-section" id="updates-section">
      <div className="container">
        <div className="heading text-center mb-50 wow fadeInUp">Updates</div>
        <div id="updates-grid" className="updates-grid">
          {updatesData.map((update, index) => (
            <div className="updates-card text-center" key={index}>
              <div className="icon mb-20">
                <img loading="lazy" src={update.imageSrc} width="100" height="100" alt={update.title} />
              </div>
              <div className="card-heading heading-md mb-10">{update.title}</div>
              <div className="para-wrap mb-20">
                <p>{update.description}</p>
              </div>
              <div className="text-center">
                <a href={update.link} className="anchor-button">
                  Know More <span></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default serviceSlider;
