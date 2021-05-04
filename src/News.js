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
    padding: 25,
  },
});

function News() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?q=covid&sortBy=popularity&apiKey=25a8c25897a64c1799a190c65fe351f6"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.articles);
          const articles = data.articles.map((article) => ({
            title: article.title,
            image: article.urlToImage,
            desc: article.description,
            visit: article.url,
          }));
          setArticles(articles);
        });
    };
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div className="table">
      {articles.map((article) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="120"
              width="120"
              image={article.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={article.visit}
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
