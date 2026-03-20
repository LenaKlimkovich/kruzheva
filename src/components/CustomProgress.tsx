// @ts-nocheck
import { AbsoluteCenter, Box, Progress, TimelineContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CustomProgress = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(()=>setTime(time + 1), 1000);
    return () => clearInterval(timer);
  },[time]);
  return (
    <Box w="100%" h="100vh" position="relative">
      <AbsoluteCenter axis="both" w="100%"> 
        <Progress.Root w="100%" value={null} variant="subtle" size='lg'>
          <Progress.Label mb="2">
            Идет загрузка данных... Пожалуйста подождите. Прошло: {time} секунд(а/ы)
          </Progress.Label>
          <Progress.Track colorPalette="blue">
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      </AbsoluteCenter>
    </Box>
  );
};
