import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.Api";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

type DataType = {
  key: React.Key;
  name: string;
  age: number;
  address: string;
};

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);
  // console.log(semesterData);

  const semesterTableData = semesterData?.data.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={semesterTableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
