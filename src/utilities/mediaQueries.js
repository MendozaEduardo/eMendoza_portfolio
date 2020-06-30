const size = {
  mobileLandscape: "480px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
  laptop: "1200px"
};

export const device = {
  viewport4: `(min-width: ${size.mobileLandscape})`,
  viewport7: `(min-width: ${size.tabletPortrait})`,
  viewport9: `(min-width: ${size.tabletLandscape})`,
  viewport12: `(min-width: ${size.laptop})`
};
