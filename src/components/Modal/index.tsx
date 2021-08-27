import React from 'react';
import { 
  View, 
  Pressable, 
  Text, 
  Modal as ReactModal 
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { ModalButton } from '../ModalButton';

import { styles } from './styles';

interface ModalProps {
  isVisible: boolean;
  categories: Array<Category>;
  toggleModal: () => void;
  handleSelectItem: (item: Category) => void;
}

export function Modal({ 
  isVisible, 
  categories,
  toggleModal,
  handleSelectItem
}: ModalProps) {
  return (
    <ReactModal
      animationType="slide"
      visible={isVisible}
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            Select a category
          </Text>

          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ModalButton 
                title={item.title} 
                onPress={() => handleSelectItem(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.list}
          />

          <Pressable 
            style={styles.cancelButton}
            onPress={toggleModal}
          >
            <Text style={styles.cancelButtonText}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </ReactModal>
  );
}