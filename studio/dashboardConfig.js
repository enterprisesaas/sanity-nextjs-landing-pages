export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6362a0839cc320253bf25cc6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y2ngpe21',
                  apiId: 'b68484ab-b85c-4b74-9a2d-621c80552bd2'
                },
                {
                  buildHookId: '6362a083e8082d2ef90f7b9b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s44cs2xt',
                  apiId: '3f970e98-2124-43a2-a269-c3c1381691ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enterprisesaas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s44cs2xt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
