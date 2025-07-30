import React from 'react';

const features = [
  {
    title: 'Ready-to-Use Models',
    desc: 'Accelerate innovation with our AI models. Simplify integration across diverse applications and bring your ideas to life.',
    color: 'bg-primary'
  },
  {
    title: 'Data Security',
    desc: 'Secure your data with our advanced AI API marketplace. Trustworthy and reliable data security solutions.',
    color: 'bg-success'
  },
  {
    title: 'Accelerated time to market',
    desc: "Accelerate your product's launch. Experience faster time to market and stay ahead of the competition.",
    color: 'bg-danger'
  },
  {
    title: 'Large collection of models',
    desc: 'Explore diverse AI models in our marketplace for different industries and use cases.',
    color: 'bg-secondary'
  },
  {
    title: 'Cost Saving',
    desc: 'Efficient AI solutions: Pre-built models, no data science team required. Flexible scaling and pay-as-you-go pricing.',
    color: 'bg-warning'
  },
  {
    title: 'Business-focused models',
    desc: 'Powerful AI models for smarter business decisions. Optimize operations and drive growth with ease.',
    color: 'bg-info'
  },
];

const WhyChoose = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">Why choose AI Marketplace?</h2>
    <div className="row text-center">
      {features.map((item, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className="mb-3">
            <div className={`rounded-circle ${item.color}`} style={{ width: '50px', height: '50px', margin: '0 auto' }}></div>
          </div>
          <h5>{item.title}</h5>
          <p className="text-muted">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyChoose;
