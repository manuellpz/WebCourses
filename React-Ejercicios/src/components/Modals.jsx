import Modal from "./Modal";
import {useModal} from "../hooks/useModal"

const Modals = () => {
   const [isOpenModal1,openModal1,closeModal1] = useModal(false)
   const [isOpenModal2,openModal2,closeModal2] = useModal(false)

   return ( 
      <div>
         <h2>Modal</h2>
         <button onClick={openModal1}>Modal</button>
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
            <img src="https://picsum.photos/300" alt="Random IMG" />
         </Modal>
         <button onClick={openModal2}>Modal 2</button>
         <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, pariatur harum? Quia expedita modi facere inventore, corporis eaque perferendis iure voluptatum incidunt aut cum, quae, quibusdam quisquam alias reprehenderit. Deserunt?</p>
            <img src="https://picsum.photos/300" alt="Random Image" />
         </Modal>
      </div>
    );
}
 
export default Modals;