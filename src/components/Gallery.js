import React, {useState} from 'react';
import GalleryPics from './GalleryPics';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Gallery = () => {

  const pics = GalleryPics.images;
  const [modal, setModal] = useState(null);

  const modalHandler = (pic) => {
    setModal(pic);
  }

  return (
      <div className="gallery__container" id="gallery">
      <div className="gallery__intro">
        <h1>Gallery</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
      </div>
      <div className="gallery__items">
        {pics.map((pic) => {
          return (
            <figure className={`gallery__item ${pic.className}`} key={pic.title} onClick={ () => modalHandler(pic)}>
              <img className="gallery__img" src={pic.image} alt={pic.title}></img>
            </figure>
            )
        })}
      </div>
      { modal && 
        <Modal overlayClassName="gallery__modal--overlay" className="gallery__modal" isOpen={true} onRequestClose={() => setModal(null)}>
          <i className="fa fa-times" onClick={() => setModal(null)}></i>
          <img src={modal.image} alt={modal.title}></img>
        </Modal>}
    </div>
  )
}

export default Gallery;