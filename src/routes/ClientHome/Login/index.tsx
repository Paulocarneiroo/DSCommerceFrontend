import './styles.css';
import { useContext, useState } from 'react';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import ButtonPrimary from '../../../components/ButtonPrimary';

const Login = () => {
    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const { setContextTokenPayload } = useContext(ContextToken);
  
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState<any>({
      username: {
        value: '',
        id: 'username',
        name: 'username',
        type: 'text',
        placeholder: 'Email',
        validation: function (value: string) {
          return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value.toLowerCase(),
          );
        },
        message: 'Favor informar um email válido',
      },
      password: {
        name: 'password',
        value: '',
        type: 'password',
        placeholder: 'Senha',
        id: 'password',
      },
    });
  
    function handleSubmit(event: any) {
      event.preventDefault();
  
      setSubmitResponseFail(false);
  
      const formDataValidated = forms.dirtyAndValidateAll(formData);
      if (forms.hasAnyInvalid(formDataValidated)) {
        setFormData(formDataValidated);
        return;
      }
  
      authService
        .loginRequest(forms.toValues(formData))
        .then((response) => {
          authService.saveAccessToken(response.data.access_token);
          setContextTokenPayload(authService.getAccessTokenPayload());
          navigate('/cart');
        })
        .catch((error) => {
          setSubmitResponseFail(true);
        });
    }
  
    function handleInputChange(event: any) {
      setFormData(
        forms.updateAndValidate(formData, event.target.name, event.target.value),
      );
    }
  
    function handleOnTurnDirty(name: string) {
      setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input name='username' 
                                value={formData.username}
                                onChange={handleInputChange}
                                className="dsc-form-control" type="text" placeholder="Email" />
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className="dsc-form-control" type="password" placeholder="Senha" />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;