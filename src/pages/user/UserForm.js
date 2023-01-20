import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import submitUserAction from '../../actions/user/UserAction';

const UserFormFunc = props => {
  const {handleSubmit} = props;

  const submit = (data, submitUserAction) => {
    submitUserAction(data);
  }

  return (
    <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
      <label>
        Name
        <Field type="text" name="nome" component="input" />
      </label>
      <label>
        Email
        <Field type="email" name="email" component="input" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

const UserForm = (reduxForm({
    form: 'userForm'
  })
)(UserFormFunc);

const mapStateToProps = (state) => ({
  //propriedade aqui
});

export default connect(mapStateToProps)(UserForm, submitUserAction);