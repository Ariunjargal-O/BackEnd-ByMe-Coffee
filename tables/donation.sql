create table "donation" (
    id serial primary key,
    amount integer not null,
    specialMessage varchar(100) not null,
    socialURLOrBuyMeACoffee varchar(100) not null,
    donorId integer "users"(id),
    recipientId integer "users"(id),
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
)
















