function getUIState(store) {
  let result = null
  if (store && store.$db() && store.$db().model('uistate')) {
    result = store.$db().model('uistate').query().first()
  }
  return result
}

function isMobileMenuOpen(uiState) {
  return uiState && uiState.mobileMenuOpen
}

function closeMobileMenu(uiState) {
  if (uiState && uiState.mobileMenuOpen !== 'undefined') {
    uiState.mobileMenuOpen = false
    uiState.$save()
  }
}

export default ({ app, store }) => {
  // For mobile navigation when clicking on a menu link
  app.router.afterEach(() => {
    if (isMobileMenuOpen(getUIState(store))) {
      setTimeout(() => {
        closeMobileMenu(getUIState(store))
      })
    }
  })
}
