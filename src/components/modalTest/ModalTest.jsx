import React from 'react'
import './modalTest.css';

export const ModalTest = (props) => {
    // HERE we use the prop children
    const {children, closeModal, isOpen} = props;
    // stopping the click event propagation in order to handle how the modal is closed 
    const handleCloseModalEvent = e => e.stopPropagation();
    
  return (
    <section className={`modal ${isOpen && 'is-open'}`} onClick= {closeModal}>
        <div className="modal-container" onClick= {handleCloseModalEvent}>
           <button className="modal-close" onClick= {closeModal}>X</button>
            {children}
        </div>
    </section>
  )
}
