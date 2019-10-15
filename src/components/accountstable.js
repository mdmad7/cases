import React, { useState } from 'react'

import {
  EuiBasicTable,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth
} from '@elastic/eui'

const AccountsTable = () => {
  const [pageOptions, setPageOptions] = useState({ pageIndex: 0, pageSize: 2 })
  const onTableChange = ({ page }) => {
    // const { index: pageIndex, size: pageSize } = page

    setPageOptions({ pageIndex: page.index, pageSize: page.size })
  }

  const columns = [
    {
      field: 'firstName',
      name: 'Full Name',
      truncateText: true,
      hideForMobile: true,
      mobileOptions: {
        show: false
      },
      render: (name, item) => (
        <EuiFlexGroup responsive={false} alignItems='center'>
          <EuiFlexItem>
            <span style={{ textTransform: 'capitalize' }}>
              {item.firstName} {item.lastName}
            </span>
          </EuiFlexItem>
        </EuiFlexGroup>
      )
    },

    {
      field: 'email',
      name: 'Email',
      truncateText: true,
      hideForMobile: true,
      mobileOptions: {
        show: false
      }
    },
    {
      field: 'active',
      name: 'Status',
      truncateText: true,
      hideForMobile: true,
      mobileOptions: {
        show: false
      },
      dataType: 'boolean',
      render: active => {
        const color = active ? 'success' : 'danger'
        const label = active ? 'Activated' : 'Deactivated'
        return <EuiHealth color={color}>{label}</EuiHealth>
      }
    },
    {
      name: '',
      actions: [
        {
          name: 'Edit',
          description: 'Edit this person',
          icon: 'pencil',
          type: 'icon',
          onClick: item => console.log(item)
        },
        {
          name: 'Delete',
          description: 'Delete this person',
          icon: 'trash',
          type: 'icon',
          color: 'danger',
          onClick: item => console.log(item)
        }
      ]
    }
  ]

  return (
    <>
      <EuiSpacer size='xl' />
      <EuiBasicTable
        items={[
          {
            id: 1,
            firstName: 'john',
            lastName: 'doe',
            email: 'johndoe@gmail.com',
            active: false
          },
          {
            id: 2,
            firstName: 'jane',
            lastName: 'doe',
            email: 'janedoe@gmail.com',
            active: true
          },
          {
            id: 3,
            firstName: 'john',
            lastName: 'doe',
            email: 'johndoe@gmail.com',
            active: false
          },
          {
            id: 4,
            firstName: 'jane',
            lastName: 'doe',
            email: 'janedoe@gmail.com',
            active: true
          },
          {
            id: 5,
            firstName: 'john',
            lastName: 'doe',
            email: 'johndoe@gmail.com',
            active: false
          },
          {
            id: 6,
            firstName: 'jane',
            lastName: 'doe',
            email: 'janedoe@gmail.com',
            active: true
          }
        ]}
        columns={columns}
        pagination={{
          ...pageOptions,
          totalItemCount: 6,
          // pageSizeOptions: [3, 5, 8],
          hidePerPageOptions: true
        }}
        onChange={onTableChange}
        responsive={true}
      />
    </>
  )
}

export default AccountsTable
