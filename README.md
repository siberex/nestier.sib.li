# Nestier

[nestier.sib.li](https://nestier.sib.li)

Sandbox app to play with [Nest framework](https://github.com/nestjs/nest)


### Google App Engine deployment

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/) 

    - Init profile:

            gcloud init
        
    - Or set Project ID for existing profile:

            gcloud config set project YOUR-PROJECT-ID

2. Deploy (version will be set to `prod-1`)

        yarn deploy -v prod-1

### Run locally with Docker

1. Install [Docker](https://docs.docker.com/install/) with [docker-compose](https://docs.docker.com/compose/install/)

2. Run:

        docker-compose up -d


To stop containers, run:

    docker-compose down
