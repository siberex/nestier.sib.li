# Nestier

[nestier.sib.li](https://nestier.sib.li)

Sandbox app to play with [Nest framework](https://github.com/nestjs/nest)


### Google App Engine deployment

1. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/) 

    - Init profile:

            gcloud init
        
    - Or set Project ID for existing profile:

            gcloud config set project YOUR-PROJECT-ID
        
2. Install dependencies:

        yarn install

3. Deploy (version will be set to `prod-1`)

        yarn deploy:gae -v prod-1