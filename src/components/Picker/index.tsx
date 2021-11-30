import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Modal } from '../Modal';
import { categories } from '../../utils/categories';

import { styles } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface PickerProps {
  selectedCategory: Category;
  onSelect: (item: any) => void;  
}

export function Picker({ selectedCategory, onSelect }: PickerProps) {
  const { theme } = useTheme();
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
        <Text style={[styles.label, { color: theme.label }]}>Category</Text>

        <RectButton onPress={toggleModal}>
          <View style={[styles.input, { backgroundColor: theme.input, borderColor: theme.inputBorder }]}>
            <Text style={[styles.text, { color: theme.text }]}>
              { selectedCategory.title }
            </Text>

            <View>
              <Feather 
                name="arrow-down" 
                size={20} 
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