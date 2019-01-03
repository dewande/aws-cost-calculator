import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class DownloadButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            success: false,
        };
        this.url = props.url;
        this.handler = props.onClick;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            loading: true
        });
        fetch(this.url)
            .then(res => res.json())
            .then(
                (result) => {
                    localStorage.setItem(this.props.storagekey, JSON.stringify(result));
                    this.setState({
                        loading: false,
                        success: true,
                        offers: result.offers
                    });
                    this.timer = setTimeout(() => {
                        this.setState({
                            loading: false,
                            success: false,
                        });
                    }, 2000);
                    this.handler();
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        loading: false,
                        success: false,
                        error
                    });
                }
            );
    }

    render() {
        const { loading, success } = this.state;
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab color="primary" className={buttonClassname} onClick={this.handleClick}>
            {success ? <CheckIcon /> : <CloudDownloadIcon />}
          </Fab>
          {loading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      </div>
        );
    }
}

DownloadButton.propTypes = {
    classes: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    storagekey: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default withStyles(styles)(DownloadButton);
