"use strict";
var routes = [{
        path: '/',
        componentUrl: './index.html',
    },

    {
        path: '/ads/',
        url: './ads.html',
    },

    {
        path: '/ads-details/',
        url: './ads-details.html',
    },

    {
        path: '/single-tender/:id/:image_url',
        async: function (routeTo, routeFrom, resolve, reject) {
          // Requested route
          console.log(routeTo);
          var tender_id = routeTo.params.id;
          var image_url = routeTo.params.image_url;
          // Get external data and return template7 template
          this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/singleTender/${tender_id}`, function (data) {
              console.log(data)
              console.log(routeTo.params.id);
            resolve(
              // How and what to load: template
              {
                componentUrl: './single-tender.html'
              },
              // Custom template context
              {
                context: {
                  tender: data,
                  image:image_url
                },
              }
            );
          });
        }
      },

      {
        path: '/single-job/:id/:image_url',
        async: function (routeTo, routeFrom, resolve, reject) {
          // Requested route
          console.log(routeTo);
          console.log(routeTo)
          var job_id = routeTo.params.id;
          // Get external data and return template7 template
          this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/singleJob/${job_id}`, function (data) {
              console.log(data)
            resolve(
              // How and what to load: template
              {
                componentUrl: './single-job.html'
              },
              // Custom template context
              {
                context: {
                  job: data,
                },
              }
            );
          });
        }
      },

      {
        path: '/news-single/:id',
        async: function (routeTo, routeFrom, resolve, reject) {
          // Requested route
          console.log(routeTo);
          var county_id = routeTo.params.id;
          // Get external data and return template7 template
          this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/singleCounty/${county_id}`, function (data) {
              console.log(data)
            resolve(
              // How and what to load: template
              {
                componentUrl: './counties-single.html'
              },
              // Custom template context
              {
                context: {
                  article: data,
                },
              }
            );
          });
        }
      },

    {
        path: '/add-ads/',
        url: './add-ads.html',
    },

    {
        path: '/add-ads-product-details/',
        url: './add-ads-product-details.html',
    },

    {
        path: '/my-ads/',
        url: './my-ads.html',
    },

    {
        path: '/favorites/',
        url: './favorites.html',
    },
    {
      path:'/job-categories/',
      url:'./job-categories.html'
    },

    {
      path:'/tender-categories/',
      url:'./tender-categories.html'
    },

    {
      path:'/ministry-categories',
      url:'./ministry-category.html'
    },

    {
        path: '/search/',
        url: './search.html',
    },

    {
        path: '/profile/',
        url: './profile.html',
    },

    {
        path: '/categories/',
        url: './categories.html',
    },

    //services routes
    {
        path: '/category-details/',
        componentUrl: './category-details.html',
    },

    {
        path: '/job-details/',
        componentUrl: './jobs-details.html',
    },
     

    {
        path: '/news-details/',
        componentUrl: './news-details.html',
    },

    {
      path:'/counties-details',
      componentUrl:'./counties-details.html',
    },

    {
        path: '/ministries-details/',
        componentUrl: './ministries-details.html',
    },

    {
        path: '/big4agenda-details/',
        componentUrl:'./big4agenda-details.html',
    },

    {
        path: '/presidency-details/',
        url: './presidency-details.html',
    },

    {
        path: '/ict-details/',
        url: './ict-details.html',
    },

    {
        path: '/sports-details/',
        url: './sports-details.html',
    },

    {
        path: '/notices/',
        componentUrl: './notices.html',
    },

    //mygov news
    {
        path: '/mygov-english/',
        url: './mygov-news.html',
    },

    //notices documents pdf

    {
        path: '/notice1/',
        url: './images/notices/documents/pdf1.pdf',
    },

    //end of notices documents

    //news-single
    {
      path:'/single-article/',
      url:'./news-single.html'
    },
    
    {
        path: '/chat/',
        url: './chat.html',
    },

    {
        path: '/notifications/',
        url: './notifications.html',
    },

    {
        path: '/settings/',
        url: './settings.html',
    },

    {
        path: '/blog/',
        url: './blog.html',
    },

    {
        path: '/blog-details/',
        url: './blog-details.html',
    },

    {
        path: '/sign-in/',
        componentUrl: './sign-in.html',
    },

    {
        path: '/sign-up/',
        url: './sign-up.html',
    },

    {
        path: '/contact/',
        url: './contact.html',
    },

    {
        path: '/pages/',
        url: './pages.html',
    },

    {
        path: '/blank-page/',
        url: './blank-page.html',
    },

];