/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

import { type DripTableColumnSchema, type DripTableSchema } from '..';

export const forEachRecursive = <
  CustomColumnSchema extends DripTableColumnSchema = never,
>(
    columns: DripTableSchema<CustomColumnSchema>['columns'],
    callbackfn: (column: DripTableSchema<CustomColumnSchema>['columns'][number], index: number) => void,
  ): void => {
  let index = -1;
  const iter = (cs: typeof columns): void => {
    cs.forEach((c) => {
      if (c.children?.length) {
        iter(c.children);
      } else {
        index += 1;
        callbackfn(c, index);
      }
    });
  };
  return iter(columns);
};

export const flattenRecursive = <
  CustomColumnSchema extends DripTableColumnSchema = never,
>(
    columns: DripTableSchema<CustomColumnSchema>['columns'],
  ): typeof columns => {
  const res: typeof columns = [];
  forEachRecursive(columns, (c) => {
    res.push(c);
  });
  return res;
};

export const mapRecursive = <
  CustomColumnSchema extends DripTableColumnSchema = never,
>(
    columns: DripTableSchema<CustomColumnSchema>['columns'],
    callbackfn: (column: DripTableSchema<CustomColumnSchema>['columns'][number], index: number) => typeof column,
  ): typeof columns => {
  let index = -1;
  const iter = (cs: typeof columns): typeof columns => cs.map((c) => {
    if (c.children?.length) {
      return { ...c, children: iter(c.children) };
    }
    index += 1;
    return callbackfn(c, index);
  });
  return iter(columns);
};

export const filterRecursive = <
  CustomColumnSchema extends DripTableColumnSchema = never,
>(
    columns: DripTableSchema<CustomColumnSchema>['columns'],
    callbackfn: (column: DripTableSchema<CustomColumnSchema>['columns'][number], index: number) => unknown,
  ): typeof columns => {
  let index = -1;
  const iter = (cs: typeof columns): typeof columns => {
    const res: typeof cs = [];
    cs.forEach((c) => {
      if (c.children?.length) {
        const children = iter(c.children);
        if (children.length > 0) {
          res.push({ ...c, children });
        }
      } else {
        index += 1;
        if (callbackfn(c, index)) {
          res.push(c);
        }
      }
    });
    return res;
  };
  return iter(columns);
};

export const findIndexRecursive = <
  CustomColumnSchema extends DripTableColumnSchema = never,
>(
    columns: DripTableSchema<CustomColumnSchema>['columns'],
    iter: (c: (typeof columns)[number]) => unknown,
  ): number => {
  let index = -1;
  let found = false;
  forEachRecursive(columns, (c) => {
    if (found) {
      return;
    }
    index += 1;
    if (iter(c)) {
      found = true;
    }
  });
  return found ? index : -1;
};
