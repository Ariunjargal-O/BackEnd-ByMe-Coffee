create table
    "user" (
        id serial primary key,
        email varchar(100) not null unique,
        password varchar(100) not null,
        username varchar(100) not null,
        receivedDonation integer not null default 0,
        createdAt timestamp default current_timestamp,
        updatedAt timestamp default current_timestamp
    ) 
    
    
    
    insert into user (username, password, email,receivedDonation ) values ('arii', '12345678','arii@gmail.com','123')

  u
select
    *
from
    users



