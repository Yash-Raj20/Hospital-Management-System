
import "./meetDoctore.css";

const MeetDoctors = () => {

  return (
    <section className="meet-doc-section" id="team-section">
      <div className="container">
        <div className="meet-doc-content">
          <div className="heading text-center mb-10 wow fadeInUp">
            Doctors, Pioneers, Life Savers
          </div>
          <div className="para-wrap text-center fullcontent mb-50">
            <p>
              Our superspecialist doctors provide the highest quality of care
              through a team-based, doctor-led model. Trained at some of the
              world’s most renowned institutions, our highly experienced doctors
              are distinguished experts in their respective specialities. Our
              doctors work full-time and exclusively across Medanta hospitals.
              In addition to offering superspecialised care in their own field,
              the Medanta organisational structure enables every doctor to help
              create a culture of collaboration and multispecialty care
              integration.
            </p>
          </div>
          <div className="para-wrap text-center lesscontent mb-30">
            <p>
              Our superspecialist doctors provide the highest quality of care
              through a team-based, doctor-led model. Trained at some of the
              world’s most renowned...
            </p>
          </div>
        </div>
        <picture className="image-block wow fadeInUp" data-wow-delay=".7s">
          <source
            media="(min-width:768px)"
            srcSet="https://www.medanta.org/storage/banners/December2023//bUDc10FiMDLjuvit5be0kDIvFQhEUD-metabWVldC1kb2MtYmFubmVyLWxnLnBuZw==-.jpg"
            width="1920"
            height="528"
            alt="meet-our-doctors"
          />
          <source
            media="(min-width:320px)"
            srcSet="https://www.medanta.org/storage/banners/December2023//oexT0wsSURIzBkU0JByoIlVK20U5iu-metabWVldC1kb2MtYmFubmVyLXhzLnBuZw==-.png"
            width="480"
            height="250"
            alt="meet-our-doctors"
          />
          <img
            loading="lazy"
            src="https://www.medanta.org/storage/banners/December2023//bUDc10FiMDLjuvit5be0kDIvFQhEUD-metabWVldC1kb2MtYmFubmVyLWxnLnBuZw==-.jpg"
            width="1920"
            height="528"
            alt="meet-our-doctors"
          />
        </picture>
      </div>
    </section>
  );
};

export default MeetDoctors;
