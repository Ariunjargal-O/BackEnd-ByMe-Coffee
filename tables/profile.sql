create table
   " profile" (
        id serial primary key,
        name varchar(100) not null,
        about varchar(100) not null,
        avatarImage varchar(100) not null,
        socialMediaURL varchar(100) not null,
        backgroundImage varchar(100) not null,
        successMessage varchar(100) not null,
        userId integer "user"(id),
        createdAt timestamp default current_timestamp,
        updatedAt timestamp default current_timestamp
    )














