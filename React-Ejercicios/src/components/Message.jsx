const Message = ({msg,bgColor}) => {
   let styles = {
      background:bgColor,
      padding:"1rem",
      marginBottom:"1rem",
      textAlign:"center",
      color:"white",
      fontWeight:"bold"
   }


  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
