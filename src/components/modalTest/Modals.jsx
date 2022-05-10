import React from 'react'
import { useModal } from '../../hooks/useModal';
import { ModalTest } from './ModalTest'

export const Modals = () => {
    const [isOpen, openModal, closeModal] = useModal(false);

    return (
        <div className='custom-modal'>
            <h2>modals</h2>
            <button onClick= {openModal}>Modal1</button>
            <ModalTest isOpen= {isOpen} closeModal= {closeModal} >
                {/* here we are using the children prop. Se trata de un prop que traen todos los componentes de React*/}
                <h3>Modal 1</h3>
                <p>Hola, este es el contenido de mi modal 1</p>
            </ModalTest>
        </div>
    )
}
