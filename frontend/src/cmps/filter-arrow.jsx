import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ModalFilter } from "./modal-filter";

function Arrow(props) {
    const { className, onClick, isBack } = props
    const styles = {
        fontSize: "22px",
        display: "block",
        marginTop: "-25px",
        position: "fixed",
        // height: "20px",
        // width: "20px",
        color: "black",
        opacity: "1",
        border: "1px solid rgb(184, 181, 181)",
        borderRadius: "50%",
        // zIndex: "100",
    }


    return (
        <div className={className} style={{ zIndex: "100" }}>
            {isBack ? (
                <ArrowBackIosIcon style={styles} onClick={onClick} />
            ) : (
                <ArrowForwardIosIcon style={styles} onClick={onClick} />
            )}
        </div>
    );
}


export default Arrow;