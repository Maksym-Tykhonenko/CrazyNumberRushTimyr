import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';

const generateNumbers = max => {
  const arr = [];
  for (let i = 1; i <= max; i++) arr.push(i);
  return arr;
};

function HomeScreen() {
  const [range, setRange] = useState(10);
  const [numbers, setNumbers] = useState(generateNumbers(10));
  const [result, setResult] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [canSpin, setCanSpin] = useState(true);
  const rotateAnim = new Animated.Value(0);

  useEffect(() => {
    checkLastSpinTime();
  }, []);

  const checkLastSpinTime = async () => {
    const lastSpin = await AsyncStorage.getItem('lastSpinTime');
    if (lastSpin) {
      const diff = Date.now() - parseInt(lastSpin, 10);
      if (diff < 86400000) setCanSpin(false); // 24 часа
    }
  };

  const spinWheel = async () => {
    if (!canSpin) return;

    const selected = Math.floor(Math.random() * numbers.length);
    const anglePerSection = 360 / numbers.length;
    const spinTo = 360 * 5 + selected * anglePerSection;

    Animated.timing(rotateAnim, {
      toValue: spinTo,
      duration: 3000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start(async () => {
      const resultNumber = numbers[selected];
      setResult(resultNumber);
      setModalVisible(true);
      await AsyncStorage.setItem('lastSpinTime', Date.now().toString());
      setCanSpin(false);
    });
  };

  const handleShare = () => {
    Share.open({
      title: 'My lucky number!',
      message: `I got the number ${result}! It's my lucky day! 🎉`,
    }).catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NUMBER WHEEL</Text>

      <View style={styles.wheelWrapper}>
        <Image
          source={require('../assets/img/760dfacc0014c6ea55eb9d37d5e5090878ef7a57.png')}
          style={styles.wheelBackground}
        />

        <Animated.View
          style={[
            styles.wheel,
            {
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          {numbers.map((num, index) => (
            <View key={index} style={styles.sector}>
              <Image
                source={require('../assets/img/61c6483b90629e3d61e94ca2977e56309918d03d.png')}
                style={{width: 40, height: 40}}
              />
            </View>
          ))}
        </Animated.View>
      </View>

      <TouchableOpacity
        style={[
          styles.spinButton,
          {backgroundColor: canSpin ? '#FFD700' : '#999'},
        ]}
        onPress={spinWheel}
        disabled={!canSpin}>
        <Text style={styles.spinText}>
          {canSpin ? 'Spin' : 'Come back in 24h'}
        </Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Nice!</Text>
            <Text style={styles.modalText}>
              Вам повезло! Ваше счастливое число: {result}
            </Text>

            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Text style={styles.shareText}>Поделиться</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290D1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    color: '#FFD700',
    marginBottom: 30,
    fontWeight: 'bold',
    fontFamily: 'AlegreyaSC-Regular',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#1e1e1e',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  shareText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#1e1e1e',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelText: {
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
  },

  wheelWrapper: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  wheelBackground: {
    width: 300,
    height: 300,
    position: 'absolute',
    borderRadius: 100,
  },
  wheel: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sector: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectorText: {color: '#fff', fontSize: 20},
  buttons: {flexDirection: 'row', marginTop: 30},
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#00BFFF',
  },
  buttonText: {color: 'white', fontWeight: 'bold'},
  spinButton: {
    marginTop: 40,
    backgroundColor: '#FFD700',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  spinText: {fontSize: 20, fontWeight: 'bold'},
  resultText: {marginTop: 20, fontSize: 24, color: '#fff'},
});

export default HomeScreen;
