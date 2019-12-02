import { selectComicsList } from '../selectors'

describe('selectors', () => {
  describe('selectComicsList', () => {
    it('selects and sorts comics', () => {
      const comic123 = {
        num: 123,
        title: 'b'
      }
      const comic256 = {
        num: 256,
        title: 'c'
      }
      const comic321 = {
        num: 321,
        title: 'a'
      }
      const state = {
        comicsByNum: {
          256: comic256,
          321: comic321,
          123: comic123
        }
      }

      expect(selectComicsList(state)).toEqual([comic321, comic256, comic123])
    })
  })
})
