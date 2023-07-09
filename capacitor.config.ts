import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.rz.hacker-news-ionic',
  appName: 'hacker-news',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
