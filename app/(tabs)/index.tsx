import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import "@/global.css"
import images from '@/constants/images';

export default function HomeScreen() {
  return (
   <View className="flex-1 bg-red-100">
        <Text className='text-center items-center mt-32 font-white text-7xl font-black text-red-600'>
            Amal Maatoug💕
        </Text>
   </View>
  );
}
;
