import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button,PickerView } from 'antd-mobile';
import Navbar from '@/components/navbar';
import './detail.less'
const season = [
    {
        label: '春',
        value: '春',
    },
    {
        label: '夏',
        value: '夏',
    },
];
class index extends Component {
    render() {
        const { id } = this.props.match.params;
        console.log('id: ', id);
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
                        <InputItem
                            clear
                            placeholder="请输入公司名称"
                        >
                            公司名称
                        </InputItem>
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
                    <div>
                    <PickerView
                        data={season}
                        cascade={false}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

export default index;