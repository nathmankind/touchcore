import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import { CustomButton } from "../../_components/CustomButton";
import { PageContent } from "../../_components/LandingPageContent";

export const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} xs={12} sm={12} lg={6}>
            <PageContent />
          </Col>
          <Col md={6} xs={12} sm={12} lg={6}>
            <div className={styles.loginFormWrapper}>
              <h2>You’re Welcome Back!</h2>
              <p>Enter the following information below</p>
              <Form>
                <Form.Group controlId="emailAddress">
                  <label>
                    <input placeholder=" " />
                    <span>Email Address</span>
                  </label>
                </Form.Group>

                <Form.Group controlId="password">
                  <label>
                    <input placeholder=" " />
                    <span>Password</span>
                  </label>
                </Form.Group>
              </Form>
              <p className={styles.forgetPassword}>Forget Password?</p>

              <div className={styles.formFooter}>
                <p>
                  Just joining us here?{" "}
                  <span className={styles.anchorText}>Register Now</span>
                </p>
                <CustomButton text="Login" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
