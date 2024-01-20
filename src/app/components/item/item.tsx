"use client";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type ItemProps = {
    name: string;
};

export default function Item(props: ItemProps) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="div"
                    sx={{height: 120}}
                    image={"https://picsum.photos/300"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="text.secondary">{props.name}</Typography>
                    <Typography variant="body2" color="text.secondary">testing</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
