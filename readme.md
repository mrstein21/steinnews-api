# Steinnews API

 API For Website Steinnews you can get at https://github.com/mrstein21/steinnews
 this api use https on localhost you can generate the key use this command on this directory project

    openssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
    rm csr.pem

 after this command it creates 2 file :
 cert.pem and key.pem then you can start https on localhost,but if you node js https restricted by
 chrome or safari etc you can disable https safety. 

 you import html_articles.sql import the database on your XAMPP 







