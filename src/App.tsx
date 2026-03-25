import "./App.css";
import { useEffect, useState } from "react";
import { CustomProgress } from "./components/CustomProgress";
import { AsideMenu } from "./components/AsideMenu";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Page } from "./components/Page";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import axiosInstance, { authorize } from "./api/axiosInstance";

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // 1. Авторизация
        await authorize();

        // 2. Запрос сотрудников
        const res = await axiosInstance.get(
          "/organization/employee?add_organization_data=true&add_profile_data=true"
        );

        setData(res.data);
      } catch (err) {
        setData(err);
      } finally {
        setLoading(false);
      }
    }

    load();
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