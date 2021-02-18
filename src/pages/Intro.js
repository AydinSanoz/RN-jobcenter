import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {
  Modal,
  ModalFooter,
  ModalButton,
  ModalContent,
} from 'react-native-modal';
import {Timer} from '../components';
import {modalStyle} from '../pages';

export const Intro = (props) => {
  const [modalFlag, setModalFlag] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Intro Page</Text>
          <Button title="Start" onPress={() => setModalFlag(true)} />
        </View>
      </View>
      <Modal
        visible={modalFlag}
        footer={
          <ModalFooter>
            <ModalButton text="CANCEL" onPress={() => {}} />
            <ModalButton text="OK" onPress={() => {}} />
          </ModalFooter>
        }>
        <ModalContent>
          <Timer />
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
};
