// @ts-nocheck
"use client";

import { Portal, Select, createListCollection } from "@chakra-ui/react";

export const CustomSelect = ({ data, title }) => {
  const entity = createListCollection(data);
  return (
    <Select.Root
      multiple
      collection={entity}
      size="md"
      width="256px"
      variant="outline"
      height="40px"
      gap={"1_5"}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={title} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {entity.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
