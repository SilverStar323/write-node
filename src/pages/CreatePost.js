export const CreatePost = () => {
  return (
    <main className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost">
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required />
        <textarea className="description" name="description" placeholder="Description" maxLength="600" required></textarea>
        <button type="submit" className="submit">Create</button>
      </form>
    </main>
  )
}
