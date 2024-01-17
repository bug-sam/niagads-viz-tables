import { Column, Dataset } from "./common/types";
import Table from "./components/Table";
import { data, columns } from "@/data/examples/table";

const Page = () => {
  return (
    <>
      <h1>Table Test</h1>
      <Table 
        data={data}
        columns={columns as Column<Dataset>[]}
      />
    </>
  )
};

export default Page;
