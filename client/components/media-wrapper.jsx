import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './imageSubComponents/carousel';
import ProductInfo from './imageSubComponents/imageInfo';
import ZoomCursor from './imageSubComponents/zoomCursor';
import JumboImage from './imageSubComponents/jumboImage';

const MediaWrapper = ({
  active, images, handlers, carouselPosition, mousePosition, hover,
}) => (
  <div className="product-media-wrapper">
    <JumboImage
      {...active}
      handlers={handlers}
      mousePosition={mousePosition}
      hover={hover}
    />
    <Carousel activeOrient={active.orientation} images={images} pos={carouselPosition} handlers={handlers} />
    <ProductInfo {...active} count={images.length} />
    <ZoomCursor {...active} mousePosition={mousePosition} hover={hover} />
  </div>
);


MediaWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    orientation: PropTypes.string,
    size: PropTypes.string,
    url: PropTypes.string,
  }),
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    imgWidth: PropTypes.number,
    imgHeight: PropTypes.number,
  }),
  handlers: PropTypes.shape({
    handleImageClick: PropTypes.func,
    handleCarouselPos: PropTypes.func,
    handleZoom: PropTypes.func,
  }),
  carouselPosition: PropTypes.number,
  hover: PropTypes.bool,
};

MediaWrapper.defaultProps = {
  images: [],
  active: {
    color: 'flame',
    id: 21,
    orientation: 'angle',
    size: 'full',
    url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame/angle_full.jpg',
  },
  mousePosition: {
    x: 0,
    y: 0,
    imgWidth: 0,
    imgHeight: 0,
  },
  handlers: {
    handleImageClick: () => {},
    handleCarouselPos: () => {},
    handleZoom: () => {},
  },
  carouselPosition: 0,
  hover: false,
};

export default MediaWrapper;
