import React, { useState, useEffect } from "react";
import "./Table.css";
import "./Map.css";
import "./News.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 355,
    padding: 20,
  },
});

function News() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://content.guardianapis.com/search?show-fields=thumbnail&q=covid&order-by=relevance&api-key=2b594032-7138-4866-b757-6bd4ed55f600"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.response.results);
          const results = data.response.results.map((result) => ({
            title: result.webTitle,
            image: result.fields.thumbnail,

            visit: result.webUrl,
          }));
          setResults(results);
        });
    };
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div className="table">
      {results.map((result) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="80"
              image={result.image}
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="h3">
                {result.title}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                {result.title}
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={result.visit}
              variant="outlined"
            >
              VIEW
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default News;
