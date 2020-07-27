// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// API end points based on environment, will also have redirect URIs which are on-boared to ping
export const urlEndpoints = {
 
  // proeprties for localhost
  'localhost' : {
    loginUrl:'http://localhost:4200/?code=YSdALjCJRZqokUKlTWtGWadiw3OuXuw3yaEAAAfU',
    logoutUrl: '',
    // baseUrl: 'http://localhost:4200/?code=YSdALjCJRZqokUKlTWtGWadiw3OuXuw3yaEAAAfU'
    // baseUrl: 'http://localhost:4200'
  },
 
  // proeprties for dev
  'dlv-sys-w009-4': {
    // loginUrl:'https://fmsso-devl.fanniemae.com/as/authorization.oauth2?client_id=sso-p2x-E64-d1-oidc-FannieMaeConnect_AWS&response_type=code&scope=openid profile email phone formloginonly&redirect_uri=http://dlv-sys-w009-4:8143/fmconnect',
    // logoutUrl: 'https://fmsso-devl.fanniemae.com/idp/startSLO.ping?TargetResource=http://dlv-sys-w009-4.fanniemae.com:8143/fmconnect',
    // baseUrl: 'http://'+  window.location.hostname + ':8143'
  },
 
  // proeprties for test
  'connect-test2.fanniemae.com': {
    // loginUrl:'https://fmsso-test.fanniemae.com/as/authorization.oauth2?client_id=sso-p2x-E64-t1-oidc-FannieMaeConnect_AWS&response_type=code&scope=openid profile email phone formloginonly&redirect_uri=https://connect-test2.fanniemae.com/fmconnect',
    // logoutUrl: 'https://fmsso-test.fanniemae.com/idp/startSLO.ping?TargetResource=https://connect-test2.fanniemae.com/fmconnect',
    // baseUrl: 'https://'+  window.location.hostname
  },
 
};
 
export const environment = {
  production: false,
  // baseUrl: window.location.hostname
};
 

 