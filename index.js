// Default config options
// const defaultOptions = {
//     baseURL: <CHANGE-TO-URL>,
//     baseURL: process.env.APP_API_BASE_URL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   // Create instance
//   let instance = axios.create(defaultOptions);

//   // Set the AUTH token for any request
//   instance.interceptors.request.use(function (config) {
//     if(config.baseURL === routewith/auth)
//     const token = localStorage.getItem('token');
//     if (token)
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     return config;
//   });

//  Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   Do something with response data like console.log, change header, or as we did here just added a conditional behaviour, to change the route or pop up an alert box, based on the reponse status  
//   if (response.status === 200 || response.status 201) {
//     router.replace('homepage') }
//   else {
//     alert('Unusual behaviour')
//   }
//   console.log(response)
//   return response;
// }, function (error) {
//   Do something with response error
//   return Promise.reject(error);
// });