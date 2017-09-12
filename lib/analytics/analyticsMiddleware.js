export default ({ dispatch, getState }) => next => action => {
  const {
    analytics
  } = action.meta || {}

  next(action)

  if (analytics) {
    ga('send', 'event', analytics)
    fbq('track', analytics.eventCategory, {
      value: analytics.eventLabel
    })
  }
}
