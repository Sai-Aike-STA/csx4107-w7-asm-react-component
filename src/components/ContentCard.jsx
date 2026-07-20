function ContentCard({ title, content }) {
  // This component displays the data received from the current route.
  return (
    <article className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  )
}

export default ContentCard
