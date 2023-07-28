// Logout the user
const logout = async () => {
  await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.replace('/login')
}
// Delete a users post
const deletePost = async (id) => {
  await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  })
  window.location.replace('/dashboard')
}
