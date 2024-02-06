import { useState } from "react";
import { TAcademicFaculty } from "../../../types";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.Api";
import { Button, Pagination, Space, Table, TableColumnsType } from "antd";

export type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const [pagination, setPagination] = useState(1);
  // Academic Faculty data GETALL Query
  const { data: academicFacultyData, isFetching } =
    useGetAllAcademicFacultiesQuery([
      { name: "limit", value: 3 },
      { name: "page", value: pagination },
      { name: "sort", value: "name" },
    ]);

  const academicFacultyPaginateData = academicFacultyData?.meta;

  const academicFacultyTableData = academicFacultyData?.data?.map(
    ({ _id, name }) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "_id",
      render: () => {
        return (
          <Space>
            <Button>Update</Button>
            <Button>Delete</Button>
          </Space>
        );
      },
      width: "40%",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={academicFacultyTableData}
        pagination={false}
      />
      <Pagination
        onChange={(page) => setPagination(page)}
        pageSize={academicFacultyPaginateData?.limit}
        total={academicFacultyPaginateData?.total}
      />
    </>
  );
};

export default AcademicFaculty;
