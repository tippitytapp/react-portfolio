import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Explanation (props) {

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="explanation">
      <Button color="danger" onClick={toggle}>Essentialism</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader toggle={toggle}>Essentialism</ModalHeader>
        <ModalBody>
        In a world with everything shouting for your attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution.It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}



export default modal;