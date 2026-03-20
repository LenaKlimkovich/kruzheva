// @ts-nocheck

"use client"

import { Button, CloseButton, Heading, Tabs, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CiFolderOn } from "react-icons/ci"
import { LuPlus } from "react-icons/lu"

interface Item {
  id: string
  title: string
  content: React.ReactNode
}

const items: Item[] = [
  { id: "1", title: "Все Контакты", content: "Tab Content" },
  { id: "2", title: "Название группы", content: "Tab Content" },
  { id: "3", title: "Название группы", content: "Tab Content" },
]

const uuid = () => {
  return Math.random().toString(36).substring(2, 15)
}


export const TabList = () => {
  const [tabs, setTabs] = useState<Item[]>(items)
  const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)

  const addTab = () => {
    const newTabs = [...tabs]

    const uid = uuid()

    newTabs.push({
      id: uid,
      title: `Название группы`,
      content: ``,
    })

    setTabs(newTabs)
    setSelectedTab(newTabs[newTabs.length - 1].id)
  }

  return (
    <Tabs.Root
      value={selectedTab}
      variant="outline"
      size="lg"
      borderBottom={"1px"}
      borderColor={"#E4E4E7"}
      marginBottom={"28px"}
      onValueChange={(e) => setSelectedTab(e.value)
      }
    >
      <Tabs.List flex="1 1 auto">
        {tabs.map((item) => (
          <Tabs.Trigger value={item.id} key={item.id}  
          fontSize="md" 
          tabSize={"lg"}
          gap={2}
          border={"1px 1px 0 1px"}
          borderColor={"#E4E4E7"}
          borderTopRightRadius={"8px"}
          borderTopLeftRadius={"8px"}
          color={item.id==selectedTab?"#27272A":"#52525B"} 
          lineHeight="24px">
            <CiFolderOn height="11px" width="13px"></CiFolderOn>
            {item.title}{" "}
          </Tabs.Trigger>
        ))}
        <Button
          alignSelf="center"
          size="lg"
          variant="outline"
          width={"52px"}
          height={11}
          border={"1px 1px 0 1px"}
          borderTopRadius={"l2"}
          gap={2}
          paddingTop={2}
          paddingRight={4_5}
          paddingBottom={2}
          paddingLeft={4_5}
          onClick={addTab}
        >
          <LuPlus width={4} height={4} color="#52525B"/>
        </Button>
      </Tabs.List>

      
    </Tabs.Root>
  )
}