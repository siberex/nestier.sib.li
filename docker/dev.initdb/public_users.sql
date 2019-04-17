create type users_role_enum as enum ('guest', 'user', 'admin');

create table users
(
    id    serial                                        not null
            constraint users_pk
            primary key,
    login varchar(200)                                  not null,
    hash  varchar(128)                                  not null,
    salt  varchar(32)                                   not null,
    role  users_role_enum default 'user'::users_role_enum not null
);

create unique index users_login
    on users (login);

INSERT INTO public.users (id, login, hash, salt, role) VALUES (1, 'admin', '91b5b1cb7da2a37b9e6bb8c65b3f40eddbabf303cce3fcd7f5a46c58ecb94cad1d4a8771dffb96b9c9f3d829c55453046325f8bebf571593abbc0520329c4370', '462379ec9d3cc991117017bf1371ec7e', 'admin');
