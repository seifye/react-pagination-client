 /* Instead of having one giant array (followers), we then have array of arrays (newFollowers) */
 
const paginate = (followers) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
