import React from 'react'

import ImageGallery from 'react-image-gallery';
import { Container } from 'react-bootstrap';
const images = [
    {
      original: 'assets/images/c1.jpg',
      thumbnail: 'assets/images/c1.jpg',
    },
    {
      original: 'assets/images/c2.jpg',
      thumbnail: 'assets/images/c2.jpg',
    },
    {
      original: 'assets/images/c3.jpg',
      thumbnail: 'assets/images/c3.jpg',
    },
]
const ImageGalleryHome=()=> {
    return (
        <Container className="imageGallery" style={{width:"100%", height:"80%",borderBlockColor: "black"}}>
           
            <ImageGallery className="py-2 mt-2 mr-2 ml-2 mb-2" items={images} thumbnailPosition={"left"} />
        </Container>
         
    )
}

export default ImageGalleryHome
