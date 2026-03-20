// @ts-nocheck
import { Box } from "@chakra-ui/react";
import { ContactTable } from "./ContactTable";
import { FiltersPanel } from "./FiltersPanel";
import { TabList } from "./TabList";

export function Main({width, height, data, filterOrg, filterPos}) {
    return (
    <Box as="main" w={width} h={height}>
      <TabList></TabList>
      <FiltersPanel width="100%" height="40px" filterOrg={filterOrg} filterPos={filterPos}></FiltersPanel>
      <ContactTable data={data}></ContactTable>
    </Box>
  );
}
