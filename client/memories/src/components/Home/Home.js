import React, { useState, useEffect } from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "../../styles";
import { getPosts } from "../../actions/posts";

import Posts from "../posts/Posts";
import Form from "../form/Form";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
