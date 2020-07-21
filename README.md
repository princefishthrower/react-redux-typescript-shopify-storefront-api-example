# React + Redux + TypeScript + Shopify's Storefront API Boilerplate Code!

To get started, clone this repository:

`git clone https://github.com/princefishthrower/react-redux-typescript-shopify-storefront-api-example.git`

This app was bootstrapped with `create-react-app`, so it should install just fine with:

`npm install`

The only thing to do before running is to add your Shopify store credentials, which are in `src/utils/utils.ts`:

```typescript
const client = Client.buildClient({
    storefrontAccessToken: 'YOUR_SHOPIFY_STOREFRONT_ACCESS_TOKEN',
    domain: 'YOUR_MYSHOPIFY_STORE_URL'
});
```

Until you provide proper credentials, you'll see these errors in the console:

```
Failed to load resource: net::ERR_NAME_NOT_RESOLVED             your_myshopify_store_url/api/2020-07/graphql:1
TypeError: Failed to fetch                                                                         utils.ts:39
```

Run the development site with:

`npm run start`

Build a production version with:

`npm run build`

This is all described in detail [in a detailed Medium post about this code base](https://medium.com/@frewin.christopher/react-redux-shopify-typescript-boilerplate-f20614bf5bb1). I highly suggest reading that so you know what the heck is going on!