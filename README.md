This is a basic django-nextjs app. It creates a django backend and a next.js frontend and print the phrase "Hello World!" on the screen. It uses nginx to serve the django and the next.js.
ActallyI noticed that is is difficult for most web developers to deploy fullstack applications on coolify. This project is the start of this process. If you can succesfully deploy this application on coolify, the any web application that is build on Django as the backend and next.js as the frontend can be deployed successfully.

Also, most of the applications deployed in this form make use of a reverse-proxy and a load balancer. We  use nginx in this case. It is true that on coolify, the reverse-proxy that is use are caddy and traefik, but the operations remain the same.
