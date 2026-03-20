import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { CustomProgress } from "./components/CustomProgress";
import { AsideMenu } from "./components/AsideMenu";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Page } from "./components/Page";
import { Header } from "./components/Header";
import { Main } from "./components/Main";


function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Perform GET request on mount
    axios
      .get(
        `https://api.corporation.skroy.ru/organization/employee?add_organization_data=true&add_profile_data=true`,
        {
          headers: {
            "Project-ID": "2c03471b-7792-4f9a-aa8a-6811810959f0",
            Authorization: `bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsidXNlcl9pZCI6IjVkYzQxYzJjLWRkOGEtNGIzNy04NDRlLTQ1ZTA2MzA0Y2NiZSIsImRldmljZV9pZCI6ImRldmljZV9pZCAod2lwKSIsInVzZXJfaXAiOiJ1c2VyX2lwICh3aXApIiwicHJvZmlsZV9pZCI6Ijg5OGNjZmY0LWJhMTktNGE1Mi1hM2UzLTRiNjMxMDQ3ZTZhOSIsImFjY291bnRfaWQiOiI5ZmUyMDY4Ny00MDM2LTQ4YmEtOTUxZC00NTgwOTIwMTIyODgiLCJwcm9qZWN0X2lkIjoiMmMwMzQ3MWItNzc5Mi00ZjlhLWFhOGEtNjgxMTgxMDk1OWYwIn0sImlhdCI6MTc3MzkzMDUwNCwiZXhwIjoxNzczOTczNzA0fQ.NMycJBP3W1TzH_yhYJLlkqncejB73uXkzhdPK_EUqq6tFf9meszpxf37gEvXp6B6U2qHQBn9MSPE2jhQpdRR0JtSRg8cpixqYs_pqF1NXbDqfaASA7tOwuWn1mmb2asTEMv-qLEnH9m708MLroAXUwAO-zo3l3KbO-7Ow1r4sJq6BhPAPVpRxc0cYwXIGbpHxooKghz--P5u8G2w2uwn73dEl_5AVXrLSBuj4VipnRGULbv9sFmgLqOHBWNXB8-ggojMqc-3AjO8y1B640o8AtWtWVFBTdmmHENcrG-heAzk-ubKpJB8cAeyEkjqngWHHn6cJtOFKhra0EuHaRmBfz0mI2h_6S5QMfGkUdDPHx9kIKqnwtcxqaRuKR_wJs2THtwb4flCfdv2pdkRgE3UE9xJC4BwmxZnrTYXJw0retVlokpBX-KqzJQXVixSPG9wMjK3CK5ltdHCpSYTE83vjGg-guRziUenixu-zPA2127acP7xRQ6T1EPBNi-Z-7r478LCSbahP-8J_2oCIOW1JtIF8WoKuvtRYPbWYcbfNMde8Bz69YfZoGMXhIrJ0hvNZxfp0t-8hfNRpF7AvoBkyMkEoPlbYir58PH9-zSnM9BS1I2HW2D78XgmrNBVftFxLfoP0p0GZ8ZpUFDGq3CM8wzFNoRpfI1DAEykiWUDYQM`,
          },
        },
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
     
        setLoading(false);
        setData(err);
      });
  }, []);


  if (loading) return <CustomProgress />;

  return (
    <Container maxW="1920px">
      <Flex direction="row" justifyContent="space-between" gap="24px">
        <AsideMenu width="240px" padding="20px">
          <Flex h="100%" flexDirection="column" justifyContent="center">
            <Box>Aside menu</Box>
          </Flex>
        </AsideMenu>

        <Page maxW="1720px" width="100%">
          <Header width="100%" minH="56px" />
          <Main
            width="100%"
            height="100%"
            data={data?.data ?? []}
            filterOrg={[]}
            filterPos={[]}
          />
        </Page>
      </Flex>
    </Container>
  );
}


export default App;
