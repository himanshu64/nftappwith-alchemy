const MarketingView = () => {
    return <section id="services" className="services">
        <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw-bold">Our Services</h1>
      <div className="heading-line mb-1"></div>
    </div>

    <div className="row pt-2 pb-2 mt-0 mb-3">
      <div className="col-md-6 border-right">
        <div className="bg-white p-3">
          <h2 className="fw-bold text-capitalize text-center">
            Our Services Range From Initial Design To Deployment Anywhere Anytime
          </h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className="bg-white p-4 text-start">
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur architecto magni, 
            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
            Tempore ducimus molestiae in dolore enim.
          </p>
        </div>
      </div>
    </div>
  </div>
         <div className="container" >
   
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-paper-plane"></div>
          <h3 className="display-3--title mt-1">Marketing</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
        <div className="services__pic">
          <img src="images/services/service-1.png" alt="marketing illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
   
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
        <div className="services__pic">
          <img src="images/services/service-2.png" alt="web development illustration" className="img-fluid"/>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-code"></div>
          <h3 className="display-3--title mt-1">web development</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </div>
  
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-cloud-upload-alt"></div>
          <h3 className="display-3--title mt-1">cloud hosting</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
        <div className="services__pic">
          <img src="images/services/service-3.png" alt="cloud hosting illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
    </section>
}
export default MarketingView;