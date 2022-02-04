import { VFC } from "react";
import TaskListItem from "components/model/task/TaskListItem";
import moment from "moment";
import Layout from "components/ui/Layout";
import Header from "components/ui/Layout/Header";
import Section from "components/ui/Layout/Section";
import PageContent from "components/ui/Layout/PageContent";

const Home: VFC = () => {
  return (
    <Layout>
      <Header pageTitle="マイタスク" />

      <PageContent>
        <Section>
          <TaskListItem
            task={{
              id: "fda",
              name: "fsdfsa",
              deadline: moment(),
            }}
          />
        </Section>
      </PageContent>
    </Layout>
  );
};

export default Home;
