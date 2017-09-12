export default {
  example: (state = {}, { type, payload }) => {
    switch (type) {
      case 'EXAMPLE_ACTION':
        return {
          ...state
        }
      default:
        return state
    }
  }
}

export function exampleAction ({ sentence }) {
  return {
    type: 'EXAMPLE_ACTION',
    payload: {
      sentence
    },
    meta: {
      ga: {
        eventCategory: 'Search',
        eventName: 'search',
        eventLabel: sentence
      }
    }
  }
}