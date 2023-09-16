import { Button, Form, Input, Radio, Space } from "antd";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../pages/products";
import { Context } from "@/context/context";

export default function CardForm() {
  const [productData, setproductData] = useState([]);
  const [form] = Form.useForm();
  let [categories, setcategories] = useState([]);
  const data = useContext(Context);
  const cardData = data.cardData;
  const setCardData = data.setCardData;

  useEffect(() => {
    setproductData([...cardData]);
  }, [])

  useEffect(() => {
    cardData.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
        setcategories([...categories])
      }
    });
  }, [cardData])

  
  
  const onFinish = (values) => {
    values.id = cardData.length + 1;
    cardData.unshift(values);
    setCardData([...cardData]);
    setproductData([...cardData]);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [priceValue, setpriceValue] = useState(null);
  const fiterByPrice = (e) => {
    setpriceValue(e.target.value);
    let filtered = cardData.filter((data) => data.price > e.target.value);
    console.log(filtered);
    setproductData([...filtered]);
  };

  const [sortValue, setsortValue] = useState(null);
  const sortByPrice = (e) => {
    setsortValue(e.target.value);

    function compare(a, b) {
      if (e.target.value === "LtoH") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
    productData.sort(compare);
    setproductData([...productData]);
  };

  const [category, setcategory] = useState(null);
  const sortByCategory = (e) => {
    setcategory(e.target.value);
    let filtered = cardData.filter((data) => data.category === e.target.value);
    setproductData([...filtered]);
    setpriceValue(null)
    setsortValue(null)
  };

  const clearFilters = () => {
    setproductData([...cardData])
    setpriceValue(null)
    setsortValue(null)
    setcategory(null)
  }

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <div className="p-6 pt-10 w-full border-r-[1px] h-screen border-green-600">
          <span className="text-green-600 font-semibold text-2xl">Filter</span>
          <div>
            <p className="font-semibold text-xl mt-4">Price</p>
            <Radio.Group onChange={fiterByPrice} value={priceValue}>
              <Space direction="vertical">
                <Radio value={100}>{"> 100"}</Radio>
                <Radio value={200}>{"> 200"}</Radio>
                <Radio value={300}>{"> 300"}</Radio>
                <Radio value={400}>{"> 400"}</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div>
            <p className="font-semibold text-xl mt-4">Sort By</p>
            <Radio.Group onChange={sortByPrice} value={sortValue}>
              <Space direction="vertical">
                <Radio value={"HtoL"}>H to L</Radio>
                <Radio value={"LtoH"}>L to H</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div>
            <p className="font-semibold text-xl mt-4">Sort By</p>
            <Radio.Group onChange={sortByCategory} value={category}>
              <Space direction="vertical">
                {categories.map((name, index) => {
                  return(
                    <Radio key={index} value={name}>{name}</Radio>
                  )
                })}
              </Space>
            </Radio.Group>
          </div>
          <div>
            <button className="p-2 bg-green-600 text-white rounded-lg mt-4" onClick={clearFilters}>Clear filters</button>
          </div>
        </div>
      </div>

      <div className="w-3/4">
        <Form
          className="mt-6"
          name="control-hooks"
          layout="inline"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 15,
          }}
          style={{
            maxWidth: 1000,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            className="m-4"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input placeholder="Service Title" />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            className="m-4"
            rules={[
              {
                required: true,
                message: "Please input your image url!",
              },
            ]}
          >
            <Input placeholder="Image Url" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            className="m-4"
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Input type="number" placeholder="Price" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            className="m-4"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Input placeholder="Category" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            className="m-4"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item
            className="m-4"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              htmlType="submit"
              className="border-0 bg-green-600 text-white hover:text-white"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <ProductCard products={productData} />
      </div>
    </div>
  );
}
