create table
    users (
        id serial primary key,
        email varchar(100) not null unique,
        password varchar(100) not null,
        username varchar(100) not null,
        name varchar(100) not null,
        createdAt timestamp default current_timestamp,
        updatedAt timestamp default current_timestamp
    ) 
    
    
insert to users () values ("")
select * from users



