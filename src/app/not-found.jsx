import Link from "next/link";
function notfound() {
  return (
    <div>
      <h1>Not-Found</h1>
      <p>Sorry,The page you are looking for does not exist</p>
      <Link href="/">Return home</Link>
    </div>
  );
}

export default notfound;
