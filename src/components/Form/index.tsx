import * as React from 'react';

import './style.sass';

export interface FormProps {
  children: (state: FormState) => React.ReactNode;
}

export interface FormState {
  field: string;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      field: 'field'
    };
  }

  render() {
    const { children } = this.props;

    return <form className="form-wrap">{children(this.state)}</form>;
  }
}

export default Form;
