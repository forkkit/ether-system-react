import styled from 'styled-components';

import typography from '../../../base/typography/typography';
import colors from '../../../base/color/colors';

export const headingSizes = {
  xxlarge: typography.headingXXLarge,
  xlarge: typography.headingXLarge,
  large: typography.headingLarge,
  medium: typography.headingMedium,
  small: typography.headingSmall,
  xsmall: typography.headingXSmall,
  xxsmall: typography.headingXXSmall,
};

export const headingColors = {
  light: colors.light,
  dark: colors.dark,
  accent: colors.blue,
};

const HeadingBase = styled.span`
  margin: 0;
  color: ${p => headingColors[p.color]};
  ${p => headingSizes[p.size]};
`;

export const headingElements = {
  h1: HeadingBase.withComponent('h1'),
  h2: HeadingBase.withComponent('h2'),
  h3: HeadingBase.withComponent('h3'),
  h4: HeadingBase.withComponent('h4'),
  h5: HeadingBase.withComponent('h5'),
  h6: HeadingBase.withComponent('h6'),
};