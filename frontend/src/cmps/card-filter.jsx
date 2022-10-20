import { Paper } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
// import CheckIcon from "@material-ui/icons/Check";
// import Clear from "@material-ui/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledPaper = styled(Paper)`
  &:hover {}
  // displey: flex;
  // align-items: center;
  // justify-content: center;
  // margin: auto;
  `;


const CardFilter = ({ image, selected }) => {
  const [elevation, setElevation] = useState(selected ? 0 : 2);
  const [mouseOver, setMouseOver] = useState(false);
  // console.log('selected', selected)
  return (
    <StyledPaper
    onMouseOver={() => {
      if (!selected) setElevation(5);
      setMouseOver(true);
      }}
      onMouseLeave={() => {
        if (!selected) setElevation(2);
        setMouseOver(false);
      }}
      onClick={() => setElevation(0)}
      elevation={elevation}
      style={{
        // height: "70px",
        // width: "70px",
        // fontSize: "12px",
        boxShadow: "none",
        // width: "50px",
        // textAlign: 'center',
        // border: "1px solid #f5f5",
        // padding: "0px",
        // marginRight: 0,
        // marginLeft: 0
      }}
    >

      <div>
        <img
          src={require(`../assets/img/img-icon-carousel/${image}.jpeg`)}
          alt="card_filter"
          style={{ objectFit: "scale-down", width: "30%", margin: "auto"}} //  padding: "20px" , minHeight: "100%"
          // width="10%"
          // height="10%"
        />
      </div>
    </StyledPaper>
  );
};

export default CardFilter;
