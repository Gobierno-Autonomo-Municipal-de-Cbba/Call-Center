# System Architecture

| <img src="/web-ui/src/assets/readme/logo-architecture.jpg" alt="Logo" width="300" style="border-radius: 15px;"/> | **This document describes the architecture of the Comprehensive Web System for Claims and Reports.** |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

## Main Components
- **Frontend**: Built with Angular to provide an interactive and responsive user interface.
- **Backend**: Uses NestJS and Node.js for server logic and additional services.
- **Database**: PostgreSQL for data storage.

## Data Flows
1. The user submits a complaint through the Angular interface.
2. Request is sent to Nestjs & Node.js backend
3. Next, it interacts with the PostgreSQL database to store and retrieve data.
4. They also handle real-time services and background tasks.

> [!TIP]
> Architecture Diagram

<img src="/web-ui/src/assets/readme/diagram-architecture.png" alt="Avatar" width="500" style="border-radius: 15px;"/>
