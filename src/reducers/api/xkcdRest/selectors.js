export const selectRoot = state => state.api.xkcdRest

export const selectLatestComicNum = state => state.latestComicNum
export const selectOldestComicNum = state => state.oldestComicNum

export const selectLatestComic = state => {
  const latestComicNum = selectLatestComicNum(state)
  return latestComicNum ? state.comicsByNum[latestComicNum] : null
}

export const selectComicsList = state => {
  return Object.values(state.comicsByNum).sort((a, b) => b.num - a.num)
}
