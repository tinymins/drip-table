import { DripTableComponentAttrConfig } from '../typing';
import { basicColumnAttrComponents, dataIndexColumnAttrComponents } from './configs';

export default {
  $id: '$display_inputnumber',
  'ui:type': 'input-number',
  type: 'string',
  group: '基础组件',
  fieldKey: 'input-number',
  title: '数字组件',
  paramName: '',
  default: '',
  attrSchema: [
    ...basicColumnAttrComponents('数字'),
    ...dataIndexColumnAttrComponents(
      'price',
      (_1, formData) => true,
      (_1, formData) => true && formData?.dataIndexMode === 'direct',
      (_1, formData) => true && formData?.dataIndexMode === 'nested',
    ),
    {
      name: 'options.isEdit',
      group: '组件属性',
      'ui:title': '编辑数字',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
      default: true,
    },
    {
      name: 'options.bordered',
      group: '组件属性',
      'ui:title': '允许展示边框',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
      default: true,
    },
    {
      name: 'options.disabled',
      group: '组件属性',
      'ui:title': '是否禁用',
      'ui:type': 'switch',
      'ui:props': {},
      type: 'boolean',
    },
    {
      name: 'options.step',
      group: '组件属性',
      'ui:title': '步数',
      'ui:type': 'number',
      default: 1,
    },
    {
      name: 'options.min',
      group: '组件属性',
      'ui:title': '最小值',
      'ui:type': 'number',
      default: 0,
    },
    {
      name: 'options.max',
      group: '组件属性',
      'ui:title': '最大值',
      'ui:type': 'number',
    },
    {
      name: 'options.size',
      group: '组件属性',
      'ui:title': '输入框大小',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '大', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
      type: 'string',
      default: 'middle',
    },
  ],
  icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="number" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z"></path></svg>',
} as DripTableComponentAttrConfig;