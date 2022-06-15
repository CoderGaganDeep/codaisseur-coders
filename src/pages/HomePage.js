import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/thunks";
import { selectFeedPosts } from "../store/feed/selectors";

import "./homepage.css";

export default function Homepage() {
  const dispatch = useDispatch();

  const posts = useSelector(selectFeedPosts);
  //Dispatch fetchPosts inside useEffect. This is the necessary step to fetch the data and put it in the Redux store.

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  //Map over the variable you assigned to the selector (the one that currently holds the state) to display the data, also create a condition with "loading" to prevent it from breaking when the data is not there.
  return (
    <div style={{ border: "0px solid black", textAlign: "center" }}>
      <h2>Posts Feed</h2>
      {
        !posts.length
          ? "Loading"
          : posts.map((post) => (
              <p style={{ border: "3px solid black" }}>
                <h2>{post.title}</h2>
                {post.tags.map((t) => (
                  <span key={t.id} className="Tag">
                    Tag:
                    {t.tag}
                  </span>
                ))}

                <p>{post.content}</p>
                <span className="Tag">Id:{post.id} </span>
                <span className="Tag">Created at:{post.createdAt} </span>
                <span className="Tag"> Updated at:{post.updatedAt} </span>
              </p>
            )) //you can expand this
      }
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
