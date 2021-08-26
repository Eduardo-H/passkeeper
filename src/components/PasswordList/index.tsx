import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { PasswordButton } from '../PasswordButton';
import { styles } from './styles';

interface PasswordListProps {
  passwords: Array<Password>;
  selectPassword: (id: string) => void;
}

export function PasswordList({ passwords, selectPassword }: PasswordListProps) {
  return (
    <FlatList
      data={passwords}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <PasswordButton
          password={item}
          onPress={() => selectPassword(item.id)}
        />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  );
}