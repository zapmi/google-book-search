import React from "react";
import { ListItem, List } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h5 className="font-italic">{title}</h5>
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrence" href={link}>
                            View
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic small"> Written by {authors}</p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p> {description} </p>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Book;