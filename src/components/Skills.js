import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLaptopCode, faMobileAlt, faBullhorn, faServer, faRobot, faCloud } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

export const Skills = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Build responsive, fast, and secure websites that scale with your business.',
      icon: faCode,
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive, user-friendly interfaces to deliver exceptional digital experiences.',
      icon: faLaptopCode,
    },
    {
      title: 'Graphic Design',
      description: 'Create visually stunning brand identity assets, logos, and promotional graphics.',
      icon: faPalette,
    },
    {
      title: 'Mobile App Development',
      description: 'Develop high-performance native and cross-platform Android and iOS mobile applications.',
      icon: faMobileAlt,
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Maximize your online presence with targeted SEO, content, and social campaigns.',
      icon: faBullhorn,
    },
    {
      title: 'Custom Software Solutions',
      description: 'Design robust, tailored software systems, cloud integrations, and secure APIs.',
      icon: faServer,
    },
    {
      title: 'AI & Workflow Automation',
      description: 'Integrate custom AI chatbots, fine-tuned LLM agents, and automated workflows to scale operations.',
      icon: faRobot,
    },
    {
      title: 'Cloud & DevOps Architecture',
      description: 'Design secure multi-cloud architectures, CI/CD deployment pipelines, and high-performance server solutions.',
      icon: faCloud,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services py-5" id="service">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center mb-4 text-gradient-gold">Our Services</h2>
        <p className="text-center text-light mb-5">We offer a wide range of premium solutions to scale your business operations.</p>

        {/* Carousel */}
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-3">
              <div className="service-card">
                <div className="icon-container">
                  <FontAwesomeIcon icon={service.icon} size="3x" />
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
