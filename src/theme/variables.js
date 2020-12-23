import './fonts.css';
import './colors.css';

export const colorVariables = {
  light: 'var(--color-light)',
  dark: 'var(--color-dark)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  disabled: 'var(--color-disabled)',
  disabledDark: 'var(--color-disabled-dark)',
};

export const fontVariables = {
  primary: 'sans-serif',
};

export const sizeVariables = {
  xxs: { size: '11px', spacing: '0px' },
  xs: { size: '12px', spacing: '-0.2px' },
  s: { size: '0.8125rem', spacing: '-0.4px' },
  m: { size: '0.875rem', spacing: '-0.4px' },
  l: { size: '1rem', spacing: '-0.6px' },
  l2: { size: '1.125rem', spacing: '-0.8px' },
  xl: { size: '1.25rem', spacing: '-1px' },
  xxl: { size: '1.5rem', spacing: '-1px' },
  xxxl: { size: '1.875rem', spacing: '-1.8px' },
};

const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '540px',
  tabletM: '600px',
  tablet: '768px',
  tabletL: '992px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
};

export const device = {
  mobileS: `@media screen and (max-width: ${mediaSize.mobileS})`,
  mobileM: `@media screen and (max-width: ${mediaSize.mobileM})`,
  mobileL: `@media screen and (max-width: ${mediaSize.mobileL})`,
  tabletS: `@media screen and (max-width: ${mediaSize.tabletS})`,
  tabletM: `@media screen and (max-width: ${mediaSize.tabletM})`,
  tablet: `@media screen and (max-width: ${mediaSize.tablet})`,
  tabletL: `@media screen and (max-width: ${mediaSize.tabletL})`,
  laptop: `@media screen and (max-width: ${mediaSize.laptop})`,
  laptopL: `@media screen and (max-width: ${mediaSize.laptopL})`,
  desktop: `@media screen and (max-width: ${mediaSize.desktop})`,
  desktopL: `@media screen and (max-width: ${mediaSize.desktopL})`,
};