import React from "react";
                        import Card from "@material-ui/core/Card";
                        import CardActions from "@material-ui/core/CardActions";
                        import CardContent from "@material-ui/core/CardContent";
                        import CardMedia from "@material-ui/core/CardMedia";
                        import Button from "@material-ui/core/Button";
                        import Typography from "@material-ui/core/Typography";
                        import "./NewsItem.css";
                        import { CardHeader } from "@material-ui/core";
                        import moment from "moment";
                        import EventAvailableSharp from "@material-ui/icons/EventAvailableSharp";
                        import InfoRounded from "@material-ui/icons/InfoRounded";
                        import WarningRounded from "@material-ui/icons/WarningRounded";

                        class NewsItem extends React.Component {
                            render() {
                                var statusIcon;
                                if (this.props.cardInfo.type === "Warning") {
                                    statusIcon = (<WarningRounded className="status" color="primary" />);
                                } else if(this.props.cardInfo.type === "Info") {
                                    statusIcon = (<InfoRounded className="status" color="primary" />);
                                } else {
                                    statusIcon = (<EventAvailableSharp className="status" color="primary" />);
                                }
                                var padding = "15%";
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
                                                subheader={
                                                    <Typography color="textSecondary">
                                                        {moment(this.props.cardInfo.date).format("DD-MM-YYYY HH:MM")}
                                                    </Typography>
                                                }
                                            />
                                            <CardMedia
                                                style={mediaClass}
                                                image={this.props.cardInfo.imageURL}
                                                title="Imagen Noticia"
                                            />
                                            <CardContent>
                                                <Typography className="pos" color="textPrimary">
                                                    Por <b>{this.props.cardInfo.publisher}</b>
                                                </Typography>
                                                <Typography className="pos" color="textSecondary" >
                                                    <small>{this.props.cardInfo.email}</small>
                                                </Typography>
                                                <Typography>
                                                    {this.props.cardInfo.content}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Ver más</Button>
                                            </CardActions>
                                        </Card>
                                        <br></br>
                                    </div>
                                );
                            }
                        }

                        export default NewsItem;