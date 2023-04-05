import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#038958',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './guspri_logo.png',
  fullDecal: './guspri_logo.png',
});

export default state;