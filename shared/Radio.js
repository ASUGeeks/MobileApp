import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyRadio = ({value,setValue}) => {

  return (
    <View>
      <RadioButton
        value="first"
        status={ value === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setValue('first')}
      />
      <RadioButton
        value="second"
        status={ value === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setValue('second')}
      />
    </View>
  );
};

export default MyRadio;