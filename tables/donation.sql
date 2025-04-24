create table donation (
    id serial primary key,
    amount serial not null,
    specialMessage varchar(100) not null,
    socialURLOrBuyMeACoffee varchar(100) not null,
    donorId serial not null,
    recipientId serial not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
)