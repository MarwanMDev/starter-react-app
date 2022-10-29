import React from 'react';
import IMG1 from '../../assets/avatar1.jpg';
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar3.jpg';
import IMG4 from '../../assets/avatar4.jpg';
import './testmonials.css';

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: IMG1,
    name: 'Issa Haddad',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias at, veritatis voluptatibus molestiae vitae commodi itaque consectetur id nobis aliquid aliquam neque dolorem similique maiores nam in praesentium. Culpa, dolores.',
  },
  {
    avatar: IMG2,
    name: 'Scott Miranda',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias at, veritatis voluptatibus molestiae vitae commodi itaque consectetur id nobis aliquid aliquam neque dolorem similique maiores nam in praesentium. Culpa, dolores.',
  },
  {
    avatar: IMG3,
    name: 'Sara Magdy',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias at, veritatis voluptatibus molestiae vitae commodi itaque consectetur id nobis aliquid aliquam neque dolorem similique maiores nam in praesentium. Culpa, dolores.',
  },
  {
    avatar: IMG4,
    name: 'Wael Ahmed',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias at, veritatis voluptatibus molestiae vitae commodi itaque consectetur id nobis aliquid aliquam neque dolorem similique maiores nam in praesentium. Culpa, dolores.',
  },
];

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testmonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testmonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
