import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button, Picker } from 'antd-mobile';
import Navbar from '@/components/navbar';
import './detail.less'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                [{
                    label: '普票',
                    value: '普票',
                },
                {
                    label: '牛票',
                    value: '牛票',
                },
                {
                    label: '超牛票',
                    value: '超牛票',
                }]
            ],
            cols: 1,
            sValue: ['普票'],
        }
    }
    setData(v) {
        this.setState({
            sValue: v
        })
    }
    setData1() {
        console.log('onchange');
    }
    render() {
        const { id } = this.props.match.params;
        console.log('id: ', id);
        console.log(this.state.sValue);

        return (
            <div className='detail'>
                <Navbar name="开票信息"></Navbar>
                <div className='my-warp'>
                    <h3 className='my-title'>发票信息</h3>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入公司名称"
                        >
                            公司名称
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请输入公司税号"
                            type='number'
                        >
                            公司税号
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请输入公司地址"
                        >
                            公司地址
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请输入公司电话"
                            type='number'
                        >
                            公司电话
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请输入开户行"
                        >
                            开户行
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请输入开户账号"
                            type='bankCard'
                        >
                            开户账号
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    <h3 className='my-title'>发票信息</h3>
                    <List>
                        <Picker
                            data={this.state.data}
                            title="选择类型"
                            cascade={false}
                            value={this.state.sValue}
                            onChange={v => this.setData(v)}
                            // onChange={v => this.setState({ sValue: v })}
                            onOk={v => this.setData(v)}
                        // onOk={v => this.setState({ sValue: v })}
                        >
                            <List.Item arrow="horizontal">发票类型</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            placeholder="请输入收货地址"
                        >
                            收货地址
                        </InputItem>
                    </List>
                    <Button type="primary" className="btn">
                        提交
                    </Button>

                </div>
            </div>
        );
    }
}

export default index;