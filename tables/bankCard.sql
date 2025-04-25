create table "bankCard"(
    id serial primary key,
    country varchar(100) not null,
    firstName varchar(100) not null,
    lastName varchar(100) not null,
    cardNumber varchar(100) not null,
    expiryDate date not null,
    userId integer "users"(id),
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
)