import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
    audience: "https://dev-yylu3bl0w0hpmiy2.uk.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-yylu3bl0w0hpmiy2.uk.auth0.com", // Add https:// here
    tokenSigningAlg: "RS256"
});

export default jwtCheck;
