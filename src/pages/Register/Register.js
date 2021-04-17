import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import { CustomButton } from "../../_components/CustomButton";
import { AccentBar } from "../../_components/AccentBar";
import { PageContent } from "../../_components/LandingPageContent";

export const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} xs={12} sm={12} lg={6}>
            <PageContent />
          </Col>
          <Col md={6} xs={12} sm={12} lg={6}>
            <div className={styles.registerFormWrapper}>
              <AccentBar />
              <h2>Basic Information</h2>
              <p>Enter the following information below</p>
              <Form>
                <Form.Group>
                  <Row>
                    <Col>
                      <label>
                        <input placeholder=" " />
                        <span>Company Name</span>
                      </label>
                    </Col>
                    <Col>
                      <label>
                        <input placeholder=" " />
                        <span>Last Name</span>
                      </label>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <label>
                    <input placeholder=" " />
                    <span>Company Address</span>
                  </label>
                </Form.Group>

                <Form.Group controlId="companyAddress">
                  <label>
                    <input placeholder=" " />
                    <span>Phone Number</span>
                  </label>
                </Form.Group>
                <Form.Group controlId="PhoneNumber">
                  <label>
                    <input placeholder=" " />
                    <span>Company Email Address</span>
                  </label>
                </Form.Group>
                <Form.Group controlId="CompanyEmail">
                  <label>
                    <input placeholder=" " />
                    <span>Password</span>
                  </label>
                </Form.Group>
              </Form>
              <p>
                By clicking "Next" you agree to our{" "}
                <span className={styles.anchorText}>
                  Terms of Service, Privacy Policy,
                </span>{" "}
                and to receive marketing communications from Envoy.
              </p>

              <div className={styles.formFooter}>
                <p>
                  Got an account?{" "}
                  <span className={styles.anchorText}>Sign In</span>
                </p>
                <CustomButton text="Register" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
