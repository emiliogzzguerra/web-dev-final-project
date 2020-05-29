/* eslint-disable react/display-name */
import React from "react"
import { Table, Space, Tag } from "antd"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"

const StyledTable = styled(Table)`
  max-height: 100vh;
`

const UsersTable = ({ users, editAction, deleteAction }) => {
  const { t } = useTranslation("user")

  const columns = [
    {
      title: t("Fullname"),
      dataIndex: "full_name",
      key: "full_name",
      render: (text, record) => {
        return <Link to={`/dashboard/user/${record.user_id}`}>{text}</Link>
      },
    },
    {
      title: t("Username"),
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: t("User Type"),
      dataIndex: "user_type",
      key: "user_type",
    },
    {
      title: t("Areas"),
      key: "areas",
      dataIndex: "areas",
      render: (areas, record) => (
        <>
          {areas &&
            areas.map((area) => (
              <Tag color="geekblue" key={`${record.id}-${area}`}>
                {area.toUpperCase()}
              </Tag>
            ))}
        </>
      ),
    },
    {
      title: t("Color"),
      dataIndex: "color",
      key: "color",
    },
    {
      title: t("Action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              editAction(record)
            }}
          >
            {t("Edit")}
          </a>
          <a
            onClick={() => {
              deleteAction(record)
            }}
          >
            {t("Delete")}
          </a>
        </Space>
      ),
    },
  ]

  return (
    <StyledTable
      pagination={{ pageSize: 5 }}
      columns={columns}
      dataSource={users}
      rowKey="id"
    />
  )
}

export default UsersTable
