import { useSelector } from "react-redux";
export const Show_answer = ({index}) => {
    const ans_data = useSelector( (store) => store.ans_reducer.answers);
    console.log(ans_data)
    return (
        <div>
            {
                (() => {
                    if(ans_data[index]){
                        return <h3  >{ans_data[index]}</h3>
                    }
                })()
            }
            
        </div>
    );
}