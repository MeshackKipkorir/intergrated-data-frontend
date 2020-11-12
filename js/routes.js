"use strict";
var routes = [{
        path: '/index/',
        url:'./index.html'
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
      path:'/dashboard/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Requested route
        console.log(routeTo);
        app.preloader.show();
        // Get external data and return template7 template
        if(sessionStorage.getItem('user')!=null){
        this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/latestJobs`, function (data) {
            console.log(data)
            app.preloader.hide();
            
            console.log(routeTo.params.id);
          resolve(

            // How and what to load: template
            {
              componentUrl: './dashboard.html'
            },
            // Custom template context
            {
              context: {
                jobs: data,
              },
            }
          );
        });
        this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/latestTenders`, function (data) {
            console.log(data)
            app.preloader.hide();

            console.log(routeTo.params.id);
          resolve(

            // How and what to load: template
            {
              componentUrl: './dashboard.html'
            },
            // Custom template context
            {
              context: {
                tenders: data,
              },
            }
          );
        });
      }
      else{
            resolve(
                {
                  componentUrl:'./sign-in.html'
                }
              )    
      }
      }
    },

    {
      path: '/dashboard-test/',
      async(routeTo, routeFrom, resolve, reject) {
        if (sessionStorage.getItem('user') != null) {
          resolve({componentUrl:'./dashboard.html'})
        } else {
          resolve({componentUrl:'./sign-in.html'})
        }
      }
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

// jobs filter
    {
      path: '/filtered-jobs/:filter/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Requested route
        console.log(routeTo);
        var filter = routeTo.params.filter;
        // Get external data and return template7 template
        this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/filterJobs/${filter}`, function (data) {
            console.log(data)
            app.preloader.hide();

          resolve(
            // How and what to load: template
            {
              componentUrl: './filtered-jobs.html'
            },
            // Custom template context
            {
              context: {
                data: data,
              },
            }
          );
        });
      }
    },

    //filter tenders

    {
      path: '/filtered-tenders/:filter/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Requested route
        console.log(routeTo);
        var filter = routeTo.params.filter;
        // Get external data and return template7 template
        this.app.request.json(`https://demos.mediapal.net/mygov-scraper/scraper/public/api/filterTenders/${filter}`, function (data) {
            console.log(data);
            app.preloader.hide();

          resolve(
            // How and what to load: template
            {
              componentUrl: './filtered-tenders.html'
            },
            // Custom template context
            {
              context: {
                data: data,
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
        path: '/my-tenders/',
        async: function (routeTo, routeFrom, resolve, reject) {
          // Requested route
          console.log(routeTo);
          // Get external data and return template7 template
          this.app.request.json('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchTenderNotification/'+sessionStorage.getItem('user'), function (data) {
            resolve(
              // How and what to load: template
              {
                componentUrl: './tender-notification.html'
              },
              // Custom template context
              {
                context: {
                  tender_notifications: data,
                },
              }
            );
          });
        }
      },

    {
      path: '/favorites/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Requested route
        console.log(routeTo);
        // Get external data and return template7 template
        this.app.request.json('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchNotification/'+sessionStorage.getItem('user'), function (data) {
          resolve(
            // How and what to load: template
            {
              componentUrl: './favorites.html'
            },
            // Custom template context
            {
              context: {
                notifications: data,
              },
            }
          );
        });
      }
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
        async(routeTo, routeFrom, resolve, reject) {
          
          if (sessionStorage.getItem('user') != null) {
            resolve({componentUrl:'./profile.html'})
          } else {
            resolve({componentUrl:'./sign-in.html'})
          }
        }
      },

    {
        path: '/categories/',
        url: './categories.html',
    },

    //services routes
    {
        path: '/category-details/',
        async(routeTo, routeFrom, resolve, reject) {
          if (sessionStorage.getItem('user') != null) {
            resolve({componentUrl:'./category-details.html'})
          } else {
            resolve({componentUrl:'./sign-in.html'})
          }
        }
      },

    {
        path: '/job-details/',
        async(routeTo, routeFrom, resolve, reject) {
          if (sessionStorage.getItem('user') != null) {
            resolve({componentUrl:'./jobs-details.html'})
          } else {
            resolve({componentUrl:'./sign-in.html'})
          }
        }
      },
     

    {
        path: '/news-details/',
        componentUrl: './news-details.html',
    },

    {
      path:'/counties-details',
      async(routeTo, routeFrom, resolve, reject) {
        if (sessionStorage.getItem('user') != null) {
          resolve({componentUrl:'./counties-details.html'})
        } else {
          resolve({componentUrl:'./sign-in.html'})
        }
      }
    },

    {
        path: '/ministries-details/',
        async(routeTo, routeFrom, resolve, reject) {
          if (sessionStorage.getItem('user') != null) {
            resolve({componentUrl:'./ministries-details.html'})
          } else {
            resolve({componentUrl:'./sign-in.html'})
          }
        }
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
      async: function (routeTo, routeFrom, resolve, reject) {
        // Requested route
        console.log(routeTo);
        console.log(sessionStorage.getItem('user'));
        // Get external data and return template7 template
        if(sessionStorage.getItem('user') != null){
          app.preloader.show();

        this.app.request.json('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchNotification/'+sessionStorage.getItem('user'), function (data) {
          app.preloader.hide();
  
        resolve(
            // How and what to load: 
            {
              componentUrl: './notifications.html'
            },
            // Custom template context
            {
              context: {
                notifications: data,
              },
            }
          );
        });
      }
      else{
        resolve(
          {
           componentUrl:'./sign-in.html'
          }
        ) 
      }
      }
  },
  {
    path: '/logout/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Requested route
      console.log(routeTo);
      console.log(sessionStorage.getItem('user') == null);
      sessionStorage.setItem('user',null);
      console.log('current situeshen '+sessionStorage.getItem('user'));

      // Get external data and return template7 template
      if(sessionStorage.getItem('user') != null){
      this.app.request.json('https://demos.mediapal.net/mygov-scraper/scraper/public/api/fetchNotification/'+sessionStorage.getItem('user'), function (data) {
        resolve(
          // How and what to load: 
          {
            componentUrl: './sign-in.html'
          },
          // Custom template context
          {
            context: {
              notifications: data,
            },
          }
        );
      });
    }
    else{
      app.dialog.alert('please login!');
      app.views.main.router.navigate('/sign-in/');  
    }
    }
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
        async(routeTo, routeFrom, resolve, reject) {
         resolve(
           {
             componentUrl:'./sign-in.html'
           }
         );
        }
    },

    {
        path: '/sign-up/',
        componentUrl: './sign-up.html',
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

    {
      path:'/register/',
      url:'./register.html',
    },

];