import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gwalvanshi.dolphin',
  appName: 'Dolphin',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: "#020617"
    },
    StatusBar: {
      style: "DARK",
      overlaysWebView: true, // Makes the status bar transparent/overlay the app
      backgroundColor: "#00000000"
    },
    Keyboard: {
      resize: "body",
      style: "DARK",
      resizeOnFullScreen: true
    }
  }
};

export default config;