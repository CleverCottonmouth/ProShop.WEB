import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {
  const { data:products, isLoading, error } = useGetProductsQuery();

  console.log("i am here",products)

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <div>
        <Message variant="danger">
        {error?.data?.message || error.error}
        </Message>     
        </div>
      ) : (
        <>
          <h1>Lastest Product</h1>
          <Row>
            {products.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
