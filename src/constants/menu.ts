let menuList: any[] = []

menuList.push(
  {
    key: 'home',
    name: 'Dashboard',
    url: '/'
  },
  {
    key: 'registers',
    name: 'Cadastros',
    items: [
      {
        key: 'usuers',
        name: 'Usuários',
        url: '/users'
      }
    ]
  },
    // {
    //     key: 'reports',
    //     name: 'Relatórios',
    //     items: [
    //         {
    //             key: 'invoices',
    //             name: 'Faturas',
    //             url: '/invoices'
    //         },
    //     ]
    // }
)

export default menuList;
