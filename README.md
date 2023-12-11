## Table of Contents

-   [1.Configure environment variable information](#1-Configure environment variable information)
-   [2.Use the appropriate node version](#2-Use the appropriate node version)
-   [3.Install and build in each directory](#3-Install and build in each directory)
-   [4.Start server](#4-start server)
-   [5.Start client](#5-start client)

## Summary of steps to start in Local

## 1. Configure environment variable information

Update necessary information for .env based on env-example

-   [server/.env](server/env-example)
    <a id="1"></a>

## 2. Use the appropriate node version

```sh
nvm use
```

<a id="2"></a>

## 3. Install and build in each directory

```sh
(from root folder) npm run setup
```

<a id="3"></a>

## 4. Start server

```sh
(from server folder) npm run start:dev
```

<a id="4"></a>

## 5. Start client

```sh
(from client folder) npm start
```

<a id="5"></a>
