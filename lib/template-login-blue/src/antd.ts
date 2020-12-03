import Vue from 'vue';
import {
    ConfigProvider,
    Layout,
    Row,
    Col,
    Menu,
    Icon,
    Spin,
    Breadcrumb,
    Form,
    FormModel,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Radio,
    Checkbox,
    Switch,
    Button,
    Modal,
    Table,
    Pagination,
    Tooltip,
    AutoComplete,
    Empty,
    Steps,
    Popover,
    Tree
} from 'ant-design-vue';

export default function antd() {
    Vue.component(ConfigProvider.name, ConfigProvider);
    Vue.component(Layout.name, Layout);
    Vue.component(Layout.Header.name, Layout.Header);
    Vue.component(Layout.Sider.name, Layout.Sider);
    Vue.component(Layout.Content.name, Layout.Content);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Menu.name, Menu);
    Vue.component(Menu.Item.name, Menu.Item);
    Vue.component(Menu.SubMenu.name, Menu.SubMenu);
    Vue.component(Icon.name, Icon);
    Vue.component(Spin.name, Spin);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(FormModel.name, FormModel);
    Vue.component(FormModel.Item.name, FormModel.Item);
    Vue.component(Input.name, Input);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Select.name, Select);
    Vue.component(Select.Option.name, Select.Option);
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
    Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
    Vue.component(Radio.Group.name, Radio.Group);
    Vue.component(Radio.name, Radio);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Switch.name, Switch);
    Vue.component(Button.name, Button);
    Vue.component(Modal.name, Modal);
    Vue.component(Table.name, Table);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Tooltip.name, Tooltip);
    Vue.component(AutoComplete.name, AutoComplete);
    Vue.component(Empty.name, Empty);
    Vue.component(Steps.name, Steps);
    Vue.component(Steps.Step.name, Steps.Step);
    Vue.component(Popover.name, Popover);
    Vue.component(Tree.name, Tree);
}
