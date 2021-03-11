import {firebaseConfig} from './config.local.ts'

const defaultExports = {
  apiKey: '#',
  authDomain: '#',
  databaseURL: '#',
  projectId: '#',
  storageBucket: '#',
  messagingSenderId: '#',
  appId: '#',
};

module.exports = {
  ...defaultExports,
  ...firebaseConfig()
}
