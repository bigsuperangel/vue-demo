export default [
  {
    name: '__checkbox',   // <----
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  },
  {
    name: 'name',
    sortField: 'name'
  },
  {
    name: 'email',
    sortField: 'email'
  },
  {
    name: 'birthdate',
    titleClass: 'center aligned',
    dataClass: 'center aligned',
    callback: 'formatDate|DD-MM-YYYY'
  },
  {
    name: 'nickname',
    callback: 'allcap'
  },
  {
    name: 'gender',
    titleClass: 'center aligned',
    dataClass: 'center aligned',
    callback: 'genderLabel'
  },
  {
    name: 'salary',
    titleClass: 'center aligned',
    dataClass: 'right aligned',
    callback: 'formatNumber',
    visible: false
  },
  {
    name: '__component:custom-actions',   // <----
    title: 'Actions',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  }
]
