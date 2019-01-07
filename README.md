# Angular PWA example
This app demonstrates the use of Angular Service Workers and an App Shell for index.html in order to make it PWA.
The app gets score of 92 in Lighthouse (Chrome devtools audit) - only missing the SSL criteria.

# Usage:
## Build:
`ng build --prod`
## Run:
`http-server -p 8080 -c-1 dist/pwa-example`

## References:
* https://dzone.com/articles/developing-pwa-using-angular-7
