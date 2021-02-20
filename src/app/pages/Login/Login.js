import { Input } from '../../../components/Input';
import './Login.css';


const Login = () => {
  return (
    <main>
      <section id="section-one">
        <h1>Sign In</h1>
        <div>
          <Input type="email" name="email" />
          <Input type="password" name="password" />
          <button>send</button>
        </div>
      </section>
      <section id="section-two">
        <figure>
          <img src="/assets/img/beach.png" alt="Uma praia bonita" />
        </figure>
      </section>
    </main>
  )
}


export default Login;
