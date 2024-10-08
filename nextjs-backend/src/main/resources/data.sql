CREATE SCHEMA AIRPORT;
SET SCHEMA AIRPORT;

CREATE TABLE DEPARTURES (FLIGHT_NUM VARCHAR(10), AIRPORT_DEST_SIG VARCHAR(3), AIRPORT_DEST VARCHAR(30), DEP_TIME TIME);
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AZ 1698', 'FCO', 'Roma Fiumicino', '08:00');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AR 7224', 'BCN', 'Barcellone', '09:30');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('UX 3125', 'AHO', 'Alghero', '09:45');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('DL 6698', 'LIN', 'Milano Linate', '10:00');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('W6 1442', 'WAW', 'Varsavia', '10:10');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('XZ 2711', 'PMO', 'Palermo', '10:25');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AZ 5761', 'GVA', 'Ginevra', '10:30');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('EY 3034', 'NCE', 'Nizza', '10:50');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AF 9783', 'TIA', 'Tirana', '11:00');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('FB 1772', 'SOF', 'Sofia', '11:10');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('EW 4243', 'PRG', 'Praga', '11:30');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AR 7306', 'LGW', 'Londra Gatwick', '11:50');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AZ 7167', 'ATH', 'Atene', '12:00');
INSERT INTO DEPARTURES (FLIGHT_NUM, AIRPORT_DEST_SIG, AIRPORT_DEST, DEP_TIME) VALUES('AZ 6021', 'JFK', 'New York', '12:30');

CREATE TABLE ARRIVALS (FLIGHT_NUM VARCHAR(10), AIRPORT_PROV_SIG VARCHAR(3), AIRPORT_PROV VARCHAR(30), ARR_TIME TIME);
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('SV 6726', 'LAX', 'Los Angeles', '08:10');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('QR 1167', 'DOH', 'Doha', '08:30');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('AR 7198', 'NAP', 'Napoli', '08:50');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('LX 1727', 'ZRH', 'Zurigo', '09:00');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('FR 1298', 'ATH', 'Atene', '09:20');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('DN 4109', 'BCM', 'Bacau', '09:35');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('KM 6132', 'MLA', 'Malta', '09:50');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('FR 4852', 'CTA', 'Catania', '10:10');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('AZ 5567', 'FLR', 'Firenze', '10:20');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('FR 8915', 'TPS', 'Trapani', '10:25');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('IB 4863', 'DFW', 'Dallas', '10:40');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('SN 3176', 'BRU', 'Bruxelles', '11:00');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('SV 6730', 'YYZ', 'Toronto', '11:20');
INSERT INTO ARRIVALS (FLIGHT_NUM, AIRPORT_PROV_SIG, AIRPORT_PROV, ARR_TIME) VALUES('KL 1602', 'AMS', 'Amsterdam', '11:40');

CREATE TABLE SHOPS (ID INTEGER, SHOPNAME VARCHAR(50), SHOPDESCR VARCHAR(150));
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (1, 'BURGER KING', 'I migliori hamburger aereoporto');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (2, 'ZARA', 'Vasta collezione di abiti a ultima moda');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (3, 'VENCHI', 'Cioccolato di qualita per un dolce momento');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (4, 'SIGNORVINO', 'Una vasta collezione dei migliori vini italiani');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (5, 'EURONICS', 'Tecnologia a ultimo grido');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (6, 'ILLY', 'Prenditi una pausa con un ottimo caffe');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (7, 'DUTY FREE', 'Ricordi da portare ai tuoi amici');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (8, 'KFC', 'Il pollo del Kentucky da gustare mentre aspetti il volo');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (9, 'KOZEL', 'La classica pils della Repubblica Ceca');
INSERT INTO SHOPS(ID, SHOPNAME, SHOPDESCR) VALUES (10, 'MC DONALDS', 'Ovunque la tua garanzia di un ottimo hamburger');