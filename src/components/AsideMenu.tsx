// @ts-nocheck
import { Box } from "@chakra-ui/react";

export function AsideMenu({width, padding, children}) {
    return (
        <Box as="aside" w={width} p={padding} border="1px solid #000">
            {children}
        </Box>
    );
}