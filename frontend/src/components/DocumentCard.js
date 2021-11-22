import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import DownloadIcon from "@material-ui/icons/GetApp";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
    imagePreview: {
        objectFit: "cover",
        objectPosition: "0 0",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    leftIcon: {
        marginRight: theme.spacing.unit
    },
    loaderContainer: {
        height: "150px",
        textAlign: "center",
        paddingTop: theme.spacing.unit * 5,
        display: "block"
    },
    card: {
        width: "100%"
    },
    previewContainer: {
        width: "600px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
    previewImage: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%"
    }
});

class DocumentCard extends React.Component {
    state = {
        deleteDialogOpen: false,
        previewOpen: false
    };

    handleDeleteClose = () => {
        this.setState({
            deleteDialogOpen: false
        });
    };

    handleDeleteConfirm = () => {
        this.props.onDelete();
        this.setState({
            deleteDialogOpen: false
        });
    };

    handleDeleteClick = () => {
        this.setState({
            deleteDialogOpen: true
        });
    };

    handlePreviewClick = () => {
        this.setState({
            previewOpen: true
        });
    };

    handlePreviewClose = () => {
        this.setState({
            previewOpen: false
        });
    };

    render() {
        const { classes, id, name, loading, previewURL, url } = this.props;
        const { deleteDialogOpen, previewOpen } = this.state;

        return (
            <React.Fragment>
                <Grid
                    item
                    key={id}
                    sm={6}
                    md={4}
                    lg={3}
                    className={classes.container}
                >
                    <Card className={classes.card}>
                        {loading ? (
                            <CardMedia className={classes.loaderContainer}>
                                <CircularProgress />
                            </CardMedia>
                        ) : (
                            <CardActionArea onClick={this.handlePreviewClick}>
                                <CardMedia
                                    className={classes.imagePreview}
                                    component="img"
                                    src={
                                        previewURL ||
                                        "https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif"
                                    }
                                    title={name}
                                />
                            </CardActionArea>
                        )}
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h6">
                                {name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                disabled={loading}
                                href={url}
                            >
                                <DownloadIcon className={classes.leftIcon} />
                                Download
                            </Button>
                            <Button
                                size="small"
                                color="secondary"
                                onClick={this.handleDeleteClick}
                                disabled={loading}
                            >
                                <DeleteIcon className={classes.leftIcon} />
                                Remove
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Dialog
                    open={deleteDialogOpen}
                    onClose={this.handleDeleteClose}
                    aria-labelledby="delete-dialog-title"
                >
                    <DialogTitle id="delete-dialog-title">
                        Are you sure you want to delete this document?
                    </DialogTitle>
                    <DialogActions>
                        <Button
                            color="secondary"
                            onClick={this.handleDeleteClose}
                        >
                            No
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.handleDeleteConfirm}
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={previewOpen} onClose={this.handlePreviewClose}>
                    <DialogContent className={classes.previewContainer}>
                        <img
                            src={previewURL}
                            className={classes.previewImage}
                            alt="Preview of pdf document"
                        />
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
}
DocumentCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    previewURL: PropTypes.string,
    loading: PropTypes.bool,
    onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(DocumentCard);
