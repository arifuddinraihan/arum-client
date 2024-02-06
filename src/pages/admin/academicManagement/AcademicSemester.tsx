import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.Api";
import { Button, Pagination, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester, TQueryParams } from "../../../types";
import { useState } from "react";

type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  // <TQueryParams[] | undefined> added in the state due to handling the state types during setting queryParams
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [pagination, setPagination] = useState(1);
  // Semester data GETALL Query
  const { data: semesterData, isFetching } = useGetAllSemestersQuery([
    { name: "limit", value: 3 },
    { name: "page", value: pagination },
    { name: "sort", value: "year" },
    ...params,
  ]);

  const semesterPaginateData = semesterData?.meta;

  const semesterTableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "_id",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={semesterTableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        onChange={(page) => setPagination(page)}
        pageSize={semesterPaginateData?.limit}
        total={semesterPaginateData?.total}
      />
    </>
  );
};

export default AcademicSemester;
