import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message"

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  if (!data) return null;
   if(error) {
      return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>
   }
  let id = `select-${title}`;
  let options = data.response[title];

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => {
            return <option value={el}>{el}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectList;
