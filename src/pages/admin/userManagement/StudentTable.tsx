import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TQueryParams, TStudent } from "../../../types";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.Api";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

type TTableData = Pick<
  TStudent,
  "fullName" | "_id" | "id" | "email" | "contactNo"
>;

const StudentTable = () => {
  // <TQueryParams[] | undefined> added in the state due to handling the state types during setting queryParams
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [pagination, setPagination] = useState(1);

  const user = useAppSelector(selectCurrentUser);
  // Semester data GETALL Query
  const { data: studentsData, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 3 },
    { name: "page", value: pagination },
    { name: "sort", value: "createdAt" },
    ...params,
  ]);

  const studentPaginateData = studentsData?.meta;

  const studentTableData = studentsData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Link to={`/${user!.role}/student-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Link to={`/${user!.role}/update-student/${item.key}`}>
              <Button>Update</Button>
            </Link>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "fullName", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "id", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={studentTableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: "8px" }}
        onChange={(page) => setPagination(page)}
        pageSize={studentPaginateData?.limit}
        total={studentPaginateData?.total}
      />
    </>
  );
};

export default StudentTable;
