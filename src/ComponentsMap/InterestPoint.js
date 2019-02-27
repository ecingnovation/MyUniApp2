import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 160,
    }
});

class InterestPoints extends React.Component {


    constructor(props) {
                  super(props);
                  console.log(props.description+'lksdjfldsf');

              }
    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={this.props.image}
                    IMAGEN
                    title={this.props.title}
                    Título

                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            {this.props.title}
                            Título
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {this.props.description}
                            Description
                        </Typography>
                    </CardContent>

                </div>

            </Card>
        );
    }
}

InterestPoints.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(InterestPoints);