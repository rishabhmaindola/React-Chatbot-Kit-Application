import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const DatesOption = (props) => {
    const dates = [
        { text:"Sep 27", handler: (props.actionProvider.handleDate), id:1 },
        { text:"Sep 28", handler: (props.actionProvider.handleDate), id:2 },
        { text:"Sep 29", handler: (props.actionProvider.handleDate), id:3 },
        { text:"Sep 30", handler: (props.actionProvider.handleDate), id:4 },
    ];

const datesMarkup = dates.map((date) => (
    <button
      className="date-button"
      key={date.id}
      onClick={date.handler}
    >
      {date.text}
    </button>
  ));

    return<div>
        <Carousel className='main-slider' axis='horizontal' ariaLabel='Morning'>
            <div>{datesMarkup}</div>
        </Carousel>
        </div>
    
};

export default DatesOption;