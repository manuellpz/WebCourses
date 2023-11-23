import { useState, useEffect } from "react";

//Los CustomHooks tienen que tener por nombre useNombreHook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          //Si algo salió mal con la petición lanzamos un error personalizado
          throw {
            err: true,
            status: response.status,
            statusText: !response.statusText
              ? "Ocurrio Un Error"
              : response.statusText,
          };
        }
        const data = await response.json();
        //Si no hubo error actualizamos las variables de estado
        setData(data);
        setIsPending(false);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };
    getData();
  }, [url]);
  //Todo Hook tiene que devolver valores
  return { data, isPending, error };
};
