import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./diligence.css";
import { CardHeader } from "@material-ui/core";
import EventAvailableSharp from "@material-ui/icons/EventAvailableSharp";
import InfoRounded from "@material-ui/icons/InfoRounded";
import WarningRounded from "@material-ui/icons/WarningRounded";

class Diligence extends React.Component {
    render() {
        var statusIcon;
        if (this.props.cardInfo.type === "Warning") {
            statusIcon = (<WarningRounded className="status" color="primary" />);
        } else if(this.props.cardInfo.type === "Info") {
            statusIcon = (<InfoRounded className="status" color="primary" />);
        } else {
            statusIcon = (<EventAvailableSharp className="status" color="primary" />);
        }
        var padding = "40%";
        if (this.props.cardInfo.imageURL === "undefined") {
            padding = "0%";
        }
        const mediaClass = {"height": 0, "paddingTop": padding};

        return (
            <div>
                <Card className="card">
                    <CardHeader
                        action={statusIcon}
                        title={
                            <Typography variant="h5">
                             {this.props.cardInfo.title}
                            </Typography>
                        }
                    />
                    <CardMedia
                        style={mediaClass}
                        image={this.props.cardInfo.imageURL}
                        title="Imagen Proceso"
                    />
                    <CardContent>
                        <Typography className="pos" color="textPrimary">
                            <b>{this.props.cardInfo.publisher}</b>
                        </Typography>
                        <Typography className="pos" color="textSecondary" >
                            <small>{this.props.cardInfo.email}</small>
                        </Typography>
                        <Typography>
                            {this.props.cardInfo.content}
                        </Typography>
                        <Typography>
                            Toda la información <a href={this.props.cardInfo.infoURL}>AQUÍ</a>
                        </Typography>
                    </CardContent>
                </Card>
                <br></br>
            </div>
        );
    }
}

export default Diligence;