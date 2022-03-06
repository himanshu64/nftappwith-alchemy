const MainView = () => {
   return <section id="home" className="intro-section">
  <div className="container">
    <div className="row align-items-center text-white">
      
      <div className="col-md-6 intros text-start">
        <h1 className="display-2">
          <span className="display-2--intro">Non fungible Token</span>
          <span className="display-2--description lh-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </span>
        </h1>
        <button type="button" className="rounded-pill btn-rounded">Get in Touch
          <span><i className="fas fa-arrow-right"></i></span>
        </button>
      </div>
     
      <div className="col-md-6 intros text-end">
        <div className="video-box">
          <img src="images/arts/intro-section-illustration.png" alt="video illutration" className="img-fluid"/>
          <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
            <span>
              <i className="fas fa-play-circle"></i>
            </span>
            <span className="border-animation border-animation--border-1"></span>
            <span className="border-animation border-animation--border-2"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>
}
export default MainView;