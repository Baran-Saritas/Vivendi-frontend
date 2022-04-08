import React from 'react';
import { Grommet as GrommetIcon } from 'grommet-icons';
import { Anchor, Box, Footer, Main, Text } from 'grommet';
const FooterAnchor = ({ ...rest }) => ( <Anchor href="/" size="small" color="white" {...rest} />);

export const CustomFooter = () => (
  <Box>
    <Footer background="light-2" justify="center" pad="small">
     <Text textAlign="center" size="small">
       © 2022 Copyright Vivendi
     </Text>
    </Footer>
  </Box>
);

export default CustomFooter