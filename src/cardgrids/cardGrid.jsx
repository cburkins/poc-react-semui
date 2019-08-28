import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const DataCardContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
`;

// Create a functional component
const CardGrid = function(props) {
    let style = {
        gridTemplateColumns: `repeat(${props.columns}, ${props.column_width})`,
        gridTemplateRows: `repeat(${props.rows},${props.row_height})`
    };
    return <DataCardContainer style={style}>{props.children}</DataCardContainer>;
};

// Set default props in case they aren't passed to us by the caller
CardGrid.defaultProps = {
    column_width: "1fr",
    row_height: "4.0vw"
};

CardGrid.propTypes = {
    rows: PropTypes.string.isRequired,
    columns: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    column_width: PropTypes.string,
    row_height: PropTypes.string
};

export default CardGrid;
