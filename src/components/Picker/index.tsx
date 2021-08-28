import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Modal } from '../Modal';
import { categories } from '../../utils/categories';

import { styles } from './styles';

interface PickerProps {
  selectedCategory: Category;
  onSelect: (item: any) => void;  
}

export function Picker({ selectedCategory, onSelect }: PickerProps) {
  const [modalVisible, setModalVisible] = useState(false);

  function handleSelectItem(item: Category) {
    onSelect(item);
    toggleModal(); 
  }

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Category</Text>

        <RectButton onPress={toggleModal}>
          <View style={styles.input}>
            <Text style={styles.label}>
              { selectedCategory.title }
            </Text>

            <View>
              <Feather 
                name="arrow-down" 
                size={24} 
                color="gray" 
              />
            </View>
          </View>
        </RectButton>
      </View>

      <Modal 
        isVisible={modalVisible} 
        toggleModal={toggleModal} 
        categories={categories}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
}