import React, {Component} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import {SERIES_QUERY} from '../../Query/Series';
import {Query} from 'react-apollo';
import { gql, useQuery } from '@apollo/client';
import { UncontrolledCarousel } from 'reactstrap';
import { useState } from 'react';


class MediaCard extends Component {
    
    constructor(props) {
        super(props);
        const {serie} = this.props;
    }


render() {
  const {serie} = this.props;
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div className="carousel-inner"></div>
          <div className="carousel-item active">
            <img className="d-block w-100" src={serie.banner_url} alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
            </div>
        </div>  
      </div>
    </>
  );
}
}


export default MediaCard;