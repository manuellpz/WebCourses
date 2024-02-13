import Modal from "./Modal";

const Modals = () => {
   return ( 
      <div>
         <h2>Modal</h2>
         <button>Modal</button>
         <Modal>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
            <img src="https://picsum.photos/250" alt="Random IMG" />
         </Modal>
         <button>Modal 2</button>
         <Modal>
            <h3>Modal 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, pariatur harum? Quia expedita modi facere inventore, corporis eaque perferendis iure voluptatum incidunt aut cum, quae, quibusdam quisquam alias reprehenderit. Deserunt?</p>
            <img src="https://picsum.photos/300" alt="Random Image" />
         </Modal>
      </div>
    );
}
 
export default Modals;