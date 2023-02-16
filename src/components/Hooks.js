import {useState} from "react"

const Hooks = () => {

    let idade = 33;
    const [novaIdade, setNovaIdade] = useState(35)

    const changeAge = () => {
        idade = 34;
        console.log(idade);
    };

    const changeNewAge = () => {
        setNovaIdade(36);
    }

    return(
        <div>
        </div>
    );
};

export default Hooks;
