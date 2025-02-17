import React from 'react';

export default function Services() {
  return (
    <div className="mt-5 px-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJS'].map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-5 border border-danger bg-dark text-light">
              <div className="card-body text-center">
                <h5 className="card-title">{service}</h5>
                <p className="card-text p-4">We offer professional {service} development services.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}