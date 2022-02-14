import { VFC } from "react";
import Layout from "components/ui/Layout";
import Header from "components/ui/Layout/Header";
import Section from "components/ui/Layout/Section";
import PageContent from "components/ui/Layout/PageContent";
import TaskListManager from "components/model/task/TaskListManager";

const Home: VFC = () => {
  return (
    <Layout>
      <Header pageTitle="マイタスク" />

      <PageContent>
        <Section>
          <TaskListManager />
        </Section>
      </PageContent>
    </Layout>
  );
};

export default Home;
