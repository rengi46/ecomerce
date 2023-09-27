import { Form } from '@components/common/form/Form';
import React from 'react';
import { toast } from 'react-toastify';


function AgeForm({action, homeUrl}) {
  const styles = {
    centerDiv : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label:{
      marginRight:"20px"
    },
    container : {
      backgroundColor: '#fcfcfc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50vw',
      height: '30vh',
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
      padding: '20px',
      borderRadius: '5px',
      margin: 'auto',
      marginTop: '20vh',
      zIndex: '2'
    },
    backPage : {
      maxWidth: '100%',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '1',
    } 
  }

  return (
    <div className='page-width' style={styles.backPage} >
      <div style={styles.container}>
      <Form 
        id='ageForm'
        action={action}
        method="POST" 
        onSuccess={(response) => {
          if(!response.error) {
            window.location.href = homeUrl;
          } else {
            toast.error('No tienes la edad suficiente para ver este sitio.')
          }
        }}
        btnText='Entrar'
       >
        <div className="form-group" style={styles.centerDiv}>
          <label htmlFor="age" className='label-age' style={styles.label} >Age</label>
          <input type="number" className="form-control" id="age" name="age" placeholder="Enter your age" />
        </div>
        </Form>
        </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
}

export const query = `
  query Query {
    action: url(routeId: "verifyAge"),
    homeUrl: url(routeId: "homepage")
  }
`;

export default AgeForm;