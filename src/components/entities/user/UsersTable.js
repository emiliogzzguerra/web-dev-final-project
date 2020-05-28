/* eslint-disable react/display-name */
import React from "react"
import { Table, Space, Tag } from "antd"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const UsersTable = ({ users }) => {
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
      render: (areas) => (
        <>
          {areas.map((area) => (
            <Tag color="geekblue" key={area}>
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
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(`Editando usuario... ${record}`)
            }}
          >
            {t("Edit")}
          </a>
          <a
            onClick={() => {
              console.log(`Borrando usuario... ${record}`)
            }}
          >
            {t("Delete")}
          </a>
        </Space>
      ),
    },
  ]

  return <Table columns={columns} dataSource={users} />
}

export default UsersTable
