export default function Page({ params }) {
  return (
    <div>
      My Post: {params.slug}
      <p>
        <a href="/">Home</a>
      </p>
    </div>
  );
}
