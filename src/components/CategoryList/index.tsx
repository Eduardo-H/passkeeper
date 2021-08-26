import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { categories } from '../../utils/categories';
import { CategoryButton } from '../CategoryButton';

import { styles } from './styles';

interface CategoryListProps {
  categorySelected: string;
  setCategorySelected: (category: string) => void;
}

export function CategoryList({
  categorySelected,
  setCategorySelected
}: CategoryListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Wich category{'\n'}
        are you looking for?
      </Text>

      <ScrollView
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 50 }}
      >
        {
          categories.map(category => (
            <CategoryButton
              key={category.id}
              title={category.title}
              isActive={category.id === categorySelected}
              onPress={() => setCategorySelected(category.id)}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}