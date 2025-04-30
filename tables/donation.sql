 
CREATE TABLE "donation" (
    id SERIAL PRIMARY KEY,
        amount INTEGER NOT NULL,
            specialMessage VARCHAR(100) NOT NULL,
                socialURLOrBuyMeACoffee VARCHAR(100) NOT NULL,
                    donorId INTEGER REFERENCES "users"(id),
                        recipientId INTEGER REFERENCES "users"(id),
                            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                                )