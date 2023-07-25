const logoutBtn = document.getElementById('logout')

const logout = async (e) => {
  e.preventDefault()
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  if (response.ok) {
    window.location.replace('/login')
  } else {
    return
  }
}

logoutBtn.onclick = (e) => logout(e)
