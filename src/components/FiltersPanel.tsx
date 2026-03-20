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
  const safeOrg = Array.isArray(filterOrg) ? filterOrg : [];
  const safePos = Array.isArray(filterPos) ? filterPos : [];

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
          <LuArrowDownUp width="15px" height="13px" color="#173DA6" />
        </IconButton>

        <Flex gap="12px">
          <CustomSelect
            data={{ items: safeOrg }}
            title="Организация"
          />

          <CustomSelect
            data={{ items: safePos }}
            title="Должность"
          />

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
          />

          <Button
            size="md"
            variant="ghost"
            colorPalette="blue"
            w="164px"
            h={10}
            borderRadius="l2"
            opacity="50%"
            fontSize="sm"
            fontWeight="medium"
            color="#173da6"
          >
            Сбросить фильтры
          </Button>
        </Flex>
      </Flex>

      <Flex gap="12px" h="40px">
        <SegmentGroup.Root
          defaultValue="table"
          h={10}
          w="232px"
          size="md"
          gap={2}
          bgColor="#F4F4F5"
          borderColor="#E4E4E7"
        >
          <SegmentGroup.Indicator bgColor="#fff" />
          <SegmentGroup.Items
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={4}
            paddingRight={4}
            borderRadius="8px"
            gap="10px"
            shadow="sm"
            items={[
              {
                value: "list",
                label: (
                  <HStack>
                    <LuList width={4} height={4} />
                    <Text fontSize="sm" color="#000">
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
                    <Text fontSize="sm" color="#000">
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
          bgColor="#2563EB"
          color="#fff"
        >
          <LuPlus width={5} height={5} />
          <Text fontSize="sm" fontWeight="medium" color="#fff">
            Создать контакт
          </Text>
        </IconButton>
      </Flex>
    </Flex>
  );
}
