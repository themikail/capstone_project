// ParentComponent.js
import React, { useState } from "react";
import ActiveMusic from "../activeMusic";
import PostFeed from "../postFeed";

export default function ListenMusic() {
  const [activeMusic, setActiveMusic] = useState(null);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <ActiveMusic activeMusic={activeMusic} setActiveMusic={setActiveMusic} />
      <PostFeed
        posts={posts}
        setPosts={setPosts}
        activeMusic={activeMusic}
        setActiveMusic={setActiveMusic}
      />
    </div>
  );
}
