
CREATE TABLE "profile" (
    id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
            about VARCHAR(100) NOT NULL,
                avatarImage VARCHAR(100) NOT NULL,
                    socialMediaURL VARCHAR(100) NOT NULL,
                        backgroundImage VARCHAR(100) NOT NULL,
                            userId INTEGER REFERENCES users(id)
                            )