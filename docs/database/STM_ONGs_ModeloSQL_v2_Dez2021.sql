CREATE EXTENSION IF NOT EXISTS "uuid-ossp" 
CREATE EXTENSION IF NOT EXISTS "pgcrypto" 

CREATE TABLE IF NOT EXISTS UserType (
	type_id SERIAL NOT NULL,
	type_name VARCHAR(30),
	PRIMARY KEY (type_id)
);

CREATE TABLE IF NOT EXISTS Usuario (
	id uuid DEFAULT uuid_generate_v4(),
	name VARCHAR(45) NOT NULL,
	email CHARACTER VARYING NOT NULL,
	reg_number VARCHAR(14) NOT NULL,
	profile_pic VARCHAR(400) DEFAULT NULL,
	profile_cover VARCHAR(400) DEFAULT NULL,
	description_text VARCHAR(500) DEFAULT NULL,
	passwrd CHARACTER VARYING NOT NULL,
	user_type INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_type) REFERENCES UserType(type_id)
);

CREATE TABLE IF NOT EXISTS CampaignType (
	type_id SERIAL NOT NULL,
	type_name VARCHAR(30),
	PRIMARY KEY (type_id)
);

CREATE TABLE IF NOT EXISTS Campaign (
	id_campaign SERIAL NOT NULL,
	campaign_name CHARACTER VARYING NOT NULL,
	description CHARACTER VARYING NOT NULL,
	active BOOLEAN NOT NULL DEFAULT true,
	campaign_cover BYTEA DEFAULT NULL,
	creation_date DATE NOT NULL,
	created_by INT NOT NULL,
	campaign_type INT NOT NULL,
	PRIMARY KEY (id_campaign),
	FOREIGN KEY (created_by) REFERENCES Usuario(id_user),
	FOREIGN KEY (campaign_type) REFERENCES CampaignType(type_id)
);

CREATE TABLE IF NOT EXISTS DonationType (
	type_id SERIAL NOT NULL,
	type_name VARCHAR(30),
	PRIMARY KEY (type_id)
);

CREATE TABLE IF NOT EXISTS Donation (
	id_donation SERIAL NOT NULL,
	item CHARACTER VARYING NOT NULL,
	donation_type INT NOT NULL,
	campaign_id INT NOT NULL,
	PRIMARY KEY (id_donation),
	FOREIGN KEY (donation_type) REFERENCES DonationType(type_id),
	FOREIGN KEY (campaign_id) REFERENCES Campaign(id_campaign)
);

CREATE TABLE IF NOT EXISTS UserDonation (
	user_id INT NOT NULL,
	donation_id INT NOT NULL,
	num_itens INT DEFAULT 0,
	PRIMARY KEY (user_id, donation_id),
	FOREIGN KEY (user_id) REFERENCES Usuario(id_user),
	FOREIGN KEY (donation_id) REFERENCES Donation(id_donation)
);