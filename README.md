# Nestier

[nestier.sib.li](https://nestier.sib.li)

Sandbox app to play with [Nest framework](https://github.com/nestjs/nest)


### Summary

api — API service with Nest.js and [TypeORM](https://typeorm.io/).

web — Angular Universal app which connects to the api.


### API doc

https://nestier.sib.li/api/doc/


### Prerequisites

- [Install yarn](https://yarnpkg.com/en/docs/install)

### Google App Engine deployment

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/) 

    - Init profile:

            gcloud init
        
    - Or set Project ID for existing profile:

            gcloud config set project YOUR-PROJECT-ID

2. Create `api/app.env.yaml` files based on `api/app.env.example.yaml` and set DB settings.

    - For example, if you are using [Google Cloud SQL](https://cloud.google.com/sql/docs/postgres/create-instance),
     obtain connection name for the [Cloud SQL instance](https://console.cloud.google.com/sql/instances) and set `POSTGRES_HOST: '/cloudsql/INSTANCE_CONNECTION_NAME'` and `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` accordingly. 
    
    - For [Heroku](https://www.heroku.com/), acquire database credentials in Service Settings dashboard or via Heroku CLI:
        
            heroku pg:credentials:url -a HEROKU_APP_NAME

3. Deploy (version will be set to `prod-1`)

        yarn deploy:gae -v prod-1


### Run locally with Docker

1. Install [Docker](https://docs.docker.com/install/) with [docker-compose](https://docs.docker.com/compose/install/)

2. Run:

        yarn start:docker

    To stop containers, run:

        docker-compose down
