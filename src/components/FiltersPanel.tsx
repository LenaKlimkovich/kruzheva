// @ts-nocheck
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  SegmentGroup,
  Text,
} from "@chakra-ui/react";
import { LuArrowDownUp, LuLayoutGrid, LuList, LuPlus } from "react-icons/lu";
import { CustomSelect } from "./CustomSelect";

export function FiltersPanel({ width, height, filterOrg, filterPos }) {
  return (
    <Flex
      w={width}
      h={height}
      marginBottom="20px"
      justifyContent="space-between"
    >
      <Flex gap="16px">
        <IconButton
          width={10}
          height={10}
          minW={10}
          bgColor="#DBEAFE"
          size="md"
          variant="subtle"
          borderRadius="8px"
          paddingTop="2px"
          paddingBottom="2px"
          paddingRight={4}
          paddingLeft={4}
          colorPalette={"blue"}
          gap={2}
        >
          <LuArrowDownUp
            width="15px"
            height="13px"
            color="#173DA6"
          ></LuArrowDownUp>
        </IconButton>
        <Flex gap="12px">
          <CustomSelect
            data={{
              items: [...filterOrg],
            }}
            title="Организация"
          
          ></CustomSelect>
          <CustomSelect
            data={{
              items: [...filterPos],
            }}
            title="Должность"
          ></CustomSelect>
          <CustomSelect
            data={{
              items: [
                { label: "Reg1", value: "reg1" },
                { label: "Reg2", value: "reg2" },
                { label: "Reg3", value: "reg3" },
                { label: "Reg4", value: "reg4" },
              ],
            }}
            title="Регион"
          ></CustomSelect>
          <Button
            size="md"
            variant="ghost"
            colorPalette="blue"
            w="164px"
            h={10}
            minW={10}
            borderRadius={"l2"}
            paddingTop="2px"
            paddingBottom="2px"
            paddingLeft={4}
            paddingRight={4}
            gap={2}
            opacity="50%"
            fontSize={"sm"}
            fontWeight={"medium"}
            lineHeight={"20px"}
            letterSpacing={"0%"}
            textAlign={"center"}
            color={"#173da6"}
          >
            Сбросить фильтры
          </Button>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        h="40px"
        bgSize={"md"}
        borderRadius={"8px"}
        gapX={1_5}
        gapY={1_5}
      >
        <SegmentGroup.Root
          defaultValue="table"
          h={10}
          w="232px"
          size="md"
          gap={2}
          bgColor={"#F4F4F5"}
          borderColor={"#E4E4E7"}
        >
          <SegmentGroup.Indicator bgColor={"#fff"} />
          <SegmentGroup.Items
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={4}
            paddingRight={4}
            borderRadius={"8px"}
            gap={"10px"}
            shadow={"sm"}
            shadowColor={"#18181B1A"}
            items={[
              {
                value: "list",
                label: (
                  <HStack>
                    <LuList width={4} height={4} />
                    <Text
                      fontWeight={"normal"}
                      fontSize={"sm"}
                      lineHeight={"20px"}
                      letterSpacing={"0%"}
                      color={"#000"}
                    >
                      Список
                    </Text>
                  </HStack>
                ),
              },
              {
                value: "board",
                label: (
                  <HStack>
                    <LuLayoutGrid width="12px" height="12px" />
                    <Text
                      fontWeight={"normal"}
                      fontSize={"sm"}
                      lineHeight={"20px"}
                      letterSpacing={"0%"}
                      color={"#000"}
                    >
                      Карточки
                    </Text>
                  </HStack>
                ),
              },
            ]}
          />
        </SegmentGroup.Root>
        <IconButton
          size="md"
          variant="solid"
          colorPalette="blue"
          aria-label="Создать контакт"
          h={10}
          minW={10}
          borderRadius="8px"
          paddingTop="2px"
          paddingBottom="2px"
          paddingRight={4}
          paddingLeft={4}
          gap={2}
          bgColor="#2563EB"
          color="#fff"
        >
          <LuPlus width={5} height={5} />
          <Text
            fontWeight={"medium"}
            fontSize={"sm"}
            lineHeight={"20px"}
            letterSpacing={"0%"}
            textAlign={"center"}
            color={"#fff"}
          >
            Создать контакт
          </Text>
        </IconButton>
      </Flex>
    </Flex>
  );
}
