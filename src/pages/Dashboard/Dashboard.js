import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import dashboardIcon from "../../assets/ic_round-dashboard.png";
import { InfoCard } from "../../_components/infoCards";
import vector from "../../assets/Vector.png";
import purpleIcon from "../../assets/dashboard-purp.png";
import cartWarning from "../../assets/warning.png";
import user from "../../assets/Photo.png";
import rider from "../../assets/rider.png";
import { IoMdArrowDropdown } from "react-icons/io";
import LineGraph from "smooth-line-graph";
import { Chart } from "react-google-charts";
import currentUser from "../../assets/Users.png";

const props = {
  name: "simple",
  width: 50,
  height: 20,
  lines: [
    {
      key: "mykey",
      data: [
        [0, 0],
        [1, 1],
        [2, 4],
        [3, 9],
        [4, 16],
        [5, 0],
        [9, 25],
        [12, 36],
        [15, 40],
      ],
      color: "red",
    },
  ],
};

const TopGraphProps = {
  name: "simple",
  width: 50,
  height: 20,
  lines: [
    {
      key: "mykey",
      data: [
        [0, 0],
        [1, 1],
        [2, 4],
        [3, 9],
        [4, 16],
        [5, 0],
        [9, 25],
        [12, 36],
        [15, 40],
      ],
      color: "blue",
    },
  ],
};

export const DashBoard = () => {
  return (
    <div className="dashbaordWrapper">
      <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" id="mainNav">
        <a class="navbar-brand" href="/">
          <img src={logo} className="d-inline-block align-top" alt="logo" />
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li
              class="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
            >
              <a class="nav-link">
                <i class="fa fa-fw fa-dashboard"></i>
                <span class="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Charts"
            >
              <a class="nav-link">
                <i class="fa fa-fw fa-area-chart"></i>
                <span class="nav-link-text">Companies</span>
              </a>
            </li>
            <li
              class="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Tables"
            >
              <a class="nav-link" href="#">
                <i class="fa fa-fw fa-table"></i>
                <span class="nav-link-text">Order Pool</span>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <div className="current-user">
              <div className="user-image">
                <img src={currentUser} alt="current user" />
              </div>
              <div className="user-info">
                <p className="bold">Jude Adam</p>
                <p className="small">Admin</p>
              </div>
            </div>
          </ul>
        </div>
      </nav>

      {/* ===== */}

      <div className="content-wrapper">
        <div className="container-fluid dashboard-main">
          <div className="div-breadcrumb">
            <h2>Dashboard</h2>
          </div>

          <Row>
            <Col xl={3} sm={12} md={3} lg={3}>
              <InfoCard
                header={
                  <h4>
                    Total Exchange <br />
                    Pool Orders
                  </h4>
                }
                number="504"
                icon={dashboardIcon}
              />

              <InfoCard
                header={
                  <h4>
                    Total <br />
                    Companies
                  </h4>
                }
                number="504"
                icon={vector}
              />
            </Col>
            <Col xl={2} sm={12} md={2} lg={2}>
              <div className="dashboard-col-2-card">
                <h3>120</h3>
                <p>Companies sent orders to delivery pool today.</p>
                <img src={user} alt="user" />
                <div className="percentage">+84%</div>
                <div className="graph">
                  <LineGraph {...TopGraphProps} />
                </div>
                <p>Comapred to yesterday</p>
              </div>
            </Col>
            <Col xl={7} sm={12} md={7} lg={7}>
              <div className="first-row-bg-graph">
                <Chart
                  width={"100%"}
                  height={"300px"}
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales", "Expenses"],
                    ["2013", 1000, 400],
                    ["2014", 1170, 460],
                    ["2015", 660, 1120],
                    ["2016", 1030, 540],
                  ]}
                  options={{
                    isStacked: true,
                    height: 300,
                    legend: { position: "top", maxLines: 3 },
                    vAxis: { minValue: 0 },
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              </div>
            </Col>
          </Row>
          <Row className="exchange-row-section">
            <Col xl={3} sm={12} md={3} lg={3}>
              <InfoCard
                header={
                  <h4>
                    Total <br />
                    Cancelled Orders
                  </h4>
                }
                number="504"
                icon={cartWarning}
              />
              <InfoCard
                header={
                  <h4>
                    Total <br />
                    Created Orders
                  </h4>
                }
                number="504"
                icon={purpleIcon}
              />
            </Col>
            <Col xl={3} sm={12} md={3} lg={3}>
              <div className="dashboard-card-bottom-3-col">
                <div className="headder">
                  <h5>Exchange pool today</h5>
                  <IoMdArrowDropdown />
                </div>
                <p className="small">Most Orders picked by:</p>

                <img src={rider} alt="rider" />
                <div className="bottom-content">
                  <div className="first-col">
                    <div className="div-container">
                      <h5>FZ Deliveries</h5>
                      <p>Allen, Lagos</p>
                    </div>
                    <div className="div-container">
                      <h5 className="number-danger">504</h5>
                      <p>Orders</p>
                    </div>
                    <div className="div-container">
                      <h5 className="number-purple">267</h5>
                      <p>Pushed to pool</p>
                    </div>
                  </div>
                  <div className="second-col">
                    <div className="content">
                      <h5 className="num">N340,000</h5>
                      <div className="graph">
                        <LineGraph {...props} />
                      </div>
                      <p className="color-black">Comapared to Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6} sm={12} md={6} lg={6}>
              <div className="second-row-bg-graph">
                <Chart
                  width={"100%"}
                  height={"300px"}
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Order", "2020 Orders", "2019 Orders"],
                    ["Today", 8175000, 8008000],
                    ["Yesterday", 8175000, 8008000],
                    ["10 March, 2021", 8175000, 8008000],
                    ["08 March, 2021", 8175000, 8008000],
                    ["05 March, 2021", 8175000, 8008000],
                  ]}
                  options={{
                    title: "Delivered Orders",
                    chartArea: { width: "50%" },
                    isStacked: true,
                    hAxis: {
                      title: "Total Orders",
                      minValue: 0,
                    },
                    vAxis: {
                      title: "Order",
                    },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "3" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
