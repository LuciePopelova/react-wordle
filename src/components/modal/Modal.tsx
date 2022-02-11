import { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from './ModalStyles';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, handleClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translate(0%)` : `translateY(-100%)`,
  });

  const closeModal = (event: any) => {
    if (modalRef.current === event.target) {
      handleClose();
    }
  };

  const keyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    },
    [handleClose, isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper isOpen={isOpen}>
              <CloseModalButton
                aria-label="Close modal"
                onClick={handleClose}
              />
              <ModalContent>{children}</ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};

export default Modal;
