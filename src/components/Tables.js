
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import { getAllCategories, getAllTickets } from "../api/ThesisApi";
import { useHistory } from "react-router-dom";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};


export const TicketsTable = (props) => {
  console.log(props);
  // const [tickets, setTickets] = React.useState({ tickets: [] });
  const { ticketList } = props;
  // try {
  //   getAllTickets().then(res => {
  //     setTickets({tickets: res.body});
  //   });
  // }
  // catch(e) {
  //   console.log("error", e);
  // }


  const TableRow = (props) => {
    const { id, postDate, ticketNumber, data, position } = props;
    const history = useHistory();

    return (
      <tr>
        <td >
          {position+1}
        </td>
        <td>
          {id}
        </td>
        <td>
          <span className="fw-normal">
            {postDate}
          </span>
        </td>
        <td>
        {/* <Card.Link as={Link} to={Routes.Vi.path + '/' + id} className="fw-normal"> */}
          <div onClick={()=>{history.push(Routes.ViewTicket.path + '/' + id)}}>
            <FontAwesomeIcon icon={faEye} className="dropdown-arrow" /> 
          </div>

        {/* </Card.Link> */}
        </td>
      </tr>
    );
  };

  // let ticketsList = tickets.tickets ? tickets.tickets : [];
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Ticket ID</th>
              <th className="border-bottom">Issue Date</th>
              <th className="border-bottom">Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              ticketList.map((t, index) => 
                <TableRow key={`ticket-${index}`} {...t} position={index}/>
              )}
          </tbody>
        </Table>
        {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer> */}
      </Card.Body>
    </Card>
  );
};

export const CategoriesTable = (props) => {
  console.log(props);
  


  const TableRow = (props) => {
    const { ticketNumber, data, position, name } = props;

    return (
      <tr>
        <td >
          {position+1}
        </td>
        <td>
          {name}
        </td>
        
        <td>
        <Card.Link as={Link} to={Routes.ViewTicket.path} className="fw-normal">
          <FontAwesomeIcon icon={faEye} className="dropdown-arrow" /> 
        </Card.Link>
        </td>
      </tr>
    );
  };

  let categoriesList = props.categories.length > 0 ? props.categories : []; 
  console.log(categoriesList);
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Category Name</th>
              <th className="border-bottom">Manage</th>
            </tr>
          </thead>
          <tbody>
            {categoriesList.map((t, index) => <TableRow key={`transaction-${t.id}`} {...t} position={index}/>)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TicketDetails = (props) => {
  const {
    browserFontSize,
    browserName,
    category,
    email,
    gender,
    id,
    isActive,
    m1,
    m2,
    m3,
    name,
    postDate,
    priority,
    satScore,
    screenResolution,
    skillRate,
    userIp
  } = props.ticketDetails;

  console.log(props);

  return (
    <>
      <div>
        <p>browserFontSize: {browserFontSize}</p>
        <p>browserName: {browserName}</p>
        {/* <p>category: {category}</p> */}
        <p>email: {email}</p>
        <p>gender: {gender}</p>
        <p>id: {id}</p>
        <p>isActive: {isActive}</p>
        <p>m1: {m1}</p>
        <p>m2: {m2}</p>
        <p>m3: {m3}</p>
        <p>name: {name}</p>
        <p>postDate: {postDate}</p>
        <p>priority: {priority}</p>
        <p>satScore: {satScore}</p>
        {/* <p>screenResolution: {screenResolution}</p> */}
        <p>skillRate: {skillRate}</p>
        <p>userIp: {userIp}</p>
      </div>
    </>
  )
}