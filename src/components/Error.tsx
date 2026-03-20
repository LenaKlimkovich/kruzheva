// @ts-nocheck
import { AbsoluteCenter, Box } from "@chakra-ui/react";

export const Error = ({data}) => {
    console.log(data);
  return (
    <Box w="100%" h="100vh" position="relative" color={"red"} textAlign={"left"}>
      <AbsoluteCenter axis="both" w="100%" > 
        Код ошибки: {data.code}({data.response.data.detail.code})
        <br/>
        Сообщение: {data.message}({data.response.data.detail.message})              
      </AbsoluteCenter>
    </Box>
  );
};
