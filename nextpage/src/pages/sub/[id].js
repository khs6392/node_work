//[id].js <=== localhost/sub/2

import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>/pages/sub/[id].js</h1>
      <p>parameter id : {id}</p>
      <a href="/">Home</a>
    </>
  );
}
