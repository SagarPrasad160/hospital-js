function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleIndicators"
            className="carousel slide p-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=857&q=80"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Patient Testimonial</div>
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                I had a great experience with the hospital. The staff was very
                friendly and the service was top-notch. I would definitely
                recommend it to others
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Patient Testimonial</div>
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">
                The hospitals facilities are outstanding. From the doctors to
                the nurses, everyone was very attentive and caring. Im grateful
                for their support during my treatment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Patient Testimonial</div>
            <div className="card-body">
              <h5 className="card-title">Michael Johnson</h5>
              <p className="card-text">
                The hospitals staff went above and beyond to ensure my comfort
                during my stay. They provided excellent medical care and a
                friendly environment. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
