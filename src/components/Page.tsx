// @ts-nocheck
import { Box } from "@chakra-ui/react";

export function Page({children, maxW, width}) {
    return (
        <Box as="div" maxW={maxW} width={width}>
            {children}
        </Box>
    );
}