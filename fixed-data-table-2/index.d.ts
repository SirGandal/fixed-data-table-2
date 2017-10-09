// Type definitions for fixed-data-table-2 0.8.1
// Project: https://github.com/schrodinger/fixed-data-table-2
// Definitions by: SirGandal <https://github.com/SirGandal>
// Extending the initial work of: Petar Paar <https://github.com/pepaar>, Stephen Jelfs <https://github.com/stephenjelfs>

/// <reference types="react"/>

import * as React from "react";

export as namespace FixedDataTable;

export = FixedDataTable;

declare namespace FixedDataTable {
  export const version: string;

  export interface TableProps extends React.Props<Table> {
    width: number;

    height?: number;

    className?: string;

    maxHeight?: number;

    ownerHeight?: number;

    overflowX?: "hidden" | "auto";

    overflowY?: "hidden" | "auto";

    touchScrollEnabled?: boolean;

    showScrollbarX?: boolean;

    showScrollbarY?: boolean;

    onHorizontalScroll?: (xScrollPosition: number) => boolean;

    onVerticalScroll?: (yScrollPosition: number) => boolean;

    rowsCount: number;

    rowHeight: number;

    rowHeightGetter?: (index: number) => number;

    subRowHeight?: number;

    subRowHeightGetter?: (index: number) => number;

    rowExpanded?:
      | React.ReactElement<any>
      | ((props: RowProps) => React.ReactElement<any>);

    rowClassNameGetter?: (index: number) => string;

    rowKeyGetter?: (index: number) => string;

    groupHeaderHeight?: number;

    headerHeight?: number;

    footerHeight?: number;

    scrollLeft?: number;

    scrollToColumn?: number;

    scrollTop?: number;

    scrollToRow?: number;

    onScrollStart?: (x: number, y: number) => void;

    onScrollEnd?: (x: number, y: number) => void;

    stopScrollPropagation?: boolean;

    onContentHeightChange?: (newHeight: number) => void;

    onRowClick?: rowEventCallback;

    onRowDoubleClick?: rowEventCallback;

    onRowMouseDown?: rowEventCallback;

    onRowMouseUp?: rowEventCallback;

    onRowMouseEnter?: rowEventCallback;

    onRowMouseLeave?: rowEventCallback;

    onRowTouchStart?: rowEventCallback;

    onRowTouchEnd?: rowEventCallback;

    onRowTouchMove?: rowEventCallback;

    onColumnResizeEndCallback?: (
      newColumnWidth: number,
      columnKey: string
    ) => void;

    onColumnReorderEndCallback?: (
      event: {
        columnBefore: string | undefined;
        columnAfter: string | undefined;
        reorderColumn: string;
      }
    ) => void;

    isColumnResizing?: boolean;

    isColumnReordering?: boolean;

    bufferRowCount?: number;
  }

  interface ColumnProps extends React.Props<Column> {
    align?: "left" | "center" | "right";

    fixed?: boolean;

    header?:
      | string
      | React.ReactElement<any>
      | ((props: GenericCellProps) => string | React.ReactElement<any>);

    cell?:
      | string
      | React.ReactElement<any>
      | ((props: CellProps) => string | React.ReactElement<any>);

    footer?:
      | string
      | React.ReactElement<any>
      | ((props: GenericCellProps) => string | React.ReactElement<any>);

    columnKey?: string | number;

    width: number;

    minWidth?: number;

    maxWidth?: number;

    flexGrow?: number;

    isResizable?: boolean;

    isReorderable?: boolean;

    allowCellsRecycling?: boolean;

    pureRendering?: boolean;
  }

  export interface ColumnGroupProps extends React.Props<ColumnGroup> {
    align?: "left" | "center" | "right";

    fixed?: boolean;

    header:
      | string
      | React.ReactElement<any>
      | ((
          props: { height: number; width: number }
        ) => string | React.ReactElement<any>);
  }

  interface CellSizeProps extends React.HTMLAttributes<Cell> {
    height?: number;

    width?: number;
  }

  interface GenericCellProps extends CellSizeProps {
    columnKey?: string | number;
  }

  export interface CellProps extends GenericCellProps {
    rowIndex?: number;
  }

  interface RowProps extends CellSizeProps {
    rowIndex?: number;
  }

  interface rowEventCallback {
    (event: React.SyntheticEvent<Table>, rowIndex: number): void;
  }
  export class Table extends React.Component<TableProps> {}
  export class Column extends React.Component<ColumnProps> {}
  export class ColumnGroup extends React.Component<ColumnGroupProps> {}
  export class Cell extends React.Component<CellProps> {}
}
