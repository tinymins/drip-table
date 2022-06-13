/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

import * as DripDesign from '@drip/drip-design/lib/index';
import zhCN from '@drip/drip-design/lib/locale/zh_CN';
import * as AntDesignIcons from '@drip/drip-design-icons';
import { DripTableDriver } from 'drip-table';

const DripTableDriverAntDesign: DripTableDriver = {
  components: DripDesign,
  icons: AntDesignIcons,
  locale: zhCN,
} as unknown as DripTableDriver;

export default DripTableDriverAntDesign;
