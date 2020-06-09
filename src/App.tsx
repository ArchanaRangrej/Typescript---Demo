/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {Component} from 'react';
import {
    Button,
    Card,
    Divider,
    Input,
    Form,
    Select
} from 'antd';
import 'antd/dist/antd.css';	
import { PlusOutlined } from '@ant-design/icons';
import './App.css';

import categories from './categories.js';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 17,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class App extends Component<any, any> {
	formRef: any;

    constructor(props: any, context: any) {
        super(props, context);
        this.formRef = React.createRef();
        this.state = {
            level0Categories: [],
            level1Categories: [],
            level2Categories: [],
            name: '',
        };
    }

    componentWillMount() {
        this.setState({ level0Categories: categories });
    }

    onFinish = (values: any) => {
        const build_parameters = {
            build_parameters: {
                "CIRCLE_JOB": "introduce_models",
                "DATA": btoa(JSON.stringify([values]))
            }
        }
        const s3_path = values.S3_PATH;

        fetch('https://cors-anywhere.herokuapp.com/https://r9uvhn3ho1.execute-api.us-east-1.amazonaws.com/stage_1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                's3_path': s3_path
            })
        }).then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )

        fetch('https://cors-anywhere.herokuapp.com/https://circleci.com/api/v1.1/project/github/Exkuisite/i-designer', {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
                'Circle-Token': '2499f04b9e195788f794bec9a23d3c25fdab870b'
            },
            body: JSON.stringify(build_parameters)
        }).then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onCategoryChange = (value: any, categories: any[], stateName: any) => {

        let data = categories.filter((cat: { value: any; }) => cat.value === value);

        if (data[0].hasOwnProperty('children'))
            this.setState({ [stateName]: data[0].children });

    };

    addItem = (categories: any, categoryName: any) => {
        const { name } = this.state;
        this.setState({
            [categoryName]: [...categories, { label: name, value: name }],
            name: '',
        });
    };

    onNameChange = (event: { target: { value: any; }; }) => {
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        const { level0Categories, level1Categories, level2Categories, name } = this.state;

        return (
            <div>
                <Card title="Add New Model" hoverable style={{ margin: '30px 150px 0' }}>
                   	<Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                        <Form.Item label="Model ID" name="MODEL_ID" rules={[{ required: true, message: "Please enter the model id." }]}>
                            <Input placeholder="Enter Model Id" />
                        </Form.Item>
                        <Form.Item label="Title" name="TITLE" rules={[{ required: true, message: "Please enter the title." }]}>
                            <Input placeholder="Enter Title" />
                        </Form.Item>
                        <Form.Item label="Level 0 Category" name="LEVEL_0" rules={[{ required: true }]}>
                            <Select placeholder="Select Main Category" onChange={(value: any) => this.onCategoryChange(value, this.state.level0Categories, 'level1Categories')}>
                                {level0Categories.map((category: { value: any; label: any; }) => (
                                    <Option value={category.value}>{category.label}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        {this.state.level1Categories.length > 0 &&
                            <Form.Item label="Level 1 Category" name="LEVEL_1" rules={[{ required: true }]} >
                                <Select placeholder="Select Sub Category" onChange={(value: any) => this.onCategoryChange(value, this.state.level1Categories, 'level2Categories')}
                                    dropdownRender={(menu: React.ReactNode) => (
                                        <div>
                                            {menu}
                                            <Divider style={{ margin: '4px 0' }} />
                                            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                                <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
                                                <a
                                                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                                    onClick={() => this.addItem(this.state.level1Categories, 'level1Categories')}
                                                >
                                                    <PlusOutlined /> Add item
                                        </a>
                                            </div>
                                        </div>
                                    )}
                                >
                                    {level1Categories.map((category: { value: any; label: any; }) => (
                                        <Option value={category.value}>{category.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        }
                        {this.state.level2Categories.length > 0 &&
                            <Form.Item label="Level 2 Category" name="LEVEL_2">
                                <Select placeholder="Select Sub Category"
                                    dropdownRender={(menu: React.ReactNode) => (
                                        <div>
                                            {menu}
                                            <Divider style={{ margin: '4px 0' }} />
                                            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                                <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
                                                <a
                                                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                                    onClick={() => this.addItem(level2Categories, 'level2Categories')}
                                                >
                                                    <PlusOutlined /> Add item
                                        </a>
                                            </div>
                                        </div>
                                    )}
                                >
                                    {level2Categories.map((category: { value: any; label: any; }) => (
                                        <Option value={category.value}>{category.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        }
                        <Form.Item label="Dropbox Path" name="DROPBOX_PATH" rules={[
                            { required: true, message: "Please enter the dropbox path." },
                            {
                                validator(rule: any, value: string | string[]) {
                                    if (!value.includes("https://www.dropbox.com/home/MadhavModels/furniture_models/glTF")) {
                                        return Promise.reject('The dropbox url that you entered is incorrect.');
                                    }
                                    return Promise.resolve();
                                },
                            }
                        ]}>
                            <Input placeholder="Enter Dropbox Path" />
                        </Form.Item>
                        <Form.Item label="S3 Path" name="S3_PATH" rules={[
                            { required: true, message: "Please enter the s3 path." },
                            {
                                validator(rule: any, value: string | string[]) {
                                    if (!value.includes("https://s3.console.aws.amazon.com/s3/buckets/exkuisite-models/")) {
                                        return Promise.reject('The amazon s3 url that you entered is incorrect.');
                                    }
                                    return Promise.resolve();
                                },
                            }
                        ]}>
                            <Input placeholder="Enter S3 Path" />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" >
                                Submit
                        </Button>
                            <Button htmlType="button" onClick={this.onReset}>
                                Reset
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default App;
