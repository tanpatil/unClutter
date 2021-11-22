import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const styles = theme => ({
    input: {
        display: "none"
    }
});

class UploadButton extends React.Component {
    render() {
        const { classes, onUpload } = this.props;

        return (
            <React.Fragment>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="image-input"
                    type="file"
                    capture="camera"
                    onChange={onUpload}
                />
                <label htmlFor="image-input">
                    <Button variant="outlined" color="primary" component="span">
                        <PhotoCameraIcon />
                        &nbsp;Add photo
                    </Button>
                </label>
            </React.Fragment>
        );
    }
}
UploadButton.propTypes = {
    onUpload: PropTypes.func.isRequired
};

export default withStyles(styles)(UploadButton);
