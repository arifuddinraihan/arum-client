import { useState } from "react";
import { TAcademicDepartment } from "../../../types";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.Api";
import { Button, Pagination, Space, Table, TableColumnsType } from "antd";

type TTableData = Pick<TAcademicDepartment, "name" | "createdAt">;

const AcademicDepartment = () => {
  const [pagination, setPagination] = useState(1);
  // Academic Department data GETALL Query
  const { data: academicDepartmentsData, isFetching } =
    useGetAllAcademicDepartmentsQuery([
      { name: "limit", value: 5 },
      { name: "page", value: pagination },
      { name: "sort", value: "createdAt" },
    ]);

  const academicFacultyPaginateData = academicDepartmentsData?.meta;

  const academicFacultyTableData = academicDepartmentsData?.data?.map(
    ({ _id, name, createdAt }) => ({
      key: _id,
      name,
      createdAt,
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
        style={{ marginTop: "8px" }}
        onChange={(page) => setPagination(page)}
        pageSize={academicFacultyPaginateData?.limit}
        total={academicFacultyPaginateData?.total}
      />
    </>
  );
};

export default AcademicDepartment;
