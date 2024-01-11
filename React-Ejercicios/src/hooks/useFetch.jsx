import { useState, useEffect } from "react";

export const useFetch = (url) => {
   //Creamos tres variables de estado, donde este hook regresara los datos obtenidos de la petición, posible error y una variable para determinar cuando debe de aparecer el loader en la UI
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   //Usaremos aborcontroller para abortar la petició en caso de que no haya respuesta
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        let res = await fetch(url);
         //Si la respuesta a la petición no fue satisfactoria, personalizamos el error y lo lanzamos para que sea capturado por el catch
        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;
        }
        //Si la respuesta fue satisfactoria convertimos a json la respuesta
        let json = await res.json();
        //Si no se aborto la petición actualizamos la variable de estado data con el valor del json y al no haber error la variable error no sufre cambios (sigue en null)
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
         //Si llegó a haber algún error la variable data seguirá en null y la variable error será actualizado con el error que capturó el catch
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
         //Independientemente que haya o no haya algún error la variable loading se actualizará a false
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    //Al final de todo se aborta la petición 
    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
