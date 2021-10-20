import { Link } from 'react-router-dom';
import InputPassword from "../InputPassword";
import Input from "../Input";
import './styles.css';
import Button from "../Button";

interface CompPrps {
    type: string
}

export default function SignUpForm(props: CompPrps) {

    return (
        <>
            <div className="cadastro-container">
                <form className="form-singup" action="" method="post">
                    <Input type="text" placeholder="Nome" name="name"/>
                    <Input type="text" placeholder={props.type} name={props.type}/>
                    <Input type="email" placeholder="E-mail" name="email"/>
                    <InputPassword name="senha" placeholder="Senha" id="senha"/>
                    <InputPassword name="conf_senha" placeholder="Confirmar" id="conf_senha"/>
                    <Button children="Cadastrar"/>
                </form>
                {/* <Link to="/login"> Já possuo cadastro?</Link> */}
            </div>
        </>
    );
}