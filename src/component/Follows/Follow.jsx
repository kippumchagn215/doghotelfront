import React from "react";
import FollowIcon from "./FollowIcon";
function Follow() {
  return (
    <section id="follows">
      <h2 className={"follow-heading"}>Follow us on</h2>
      <FollowIcon
        icon={"facebook"}
        href={"https://www.facebook.com/profile.php?id=100003869940524"}
      />
      <FollowIcon
        icon={"youtube"}
        href={"https://www.youtube.com/channel/UC1bUap6JCsJJPnj_4DA7Skw/videos"}
      />
      <FollowIcon
        icon={"linkedin"}
        href={"https://www.linkedin.com/in/kippum-chang-1938021a3/"}
      />
    </section>
  );
}
export default Follow;
