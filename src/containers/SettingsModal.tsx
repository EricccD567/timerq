import { useContext } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ColorPaletteContext } from '../ColorPaletteContext';
import { HandleModalProps } from '../shared.types';

interface SettingsModalProps extends HandleModalProps {}

function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const colorPalette = useContext(ColorPaletteContext);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="inside"
      size={['xs', 'sm', 'md']}
    >
      <ModalOverlay />
      <ModalContent bgColor={colorPalette.background} color={colorPalette.text}>
        <ModalHeader fontWeight="bold">Settings</ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          {/*
          Autoplay Next Timer: switch
          Keep Screen Awake: switch
            - https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
          Sound: slider
            - increase beep volume
          Repeat: slider
          */}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;
