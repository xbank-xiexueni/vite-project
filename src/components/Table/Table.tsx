import {
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  type TableProps,
  Flex,
  Heading,
  Box,
} from '@chakra-ui/react'
import isEmpty from 'lodash/isEmpty'
import { useState, type FunctionComponent, type ReactElement } from 'react'

import COLORS from '@/utils/Colors'

import IconSortDESC from '@/assets/icon/icon-sort-down.svg'
import IconSortASC from '@/assets/icon/icon-sort-up.svg'
import IconUnSort from '@/assets/icon/icon-unsort.svg'

import { LoadingComponent, EmptyTableComponent } from '..'
import '../table/index.less'

export interface ColumnProps {
  title: string
  dataIndex: string
  key: string
  // col
  align?: 'left' | 'right' | 'center'
  // thead
  thAlign?: 'left' | 'right' | 'center'
  width?: number
  render?: (
    arg0: Record<string, string | boolean | number>,
    arg1: string | boolean | number,
  ) => ReactElement
  sortable?: boolean
  fixedRight?: boolean
}
export type MyTableProps = TableProps & {
  columns: ColumnProps[]
  data: Record<string, string>[]
  onSort?: (arg: { direction: string; field: string }) => void
  loading?: boolean
  caption?: () => ReactElement
  emptyRender?: () => ReactElement
  maxW?: string
}

const Index: FunctionComponent<MyTableProps> = ({
  columns,
  data,
  onSort,
  loading = false,
  caption,
  title: tableTitle,
  emptyRender,
  maxW,
}) => {
  const [sortParams, setSortParam] = useState({
    direction: '',
    field: '',
  })
  return (
    <>
      {tableTitle && (
        <Heading size={'md'} mt={6}>
          {tableTitle}
        </Heading>
      )}
      <TableContainer position={'relative'} maxW={maxW || '100%'}>
        {<LoadingComponent loading={loading} />}

        <Table
          variant='unstyled'
          style={{
            borderCollapse: 'collapse',
            borderSpacing: '0 10px',
          }}
          className='my-table'
        >
          <Thead>
            <Tr pos='relative'>
              {columns.map(
                ({
                  key,
                  sortable,
                  width,
                  thAlign,
                  title,
                  dataIndex,
                  fixedRight,
                }) => (
                  <Th
                    textAlign={thAlign}
                    key={key}
                    color={
                      sortParams.field === dataIndex
                        ? COLORS.primaryColor
                        : COLORS.infoTextColor
                    }
                    position={fixedRight ? 'sticky' : 'relative'}
                    zIndex={fixedRight ? 1 : 'inherit'}
                    bg='white'
                    right={0}
                    fontSize={'md'}
                    fontWeight='medium'
                    cursor={sortable ? 'pointer' : 'default'}
                    w={width || `${100 / columns.length}%`}
                    // textAlign={align}
                    onClick={() => {
                      if (!sortable) return
                      const { direction, field } = sortParams
                      if (field === dataIndex) {
                        let nextDirection: 'ASC' | 'DESC' | '' = ''
                        let newField = field
                        if (direction === '') {
                          nextDirection = 'ASC'
                        }
                        if (direction === 'ASC') {
                          nextDirection = 'DESC'
                        }
                        if (direction === 'DESC') {
                          nextDirection = ''
                          newField = ''
                        }
                        if (onSort) {
                          onSort({
                            ...sortParams,
                            direction: nextDirection,
                            field: newField,
                          })
                        }

                        setSortParam(() => ({
                          ...sortParams,
                          direction: nextDirection,
                          field: newField,
                        }))
                      } else {
                        // 字段改变
                        if (onSort) {
                          onSort({
                            field: dataIndex,
                            direction: 'ASC',
                          })
                        }

                        setSortParam({
                          field: dataIndex,
                          direction: 'ASC',
                        })
                      }
                    }}
                  >
                    <Flex
                      justify={
                        thAlign === 'center'
                          ? 'center'
                          : thAlign === 'right'
                          ? 'flex-end'
                          : 'flex-start'
                      }
                    >
                      {title}
                      {sortable && sortParams.field !== dataIndex && (
                        <Image src={IconUnSort} />
                      )}

                      {sortParams.field === dataIndex &&
                        sortParams.direction === 'ASC' && (
                          <Image src={IconSortASC} />
                        )}
                      {sortParams.field === dataIndex &&
                        sortParams.direction === 'DESC' && (
                          <Image src={IconSortDESC} />
                        )}
                    </Flex>
                  </Th>
                ),
              )}
            </Tr>
          </Thead>
          <Tbody>
            {isEmpty(data) ? (
              <Tr>
                <Td colSpan={columns.length}>
                  {emptyRender ? emptyRender() : <EmptyTableComponent />}
                </Td>
              </Tr>
            ) : (
              data.map((item, rowIndex) => (
                <Tr
                  key={JSON.stringify(item)}
                  bg={COLORS.secondaryBgc}
                  mb={4}
                  pos='relative'
                >
                  {columns.map(
                    (
                      {
                        dataIndex,
                        render,
                        key,
                        width,
                        align = 'left',
                        fixedRight,
                      },
                      colIndex,
                    ) => (
                      <Th
                        fontSize='md'
                        key={key}
                        w={width}
                        textAlign={align}
                        position={fixedRight ? 'sticky' : 'relative'}
                        zIndex={fixedRight ? 1 : 'inherit'}
                        right={0}
                        bg={fixedRight ? 'white' : COLORS.secondaryBgc}
                        py={0}
                        paddingInlineStart={0}
                        paddingInlineEnd={0}
                        borderTopRightRadius={
                          rowIndex === 0 &&
                          colIndex === columns?.length - 1 &&
                          !fixedRight
                            ? 10
                            : 0
                        }
                        borderBottomRightRadius={
                          colIndex === columns?.length - 1 && !fixedRight
                            ? 10
                            : 0
                        }
                      >
                        <Box
                          lineHeight='40px'
                          boxShadow={
                            fixedRight
                              ? `-4px 0 5px -3px ${COLORS.borderColor}`
                              : ''
                          }
                          py={3}
                          paddingInlineStart={6}
                          paddingInlineEnd={6}
                          // display={'table-cell'}
                          bg={COLORS.secondaryBgc}
                          borderTopLeftRadius={
                            rowIndex === 0 && colIndex === 0 ? 10 : 0
                          }
                          borderTopRightRadius={
                            rowIndex === 0 && colIndex === columns?.length - 1
                              ? 10
                              : 0
                          }
                          borderBottomLeftRadius={colIndex === 0 ? 10 : 0}
                          borderBottomRightRadius={
                            colIndex === columns?.length - 1 ? 10 : 0
                          }
                        >
                          {!!render ? (
                            <Flex justifyContent={align}>
                              {render(item, item[dataIndex])}
                            </Flex>
                          ) : (
                            item[dataIndex]
                          )}
                        </Box>
                      </Th>
                    ),
                  )}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify={'center'} my={8}>
        {!!caption && !loading && caption()}
      </Flex>
    </>
  )
}

export default Index