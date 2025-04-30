CREATE TABLE "bankCard" (
    id SERIAL PRIMARY KEY,
        country VARCHAR(100) NOT NULL,
            firstName VARCHAR(100) NOT NULL,
                lastName VARCHAR(100) NOT NULL,
                    cardNumber VARCHAR(100) NOT NULL,
                        expiryDate DATE NOT NULL,
                            userId INTEGER REFERENCES "users"(id),
                                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                                    )