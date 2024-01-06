export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    //El objeto AbortController nos permite abortar una o varias peticiones a un servidor
    const controller = new AbortController();
    options.signal = controller.signal;

    //Si el usuario especifica el metodo, agregamos a las options sino el metodo será GET
    options.method = options.method || "GET";

    //Si el usuario especifica cabeceras entonces los headers serán la cabecera por defecto mas los headers que especifique el usuario. Si no especifica el header usamos el por default
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    //Si vamos a enviar datos estos los mandamos por la propiedad body de las options pero en formato String. Si no especificamos el body este será false, por lo tanto lo eliminamos de las options
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
