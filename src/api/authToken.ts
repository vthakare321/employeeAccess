let authToken : string | null = null;

export const setAuthToken = (token: string | null): void=>{
    authToken = token;
};

export const getAuthToken = ():
string | null =>{
    return authToken;
}