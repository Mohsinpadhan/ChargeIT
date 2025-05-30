import React from 'react';
import {View, Text, StyleSheet, Linking, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRScannerScreen = () => {
  const onSuccess = (e) => {
    Alert.alert("QR Code Scanned", e.data);
   
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={<Text style={styles.centerText}>Scan a QR Code</Text>}
        bottomContent={
          <Text style={styles.bottomText}>Align the QR code within the frame</Text>
        }
        showMarker={true}
        reactivate={true}
        reactivateTimeout={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  centerText: {
    fontSize: 18,
    padding: 16,
    color: '#000',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default QRScannerScreen;

