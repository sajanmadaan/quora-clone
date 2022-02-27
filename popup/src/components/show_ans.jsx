import { useSelector } from "react-redux";

export const Show_answer = () => {
    const ans_data = useSelector( (store) => store.ans.answers);
    console.log(ans_data)
    return (
        <div>
          {ans_data.map((ans, index) => {
              if(ans){
         return <h3 key={index} >{ans}</h3>
              }
       
          })}
        
        </div>
    );
}