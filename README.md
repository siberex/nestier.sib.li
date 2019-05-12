# Nestier

[nestier.sib.li](https://nestier.sib.li)

Sandbox app to play with [Nest framework](https://github.com/nestjs/nest)


### Summary

api — API service with Nest.js and [TypeORM](https://typeorm.io/).

web — Angular Universal app which connects to the API.


### API doc

https://nestier.sib.li/api/doc/


### Google App Engine deployment

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/) 

    - Init profile:

            gcloud init
        
    - Or get/set Project ID for existing profile:

            gcloud config get-value project
            gcloud config set project YOUR-PROJECT-ID

2. Create `api/app.env.yaml` files based on `api/app.env.example.yaml` and set DB settings.

    - For example, if you are using [Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/create-instance),
     obtain connection name for the [Cloud SQL instance](https://console.cloud.google.com/sql/instances) and set `POSTGRES_HOST: '/cloudsql/INSTANCE_CONNECTION_NAME'` and `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` accordingly. 
    
    - For [Heroku](https://www.heroku.com/), acquire database credentials in Service Settings dashboard or via Heroku CLI:
        
            heroku pg:credentials:url -a HEROKU_APP_NAME

3. Deploy (version will be set to `prod-1`)

        gcloud app deploy dispatch.yaml web/app.yaml api/app.yaml --quiet --promote -v prod-1


### Run locally with Docker

1. Install [Docker](https://docs.docker.com/install/) with [docker-compose](https://docs.docker.com/compose/install/)

2. Run:

        docker-compose up -d --force-recreate --build

    To stop containers, run:

        docker-compose down


### Run dev server locally

1. [Install yarn](https://yarnpkg.com/en/docs/install)

2. Run API (`cd api`):
 
    1. With Webpack Hot Module Reloading:        
  
            yarn start:hmr
            
        Webpack watcher will [partially recompile](https://github.com/nestjs/nest/issues/442) only changed sources when some code got changed.
        
        After first build it will launch compiled `dist/main.js` (which will be reloaded automatically on subsequent builds).

    2. **OR** with ts-node-dev (will recompile all sources when some code got changed):

            yarn start:dev

3. Run Web (`cd web`):

        yarn start:dev

