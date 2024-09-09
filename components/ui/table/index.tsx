import type { CheckboxProps, RowProps, TableHeaderProps } from 'react-aria-components'
import {
  Button,
  Cell,
  Checkbox,
  Collection,
  Column,
  Row,
  TableHeader,
  useTableOptions,
} from 'react-aria-components'

export function MyTableHeader<T extends object>({ columns, children }: TableHeaderProps<T>) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <TableHeader>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column>{selectionMode === 'multiple' && <MyCheckbox slot='selection' />}</Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeader>
  )
}

export function MyRow<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>) {
  let { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <Row
      id={id}
      {...otherProps}
    >
      {allowsDragging && (
        <Cell>
          <Button slot='drag'>≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <MyCheckbox slot='selection' />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

export function MyCheckbox({ children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className='checkbox'>
            <svg
              viewBox='0 0 18 18'
              aria-hidden='true'
            >
              {isIndeterminate ?
                <rect
                  x={1}
                  y={7.5}
                  width={15}
                  height={3}
                />
              : <polyline points='1 9 7 14 15 4' />}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  )
}
