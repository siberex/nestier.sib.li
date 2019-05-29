### Api

+ Add Webpack HMR for dev
  https://docs.nestjs.com/techniques/hot-reload

- Add JWT auth with related guards

- Add GraphQL

- Add config environment variable to disable swagger docs on prod

- replace crypto.pbkdf2 with crypto.scrypt for passwords hashing
    - use await with promise, not bare *Sync methods 
    - possibly with kdf() and verify() wrappers for HMAC addition:
        https://github.com/chrisveness/scrypt-kdf/blob/master/scrypt.js
    - use crypto.timingSafeEqual() for verification

- add health checks with terminus: https://docs.nestjs.com/recipes/terminus

- add tests

#### Bugs:

  + Remove `?skip=n` query param requirement from `/books` path

### Web

- Add pagination for /books route

- Add "Add book" UI

- Minor frontend stuff:

  - add Font-display prop to Google Fonts loader

  - add loading="lazy" for images 
  

### Deployment

- Add Dockerfiles for production

- Add static handlers for App Engine deployment (Web)

- Try Google Cloud Run
  https://cloud.google.com/run/docs/quickstarts/build-and-deploy


### General

- Check out [Nx](https://nx.dev/)
   
    - move DTOs to shared library

    - add webpack proxy to API for local (no-docker) dev

