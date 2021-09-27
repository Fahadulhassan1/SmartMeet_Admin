import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    upperCard: {
        padding: 10,
        borderRadius: "10px 10px 0px 0px",
        marginRight: 40,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    },
    uppercardtypography: {
        color: "#00b59c",
        fontWeight: "bold",
    },
    bottomCard: {
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        borderRadius: 20,
        padding: 25,
    },
    rowheader: {
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        background: "linear-gradient(95deg, #9cffac 0%, #90edb3 59.91%, #7bcbc0 100%)",
        borderRadius: 20,
        color: "#fff",
        fontWeight: "bold",
        padding: 20,
    },
    bottomcardtypography: {
        fontWeight: "bold",
        textAlign: "left"
    },
    listCard: {
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        marginTop: 30,
    },
    rowbody: {
        color: "#7bcbc0",
        padding: 20,
        marginTop: 10,
    },
    btncontainer: {
        color: "#fff"
    },
    btmbtngreen: {
        color: "#fff",
        background: "#2fc452",
        fontWeight: "bold",
        borderRadius: "10px 0px 0px 10px",
    },
    btmbtnred: {
        color: "#fff",
        background: "#e85e5e",
        fontWeight: "bold",
        borderRadius: "0px 10px 10px 0px",
    }
}))

export default function UsersCard() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={classes.bottomCard}>
                    <Grid container className={classes.rowheader}>
                        <Grid item sm={2} xs={6}>
                            <Typography variant="body1" className={classes.bottomcardtypography}>USER NAME</Typography>
                        </Grid>
                        <Grid item sm={4} xs={6}>
                            <Typography variant="body1" className={classes.bottomcardtypography}>REGISTERED TIME/DATE </Typography>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Typography variant="body1" className={classes.bottomcardtypography}>PROFILE</Typography>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <Typography variant="body1" className={classes.bottomcardtypography}>ACTION</Typography>
                        </Grid>
                    </Grid>
                    <Card className={classes.listCard}>
                        <RowBody />
                        <RowBody />
                        <RowBody />
                        <RowBody />
                    </Card>
                </Card>
            </Grid>
        </Grid>
    )
}

function RowBody() {
    const classes = useStyles();
    return (
        <Grid container className={classes.rowbody}>
            <Grid item sm={2} xs={6}>
                <Typography variant="body1" className={classes.bottomcardtypography}>abdulhadi98</Typography>
            </Grid>
            <Grid item sm={4} xs={6}>
                <Typography variant="body1" className={classes.bottomcardtypography}>21/02/2021 12:21.06</Typography>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Typography variant="body1" className={classes.bottomcardtypography}>View</Typography>
            </Grid>
            <Grid item sm={3} xs={6}>
                <Grid container>
                    <Grid item xs={6}>
                        <Button variant="container" className={classes.btmbtngreen} fullWidth>
                            <Typography variant="body1">ACCEPT</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="container" className={classes.btmbtnred} fullWidth>
                            <Typography variant="body1">REJECT</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}