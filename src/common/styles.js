export const colorBrandDark = '#471Ca9';
export const colorBrandLight = '#ebd8ff';
export const colorGreen = '#5cd3a8';
export const colorDarkHover = '#5736a3';

export const linkStyles = {
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '20px',
  color: colorBrandLight,

  ':hover': {
    color: 'white',
    textDecoration: 'none',
  },

  '&.active': {
    color: 'white',
    textDecoration: 'overline',
  },
};

export const filterStyles = {
  fontSize: '18px',
  textTransform: 'uppercase',
  bg: colorBrandDark,
  borderColor: colorBrandDark,
  color: colorBrandLight,
};

export const filterOptionStyles = {
  color: colorBrandLight,
  background: colorBrandDark,
};

export const cardStyles = {
  position: 'relative',
  w: '380px',
  h: '460px',
  pt: '28px',
  px: '36px',
  pb: '36px',
  borderRadius: '20px',
  boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
  background:
    'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
};

export const btnStyles = {
  w: '196px',
  h: '50px',
  textTransform: 'uppercase',
  fontSize: '18px',
  borderRadius: '10px',
  bg: colorBrandLight,
  '&:hover': {
    bg: colorGreen,
  },
  '&.load-more': {
    color: colorBrandLight,
    bg: colorBrandDark,
  },
  '&.load-more:hover': {
    bg: colorDarkHover,
  },
  '&.following': {
    bg: colorGreen,
  },
  '&.following:hover': {
    bg: colorBrandLight,
  },
};

export const smBtnStyles = {
  w: '126px',
  h: '40px',
  textTransform: 'uppercase',
  fontSize: '18px',
  borderRadius: '10px',
  bg: colorBrandLight,
  '&:hover': {
    color: colorBrandLight,
    bg: colorBrandDark,
  },
};

export const txtStyles = {
  color: colorBrandLight,
  textTransform: 'uppercase',
  fontSize: '20px',
  lineHeight: '24px',
};

export const logoStyles = {
  position: 'absolute',
  left: '20px',
  top: '20px',
};

export const lineStyles = {
  position: 'absolute',
  left: '0',
  top: '214px',
};

export const circleStyles = {
  position: 'absolute',
  left: '150px',
  top: '178px',
};

export const avatarStyles = {
  position: 'absolute',
  left: '163px',
  top: '186px',
};
