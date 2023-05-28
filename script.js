const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTabContent = document.querySelector(tab.dataset.tabTarget)

    ;[...tabs, ...tabContents].forEach(element => {
      element.classList.remove('active')
    })

    tab.classList.add('active')
    targetTabContent.classList.add('active')
  })
})
