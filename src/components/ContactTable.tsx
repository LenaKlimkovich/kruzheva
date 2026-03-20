// @ts-nocheck
"use client";

import {
  Avatar,
  ButtonGroup,
  Checkbox,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

export const ContactTable = ({ data }) => {
  const initialUsers = [...data];
  const [users, setUsers] = useState(initialUsers);
  const [selection, setSelection] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(users.length / pageSize);
  const paginatedUsers = users.slice((page - 1) * pageSize, page * pageSize);
  const indeterminate =
    selection.length > 0 && selection.length < paginatedUsers.length;

  return (
    <Stack width="full" gap="20px" borderRadius={"16px"}>
      <Table.Root
        size="sm"
        width="full"
        variant="outline"
        borderRadius={"12px"}
        striped
      >
        <Table.Header
          fontWeight={"500"}
          lineHeight={"24px"}
          letterSpacing={"0%"}
          verticalAlign={"middle"}
          fontSize={"md"}
        >
          <Table.Row>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              <Checkbox.Root
                size="md"
                variant={"solid"}
                colorPalette={"blue"}
                width={5}
                height={5}
                borderRadius={"4px"}
                border={"1px"}
                gap={"10px"}
                borderColor={"#E4E4E7"}
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(
                    changes.checked
                      ? paginatedUsers.map(
                          (item) => item.profile_data.profile_id,
                        )
                      : [],
                  );
                }}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
            </Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            ></Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              ФИО
            </Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              Организация
            </Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              Должность
            </Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              Адрес
            </Table.ColumnHeader>
            <Table.ColumnHeader
              paddingTop={4}
              paddingBottom={4}
              paddingLeft={3}
              paddingRight={3}
              borderBottom={"1px"}
              gap={"8px"}
              borderColor={"#E4E4E7"}
            >
              Номер телефона
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body
          fontWeight={"normal"}
          fontSize={"md"}
          lineHeight={"24px"}
          verticalAlign={"middle"}
          color={"#000"}
        >
          {paginatedUsers.map((user) => {
            const profile_id = user.profile_data.profile_id;
            const fName = user.profile_data.first_name;
            const lName = user.profile_data.last_name;
            const mName = user.profile_data.middle_name;
            const position = user.profile_data.project_info
              ? user.profile_data.project_info.category
              : "должность не указана, или имеет несколько должностей";
            let orgBriefly = '';
            for(let i = 0 ; i < user.organization_data.length ; i++) {
              orgBriefly += ((user.organization_data[i].additional_info && user.organization_data[i].additional_info
              .title_abbreviation)
              ? user.organization_data[i].additional_info.title_abbreviation
              : user.organization_data[i].title);
              if( i < user.organization_data.length - 1) {
                orgBriefly += ', ';
              }
            }
            const region = user.organization_data[0].title
              ? user.organization_data[0].address_legal
              : "регион не указан";
            const phone = user.organization_data[0].contact_phone
              ? user.organization_data[0].contact_phone[0].value
              : "телефон не указан";
            return (
              <Table.Row
                key={profile_id}
                data-selected={selection.includes(profile_id) ? "" : undefined}
              >
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  <Checkbox.Root
                    size="md"
                    variant={"solid"}
                    colorPalette={"blue"}
                    width={5}
                    height={5}
                    borderRadius={"4px"}
                    border={"1px"}
                    gap={"10px"}
                    borderColor={"#E4E4E7"}
                    aria-label="Select row"
                    checked={selection.includes(profile_id)}
                    onCheckedChange={(changes) => {
                      setSelection((prev) =>
                        changes.checked
                          ? [...prev, profile_id]
                          : selection.filter((id) => id !== profile_id),
                      );
                    }}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                  </Checkbox.Root>
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  <Avatar.Root
                    shape="full"
                    size="2xs"
                    variant="solid"
                    colorPalette="blue"
                    padding="5px"
                    gap="10px"
                  >
                    <Avatar.Fallback name={`${fName} ${lName}`} />
                    <Avatar.Image />
                  </Avatar.Root>
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  {lName} {fName} {mName}
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  {orgBriefly}
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  {position}
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  {region}
                </Table.Cell>
                <Table.Cell
                  paddingTop={4}
                  paddingBottom={4}
                  paddingLeft={3}
                  paddingRight={3}
                  borderBottom={"1px"}
                  gap={"8px"}
                  borderColor={"#E4E4E7"}
                >
                  {phone}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      <Pagination.Root
        count={users.length}
        pageSize={pageSize}
        page={page}
        gap={4}
        display={"flex"}
      >
        <ButtonGroup
          variant={{ base: "ghost", _selected: "solid", _hover: "subtle" }}
          size="sm"
          wrap="wrap"
        >
          <Pagination.PrevTrigger asChild>
            <IconButton
              size={"sm"}
              colorPalette={"gray"}
              width={9}
              height={9}
              minW={9}
              borderRadius={"8px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
              paddingRight={1_5}
              paddingLeft={1_5}
              gap={2}
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                size={"sm"}
                colorPalette={"gray"}
                width={9}
                height={9}
                minW={9}
                borderRadius={"8px"}
                paddingTop={"2px"}
                paddingBottom={"2px"}
                paddingRight={1_5}
                paddingLeft={1_5}
                gap={2}
                _selected={{backgroundColor: "#2563EB", color: "#fff"}}
                onClick={() => setPage(page.value)}
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton
              size={"sm"}
              colorPalette={"gray"}
              width={9}
              height={9}
              minW={9}
              borderRadius={"8px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
              paddingRight={1_5}
              paddingLeft={1_5}
              gap={2}
              onClick={() => setPage(() => Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
};
