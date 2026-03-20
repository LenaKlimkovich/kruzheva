// @ts-nocheck
import {
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Kbd,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import { CiHome, CiCircleInfo, CiSearch } from "react-icons/ci";
export function Header({ width, minH }) {
  return (
    <Box as="header" w={width} minH={minH} marginBottom={"24px"}>
      <Flex
        minH={minH}
        justifyContent="space-between"
        alignItems="flex-end"
        paddingTop={"16px"}
        marginBottom={"8px"}
      >
        <IconButton
          size="sm"
          variant="plain"
          color="gray"
          paddingTop={2}
          paddingBottom={2}
          paddingRight={4}
          w="36px"
          h={9}
          minW={9}
          gap={1}
          borderRadius="1px"
        >
          <CiHome width="12px" height="12.67px" color="#A1A1AA" />
        </IconButton>
        <Box
          alignItems="center"
          display={"flex"}
          maxW="452px"
          h="40px"
          justifyContent="space-between"
          alignContent="center"
          gap={"12px"}
        >
          <InputGroup flex="1" startElement={<CiSearch />} w="400px" h="40px" >
            <Input
              placeholder="Найти контакт"
              variant="subtle"
              type="default"
              size="md"
            />
          </InputGroup>
          <IconButton
            w={10}
            h={10}
            minW={10}
            size="md"
            colorPalette={"blue"}
            variant="subtle"
            borderRadius="8px"
            paddingTop="2px"
            paddingBottom="2px"
            paddingRight={4}
            paddingLeft={4}
            gap={2}
          >
            <CiCircleInfo width={5} height={5} color="#173DA6" />
          </IconButton>
        </Box>
      </Flex>
      <Heading
        w="100%"
        h="38px"
        fontWeight="600"
        fontStyle="Semi Bold"
        size="3xl"
        lineHeight="38px"
        textAlign="left"
        gap={"4px"}
      >
        Мои контакты
      </Heading>
    </Box>
  );
}
