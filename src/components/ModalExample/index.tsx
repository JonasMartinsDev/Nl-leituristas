import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Container } from './styles';


interface ModalOpenProps {
  isOpen: boolean;
  onRequestClose: () => void;
  obervacao: string;
  img: string;
}

export function ModalExample({ isOpen, onRequestClose, obervacao, img }: ModalOpenProps) {


  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      // padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#090c10'
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: 'transparent', border: 0 }}
        >
          <FiX size={45} color="#f34748" />
        </button>

        <div>
          <h2>Como usar?</h2>

          <p>{obervacao}</p>

          <div>
            <img src={img} alt={obervacao} />
          </div>
        </div>

      </Container>

    </Modal >
  )
}
