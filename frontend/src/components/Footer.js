import React from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FavouriteIcon from "@material-ui/icons/FavoriteBorder";

const styles = theme => ({
    footer: {
        paddingLeft: theme.spacing.unit * 6,
        paddingRight: theme.spacing.unit * 6,
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        flexShrink: 0,
        backgroundColor: theme.palette.primary.dark
    },
    text: {
        display: "flex",
        alignItems: "center",
        color: "#fff !important"
    },
    icon: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.footer}>
                <Typography
                    variant="h6"
                    align="left"
                    color="textSecondary"
                    className={classes.text}
                >
                    Made with
                    <FavouriteIcon className={classes.icon} />
                    @HackGT
                </Typography>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
